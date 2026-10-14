import type { FocusEvent } from "react";

interface Grecaptcha {
  ready: (callback: () => void) => void;
  execute: (siteKey: string, options: { action: string }) => Promise<string>;
}

declare global {
  interface Window {
    grecaptcha?: Grecaptcha;
  }
}

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

let scriptPromise: Promise<void> | null = null;

function loadRecaptcha(): Promise<void> {
  if (!RECAPTCHA_SITE_KEY) return Promise.resolve();

  if (!scriptPromise) {
    scriptPromise = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
      script.async = true;
      script.onload = () => resolve();
      script.onerror = () => {
        scriptPromise = null;
        script.remove();
        reject(new Error("Falha ao carregar o reCAPTCHA"));
      };
      document.head.appendChild(script);
    });
  }

  return scriptPromise;
}

const VISIBLE_CLASS = "recaptcha-visible";

export function handleRecaptchaFocus() {
  loadRecaptcha().catch(() => {});
  document.documentElement.classList.add(VISIBLE_CLASS);
}

export function hideRecaptchaBadge() {
  document.documentElement.classList.remove(VISIBLE_CLASS);
}

export function handleRecaptchaBlur(event: FocusEvent<HTMLFormElement>) {
  if (event.currentTarget.contains(event.relatedTarget)) return;

  hideRecaptchaBadge();
}

export async function getRecaptchaToken(action: string): Promise<string> {
  if (!RECAPTCHA_SITE_KEY) return "";

  await loadRecaptcha();

  const grecaptcha = window.grecaptcha;

  if (!grecaptcha) return "";

  return new Promise((resolve, reject) => {
    grecaptcha.ready(() => {
      grecaptcha.execute(RECAPTCHA_SITE_KEY, { action }).then(resolve, reject);
    });
  });
}

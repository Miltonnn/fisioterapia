const MIN_SCORE = 0.5;

interface RecaptchaResponse {
  success: boolean;
  score?: number;
  action?: string;
  "error-codes"?: string[];
}

export async function verifyRecaptcha(
  token: unknown,
  expectedAction: string
): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;

  if (!secret) {
    if (process.env.NODE_ENV === "production") {
      console.error("RECAPTCHA_SECRET_KEY não configurada");
      return false;
    }

    console.warn("reCAPTCHA ignorado: RECAPTCHA_SECRET_KEY não configurada");
    return true;
  }

  if (typeof token !== "string" || !token) return false;

  try {
    const response = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ secret, response: token }),
      }
    );

    const data: RecaptchaResponse = await response.json();

    if (!data.success) {
      console.warn("reCAPTCHA inválido:", data["error-codes"]);
      return false;
    }

    return data.action === expectedAction && (data.score ?? 0) >= MIN_SCORE;
  } catch (error) {
    console.error("Erro ao verificar reCAPTCHA:", error);
    return false;
  }
}

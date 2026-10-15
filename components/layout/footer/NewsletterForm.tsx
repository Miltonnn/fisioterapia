"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  newsletterSchema,
  NewsletterFormData,
} from "@/schemas/newsletterSchema";
import {
  getRecaptchaToken,
  handleRecaptchaBlur,
  handleRecaptchaFocus,
} from "@/lib/recaptcha-client";

import { Input } from "@/components/ui/input";
import { Button, ButtonArrow } from "@/components/ui/button";
import { FeedbackDialog, useFeedback } from "@/components/forms/FeedbackDialog";

const inputClassName =
  "h-12 rounded-full border-white/15 bg-white/15 px-5 text-white placeholder:text-white/70 shadow-none focus-visible:border-white/60 focus-visible:ring-white/30 aria-invalid:border-red-200";

const fields = [
  { name: "name", label: "Nome", type: "text", autoComplete: "name" },
  { name: "email", label: "E-mail", type: "email", autoComplete: "email" },
  { name: "phone", label: "Telefone", type: "tel", autoComplete: "tel" },
] as const;

export function NewsletterForm() {
  const { showFeedback, dialogProps } = useFeedback();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = async (data: NewsletterFormData) => {
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          recaptchaToken: await getRecaptchaToken("newsletter"),
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        showFeedback({
          variant: "error",
          title: "Não foi possível cadastrar",
          description: result.error || "Erro ao enviar dados. Tente novamente.",
        });
        return;
      }

      showFeedback({
        variant: "success",
        title: "Cadastro realizado!",
        description: "Você vai receber nossas novidades no seu e-mail.",
        autoCloseMs: 3500,
      });

      reset();
    } catch (error) {
      console.error(error);
      showFeedback({
        variant: "error",
        title: "Erro de conexão",
        description: "Verifique sua internet e tente novamente.",
      });
    }
  };

  return (
    <>
      <form
        noValidate
        onFocus={handleRecaptchaFocus}
        onBlur={handleRecaptchaBlur}
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-3"
      >
        {fields.map((field) => {
          const error = errors[field.name];
          const errorId = `newsletter-${field.name}-error`;

          return (
            <div key={field.name} className="flex flex-col gap-1">
              <label htmlFor={`newsletter-${field.name}`} className="sr-only">
                {field.label}
              </label>
              <Input
                id={`newsletter-${field.name}`}
                type={field.type}
                autoComplete={field.autoComplete}
                placeholder={field.label}
                aria-invalid={!!error}
                aria-describedby={error ? errorId : undefined}
                className={inputClassName}
                {...register(field.name)}
              />
              {error && (
                <p id={errorId} className="px-5 text-sm text-red-100">
                  {error.message}
                </p>
              )}
            </div>
          );
        })}

        <Button
          type="submit"
          variant="light"
          size="lg"
          disabled={isSubmitting}
          className="w-full justify-between rounded-full px-5"
        >
          {isSubmitting ? "Enviando..." : "Cadastrar"}
          <ButtonArrow className="size-5" />
        </Button>
      </form>

      <FeedbackDialog {...dialogProps} />
    </>
  );
}

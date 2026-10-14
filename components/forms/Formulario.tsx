"use client";

import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  contactPreferences,
  contactSchema,
  ContactFormData,
} from "@/schemas/contactSchema";
import { serviceLinks } from "@/components/sections/Services/services.data";
import {
  getRecaptchaToken,
  handleRecaptchaBlur,
  handleRecaptchaFocus,
} from "@/lib/recaptcha-client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button, ButtonArrow } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { FeedbackDialog, useFeedback } from "@/components/forms/FeedbackDialog";

import { Mail, Phone } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const selectClassName =
  "w-full h-10 rounded-md border border-input bg-background px-3 text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none";

const preferenceIcons = {
  WhatsApp: <FontAwesomeIcon icon={faWhatsapp} className="size-4" />,
  Ligação: <Phone className="size-4" />,
  "E-mail": <Mail className="size-4" />,
};

export function Formulario() {
  const { showFeedback, dialogProps } = useFeedback();

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      service: "",
      contactPreference: "WhatsApp",
      source: "",
      message: "",
      terms: false,
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          recaptchaToken: await getRecaptchaToken("contact"),
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        showFeedback({
          variant: "error",
          title: "Não foi possível enviar",
          description:
            result.error || "Erro ao enviar mensagem. Tente novamente.",
        });
        return;
      }

      showFeedback({
        variant: "success",
        title: "Solicitação enviada!",
        description: `Em breve entraremos em contato pelo ${data.contactPreference === "Ligação" ? "telefone" : data.contactPreference}.`,
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
        onFocus={handleRecaptchaFocus}
        onBlur={handleRecaptchaBlur}
        onSubmit={handleSubmit(onSubmit)}
        className="@container w-full flex flex-col shadow-2xl p-5 xl:p-8 rounded-3xl gap-4"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="contact-name" className="text-md">
              Nome completo
            </Label>
            <Input
              id="contact-name"
              autoComplete="name"
              placeholder="Seu nome completo"
              {...register("name")}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact-email" className="text-md">
              E-mail
            </Label>
            <Input
              id="contact-email"
              type="email"
              autoComplete="email"
              placeholder="seu@email.com"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="contact-phone" className="text-md">
              Telefone / WhatsApp
            </Label>
            <Input
              id="contact-phone"
              type="tel"
              autoComplete="tel"
              placeholder="(11) 99999-9999"
              {...register("phone")}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact-service" className="text-md">
              Qual tratamento procura?
            </Label>
            <select
              id="contact-service"
              className={selectClassName}
              {...register("service")}
            >
              <option value="">Selecione uma opção</option>
              {serviceLinks.map((service) => (
                <option key={service.href} value={service.name}>
                  {service.name}
                </option>
              ))}
              <option value="Ainda não sei">Ainda não sei</option>
            </select>
            {errors.service && (
              <p className="text-red-500 text-sm">{errors.service.message}</p>
            )}
          </div>
        </div>

        <div className="grid gap-4 @[600px]:grid-cols-2">
          <fieldset className="space-y-2">
            <legend className="mb-2 text-md font-medium leading-none">
              Como prefere ser contatado?
            </legend>

            <div className="grid grid-cols-3 gap-2">
              {contactPreferences.map((option) => (
                <label key={option} className="cursor-pointer">
                  <input
                    type="radio"
                    value={option}
                    className="peer sr-only"
                    {...register("contactPreference")}
                  />
                  <span className="flex h-10 items-center justify-center gap-1 rounded-md border border-input px-1 text-sm text-muted-foreground transition-colors hover:border-primary/50 peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:font-semibold peer-checked:text-primary peer-focus-visible:ring-[3px] peer-focus-visible:ring-ring/50">
                    {preferenceIcons[option]}
                    {option}
                  </span>
                </label>
              ))}
            </div>

            {errors.contactPreference && (
              <p className="text-red-500 text-sm">
                {errors.contactPreference.message}
              </p>
            )}
          </fieldset>

          <div className="space-y-2">
            <Label htmlFor="contact-source" className="block text-md">
              Como nos conheceu?{" "}
              <span className="font-normal text-muted-foreground">
                (opcional)
              </span>
            </Label>
            <select
              id="contact-source"
              className={selectClassName}
              {...register("source")}
            >
              <option value="">Selecione uma opção</option>
              <option value="Instagram">Instagram</option>
              <option value="Google">Google</option>
              <option value="Indicação">Indicação</option>
              <option value="Outro">Outro</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="contact-message" className="block text-md">
            Mensagem{" "}
            <span className="font-normal text-muted-foreground">
              (opcional)
            </span>
          </Label>
          <Textarea
            id="contact-message"
            placeholder="Conte brevemente o que está sentindo ou qual sua dúvida"
            className="min-h-20 resize-none"
            {...register("message")}
          />

          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message.message}</p>
          )}
        </div>

        <div className="grid gap-4 md:grid-cols-12 items-center">
          <div className="md:col-span-7">
            <FieldGroup>
              <Field orientation="horizontal">
                <Controller
                  name="terms"
                  control={control}
                  render={({ field }) => (
                    <Checkbox
                      id="contact-terms"
                      checked={field.value}
                      onCheckedChange={(checked) =>
                        field.onChange(checked === true)
                      }
                    />
                  )}
                />

                <FieldLabel htmlFor="contact-terms" className="text-gray-500">
                  <span>
                    Ao informar meus dados, eu concordo com a{" "}
                    <Link
                      href="/politica-de-privacidade"
                      target="_blank"
                      className="block font-bold text-black underline-offset-4 hover:text-primary hover:underline"
                    >
                      Política de Privacidade
                    </Link>
                  </span>
                </FieldLabel>
              </Field>

              {errors.terms && (
                <p className="text-red-500 text-sm">{errors.terms.message}</p>
              )}
            </FieldGroup>
          </div>

          <div className="md:col-span-5">
            <Button
              className="py-6 w-full"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Solicitar agendamento"}
              <ButtonArrow />
            </Button>
          </div>
        </div>
      </form>

      <FeedbackDialog {...dialogProps} />
    </>
  );
}

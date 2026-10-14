"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { contactSchema, ContactFormData } from "@/schemas/contactSchema";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button, ButtonArrow } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Dialog, DialogContent } from "@/components/ui/dialog";

import { MessageSquare } from "lucide-react";

export function Formulario() {
  const [openSuccess, setOpenSuccess] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
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
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        alert(result.error || "Erro ao enviar mensagem");
        return;
      }

      setOpenSuccess(true);
      reset();
    } catch (error) {
      console.error(error);
      alert("Erro de conexão com servidor");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col shadow-2xl p-5 xl:p-10 rounded-3xl gap-5"
      >
        <div className="flex items-center gap-3">
          <MessageSquare className="text-primary w-7 h-7" />
          <h3 className="text-md font-medium text-gray-700">
            Envie-nos uma mensagem
          </h3>
        </div>

        {/* NOME E EMAIL */}

        <div className="grid gap-6 md:grid-cols-2 pt-4">
          <div className="space-y-3">
            <Label className="text-md">Nome completo</Label>
            <Input placeholder="Seu nome completo" {...register("name")} />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-3">
            <Label className="text-md">E-mail</Label>
            <Input
              type="email"
              placeholder="seu@email.com"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
        </div>

        {/* TELEFONE E ORIGEM */}

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-3">
            <Label className="text-md">Telefone</Label>
            <Input
              type="tel"
              placeholder="(11) 99999-9999"
              {...register("phone")}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>

          <div className="space-y-3">
            <Label className="text-md">Como nos conheceu?</Label>

            <select
              {...register("source")}
              className="w-full h-10 rounded-md border border-input bg-background px-3 text-muted-foreground 
              focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
            >
              <option value="">Selecione uma opção</option>
              <option value="Instagram">Instagram</option>
              <option value="Google">Google</option>
              <option value="Indicação">Indicação</option>
              <option value="Outro">Outro</option>
            </select>

            {errors.source && (
              <p className="text-red-500 text-sm">{errors.source.message}</p>
            )}
          </div>
        </div>

        {/* MENSAGEM */}

        <div className="space-y-3">
          <Label className="text-md">Mensagem</Label>
          <Textarea
            placeholder="Escreva sua mensagem..."
            className="min-h-37.5 resize-none"
            {...register("message")}
          />

          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message.message}</p>
          )}
        </div>

        {/* CHECKBOX + BOTAO */}

        <div className="grid gap-6 md:grid-cols-12 items-center">
          <div className="md:col-span-7">
            <FieldGroup>
              <Field orientation="horizontal">
                <Controller
                  name="terms"
                  control={control}
                  render={({ field }) => (
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={(checked) =>
                        field.onChange(checked === true)
                      }
                    />
                  )}
                />

                <FieldLabel className="text-gray-500">
                  <span>
                    Ao informar meus dados, eu concordo com a
                    <span className="block font-bold text-black">
                      Política de Privacidade
                    </span>
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
              {isSubmitting ? "Enviando..." : "Enviar mensagem"}
              <ButtonArrow />
            </Button>
          </div>
        </div>
      </form>

      {/* POPUP SUCESSO */}

      <Dialog open={openSuccess} onOpenChange={setOpenSuccess}>
        <DialogContent className="sm:max-w-sm text-center rounded-2xl">
          <div className="flex flex-col items-center gap-4 py-6">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center animate-pulse">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <h2 className="text-lg font-semibold">
              Mensagem enviada com sucesso!
            </h2>

            <p className="text-sm text-muted-foreground">
              Em breve entraremos em contato com você.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

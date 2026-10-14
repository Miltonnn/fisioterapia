"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight, Hand, SquareX } from "lucide-react";
import { FeedbackDialog, useFeedback } from "@/components/forms/FeedbackDialog";
import {
  getRecaptchaToken,
  handleRecaptchaBlur,
  handleRecaptchaFocus,
  hideRecaptchaBadge,
} from "@/lib/recaptcha-client";

export default function Whatsapp() {
  const [open, setOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const { showFeedback, dialogProps } = useFeedback();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("leadSent")) return;

    let count = 0;

    const interval = setInterval(() => {
      if (count >= 3) return;

      setShowTooltip(true);

      setTimeout(() => {
        setShowTooltip(false);
      }, 3000);

      count++;
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !phone) {
      alert("Preencha todos os campos");
      return;
    }

    if (!email.includes("@")) {
      alert("Email inválido");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          phone,
          recaptchaToken: await getRecaptchaToken("lead"),
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        showFeedback({
          variant: "error",
          title: "Não foi possível enviar",
          description: result.error || "Erro ao enviar dados. Tente novamente.",
        });
        return;
      }

      localStorage.setItem("leadSent", "true");

      hideRecaptchaBadge();

      setOpen(false);
      showFeedback({
        variant: "success",
        title: "Dados enviados com sucesso!",
        description: "Em breve entraremos em contato com você.",
        autoCloseMs: 3500,
      });

      setEmail("");
      setPhone("");
      setShowTooltip(false);

    } catch (error) {
      console.error(error);
      showFeedback({
        variant: "error",
        title: "Erro de conexão",
        description: "Verifique sua internet e tente novamente.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* CHAT BOX */}

      {open && (
        <div className="fixed bottom-60 md:right-8 right-3 z-50 w-80 animate-in slide-in-from-bottom fade-in duration-300">
          <div className="bg-white shadow-2xl rounded-2xl overflow-hidden border">
            <div className="bg-green-500 text-white px-4 py-3 flex justify-between items-center">
              <div>
                <p className="text-sm font-semibold">Atendimento</p>
                <p className="text-xs opacity-90">● Online agora</p>
              </div>

              <button
                onClick={() => setOpen(false)}
                aria-label="Fechar conversa"
                className="text-white text-sm opacity-80 hover:opacity-100"
              >
                <SquareX size={22} />
              </button>
            </div>

            {/* MENSAGEM */}

            <div className="p-4 space-y-4 bg-gray-50">
              <div className="bg-white p-3 rounded-xl shadow text-sm w-fit max-w-[85%]">
                <Hand className="mr-1 inline-block text-gray-600" size={16} />
                Olá! Deixe seu contato e retornamos rapidinho.
              </div>

              <form
                onFocus={handleRecaptchaFocus}
                onBlur={handleRecaptchaBlur}
                onSubmit={handleSubmit}
                className="space-y-3"
              >
                <Input
                  type="email"
                  placeholder="Seu e-mail"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <Input
                  type="tel"
                  placeholder="(DDD) + Telefone"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-green-500 hover:bg-green-600 text-md"
                >
                  {loading ? "Enviando..." : "Enviar"}
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* BOTÃO FLUTUANTE */}

      <div className="fixed bottom-40 md:right-8 right-3 z-50 flex items-center">
        {showTooltip && (
          <div className="relative mr-4">
            <div className="bg-white text-gray-700 px-4 py-2 rounded-xl shadow-lg text-sm">
              Converse conosco!
            </div>

            <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rotate-45"></div>
          </div>
        )}

        <button
          onClick={() => setOpen(!open)}
          aria-label="Abrir conversa no WhatsApp"
          className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-xl hover:scale-110 transition-transform relative"
        >
          <span className="whatsapp-wave"></span>

          <Image
            src="/assets/icons/whatsapp.svg"
            alt="WhatsApp"
            width={28}
            height={28}
          />
        </button>
      </div>

      <FeedbackDialog {...dialogProps} />
    </>
  );
}
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header/Header";
import { Footer } from "@/components/layout/footer/Footer";
import ClientOnly from "@/components/layout/ClientOnly";
import { AosInit } from "@/components/aos-init";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dra. Amanda Torrigo | Fisioterapia",
  description:
    "Dra. Amanda Torrigo, fisioterapeuta formada pela Unicsul - Universidade Cruzeiro do Sul. Atendimento humanizado e personalizado.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body>
        <AosInit />
        <Header />
        <main>{children}</main>
        <Footer />
        <ClientOnly />
      </body>
    </html>
  );
}

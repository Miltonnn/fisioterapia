"use client";

import dynamic from "next/dynamic";
import "@/lib/fontawesome";

const WhatsApp = dynamic(
  () => import("./Whatsapp"),
  { ssr: false }
);

const ScrollToTop = dynamic(
  () => import("./ScrollToTop"),
  { ssr: false }
);

export default function ClientOnly() {
  return (
    <>
      <WhatsApp />
      <ScrollToTop />
    </>
  );
}
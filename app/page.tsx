import { Cta } from "@/components/sections/Cta";
import { Empresa } from "@/components/sections/Empresa";
import { Diferenciais } from "@/components/sections/Diferenciais";
import { ContatoHome } from "@/components/sections/ContatoHome";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services/Services";
import { Products } from "@/components/sections/Products/Products";
import { Blog } from "@/components/sections/Blog/Blog";
import { siteSections } from "@/lib/site-sections";
import { Faq } from "@/components/sections/Faq";

export default function Home() {
  return (
    <>
      <Hero />
      {siteSections.servicos && <Services />}
      {siteSections.produtos && <Products />}
      <Diferenciais />
      <Cta />
      <Empresa />
      {siteSections.blog && <Blog />}
      <Faq />
      <ContatoHome />
    </>
  );
}

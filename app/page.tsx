import { Cta } from "@/components/sections/Cta";
import { Empresa } from "@/components/sections/Empresa";
import { Diferenciais } from "@/components/sections/Diferenciais";
import { ContatoHome } from "@/components/sections/ContatoHome";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services/Services";
import { Products } from "@/components/sections/Products/Products";
import { Blog } from "@/components/sections/Blog/Blog";
import { siteSections } from "@/lib/site-sections";
import { Mvv } from "@/components/sections/Mvv";

export default function Home() {
  return (
    <>
      <Hero />
      <Empresa />
      <Diferenciais />
      {siteSections.servicos && <Services />}
      {siteSections.produtos && <Products />}
      <ContatoHome />
      {siteSections.blog && <Blog />}
      <Mvv />
    </>
  );
}

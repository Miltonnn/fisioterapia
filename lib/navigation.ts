import { isSectionEnabled, type SiteSection } from "./site-sections";
import { serviceLinks } from "@/components/sections/Services/services.data";
import { productLinks } from "@/components/sections/Products/products.data";
import { postLinks } from "@/components/sections/Blog/blog.data";

export interface NavLink {
  name: string;
  href: string;
  section?: SiteSection;
  description?: string;
  children?: NavLink[];
}

const allNavigationLinks: NavLink[] = [
  { name: "Home", href: "/" },

  { name: "Quem Somos", href: "/quem-somos" },

  {
    name: "Serviços",
    href: "/servicos",
    section: "servicos",
    children: serviceLinks,
  },

  {
    name: "Produtos",
    href: "/produtos",
    section: "produtos",
    children: productLinks,
  },

  {
    name: "Blog",
    href: "/blog",
    section: "blog",
    children: postLinks,
  },

  { name: "Contato", href: "/contato" },
];

export const navigationLinks = allNavigationLinks.filter((link) =>
  isSectionEnabled(link.section)
);

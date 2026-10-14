import type { NavLink } from "@/lib/navigation";
import { createCatalogItems } from "@/components/catalog/catalog.data";

export const serviceLinks: NavLink[] = [
  {
    name: "Serviço 1",
    href: "/servicos/servico-1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Serviço 2",
    href: "/servicos/servico-2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Serviço 3",
    href: "/servicos/servico-3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Serviço 4",
    href: "/servicos/servico-4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Serviço 5",
    href: "/servicos/servico-5",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Serviço 6",
    href: "/servicos/servico-6",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export const services = createCatalogItems(serviceLinks, "servicos");

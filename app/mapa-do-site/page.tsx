import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { footerNavigationLinks } from "@/lib/navigation";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Mapa do Site | ${siteConfig.name}`,
  description: `Encontre todas as páginas do site de ${siteConfig.name}.`,
};

const PAGE_HREF = "/mapa-do-site";

const links = footerNavigationLinks.filter((link) => link.href !== PAGE_HREF);

const linkClassName = "transition-colors duration-300 hover:text-primary";

export default function MapaDoSite() {
  return (
    <section>
      <Breadcrumb items={[{ name: "Mapa do Site", href: PAGE_HREF }]} />

      <div className="container py-20">
        <div className="max-w-3xl">
          <h1 className="mb-12 text-4xl font-bold text-heading">
            Mapa do Site
          </h1>

          <nav aria-label="Mapa do site">
            <ul className="flex flex-col gap-6">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-xl font-semibold text-heading ${linkClassName}`}
                  >
                    {link.name}
                  </Link>

                  {link.children && link.children.length > 0 && (
                    <ul className="mt-3 flex flex-col gap-2 pl-4">
                      {link.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className={`text-muted-foreground ${linkClassName}`}
                          >
                            {child.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}

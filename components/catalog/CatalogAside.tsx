import Link from "next/link";
import { Mail } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Button, ButtonArrow } from "@/components/ui/button";
import type { NavLink } from "@/lib/navigation";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

interface CatalogAsideProps {
  title: string;
  links: NavLink[];
  currentHref: string;
}

const whatsappHref = `https://wa.me/55${siteConfig.contact.whatsapp.replace(/\D/g, "")}`;

export function CatalogAside({ title, links, currentHref }: CatalogAsideProps) {
  return (
    <aside className="flex flex-col gap-6 lg:sticky lg:top-28">
      <nav
        aria-label={title}
        className="rounded-xl border border-border bg-card p-6"
      >
        <h2 className="mb-4 text-lg font-semibold after:mt-3 after:block after:h-1 after:w-12 after:rounded-full after:bg-brand-gradient">
          {title}
        </h2>

        <ul className="flex flex-col gap-1">
          {links.map((link) => {
            const isActive = link.href === currentHref;

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "group flex items-center justify-between gap-3 rounded-md px-3 py-2.5 text-sm transition-colors duration-300 hover:bg-primary/5 hover:text-primary",
                    isActive && "bg-primary/5 font-semibold text-primary"
                  )}
                >
                  {link.name}
                  <ButtonArrow
                    className={cn("size-4 shrink-0", isActive && "rotate-0")}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="rounded-xl border border-border bg-card p-6">
        <h2 className="mb-4 text-lg font-semibold">Entre em contato</h2>

        <div className="flex gap-3">
          <Button asChild variant="outline" className="h-11 flex-1 rounded-[4px]">
            <a
              href={`mailto:${siteConfig.contact.email}`}
              aria-label="Enviar e-mail"
              title="E-mail"
            >
              <Mail className="size-5" />
            </a>
          </Button>

          <Button
            asChild
            variant="ghost"
            className="h-11 flex-1 rounded-[4px] bg-green-500 text-white before:bg-green-600 hover:text-white"
          >
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Conversar pelo WhatsApp"
              title="WhatsApp"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="size-5" />
            </a>
          </Button>
        </div>
      </div>
    </aside>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationLinks } from "@/lib/navigation";
import { ChevronRight, House } from "lucide-react";

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  const pathname = usePathname();

  if (pathname === "/") return null;

  const segments = pathname.split("/").filter(Boolean);

  const breadcrumbItems: BreadcrumbItem[] = [];

  let currentLevel = navigationLinks;

  let accumulatedPath = "";

  for (const segment of segments) {
    accumulatedPath += `/${segment}`;

    const found = currentLevel.find((link) =>
      link.href === accumulatedPath
    );

    if (found) {
      breadcrumbItems.push({
        name: found.name,
        href: found.href,
      });

      currentLevel = found.children ?? [];
    }
  }

  const visibleItems = items ?? breadcrumbItems;

  return (
    <div className="w-full bg-brand-gradient">
      <div className="container py-4">
        <nav className="py-4 text-sm font-medium text-white/85">
          <ol className="flex items-center gap-1 flex-wrap">
            {/* Home */}
            <li>
              <Link
                href="/"
                className="hover:text-white transition-colors flex items-center"
              >
                <House className="w-4 h-4 mr-1" />
                Home
              </Link>
            </li>

            {visibleItems.map((item, index) => (
              <span key={item.href} className="flex items-center gap-1">
                <ChevronRight className="h-4 w-4 text-white/70" />

                {index === visibleItems.length - 1 ? (
                  <span className="text-white font-semibold">
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </span>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
}
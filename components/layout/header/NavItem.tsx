"use client";

/* TODOS OS ARQUIVOS DO MENU QUE TIVER CHILDREN O DROPDOWN ATIVA DINAMICAMENTE */

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { NavLink } from "@/lib/navigation";

interface Props {
  link: NavLink;
  depth?: number;
}

export function NavItem({ link, depth = 0 }: Props) {
  const pathname = usePathname();

  const isActive =
    pathname === link.href || pathname.startsWith(link.href + "/");

  const hasChildren = !!link.children?.length;

  return (
    <div className="relative group">
      <Link
        href={link.href}
        className={`flex items-center gap-1 py-2 px-3 transition duration-200 rounded-sm
          ${
            isActive
              ? "bg-brand-gradient text-white"
              : "text-gray-600 hover:bg-primary hover:text-white"
          }`}
        title={link.name}
      >
        {link.name}
        {hasChildren && <ChevronDown className="h-4 w-4" />}
      </Link>

      {hasChildren && (
        <div
          className={`
          absolute left-0 mt-2 w-50 max-h-56 bg-white shadow-lg rounded-sm
          overflow-hidden overflow-y-scroll no-arrows-scroll
          opacity-0 invisible group-hover:opacity-100 group-hover:visible
          transition-all duration-200 z-50
        `}
        >
          {link.children!.map((child) => (
            <NavItem key={child.href} link={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

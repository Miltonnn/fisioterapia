"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { NavLink } from "@/lib/navigation";

interface Props {
  link: NavLink;
  isOpen: boolean;
  onToggle: () => void;
}

export function MobileNavItem({
  link,
  isOpen,
  onToggle,
}: Props) {
  const pathname = usePathname();
  const hasChildren = !!link.children?.length;

  const isActive = pathname === link.href;

  return (
    <div className="border-b">
      <div className="flex items-center justify-between py-3">
        <Link
          href={link.href}
          className={`flex-1 ${
            isActive
              ? "text-primary font-semibold"
              : "text-black"
          }`}
          title={link.name}
        >
          {link.name}
        </Link>

        {hasChildren && (
          <button
            onClick={onToggle}
            className="p-2"
            aria-expanded={isOpen}
          >
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>
        )}
      </div>

      {hasChildren && (
        <div
          className={`overflow-hidden overflow-y-auto no-arrows-scroll transition-all duration-300 ${
            isOpen ? "max-h-56" : "max-h-0"
          }`}
        >
          <div className="bg-gray-50">
            {link.children!.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                title={child.name}
                className={`block py-2 pl-6 text-sm ${
                  pathname === child.href
                    ? "font-semibold text-black"
                    : "text-gray-600"
                }`}
              >
                {child.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
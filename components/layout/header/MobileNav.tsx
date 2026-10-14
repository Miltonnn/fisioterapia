"use client";

import { useState } from "react";
import { NavLink } from "@/lib/navigation";
import { MobileNavItem } from "./MobileNavItem";

interface Props {
  links: NavLink[];
}

export function MobileNav({ links }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <nav className="mt-10 flex flex-col text-base font-medium">
      {links.map((link, index) => (
        <MobileNavItem
          key={link.href}
          link={link}
          isOpen={openIndex === index}
          onToggle={() =>
            setOpenIndex(openIndex === index ? null : index)
          }
        />
      ))}
    </nav>
  );
}
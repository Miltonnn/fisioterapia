"use client";

import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navigationLinks } from "@/lib/navigation";
import { MobileNav } from "./MobileNav";
import { Logo } from "@/components/layout/Logo";

export function MobileMenu() {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Abrir menu de navegação"
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </Button>
        </SheetTrigger>

        <SheetContent
          side="right"
          className="w-64
            [&>button]:text-black
            [&>button]:bg-white
            [&>button]:rounded-md
            [&>button]:p-2
            [&>button]:hover:bg-gray-600
            [&>button]:hover:text-white
            [&>button]:transition-colors
            [&>button]:duration-400

            [&>button]:top-7
            [&>button]:right-5
            "
        >
          <div className="bg-brand-gradient px-6 py-5 flex items-center">
            <Logo variant="light" />
          </div>

          <nav className="mt-2 flex flex-col gap-3 text-base font-medium p-3">
            <MobileNav links={navigationLinks} />
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}

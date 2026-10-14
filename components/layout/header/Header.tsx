import { navigationLinks } from "@/lib/navigation";
import { NavItem } from "./NavItem";
import { Logo } from "@/components/layout/Logo";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between py-10">
        <Logo />

        <nav className="hidden md:flex items-center gap-2 text-sm font-medium">
          {navigationLinks.map((link) => (
            <NavItem key={link.href} link={link} />
          ))}
        </nav>

        <MobileMenu />
      </div>
    </header>
  );
}
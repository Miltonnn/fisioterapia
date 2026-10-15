import { Instagram, Facebook, Linkedin, LucideIcon } from "lucide-react";

interface SocialLink {
  name: string;
  href: string;
  icon: LucideIcon;
  brandClassName: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/torrigofisio/",
    icon: Instagram,
    brandClassName:
      "bg-linear-to-tr from-[#f58529] via-[#dd2a7b] to-[#8134af] shadow-[#dd2a7b]/30",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/amanda.torrigo/",
    icon: Facebook,
    brandClassName: "bg-[#1877F2] shadow-[#1877F2]/30",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/amanda-torrigo-57a512128/",
    icon: Linkedin,
    brandClassName: "bg-[#0A66C2] shadow-[#0A66C2]/30",
  },
];

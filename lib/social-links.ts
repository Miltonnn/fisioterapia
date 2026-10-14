import {
  Instagram,
  Facebook,
  Linkedin,
  LucideIcon,
  Github,
} from "lucide-react";

interface SocialLink {
  name: string;
  href: string;
  icon: LucideIcon;
}

export const socialLinks: SocialLink[] = [
  {
    name: "Instagram",
    href: "https://instagram.com/suaempresa",
    icon: Instagram,
  },
  {
    name: "Facebook",
    href: "https://facebook.com/suaempresa",
    icon: Facebook,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/notifications/?filter=all",
    icon: Linkedin,
  },
];

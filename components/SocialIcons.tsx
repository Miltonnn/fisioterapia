import { socialLinks } from "@/lib/social-links"
import { cn } from "@/lib/utils"

interface SocialIconsProps {
  className?: string
  iconSize?: number
  colorMode?: "theme" | "brand" | "light"
  itemClassName?: string
}

export function SocialIcons({
  className = "",
  iconSize = 20,
  colorMode = "theme",
  itemClassName,
}: SocialIconsProps) {
  return (
    <div className={cn("flex gap-4", className)}>
      {socialLinks.map((social) => {
        const Icon = social.icon

        return (
          <a
            key={social.name}
            href={social.href}
            title={social.name}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "w-10 h-10 rounded-lg hover:brightness-110 hover:-translate-y-0.5 flex items-center justify-center transition text-white shadow-sm",
              colorMode === "brand" && social.brandClassName,
              colorMode === "light" && "bg-white text-heading shadow-black/10",
              colorMode === "theme" && "bg-brand-gradient shadow-primary/30",
              itemClassName
            )}
            aria-label={social.name}
          >
            <Icon size={iconSize} />
          </a>
        )
      })}
    </div>
  )
}

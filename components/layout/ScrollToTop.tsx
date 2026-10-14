"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div
      className={`
        fixed bottom-20 md:right-8 right-3 z-50
        transition-all duration-300 ease-in-out
        ${isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none"}
      `}
    >
      <Button
        onClick={scrollToTop}
        size="icon"
        className="rounded-full shadow-lg h-12 w-12"
        aria-label="Voltar para o topo da pagina"
      >
        <ArrowUp size={28} strokeWidth={3} />
      </Button>
    </div>
  )
}

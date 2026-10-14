import { siteConfig } from "@/lib/site-config";

export function Mapa() {
  return (
    <div className="w-full overflow-hidden">
      <iframe
        src={siteConfig.mapa.url}
        className="w-full h-80"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}

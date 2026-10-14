import Image from "next/image";
import type { CatalogItem } from "@/components/catalog/catalog.data";

interface PostDetailProps {
  post: CatalogItem;
}

export function PostDetail({ post }: PostDetailProps) {
  return (
    <div className="container py-20 grid gap-12">
      <div className="relative overflow-hidden rounded-xl aspect-[21/9]">
        <Image
          src={post.image}
          alt={post.name}
          fill
          preload
          sizes="(min-width: 1568px) 1440px, 100vw"
          className="object-contain"
        />
      </div>

      <div className="text-left">
        <h1 className="text-4xl font-bold mb-6">{post.name}</h1>

        <p className="text-muted-foreground text-lg leading-relaxed">
          {post.description}
        </p>
      </div>
    </div>
  );
}

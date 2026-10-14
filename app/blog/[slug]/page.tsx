import { postLinks, posts } from "@/components/sections/Blog/blog.data";
import { CatalogDetail } from "@/components/catalog/CatalogDetail";
import { CatalogAside } from "@/components/catalog/CatalogAside";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const post = posts.find((s) => s.href.endsWith(slug));

  if (!post) return {};

  return {
    title: `${post.name} | SiteBase`,
    description: post.description,
  };
}

export default async function PostDetalhe({ params }: Props) {
  const { slug } = await params;

  const post = posts.find((s) => s.href.endsWith(slug));

  if (!post) return notFound();

  return (
    <section>
      <Breadcrumb />

      <div className="container grid gap-12 py-20 lg:grid-cols-[300px_1fr]">
        <div className="lg:order-2">
          <CatalogDetail item={post} />
        </div>

        <div className="lg:order-1">
          <CatalogAside
            title="Artigos"
            links={postLinks}
            currentHref={post.href}
          />
        </div>
      </div>
    </section>
  );
}

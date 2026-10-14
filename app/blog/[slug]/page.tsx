import { posts } from "@/components/sections/Blog/blog.data";
import { PostDetail } from "@/components/sections/Blog/PostDetail";
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
      <PostDetail post={post} />
    </section>
  );
}

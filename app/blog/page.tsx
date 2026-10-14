import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { CatalogCard } from "@/components/catalog/CatalogCard";
import { posts } from "@/components/sections/Blog/blog.data";
import { siteSections } from "@/lib/site-sections";
import { notFound } from "next/navigation";

export default function Blog() {
  if (!siteSections.blog) notFound();

  return (
    <section>
      <Breadcrumb />

      <div className="container py-15">
        <h2 className="text-4xl font-bold mb-20">Blog</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {posts.map((post) => (
            <CatalogCard key={post.href} item={post} />
          ))}
        </div>
      </div>
    </section>
  );
}

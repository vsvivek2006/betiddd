import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Clock, ArrowRight } from 'lucide-react';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema, combineSchemas, collectionPageSchema } from '@/lib/schema';
import JsonLd from '@/components/seo/json-ld';
import Breadcrumbs from '@/components/seo/breadcrumbs';
import { blogCategories } from '@/lib/data/blog-categories';
import { getPostsByCategory } from '@/lib/data/blog-posts';

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return blogCategories.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const category = blogCategories.find((c) => c.slug === params.slug);
  if (!category) return {};
  return buildMetadata({
    title: `${category.name} — Cricket Articles & Analysis`,
    description: category.description,
    path: `/blog/category/${category.slug}`,
    keywords: [category.name, 'cricket blog', 'cricket articles'],
  });
}

export default function BlogCategoryPage({ params }: Params) {
  const category = blogCategories.find((c) => c.slug === params.slug);
  if (!category) notFound();

  const posts = getPostsByCategory(category.slug);

  return (
    <main className="min-h-screen pt-16 lg:pt-20">
      <JsonLd
        data={combineSchemas(
          breadcrumbSchema([
            { name: 'Blog', path: '/blog' },
            { name: category.name, path: `/blog/category/${category.slug}` },
          ]),
          collectionPageSchema(
            category.name,
            `/blog/category/${category.slug}`,
            category.description,
            posts.map((p) => ({ title: p.title, url: `/blog/${p.slug}` })),
          ),
        )}
      />

      <section className="relative overflow-hidden py-16 md:py-24 pitch-pattern">
        <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Blog', path: '/blog' }, { name: category.name }]} />
          <Badge variant="secondary" className="mb-4 px-4 py-1">Category</Badge>
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">{category.name}</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">{category.longDescription}</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          {posts.length === 0 ? (
            <div className="glass-card rounded-2xl p-12 text-center">
              <p className="text-muted-foreground">No articles in this category yet. Check back soon.</p>
              <Link href="/blog" className="inline-flex items-center gap-2 mt-4 text-primary hover:underline">
                Browse All Articles <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="glass-card glass-card-hover rounded-2xl overflow-hidden group flex flex-col">
                  <div className="aspect-video bg-gradient-to-br from-emerald-500/10 to-amber-500/10 flex items-center justify-center">
                    <Clock className="h-10 w-10 text-muted-foreground/40" />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h2 className="font-semibold font-heading mb-2 group-hover:text-primary transition-colors line-clamp-2">{post.title}</h2>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">{post.excerpt}</p>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readingTime} min</span>
                      <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { day: 'numeric', month: 'short' })}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

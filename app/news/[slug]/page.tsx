import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Calendar, ArrowLeft } from 'lucide-react';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema, articleSchema, combineSchemas } from '@/lib/schema';
import JsonLd from '@/components/seo/json-ld';
import Breadcrumbs from '@/components/seo/breadcrumbs';
import { newsItems } from '@/lib/data/news';

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return newsItems.map((n) => ({ slug: n.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const item = newsItems.find((n) => n.slug === params.slug);
  if (!item) return {};
  return buildMetadata({
    title: item.title,
    description: item.excerpt,
    path: `/news/${item.slug}`,
    type: 'article',
    publishedTime: item.publishedAt,
    authors: [item.source],
    keywords: [item.category, 'cricket news'],
  });
}

export default function NewsArticlePage({ params }: Params) {
  const item = newsItems.find((n) => n.slug === params.slug);
  if (!item) notFound();

  return (
    <main className="min-h-screen pt-16 lg:pt-20">
      <JsonLd
        data={combineSchemas(
          breadcrumbSchema([
            { name: 'News', path: '/news' },
            { name: item.title.slice(0, 40), path: `/news/${item.slug}` },
          ]),
          articleSchema({
            slug: item.slug,
            title: item.title,
            excerpt: item.excerpt,
            featuredImage: item.image,
            publishedAt: item.publishedAt,
            updatedAt: item.publishedAt,
            category: item.category,
            tags: [item.category],
          } as any),
        )}
      />

      <article className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'News', path: '/news' }, { name: item.category }]} />

          <Badge variant="outline" className="mb-4">{item.category}</Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6 leading-tight">{item.title}</h1>

          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8 pb-8 border-b border-border">
            <span>{item.source}</span>
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              {new Date(item.publishedAt).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
            </span>
          </div>

          <div className="prose-cricket max-w-none">
            {item.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <Link href="/news" className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
              <ArrowLeft className="h-4 w-4" /> Back to News
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}

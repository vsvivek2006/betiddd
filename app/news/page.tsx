import type { Metadata } from 'next';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Newspaper } from 'lucide-react';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema, combineSchemas, collectionPageSchema } from '@/lib/schema';
import JsonLd from '@/components/seo/json-ld';
import Breadcrumbs from '@/components/seo/breadcrumbs';
import { newsItems } from '@/lib/data/news';

export const metadata: Metadata = buildMetadata({
  title: 'Cricket News — Latest Updates, Scores & Announcements',
  description: 'Latest cricket news, breaking stories, squad announcements, injuries, and developments from international and franchise cricket worldwide.',
  path: '/news',
  keywords: ['cricket news', 'cricket updates', 'cricket headlines', 'latest cricket news'],
});

export default function NewsPage() {
  return (
    <main className="min-h-screen pt-16 lg:pt-20">
      <JsonLd
        data={combineSchemas(
          breadcrumbSchema([{ name: 'News', path: '/news' }]),
          collectionPageSchema(
            'Cricket News',
            '/news',
            'Latest cricket news from international and franchise cricket worldwide.',
            newsItems.map((n) => ({ title: n.title, url: `/news/${n.slug}` })),
          ),
        )}
      />

      <section className="relative overflow-hidden py-16 md:py-24 pitch-pattern">
        <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'News' }]} />
          <Badge variant="secondary" className="mb-4 px-4 py-1">Latest News</Badge>
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            Cricket <span className="text-gradient">News</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Breaking news, squad announcements, injuries, and developments from international and franchise cricket worldwide.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.map((news) => (
              <Link key={news.slug} href={`/news/${news.slug}`} className="glass-card glass-card-hover rounded-2xl overflow-hidden group">
                <div className="aspect-video bg-gradient-to-br from-emerald-500/10 to-amber-500/10 flex items-center justify-center">
                  <Newspaper className="h-10 w-10 text-muted-foreground/50" />
                </div>
                <div className="p-5">
                  <Badge variant="outline" className="mb-2 text-xs">{news.category}</Badge>
                  <h2 className="font-semibold font-heading mb-2 group-hover:text-primary transition-colors line-clamp-2">{news.title}</h2>
                  <p className="text-sm text-muted-foreground line-clamp-2">{news.excerpt}</p>
                  <p className="text-xs text-muted-foreground mt-3">{new Date(news.publishedAt).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

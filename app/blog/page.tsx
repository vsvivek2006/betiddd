import type { Metadata } from 'next';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, ArrowRight, Search } from 'lucide-react';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema, combineSchemas, collectionPageSchema } from '@/lib/schema';
import JsonLd from '@/components/seo/json-ld';
import Breadcrumbs from '@/components/seo/breadcrumbs';
import { blogPosts } from '@/lib/data/blog-posts';
import { blogCategories } from '@/lib/data/blog-categories';

export const metadata: Metadata = buildMetadata({
  title: 'Cricket Blog — Match Analysis, Guides, Records & News',
  description: 'In-depth cricket articles: match previews and reviews, player profiles, team guides, tournament guides, rules explainers, records, and the latest cricket news.',
  path: '/blog',
  keywords: ['cricket blog', 'cricket analysis', 'cricket guides', 'cricket articles', 'cricket records'],
});

export default function BlogPage() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <main className="min-h-screen pt-16 lg:pt-20">
      <JsonLd
        data={combineSchemas(
          breadcrumbSchema([{ name: 'Blog', path: '/blog' }]),
          collectionPageSchema(
            'Cricket Blog',
            '/blog',
            'In-depth cricket articles: match analysis, guides, records, and news.',
            blogPosts.map((p) => ({ title: p.title, url: `/blog/${p.slug}` })),
          ),
        )}
      />

      <section className="relative overflow-hidden py-16 md:py-24 pitch-pattern">
        <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Blog' }]} />
          <Badge variant="secondary" className="mb-4 px-4 py-1">Cricket Blog</Badge>
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            Cricket <span className="text-gradient">Articles & Analysis</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            In-depth match previews and reviews, player profiles, team guides, tournament guides, rules explainers, records, and the latest cricket news.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-y border-border/50 bg-card/30">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3">
            <Link href="/blog">
              <Badge variant="default" className="cursor-pointer py-2 px-4">All</Badge>
            </Link>
            {blogCategories.map((c) => (
              <Link key={c.slug} href={`/blog/category/${c.slug}`}>
                <Badge variant="outline" className="cursor-pointer py-2 px-4 hover:bg-primary/10 hover:text-primary transition-colors">{c.name}</Badge>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featured && (
        <section className="section-padding">
          <div className="container-custom">
            <Link href={`/blog/${featured.slug}`} className="glass-card glass-card-hover rounded-3xl overflow-hidden grid md:grid-cols-2 group">
              <div className="aspect-video md:aspect-auto bg-gradient-to-br from-emerald-500/10 to-amber-500/10 flex items-center justify-center min-h-[300px]">
                <Search className="h-16 w-16 text-muted-foreground/30" />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <Badge variant="outline" className="mb-3 self-start">Featured · {featured.category}</Badge>
                <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4 group-hover:text-primary transition-colors">{featured.title}</h2>
                <p className="text-muted-foreground mb-6">{featured.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {featured.readingTime} min read</span>
                  <span>{new Date(featured.publishedAt).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="glass-card glass-card-hover rounded-2xl overflow-hidden group flex flex-col">
                <div className="aspect-video bg-gradient-to-br from-emerald-500/10 to-amber-500/10 flex items-center justify-center">
                  <Search className="h-10 w-10 text-muted-foreground/40" />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <Badge variant="outline" className="mb-2 text-xs self-start">{post.category}</Badge>
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
        </div>
      </section>
    </main>
  );
}

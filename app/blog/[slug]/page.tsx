import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Clock, ArrowLeft, ArrowRight, Calendar, User } from 'lucide-react';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema, articleSchema, faqSchema, combineSchemas } from '@/lib/schema';
import JsonLd from '@/components/seo/json-ld';
import Breadcrumbs from '@/components/seo/breadcrumbs';
import ArticleContent from '@/components/seo/article-content';
import FaqAccordion from '@/components/seo/faq-accordion';
import CtaSection from '@/components/seo/cta-section';
import { blogPosts, getRelatedPosts } from '@/lib/data/blog-posts';
import { blogCategories } from '@/lib/data/blog-categories';

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return buildMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
    type: 'article',
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt || post.publishedAt,
    authors: [post.author],
    keywords: post.keywords,
    image: post.featuredImage,
  });
}

export default function BlogPostPage({ params }: Params) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.slug);
  const category = blogCategories.find((c) => c.name === post.category);

  return (
    <main className="min-h-screen pt-16 lg:pt-20">
      <JsonLd
        data={combineSchemas(
          breadcrumbSchema([
            { name: 'Blog', path: '/blog' },
            ...(category ? [{ name: category.name, path: `/blog/category/${category.slug}` }] : []),
            { name: post.title.slice(0, 40), path: `/blog/${post.slug}` },
          ]),
          articleSchema(post),
          faqSchema(post.faqs),
        )}
      />

      <article className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: 'Blog', path: '/blog' },
              ...(category ? [{ name: category.name, path: `/blog/category/${category.slug}` }] : []),
              { name: post.title.slice(0, 40) },
            ]}
          />

          <Badge variant="outline" className="mb-4">{post.category}</Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6 leading-tight">{post.title}</h1>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{post.excerpt}</p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8 pb-8 border-b border-border">
            <span className="flex items-center gap-1.5"><User className="h-4 w-4" /> {post.author}</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {new Date(post.publishedAt).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
            </span>
            <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {post.readingTime} min read</span>
          </div>

          <ArticleContent sections={post.sections} />

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, i) => (
                <Badge key={i} variant="secondary" className="text-xs">{tag}</Badge>
              ))}
            </div>
          </div>

          {/* FAQ */}
          {post.faqs.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl md:text-3xl font-bold font-heading mb-6">Frequently Asked Questions</h2>
              <FaqAccordion faqs={post.faqs} />
            </div>
          )}

          <div className="mt-12 pt-8 border-t border-border">
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
              <ArrowLeft className="h-4 w-4" /> Back to Blog
            </Link>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {related.length > 0 && (
        <section className="section-padding pt-0">
          <div className="container-custom max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold font-heading mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((rp) => (
                <Link key={rp.slug} href={`/blog/${rp.slug}`} className="glass-card glass-card-hover rounded-2xl p-5 group">
                  <Badge variant="outline" className="mb-2 text-xs">{rp.category}</Badge>
                  <h3 className="font-semibold font-heading mb-2 group-hover:text-primary transition-colors line-clamp-2">{rp.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{rp.excerpt}</p>
                  <span className="text-xs text-primary flex items-center gap-1">
                    Read <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaSection
        title="Never Miss a Match"
        description="Get ball-by-ball live scores, deep statistics, and expert analysis from every major cricket competition."
        primaryLabel="View Live Scores"
        primaryHref="/live-scores"
        secondaryLabel="Browse All Articles"
        secondaryHref="/blog"
      />
    </main>
  );
}

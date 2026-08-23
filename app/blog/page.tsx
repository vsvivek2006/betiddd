import type { Metadata } from 'next';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, ArrowRight, Search, Phone, Trophy, Users, Star, Shield, Award, Target } from 'lucide-react';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema, combineSchemas, collectionPageSchema } from '@/lib/schema';
import JsonLd from '@/components/seo/json-ld';
import Breadcrumbs from '@/components/seo/breadcrumbs';
import { blogPosts } from '@/lib/data/blog-posts';
import { blogCategories } from '@/lib/data/blog-categories';

// ============================================
// WHATSAPP LINK
// ============================================
const WHATSAPP_LINK = 'https://wa.link/onlinecricketid';
const WHATSAPP_NUMBER = '+91XXXXXXXXXX'; // Replace with actual number

// ============================================
// METADATA WITH TARGET KEYWORDS
// ============================================
export const metadata: Metadata = buildMetadata({
  title: 'Online Cricket ID Blog – Get Best Cricket ID & IPL Betting ID 2026',
  description:
    'Get your Online Cricket ID, IPL Cricket ID & All Cricket IDs from India\'s best Cricket ID Provider. Read our blog for betting guides, tips, and latest cricket news.',
  path: '/blog',
  keywords: [
    'Online Cricket ID',
    'Cricket ID',
    'Online Betting ID',
    'Online Cricket ID Whatsapp Number',
    'Cricket Id Online',
    'Best Online Cricket ID',
    'Ipl Cricket Id',
    'All cricket Id',
    'Cricket Id Provider',
  ],
});

// ============================================
// BLOG POST DATA WITH KEYWORD OPTIMIZATION
// ============================================
const enhancedBlogPosts = [
  {
    slug: 'how-to-get-online-cricket-id',
    title: 'How to Get Online Cricket ID – Complete Guide 2026',
    excerpt: 'Step-by-step guide to get your Online Cricket ID, IPL Cricket ID & All Cricket IDs. Best Cricket ID Provider with WhatsApp activation.',
    category: 'Cricket ID Guide',
    readingTime: 5,
    publishedAt: '2026-08-23',
    keywords: ['Online Cricket ID', 'Cricket ID', 'Cricket Id Provider'],
  },
  {
    slug: 'best-online-cricket-id-provider',
    title: 'Best Online Cricket ID Provider in India 2026',
    excerpt: 'Compare top Cricket ID Providers. Get the Best Online Cricket ID with low deposit, fast withdrawals, and 24/7 support.',
    category: 'Cricket ID Guide',
    readingTime: 7,
    publishedAt: '2026-08-22',
    keywords: ['Best Online Cricket ID', 'Cricket ID', 'Online Cricket ID'],
  },
  {
    slug: 'ipl-cricket-id-2026',
    title: 'IPL Cricket ID 2026 – Get Your IPL Betting ID Now',
    excerpt: 'Get your IPL Cricket ID for IPL 2026. Exclusive IPL markets, live odds, and real-time betting with the best Cricket ID Provider.',
    category: 'IPL Betting',
    readingTime: 6,
    publishedAt: '2026-08-21',
    keywords: ['Ipl Cricket Id', 'IPL Cricket ID', 'Online Cricket ID'],
  },
  {
    slug: 'online-betting-id-guide',
    title: 'Online Betting ID – Everything You Need to Know',
    excerpt: 'Complete guide to Online Betting ID. Types of IDs, how to choose the right Cricket ID Provider, and betting tips.',
    category: 'Betting Guide',
    readingTime: 8,
    publishedAt: '2026-08-20',
    keywords: ['Online Betting ID', 'Cricket ID', 'Online Cricket ID'],
  },
  {
    slug: 'cricket-id-whatsapp-number',
    title: 'Online Cricket ID WhatsApp Number – Instant ID Activation',
    excerpt: 'Get your Cricket ID Online instantly via WhatsApp. Save our Online Cricket ID WhatsApp Number and get activated in 2 minutes.',
    category: 'Cricket ID Guide',
    readingTime: 4,
    publishedAt: '2026-08-19',
    keywords: ['Online Cricket ID Whatsapp Number', 'Cricket ID Online', 'Cricket Id Provider'],
  },
  {
    slug: 'all-cricket-id-types-explained',
    title: 'All Cricket ID Types Explained – Exchange, Master, Multi',
    excerpt: 'Learn about All Cricket IDs – Exchange ID, Master ID, Multi-Exchange ID. Choose the best Cricket ID Provider for your needs.',
    category: 'Betting Guide',
    readingTime: 6,
    publishedAt: '2026-08-18',
    keywords: ['All cricket Id', 'Cricket ID', 'Online Betting ID'],
  },
];

// ============================================
// MAIN COMPONENT
// ============================================
export default function BlogPage() {
  const featured = enhancedBlogPosts[0];
  const rest = enhancedBlogPosts.slice(1);

  return (
    <main className="min-h-screen pt-16 lg:pt-20">
      {/* ====== JSON-LD SCHEMA ====== */}
      <JsonLd
        data={combineSchemas(
          breadcrumbSchema([{ name: 'Blog', path: '/blog' }]),
          collectionPageSchema(
            'Online Cricket ID Blog',
            '/blog',
            'Get your Online Cricket ID, IPL Cricket ID & All Cricket IDs. Read our blog for betting guides, tips, and cricket news.',
            enhancedBlogPosts.map((p) => ({ title: p.title, url: `/blog/${p.slug}` })),
          ),
        )}
      />

      {/* ====== HERO SECTION ====== */}
      <section className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Blog' }]} />
          
          <Badge variant="secondary" className="mb-4 px-4 py-1">
            🏏 Cricket ID Blog
          </Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            Online Cricket ID <span className="text-gradient">Blog & Guides</span>
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-2xl">
            Get your <strong>Online Cricket ID</strong>, <strong>IPL Cricket ID</strong> & <strong>All Cricket IDs</strong> 
            from India's best <strong>Cricket ID Provider</strong>. Read our expert guides for betting tips, 
            ID activation, and latest cricket news.
          </p>

          {/* ====== WHATSAPP CTA ====== */}
          <div className="mt-6 flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-5 w-5" />
                Get ID on WhatsApp
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/cricket-id">
                View All Cricket IDs
              </Link>
            </Button>
          </div>

          {/* ====== WHATSAPP NUMBER ====== */}
          <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
            <span>📱 Online Cricket ID WhatsApp Number:</span>
            <a 
              href={WHATSAPP_LINK} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:underline"
            >
              Click to Chat Now
            </a>
          </div>
        </div>
      </section>

      {/* ====== KEYWORD-RICH CATEGORIES ====== */}
      <section className="py-8 border-y border-border/50 bg-card/30">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3">
            <Link href="/blog">
              <Badge variant="default" className="cursor-pointer py-2 px-4">🏏 All Cricket IDs</Badge>
            </Link>
            <Link href="/blog/category/cricket-id-guide">
              <Badge variant="outline" className="cursor-pointer py-2 px-4 hover:bg-primary/10 hover:text-primary transition-colors">
                Online Cricket ID Guide
              </Badge>
            </Link>
            <Link href="/blog/category/ipl-betting">
              <Badge variant="outline" className="cursor-pointer py-2 px-4 hover:bg-primary/10 hover:text-primary transition-colors">
                IPL Cricket ID
              </Badge>
            </Link>
            <Link href="/blog/category/betting-guide">
              <Badge variant="outline" className="cursor-pointer py-2 px-4 hover:bg-primary/10 hover:text-primary transition-colors">
                Online Betting ID
              </Badge>
            </Link>
            <Link href="/blog/category/cricket-id-provider">
              <Badge variant="outline" className="cursor-pointer py-2 px-4 hover:bg-primary/10 hover:text-primary transition-colors">
                Best Cricket ID Provider
              </Badge>
            </Link>
          </div>
        </div>
      </section>

      {/* ====== FEATURED POST ====== */}
      {featured && (
        <section className="section-padding">
          <div className="container-custom">
            <div className="glass-card glass-card-hover rounded-3xl overflow-hidden grid md:grid-cols-2 group">
              <div className="bg-gradient-to-br from-emerald-500/10 to-amber-500/10 flex items-center justify-center min-h-[300px] p-8">
                <div className="text-center">
                  <Trophy className="h-16 w-16 text-primary/60 mx-auto mb-4" />
                  <Badge variant="outline" className="text-sm">Featured Guide</Badge>
                </div>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <Badge variant="outline" className="mb-3 self-start">
                  {featured.category} · Online Cricket ID
                </Badge>
                <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4 group-hover:text-primary transition-colors">
                  {featured.title}
                </h2>
                <p className="text-muted-foreground mb-6">{featured.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" /> {featured.readingTime} min read
                  </span>
                  <span>{new Date(featured.publishedAt).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                </div>
                <Link href={`/blog/${featured.slug}`} className="text-primary font-medium hover:underline flex items-center gap-2">
                  Read Full Guide <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ====== KEYWORD-RICH SECTION ====== */}
      <section className="section-padding pt-0">
        <div className="container-custom">
          {/* ====== SECTION INTRO ====== */}
          <div className="mb-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4">
              All Cricket ID <span className="text-gradient">Guides & Articles</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get your <strong>Online Cricket ID</strong>, <strong>IPL Cricket ID</strong> & 
              <strong>Online Betting ID</strong> from India's best <strong>Cricket ID Provider</strong>. 
              Read our expert guides below.
            </p>
          </div>

          {/* ====== BLOG POSTS GRID ====== */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="glass-card glass-card-hover rounded-2xl overflow-hidden group flex flex-col">
                <div className="aspect-video bg-gradient-to-br from-emerald-500/10 to-amber-500/10 flex items-center justify-center p-6">
                  <div className="text-center">
                    {post.category.includes('IPL') ? (
                      <Trophy className="h-10 w-10 text-primary/60 mx-auto mb-2" />
                    ) : post.category.includes('Online Cricket ID') ? (
                      <Target className="h-10 w-10 text-primary/60 mx-auto mb-2" />
                    ) : post.category.includes('Betting') ? (
                      <Star className="h-10 w-10 text-primary/60 mx-auto mb-2" />
                    ) : (
                      <Shield className="h-10 w-10 text-primary/60 mx-auto mb-2" />
                    )}
                    <Badge variant="outline" className="text-xs">{post.category}</Badge>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h2 className="font-semibold font-heading mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {post.readingTime} min
                    </span>
                    <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { day: 'numeric', month: 'short' })}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* ====== KEYWORD-RICH INFO BOX ====== */}
          <div className="mt-12 p-8 bg-primary/5 rounded-2xl border border-primary/10">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold font-heading mb-3 flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  Best Online Cricket ID Provider
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We are India's trusted <strong>Cricket ID Provider</strong>. Get your 
                  <strong>Online Cricket ID</strong> and <strong>IPL Cricket ID</strong> 
                  with instant WhatsApp activation, low deposit (₹100), and fast withdrawals.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold font-heading mb-3 flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Get All Cricket IDs
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We provide <strong>All Cricket IDs</strong> – Exchange ID, Master ID, 
                  Multi-Exchange ID, and Sportsbook ID. Get your <strong>Cricket ID Online</strong> 
                  via WhatsApp today!
                </p>
              </div>
            </div>
          </div>

          {/* ====== WHATSAPP CTA SECTION ====== */}
          <div className="mt-12 text-center p-8 bg-green-50 dark:bg-green-950/20 rounded-2xl border border-green-200 dark:border-green-800">
            <h3 className="text-2xl font-bold font-heading mb-4">
              Get Your Online Cricket ID Now!
            </h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Contact us on WhatsApp for instant activation. Save our 
              <strong> Online Cricket ID WhatsApp Number</strong> and get started in 2 minutes.
            </p>
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-5 w-5" />
                Chat on WhatsApp
              </a>
            </Button>
            <p className="mt-4 text-xs text-muted-foreground">
              📱 WhatsApp Number: Click the button above to chat instantly
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

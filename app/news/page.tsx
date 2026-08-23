import type { Metadata } from 'next';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Newspaper, Phone, Trophy, Shield, Award, Target, Users, Calendar, Clock } from 'lucide-react';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema, combineSchemas, collectionPageSchema } from '@/lib/schema';
import JsonLd from '@/components/seo/json-ld';
import Breadcrumbs from '@/components/seo/breadcrumbs';
import { newsItems } from '@/lib/data/news';

// ============================================
// WHATSAPP LINK
// ============================================
const WHATSAPP_LINK = 'https://wa.link/onlinecricketid';
const WHATSAPP_NUMBER = '+91XXXXXXXXXX'; // Replace with actual number

// ============================================
// METADATA WITH TARGET KEYWORDS
// ============================================
export const metadata: Metadata = buildMetadata({
  title: 'Online Cricket ID – Latest Cricket News & Updates 2026 | IPL News',
  description:
    'Get your Online Cricket ID, IPL Cricket ID & All Cricket IDs. Latest cricket news, IPL updates, squad announcements. Best Cricket ID Provider with WhatsApp activation.',
  path: '/news',
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
    'Cricket News',
    'IPL News',
    'Cricket Updates',
    'Latest Cricket News',
  ],
});

// ============================================
// ENHANCED NEWS DATA WITH KEYWORDS
// ============================================
const enhancedNewsItems = [
  {
    slug: 'ipl-2026-schedule-announced',
    title: 'IPL 2026 Schedule Announced – Get Your IPL Cricket ID Now!',
    excerpt: 'IPL 2026 schedule is out! Get your IPL Cricket ID and start betting on the biggest cricket tournament. Best Cricket ID Provider with WhatsApp activation.',
    category: 'IPL News',
    publishedAt: '2026-08-24',
    featured: true,
  },
  {
    slug: 'ind-vs-aus-test-series-2026',
    title: 'IND vs AUS Test Series 2026 – Get Online Cricket ID',
    excerpt: 'India vs Australia Test series starting soon. Get your Online Cricket ID and bet on the action. Trusted Cricket ID Provider with fast withdrawals.',
    category: 'International Cricket',
    publishedAt: '2026-08-23',
    featured: false,
  },
  {
    slug: 'top-5-cricket-id-providers-2026',
    title: 'Top 5 Cricket ID Providers in India 2026',
    excerpt: 'Compare the best Cricket ID Providers in India. Get your Online Cricket ID, IPL Cricket ID & All Cricket IDs from trusted providers.',
    category: 'Cricket ID Guide',
    publishedAt: '2026-08-22',
    featured: false,
  },
  {
    slug: 'bcci-announces-new-tournament',
    title: 'BCCI Announces New Tournament – Get Online Betting ID',
    excerpt: 'BCCI announces new domestic tournament. Get your Online Betting ID and bet on emerging players. Best Cricket ID Provider with instant activation.',
    category: 'Domestic Cricket',
    publishedAt: '2026-08-21',
    featured: false,
  },
  {
    slug: 'how-to-get-online-cricket-id',
    title: 'How to Get Online Cricket ID – Complete Guide 2026',
    excerpt: 'Step-by-step guide to get your Online Cricket ID, IPL Cricket ID & All Cricket IDs. Best Cricket ID Provider with WhatsApp number for instant activation.',
    category: 'Cricket ID Guide',
    publishedAt: '2026-08-20',
    featured: false,
  },
  {
    slug: 'world-cup-2026-qualifiers',
    title: 'World Cup 2026 Qualifiers – Get Your Cricket ID',
    excerpt: 'World Cup 2026 qualifiers underway. Get your Cricket ID and bet on your favorite teams. Trusted Cricket ID Provider with 24/7 support.',
    category: 'ICC Events',
    publishedAt: '2026-08-19',
    featured: false,
  },
];

// ============================================
// MAIN COMPONENT
// ============================================
export default function NewsPage() {
  const featured = enhancedNewsItems.find((n) => n.featured) || enhancedNewsItems[0];
  const rest = enhancedNewsItems.filter((n) => n.slug !== featured.slug);

  return (
    <main className="min-h-screen pt-16 lg:pt-20">
      {/* ====== JSON-LD SCHEMA ====== */}
      <JsonLd
        data={combineSchemas(
          breadcrumbSchema([{ name: 'News', path: '/news' }]),
          collectionPageSchema(
            'Online Cricket ID – Cricket News & Updates',
            '/news',
            'Latest cricket news and updates. Get your Online Cricket ID, IPL Cricket ID & All Cricket IDs from India\'s best Cricket ID Provider.',
            enhancedNewsItems.map((n) => ({ title: n.title, url: `/news/${n.slug}` })),
          ),
        )}
      />

      {/* ====== HERO SECTION ====== */}
      <section className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'News' }]} />
          
          <Badge variant="secondary" className="mb-4 px-4 py-1">
            🏏 #1 Cricket ID Provider
          </Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            Cricket News & <span className="text-gradient">Online Cricket ID</span>
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-2xl">
            Breaking news, squad announcements, injuries, and developments from international and franchise 
            cricket worldwide. Get your <strong>Online Cricket ID</strong>, <strong>IPL Cricket ID</strong> & 
            <strong>All Cricket IDs</strong> from India's best <strong>Cricket ID Provider</strong> 
            with instant WhatsApp activation.
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

          {/* ====== QUICK STATS ====== */}
          <div className="mt-6 flex flex-wrap gap-6 text-sm">
            <span className="flex items-center gap-2 text-muted-foreground">
              <Newspaper className="h-4 w-4 text-primary" />
              Latest Cricket News
            </span>
            <span className="flex items-center gap-2 text-muted-foreground">
              <Trophy className="h-4 w-4 text-primary" />
              IPL 2026 Updates
            </span>
            <span className="flex items-center gap-2 text-muted-foreground">
              <Shield className="h-4 w-4 text-primary" />
              Trusted Cricket ID Provider
            </span>
          </div>
        </div>
      </section>

      {/* ====== KEYWORD-RICH INTRO SECTION ====== */}
      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="mb-8 p-6 bg-primary/5 rounded-2xl border border-primary/10">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-xl font-bold font-heading mb-3 flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  Best Online Cricket ID Provider
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Get your <strong>Online Cricket ID</strong> and stay updated with the latest cricket news. 
                  We are India's trusted <strong>Cricket ID Provider</strong> with instant WhatsApp activation, 
                  low deposit (₹100), and fast withdrawals.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-bold font-heading mb-3 flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  All Cricket IDs Available
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We provide <strong>All Cricket IDs</strong> – Exchange ID, Master ID, 
                  Multi-Exchange ID, and Sportsbook ID. Get your <strong>IPL Cricket ID</strong> 
                  and <strong>Online Betting ID</strong> today via WhatsApp. 
                  <a 
                    href={WHATSAPP_LINK} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary font-semibold hover:underline ml-1"
                  >
                    Click to Chat
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== FEATURED NEWS ====== */}
      {featured && (
        <section className="section-padding pt-0">
          <div className="container-custom">
            <div className="glass-card glass-card-hover rounded-3xl overflow-hidden group">
              <div className="aspect-video md:aspect-[3/1] bg-gradient-to-br from-emerald-500/10 to-amber-500/10 flex items-center justify-center">
                <Newspaper className="h-16 w-16 text-muted-foreground/50" />
              </div>
              <div className="p-6 md:p-10">
                <Badge className="mb-3">{featured.category}</Badge>
                <h2 className="text-2xl md:text-3xl font-bold font-heading mb-3 group-hover:text-primary transition-colors">
                  <Link href={`/news/${featured.slug}`}>{featured.title}</Link>
                </h2>
                <p className="text-muted-foreground mb-4">{featured.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {new Date(featured.publishedAt).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    Featured Story
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ====== NEWS GRID ====== */}
      <section className="section-padding pt-0">
        <div className="container-custom">
          <h2 className="text-2xl font-bold font-heading mb-6 flex items-center gap-2">
            <Newspaper className="h-6 w-6 text-primary" />
            Latest Cricket News & Updates
          </h2>
          <p className="text-muted-foreground mb-6 text-sm">
            Stay updated with the latest cricket news and get your <strong>Online Cricket ID</strong> 
            to bet on upcoming matches. Our <strong>Cricket ID Online</strong> service provides 
            real-time odds for all cricket events.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((news) => (
              <Link key={news.slug} href={`/news/${news.slug}`} className="glass-card glass-card-hover rounded-2xl overflow-hidden group">
                <div className="aspect-video bg-gradient-to-br from-emerald-500/10 to-amber-500/10 flex items-center justify-center">
                  <Newspaper className="h-10 w-10 text-muted-foreground/50" />
                </div>
                <div className="p-5">
                  <Badge variant="outline" className="mb-2 text-xs">{news.category}</Badge>
                  <h2 className="font-semibold font-heading mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {news.title}
                  </h2>
                  <p className="text-sm text-muted-foreground line-clamp-2">{news.excerpt}</p>
                  <p className="text-xs text-muted-foreground mt-3">
                    {new Date(news.publishedAt).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ====== KEYWORD-RICH INFO BOX ====== */}
      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10">
            <h3 className="text-lg font-bold font-heading mb-4 flex items-center gap-2">
              <Trophy className="h-5 w-5 text-primary" />
              Why Choose Our Cricket ID Provider?
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <strong className="text-foreground flex items-center gap-1">
                  <Shield className="h-4 w-4 text-primary" /> Trusted Provider
                </strong>
                <p className="text-muted-foreground">India's most trusted Cricket ID Provider with 10,000+ users</p>
              </div>
              <div>
                <strong className="text-foreground flex items-center gap-1">
                  <Target className="h-4 w-4 text-primary" /> All Cricket IDs
                </strong>
                <p className="text-muted-foreground">Exchange ID, Master ID, Multi-Exchange ID, Sportsbook ID</p>
              </div>
              <div>
                <strong className="text-foreground flex items-center gap-1">
                  <Award className="h-4 w-4 text-primary" /> Best Online Cricket ID
                </strong>
                <p className="text-muted-foreground">Competitive odds, fast withdrawals, 24/7 support</p>
              </div>
            </div>
          </div>

          {/* ====== WHATSAPP CTA SECTION ====== */}
          <div className="mt-8 text-center p-8 bg-green-50 dark:bg-green-950/20 rounded-2xl border border-green-200 dark:border-green-800">
            <h3 className="text-2xl font-bold font-heading mb-4">
              Get Your Online Cricket ID Now!
            </h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Contact us on WhatsApp for instant activation. Save our 
              <strong> Online Cricket ID WhatsApp Number</strong> and start betting on the 
              latest cricket matches in 2 minutes.
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

          {/* ====== DISCLAIMER ====== */}
          <div className="mt-6 p-4 border border-yellow-200 bg-yellow-50 dark:bg-yellow-950/20 rounded-xl">
            <p className="text-xs text-muted-foreground">
              <strong>Disclaimer:</strong> Real-money cricket betting is banned in India under the 
              Online Gaming Act, 2025. This website provides informational content only. 
              Consult a qualified lawyer before any real-money activity. 
              We do not guarantee profits and are not responsible for any financial loss.
            </p>
          </div>

          {/* ====== KEYWORD SUMMARY ====== */}
          <div className="mt-6 p-4 bg-muted rounded-xl">
            <p className="text-xs text-muted-foreground text-center">
              <strong>Keywords:</strong> Online Cricket ID, Cricket ID, Online Betting ID, 
              Online Cricket ID Whatsapp Number, Cricket Id Online, Best Online Cricket ID, 
              Ipl Cricket Id, All cricket Id, Cricket Id Provider, Cricket News, 
              IPL News, Cricket Updates, Latest Cricket News
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

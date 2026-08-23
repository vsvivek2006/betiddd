import type { Metadata } from 'next';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, ArrowRight, Phone, Trophy, Target, Shield, Award, Users, Crown } from 'lucide-react';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema, combineSchemas, collectionPageSchema } from '@/lib/schema';
import JsonLd from '@/components/seo/json-ld';
import Breadcrumbs from '@/components/seo/breadcrumbs';
import { providers } from '@/lib/data/providers';

// ============================================
// WHATSAPP LINK
// ============================================
const WHATSAPP_LINK = 'https://wa.link/onlinecricketid';
const WHATSAPP_NUMBER = '+91XXXXXXXXXX'; // Replace with actual number

// ============================================
// METADATA WITH TARGET KEYWORDS
// ============================================
export const metadata: Metadata = buildMetadata({
  title: 'Online Cricket ID Provider Reviews – Best Cricket ID Providers 2026',
  description:
    'Get your Online Cricket ID, IPL Cricket ID & All Cricket IDs. Compare the best Cricket ID Providers with ratings, pros, cons, and reviews. Trusted Cricket ID Provider with WhatsApp activation.',
  path: '/providers',
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
    'Cricket ID Reviews',
    'Best Cricket ID Provider',
    'Cricket Platform Reviews',
  ],
});

// ============================================
// PROVIDERS DATA WITH ENHANCED KEYWORDS
// ============================================
const enhancedProviders = [
  {
    slug: 'lotus365',
    name: 'Lotus365',
    rating: 4.8,
    reviewCount: 2500,
    tagline: 'Best Online Cricket ID for Exchange Betting',
    description: 'Get your Online Cricket ID with Lotus365. One of the best Cricket ID Providers in India with fast withdrawals and 24/7 support.',
    established: 2016,
    coverage: 'Cricket, Football, Tennis, Kabaddi',
  },
  {
    slug: 'lemonbook',
    name: 'Lemonbook',
    rating: 4.7,
    reviewCount: 1800,
    tagline: 'Fastest Withdrawals for Cricket ID',
    description: 'Get your IPL Cricket ID with Lemonbook. Specialized in IPL betting with under 2 minute withdrawals.',
    established: 2020,
    coverage: 'Cricket, Football, Kabaddi',
  },
  {
    slug: 'amiribook',
    name: 'Amiribook',
    rating: 4.6,
    reviewCount: 1200,
    tagline: 'Best Master ID Provider for Beginners',
    description: 'Get your Cricket ID Online with Amiribook. Perfect for beginners with low deposit and guided support.',
    established: 2019,
    coverage: 'Cricket, Football, Tennis',
  },
  {
    slug: 'skycricketid',
    name: 'Skycricketid',
    rating: 4.5,
    reviewCount: 1500,
    tagline: 'Live Streaming with Cricket ID',
    description: 'Get your Online Cricket ID with Skycricketid. Watch live matches and bet simultaneously with competitive odds.',
    established: 2018,
    coverage: 'Cricket, Football, Tennis',
  },
  {
    slug: 'iplcricketid',
    name: 'IPLCricketid.org',
    rating: 4.4,
    reviewCount: 900,
    tagline: 'Specialized IPL Cricket ID Provider',
    description: 'Get your IPL Cricket ID with IPLCricketid.org. Specialized in IPL betting with exclusive markets and WhatsApp Pay integration.',
    established: 2021,
    coverage: 'Cricket, IPL',
  },
  {
    slug: 'onlinebettingid',
    name: 'Onlinebettingid.org',
    rating: 4.3,
    reviewCount: 800,
    tagline: 'All Cricket IDs & Betting Tips',
    description: 'Get All Cricket IDs with Onlinebettingid.org. Includes betting tips, match analysis, and educational content for beginners.',
    established: 2020,
    coverage: 'Cricket, Football, Tennis, Kabaddi',
  },
];

// ============================================
// MAIN COMPONENT
// ============================================
export default function ProvidersPage() {
  return (
    <main className="min-h-screen pt-16 lg:pt-20">
      {/* ====== JSON-LD SCHEMA ====== */}
      <JsonLd
        data={combineSchemas(
          breadcrumbSchema([{ name: 'Cricket ID Providers', path: '/providers' }]),
          collectionPageSchema(
            'Best Online Cricket ID Providers',
            '/providers',
            'Compare the best Cricket ID Providers in India. Get your Online Cricket ID, IPL Cricket ID & All Cricket IDs with reviews and ratings.',
            enhancedProviders.map((p) => ({ title: `${p.name} Review`, url: `/providers/${p.slug}` })),
          ),
        )}
      />

      {/* ====== HERO SECTION ====== */}
      <section className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Cricket ID Providers' }]} />
          
          <Badge variant="secondary" className="mb-4 px-4 py-1">
            🏏 #1 Cricket ID Provider Reviews
          </Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            Best <span className="text-gradient">Online Cricket ID</span> Providers 2026
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-2xl">
            Compare the best <strong>Cricket ID Providers</strong> in India. Get your 
            <strong>Online Cricket ID</strong>, <strong>IPL Cricket ID</strong> & 
            <strong>All Cricket IDs</strong> from trusted providers with instant WhatsApp activation, 
            low deposits, and fast withdrawals.
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
              <Trophy className="h-4 w-4 text-primary" />
              {enhancedProviders.length} Trusted Providers
            </span>
            <span className="flex items-center gap-2 text-muted-foreground">
              <Users className="h-4 w-4 text-primary" />
              10,000+ Happy Users
            </span>
            <span className="flex items-center gap-2 text-muted-foreground">
              <Shield className="h-4 w-4 text-primary" />
              100% Secure IDs
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
                  Get your <strong>Online Cricket ID</strong> from India's best 
                  <strong>Cricket ID Provider</strong>. We provide instant WhatsApp activation, 
                  low deposit (₹100), fast withdrawals, and 24/7 support.
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

      {/* ====== PROVIDERS GRID ====== */}
      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enhancedProviders.map((provider) => (
              <Link 
                key={provider.slug} 
                href={`/providers/${provider.slug}`} 
                className="glass-card glass-card-hover rounded-2xl p-6 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500/20 to-amber-500/20 flex items-center justify-center text-2xl font-bold text-primary">
                    {provider.name.charAt(0)}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                    <span className="font-bold">{provider.rating}</span>
                    <span className="text-xs text-muted-foreground">({provider.reviewCount.toLocaleString()})</span>
                  </div>
                </div>
                <h2 className="text-lg font-semibold font-heading mb-1 group-hover:text-primary transition-colors">
                  {provider.name}
                </h2>
                <p className="text-xs text-muted-foreground mb-3">{provider.tagline}</p>
                <p className="text-sm text-muted-foreground line-clamp-3 mb-4">{provider.description}</p>
                <div className="flex items-center gap-2 text-sm text-primary font-medium">
                  Read Review <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ====== COMPARISON TABLE ====== */}
      <section className="section-padding bg-card/30">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold font-heading mb-6 text-center">
            Online Cricket ID <span className="text-gradient">Provider Comparison</span>
          </h2>
          <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
            Compare the best <strong>Cricket ID Providers</strong> in India. Choose the right 
            <strong>Online Cricket ID</strong> for your needs.
          </p>
          <div className="glass-card rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/30">
                    <th className="text-left p-4 font-semibold">Cricket ID Provider</th>
                    <th className="text-left p-4 font-semibold">Rating</th>
                    <th className="text-left p-4 font-semibold hidden md:table-cell">Established</th>
                    <th className="text-left p-4 font-semibold hidden lg:table-cell">Coverage</th>
                    <th className="text-left p-4 font-semibold">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  {enhancedProviders.map((p) => (
                    <tr key={p.slug} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                      <td className="p-4">
                        <Link href={`/providers/${p.slug}`} className="font-semibold hover:text-primary transition-colors">
                          {p.name}
                        </Link>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                          {p.rating}
                        </div>
                      </td>
                      <td className="p-4 hidden md:table-cell text-muted-foreground">{p.established}</td>
                      <td className="p-4 hidden lg:table-cell text-muted-foreground">{p.coverage}</td>
                      <td className="p-4 text-muted-foreground text-xs">{p.tagline}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ====== WHY CHOOSE US ====== */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10">
            <h3 className="text-lg font-bold font-heading mb-4 flex items-center gap-2">
              <Crown className="h-5 w-5 text-primary" />
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
              Ipl Cricket Id, All cricket Id, Cricket Id Provider, Cricket ID Reviews, 
              Best Cricket ID Provider, Cricket Platform Reviews
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

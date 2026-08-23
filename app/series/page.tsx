import type { Metadata } from 'next';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Radio, CheckCircle2, Phone, Trophy, Target, Shield, Award, Users } from 'lucide-react';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema, combineSchemas } from '@/lib/schema';
import JsonLd from '@/components/seo/json-ld';
import Breadcrumbs from '@/components/seo/breadcrumbs';
import { series } from '@/lib/data/series';

// ============================================
// WHATSAPP LINK
// ============================================
const WHATSAPP_LINK = 'https://wa.link/onlinecricketid';
const WHATSAPP_NUMBER = '+91XXXXXXXXXX'; // Replace with actual number

// ============================================
// METADATA WITH TARGET KEYWORDS
// ============================================
export const metadata: Metadata = buildMetadata({
  title: 'Online Cricket ID – Cricket Series & IPL Tournaments 2026',
  description:
    'Get your Online Cricket ID, IPL Cricket ID & All Cricket IDs. Browse all cricket series and tournaments – IPL, BBL, PSL, The Ashes, ICC events. Best Cricket ID Provider with WhatsApp activation.',
  path: '/series',
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
    'Cricket Series',
    'IPL 2026',
    'Cricket Tournaments',
  ],
});

// ============================================
// MAIN COMPONENT
// ============================================
export default function SeriesPage() {
  const live = series.filter((s) => s.status === 'live');
  const upcoming = series.filter((s) => s.status === 'upcoming');
  const completed = series.filter((s) => s.status === 'completed');

  return (
    <main className="min-h-screen pt-16 lg:pt-20">
      {/* ====== JSON-LD SCHEMA ====== */}
      <JsonLd 
        data={combineSchemas(
          breadcrumbSchema([{ name: 'Series', path: '/series' }]),
          {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            'name': 'Cricket Series & Tournaments',
            'description': 'Browse all cricket series and tournaments. Get your Online Cricket ID and bet on IPL, BBL, PSL, The Ashes, and more.',
            'url': 'https://yourdomain.com/series',
          }
        )}
      />

      {/* ====== HERO SECTION ====== */}
      <section className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Series' }]} />
          
          <Badge variant="secondary" className="mb-4 px-4 py-1">
            🏏 #1 Cricket ID Provider
          </Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            Cricket Series & <span className="text-gradient">Online Cricket ID</span>
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-2xl">
            Browse every cricket series and tournament we cover — international bilateral series, ICC events, 
            and franchise leagues. Get your <strong>Online Cricket ID</strong>, <strong>IPL Cricket ID</strong> & 
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
              <Radio className="h-4 w-4 text-red-400" />
              {live.length} Live Series
            </span>
            <span className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-4 w-4 text-primary" />
              {upcoming.length} Upcoming Series
            </span>
            <span className="flex items-center gap-2 text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              {completed.length} Completed Series
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
                  <Trophy className="h-5 w-5 text-primary" />
                  Best Online Cricket ID Provider
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Get your <strong>Online Cricket ID</strong> and bet on all major cricket series 
                  including IPL 2026, The Ashes, ICC World Cup, BBL, PSL, and more. We are India's 
                  trusted <strong>Cricket ID Provider</strong> with instant WhatsApp activation, 
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

      {/* ====== SERIES SECTIONS ====== */}
      <section className="section-padding pt-0">
        <div className="container-custom space-y-12">
          {/* ====== LIVE SERIES ====== */}
          {live.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Radio className="h-5 w-5 text-red-400 animate-pulse" />
                <h2 className="text-2xl font-bold font-heading">Live Now – Bet with Online Cricket ID</h2>
              </div>
              <p className="text-muted-foreground mb-4 text-sm">
                Get your <strong>Online Cricket ID</strong> and bet on these live series. 
                Our <strong>Cricket ID Online</strong> service provides real-time odds for all matches.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {live.map((s) => <SeriesCard key={s.slug} series={s} />)}
              </div>
            </div>
          )}

          {/* ====== UPCOMING SERIES ====== */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Calendar className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-bold font-heading">Upcoming Series – Get IPL Cricket ID</h2>
            </div>
            <p className="text-muted-foreground mb-4 text-sm">
              Get your <strong>IPL Cricket ID</strong> and <strong>Online Betting ID</strong> for upcoming series. 
              Pre-register now with our <strong>Best Online Cricket ID</strong> service.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcoming.map((s) => <SeriesCard key={s.slug} series={s} />)}
            </div>
          </div>

          {/* ====== COMPLETED SERIES ====== */}
          {completed.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-6">
                <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                <h2 className="text-2xl font-bold font-heading">Completed Series</h2>
              </div>
              <p className="text-muted-foreground mb-4 text-sm">
                View results and stats from completed series. Get your <strong>Cricket ID</strong> 
                for upcoming matches from our <strong>Cricket ID Provider</strong>.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {completed.map((s) => <SeriesCard key={s.slug} series={s} />)}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ====== WHATSAPP CTA SECTION ====== */}
      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="text-center p-8 bg-green-50 dark:bg-green-950/20 rounded-2xl border border-green-200 dark:border-green-800">
            <h3 className="text-2xl font-bold font-heading mb-4">
              Get Your Online Cricket ID Now!
            </h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Contact us on WhatsApp for instant activation. Save our 
              <strong> Online Cricket ID WhatsApp Number</strong> and start betting on all 
              cricket series in 2 minutes.
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

      {/* ====== KEYWORD-RICH INFO BOX ====== */}
      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10">
            <h3 className="text-lg font-bold font-heading mb-4 flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
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
                  <Trophy className="h-4 w-4 text-primary" /> Best Online Cricket ID
                </strong>
                <p className="text-muted-foreground">Competitive odds, fast withdrawals, 24/7 support</p>
              </div>
            </div>
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
              Ipl Cricket Id, All cricket Id, Cricket Id Provider, Cricket Series, IPL 2026, 
              Cricket Tournaments
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

// ============================================
// SERIES CARD COMPONENT
// ============================================
function SeriesCard({ series }: { series: typeof import('@/lib/data/series').series[number] }) {
  return (
    <Link href={`/series/${series.slug}`} className="glass-card glass-card-hover rounded-2xl p-6 group">
      <div className="flex items-center justify-between mb-4">
        <Badge variant="outline">{series.format}</Badge>
        {series.status === 'live' && (
          <span className="flex items-center gap-1.5 text-xs font-semibold text-red-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
            </span>
            LIVE
          </span>
        )}
        {series.status === 'upcoming' && (
          <span className="text-xs font-semibold text-blue-400">UPCOMING</span>
        )}
        {series.status === 'completed' && (
          <span className="text-xs font-semibold text-emerald-400">COMPLETED</span>
        )}
      </div>
      <h3 className="text-lg font-semibold font-heading mb-2 group-hover:text-primary transition-colors">
        {series.name}
      </h3>
      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{series.description}</p>
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <Calendar className="h-3.5 w-3.5" />
        {new Date(series.startDate).toLocaleDateString('en-US', { day: 'numeric', month: 'short' })} — {new Date(series.endDate).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}
      </div>
      <div className="text-xs text-muted-foreground mt-1">Host: {series.host}</div>
    </Link>
  );
}

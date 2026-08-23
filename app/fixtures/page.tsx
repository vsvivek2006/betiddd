import type { Metadata } from 'next';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Clock, Phone, Trophy, Shield, Award, Target, Users, Eye } from 'lucide-react';
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
  title: 'Online Cricket ID – Cricket Fixtures & Match Schedule 2026 | IPL',
  description:
    'Get your Online Cricket ID, IPL Cricket ID & All Cricket IDs. Complete cricket fixtures and match schedule for all upcoming international and franchise series.',
  path: '/fixtures',
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
    'Cricket Fixtures',
    'Cricket Schedule',
    'Upcoming Cricket Matches',
    'IPL Schedule',
  ],
});

// ============================================
// ENHANCED FIXTURES DATA WITH KEYWORDS
// ============================================
const enhancedMatches = [
  {
    date: '2026-09-15',
    format: 'IPL 2026',
    seriesName: 'Indian Premier League',
    label: 'IPL Final 2026',
    teams: ['Mumbai Indians', 'Chennai Super Kings'],
    venue: 'Wankhede Stadium, Mumbai',
    status: '7:30 PM IST',
    seriesSlug: 'ipl-2026',
  },
  {
    date: '2026-09-10',
    format: 'Test',
    seriesName: 'Border-Gavaskar Trophy',
    label: '2nd Test',
    teams: ['India', 'Australia'],
    venue: 'Narendra Modi Stadium, Ahmedabad',
    status: '9:30 AM IST',
    seriesSlug: 'border-gavaskar-trophy',
  },
  {
    date: '2026-09-05',
    format: 'ODI',
    seriesName: 'ICC Cricket World Cup',
    label: 'World Cup Match 15',
    teams: ['England', 'New Zealand'],
    venue: 'Lord\'s, London',
    status: '2:00 PM IST',
    seriesSlug: 'icc-world-cup',
  },
  {
    date: '2026-09-01',
    format: 'T20I',
    seriesName: 'T20 World Cup',
    label: 'T20 World Cup Match 8',
    teams: ['Pakistan', 'Sri Lanka'],
    venue: 'Gaddafi Stadium, Lahore',
    status: '7:00 PM IST',
    seriesSlug: 't20-world-cup',
  },
];

// ============================================
// MAIN COMPONENT
// ============================================
export default function FixturesPage() {
  const allMatches = enhancedMatches.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  return (
    <main className="min-h-screen pt-16 lg:pt-20">
      {/* ====== JSON-LD SCHEMA ====== */}
      <JsonLd 
        data={combineSchemas(
          breadcrumbSchema([{ name: 'Fixtures', path: '/fixtures' }]),
          {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            'name': 'Cricket Fixtures & Match Schedule',
            'description': 'Complete cricket fixtures and match schedule for all upcoming matches. Get your Online Cricket ID and bet on upcoming matches.',
            'url': 'https://yourdomain.com/fixtures',
          }
        )}
      />

      {/* ====== HERO SECTION ====== */}
      <section className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Fixtures' }]} />
          
          <Badge variant="secondary" className="mb-4 px-4 py-1">
            🏏 #1 Cricket ID Provider
          </Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            Cricket Fixtures & <span className="text-gradient">Online Cricket ID</span>
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-2xl">
            Complete match schedule for all upcoming international and franchise cricket series, with dates, 
            venues, and match details. Get your <strong>Online Cricket ID</strong>, 
            <strong>IPL Cricket ID</strong> & <strong>All Cricket IDs</strong> from India's best 
            <strong>Cricket ID Provider</strong> with instant WhatsApp activation and bet on all upcoming matches.
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
              <Calendar className="h-4 w-4 text-primary" />
              {allMatches.length} Upcoming Matches
            </span>
            <span className="flex items-center gap-2 text-muted-foreground">
              <Trophy className="h-4 w-4 text-primary" />
              All Formats Covered
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
                  Get your <strong>Online Cricket ID</strong> and bet on all upcoming cricket matches. 
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

      {/* ====== FIXTURES LIST ====== */}
      <section className="section-padding pt-0">
        <div className="container-custom">
          <h2 className="text-2xl font-bold font-heading mb-6 flex items-center gap-2">
            <Calendar className="h-6 w-6 text-primary" />
            Upcoming Cricket Matches – Bet with Online Cricket ID
          </h2>
          <p className="text-muted-foreground mb-6 text-sm">
            View all upcoming matches and get your <strong>Online Cricket ID</strong> to bet on them. 
            Our <strong>Cricket ID Online</strong> service provides real-time odds for all fixtures.
          </p>

          <div className="space-y-4">
            {allMatches.map((match, i) => (
              <Link
                key={i}
                href={`/series/${match.seriesSlug}`}
                className="glass-card glass-card-hover rounded-2xl p-5 flex flex-wrap items-center gap-4 group"
              >
                <div className="flex flex-col items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-500/10 to-amber-500/10 shrink-0">
                  <span className="text-xs text-muted-foreground">
                    {new Date(match.date).toLocaleDateString('en-US', { month: 'short' })}
                  </span>
                  <span className="text-xl font-bold text-primary">
                    {new Date(match.date).getDate()}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <Badge variant="outline" className="text-xs">{match.format}</Badge>
                    <span className="text-xs text-muted-foreground">{match.seriesName}</span>
                  </div>
                  <h3 className="font-semibold group-hover:text-primary transition-colors">
                    {match.label}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">{match.teams.join(' vs ')}</p>
                </div>
                <div className="flex flex-col items-end gap-1 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> {match.venue}</span>
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {match.status}</span>
                </div>
              </Link>
            ))}
          </div>

          {/* ====== BETTING CTA ====== */}
          <div className="mt-8 p-6 bg-primary/5 rounded-2xl border border-primary/10 text-center">
            <h3 className="text-lg font-bold font-heading mb-2">
              Don't Miss Any Match – Get Your Online Cricket ID Now!
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              Save our <strong>Online Cricket ID WhatsApp Number</strong> and get instant activation 
              for all upcoming matches.
            </p>
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-4 w-4" />
                Chat on WhatsApp – Get ID Now
              </a>
            </Button>
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
              <strong> Online Cricket ID WhatsApp Number</strong> and start betting on 
              upcoming matches in 2 minutes.
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
              Ipl Cricket Id, All cricket Id, Cricket Id Provider, Cricket Fixtures, 
              Cricket Schedule, Upcoming Cricket Matches, IPL Schedule
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

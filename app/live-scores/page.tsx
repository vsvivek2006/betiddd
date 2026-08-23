import type { Metadata } from 'next';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Radio, Clock, MapPin, Phone, Trophy, Shield, Award, Target, Users, Eye } from 'lucide-react';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema, combineSchemas } from '@/lib/schema';
import JsonLd from '@/components/seo/json-ld';
import Breadcrumbs from '@/components/seo/breadcrumbs';
import CtaSection from '@/components/seo/cta-section';
import { liveMatches } from '@/lib/data/news';

// ============================================
// WHATSAPP LINK
// ============================================
const WHATSAPP_LINK = 'https://wa.link/onlinecricketid';
const WHATSAPP_NUMBER = '+91XXXXXXXXXX'; // Replace with actual number

// ============================================
// METADATA WITH TARGET KEYWORDS
// ============================================
export const metadata: Metadata = buildMetadata({
  title: 'Live Cricket Scores – Online Cricket ID | IPL Live Score 2026',
  description:
    'Get live cricket scores with ball-by-ball updates. Get your Online Cricket ID, IPL Cricket ID & All Cricket IDs from India\'s best Cricket ID Provider with WhatsApp activation.',
  path: '/live-scores',
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
    'Live Cricket Scores',
    'IPL Live Score',
    'Ball by Ball Cricket',
    'Cricket Live Update',
  ],
});

// ============================================
// ENHANCED LIVE MATCHES DATA WITH KEYWORDS
// ============================================
const enhancedLiveMatches = [
  {
    id: '1',
    format: 'IPL 2026',
    series: 'Indian Premier League',
    matchNumber: 'Match 42',
    teamA: 'Mumbai Indians',
    teamAScore: '185/4 (18.2 ov)',
    teamB: 'Chennai Super Kings',
    teamBScore: '120/3 (14 ov)',
    status: 'Mumbai Indians won by 6 wickets',
    venue: 'Wankhede Stadium, Mumbai',
    live: true,
  },
  {
    id: '2',
    format: 'Test',
    series: 'Border-Gavaskar Trophy',
    matchNumber: '2nd Test',
    teamA: 'India',
    teamAScore: '320/6 (85 ov)',
    teamB: 'Australia',
    teamBScore: '280 (92.3 ov)',
    status: 'Stumps - Day 2',
    venue: 'Narendra Modi Stadium, Ahmedabad',
    live: true,
  },
];

// ============================================
// MAIN COMPONENT
// ============================================
export default function LiveScoresPage() {
  const matches = enhancedLiveMatches;

  return (
    <main className="min-h-screen pt-16 lg:pt-20">
      {/* ====== JSON-LD SCHEMA ====== */}
      <JsonLd 
        data={combineSchemas(
          breadcrumbSchema([{ name: 'Live Scores', path: '/live-scores' }]),
          {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            'name': 'Live Cricket Scores – Online Cricket ID Provider',
            'description': 'Get live cricket scores with ball-by-ball updates. Get your Online Cricket ID and bet on live matches.',
            'url': 'https://yourdomain.com/live-scores',
          }
        )}
      />

      {/* ====== HERO SECTION ====== */}
      <section className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Live Scores' }]} />
          
          <div className="flex items-center gap-3 mb-4">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500" />
            </span>
            <Badge variant="outline" className="border-red-500/30 text-red-400">LIVE NOW</Badge>
            <Badge variant="secondary" className="px-4 py-1">🏏 #1 Cricket ID Provider</Badge>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            Live Cricket Scores & <span className="text-gradient">Online Cricket ID</span>
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-2xl">
            Ball-by-ball live scores for every international and franchise match currently in progress. 
            Get your <strong>Online Cricket ID</strong>, <strong>IPL Cricket ID</strong> & 
            <strong>All Cricket IDs</strong> from India's best <strong>Cricket ID Provider</strong> 
            with instant WhatsApp activation and bet on live matches in real-time.
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
              {matches.length} Live Matches
            </span>
            <span className="flex items-center gap-2 text-muted-foreground">
              <Eye className="h-4 w-4 text-primary" />
              Ball-by-Ball Updates
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
                  Get your <strong>Online Cricket ID</strong> and bet on live cricket matches as they happen. 
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

      {/* ====== LIVE MATCHES ====== */}
      <section className="section-padding pt-0">
        <div className="container-custom">
          <h2 className="text-2xl font-bold font-heading mb-6 flex items-center gap-2">
            <Radio className="h-6 w-6 text-red-400" />
            Live Cricket Scores – Bet with Online Cricket ID
          </h2>
          <p className="text-muted-foreground mb-6 text-sm">
            Get live scores and bet on matches with your <strong>Online Cricket ID</strong>. 
            Our <strong>Cricket ID Online</strong> service provides real-time odds for all live matches.
          </p>

          {matches.length === 0 ? (
            <div className="glass-card rounded-2xl p-12 text-center">
              <Radio className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h2 className="text-xl font-semibold font-heading mb-2">No Live Matches Right Now</h2>
              <p className="text-muted-foreground">Check our fixtures page for upcoming matches.</p>
              <Button asChild className="mt-4">
                <Link href="/fixtures">View Fixtures</Link>
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              {matches.map((match) => (
                <div key={match.id} className="glass-card rounded-2xl p-6 md:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <Badge variant="outline">{match.format}</Badge>
                      <span className="text-sm text-muted-foreground">{match.series}</span>
                    </div>
                    <span className="flex items-center gap-2 text-sm font-semibold text-red-400">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
                      </span>
                      LIVE
                    </span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 rounded-xl bg-muted/30">
                        <div>
                          <div className="font-semibold text-lg">{match.teamA}</div>
                          <div className="text-xs text-muted-foreground mt-1">{match.matchNumber}</div>
                        </div>
                        <div className="font-mono text-emerald-400 font-semibold">{match.teamAScore}</div>
                      </div>
                      <div className="flex items-center justify-between p-4 rounded-xl bg-muted/30">
                        <div className="font-semibold text-lg">{match.teamB}</div>
                        <div className="font-mono text-muted-foreground">{match.teamBScore}</div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2 text-sm">
                        <Clock className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span className="text-muted-foreground">{match.status}</span>
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span className="text-muted-foreground">{match.venue}</span>
                      </div>
                      <div className="mt-4">
                        <Button asChild size="sm" className="bg-green-600 hover:bg-green-700">
                          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                            <Phone className="mr-2 h-4 w-4" />
                            Get Cricket ID to Bet
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ====== KEYWORD-RICH INFO BOX ====== */}
      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10">
            <h3 className="text-lg font-bold font-heading mb-4 flex items-center gap-2">
              <Trophy className="h-5 w-5 text-primary" />
              Bet on Live Matches with Online Cricket ID
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
              live matches in 2 minutes.
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
              Ipl Cricket Id, All cricket Id, Cricket Id Provider, Live Cricket Scores, 
              IPL Live Score, Ball by Ball Cricket, Cricket Live Update
            </p>
          </div>
        </div>
      </section>

      {/* ====== CTA SECTION ====== */}
      <CtaSection
        title="Never Miss a Match"
        description="Browse upcoming fixtures across all formats and series so you know exactly when to tune in. Get your Online Cricket ID and bet on all matches."
        primaryLabel="View Fixtures"
        primaryHref="/fixtures"
        secondaryLabel="Browse Series"
        secondaryHref="/series"
      />
    </main>
  );
}

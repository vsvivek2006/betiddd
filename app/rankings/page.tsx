import type { Metadata } from 'next';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Trophy, Phone, Target, Shield, Award, Users, Crown } from 'lucide-react';
import Link from 'next/link';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema, combineSchemas } from '@/lib/schema';
import JsonLd from '@/components/seo/json-ld';
import Breadcrumbs from '@/components/seo/breadcrumbs';

// ============================================
// WHATSAPP LINK
// ============================================
const WHATSAPP_LINK = 'https://wa.link/onlinecricketid';
const WHATSAPP_NUMBER = '+91XXXXXXXXXX'; // Replace with actual number

// ============================================
// METADATA WITH TARGET KEYWORDS
// ============================================
export const metadata: Metadata = buildMetadata({
  title: 'Online Cricket ID – ICC Cricket Rankings 2026 | Test, ODI & T20I',
  description:
    'Get your Online Cricket ID, IPL Cricket ID & All Cricket IDs. Check ICC cricket rankings for Test, ODI, and T20I teams. Best Cricket ID Provider with WhatsApp activation.',
  path: '/rankings',
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
    'ICC Rankings',
    'Cricket Rankings',
    'Test Rankings',
    'ODI Rankings',
    'T20I Rankings',
  ],
});

// ============================================
// RANKINGS DATA
// ============================================
const testRankings = [
  { rank: 1, team: 'Australia', rating: 124 },
  { rank: 2, team: 'India', rating: 120 },
  { rank: 3, team: 'England', rating: 105 },
  { rank: 4, team: 'South Africa', rating: 103 },
  { rank: 5, team: 'New Zealand', rating: 98 },
  { rank: 6, team: 'Pakistan', rating: 87 },
  { rank: 7, team: 'Sri Lanka', rating: 82 },
  { rank: 8, team: 'West Indies', rating: 78 },
];

const odiRankings = [
  { rank: 1, team: 'India', rating: 122 },
  { rank: 2, team: 'Australia', rating: 118 },
  { rank: 3, team: 'South Africa', rating: 110 },
  { rank: 4, team: 'Pakistan', rating: 106 },
  { rank: 5, team: 'New Zealand', rating: 101 },
  { rank: 6, team: 'England', rating: 99 },
  { rank: 7, team: 'Sri Lanka', rating: 88 },
  { rank: 8, team: 'Bangladesh', rating: 82 },
];

const t20iRankings = [
  { rank: 1, team: 'India', rating: 268 },
  { rank: 2, team: 'Australia', rating: 257 },
  { rank: 3, team: 'England', rating: 251 },
  { rank: 4, team: 'West Indies', rating: 248 },
  { rank: 5, team: 'South Africa', rating: 245 },
  { rank: 6, team: 'New Zealand', rating: 240 },
  { rank: 7, team: 'Pakistan', rating: 232 },
  { rank: 8, team: 'Sri Lanka', rating: 225 },
];

// ============================================
// MAIN COMPONENT
// ============================================
export default function RankingsPage() {
  const tables = [
    { title: 'Test Team Rankings', data: testRankings, format: 'Test' },
    { title: 'ODI Team Rankings', data: odiRankings, format: 'ODI' },
    { title: 'T20I Team Rankings', data: t20iRankings, format: 'T20I' },
  ];

  return (
    <main className="min-h-screen pt-16 lg:pt-20">
      {/* ====== JSON-LD SCHEMA ====== */}
      <JsonLd 
        data={combineSchemas(
          breadcrumbSchema([{ name: 'Rankings', path: '/rankings' }]),
          {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            'name': 'ICC Cricket Rankings 2026',
            'description': 'Get your Online Cricket ID and check ICC cricket rankings for Test, ODI, and T20I teams. Best Cricket ID Provider with WhatsApp activation.',
            'url': 'https://yourdomain.com/rankings',
            'mainEntity': {
              '@type': 'ItemList',
              'itemListElement': [
                ...testRankings.map((r, i) => ({
                  '@type': 'ListItem',
                  'position': i + 1,
                  'name': r.team,
                })),
              ],
            },
          }
        )}
      />

      {/* ====== HERO SECTION ====== */}
      <section className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Rankings' }]} />
          
          <Badge variant="secondary" className="mb-4 px-4 py-1">
            🏏 #1 Cricket ID Provider
          </Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            ICC Rankings & <span className="text-gradient">Online Cricket ID</span>
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-2xl">
            Official ICC team rankings for Test, ODI, and T20I cricket, updated weekly. Get your 
            <strong>Online Cricket ID</strong>, <strong>IPL Cricket ID</strong> & 
            <strong>All Cricket IDs</strong> from India's best <strong>Cricket ID Provider</strong> 
            with instant WhatsApp activation and bet on top-ranked teams.
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

      {/* ====== KEYWORD-RICH INTRO SECTION ====== */}
      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="mb-8 p-6 bg-primary/5 rounded-2xl border border-primary/10">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-xl font-bold font-heading mb-3 flex items-center gap-2">
                  <Crown className="h-5 w-5 text-primary" />
                  Best Online Cricket ID Provider
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Get your <strong>Online Cricket ID</strong> and bet on top-ranked teams from the 
                  ICC rankings. We are India's trusted <strong>Cricket ID Provider</strong> with 
                  instant WhatsApp activation, low deposit (₹100), and fast withdrawals.
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

      {/* ====== RANKINGS TABLES ====== */}
      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-6">
            {tables.map((table) => (
              <div key={table.title} className="glass-card rounded-2xl overflow-hidden">
                <div className="p-5 border-b border-border/50 flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-primary" />
                  <h2 className="font-semibold font-heading">{table.title}</h2>
                </div>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border/50 text-xs text-muted-foreground">
                      <th className="text-left p-3 font-medium">#</th>
                      <th className="text-left p-3 font-medium">Team</th>
                      <th className="text-right p-3 font-medium">Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    {table.data.map((row) => (
                      <tr key={row.rank} className="border-b border-border/30 hover:bg-muted/20 transition-colors">
                        <td className="p-3 text-muted-foreground">{row.rank}</td>
                        <td className="p-3 font-medium">{row.team}</td>
                        <td className="p-3 text-right font-mono text-primary">{row.rating}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
          
          <p className="text-xs text-muted-foreground mt-6 text-center">
            Rankings are illustrative and updated periodically. For the official live ICC rankings, 
            visit <a href="https://www.icc-cricket.com/rankings" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">icc-cricket.com/rankings</a>.
          </p>

          {/* ====== KEYWORD-RICH RANKINGS INFO ====== */}
          <div className="mt-8 p-6 bg-primary/5 rounded-2xl border border-primary/10">
            <h3 className="text-lg font-bold font-heading mb-4 flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              Bet on Top-Ranked Teams with Online Cricket ID
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <strong className="text-foreground flex items-center gap-1">
                  <Trophy className="h-4 w-4 text-primary" /> Test Rankings
                </strong>
                <p className="text-muted-foreground">#1 Australia, #2 India, #3 England – Get your Cricket ID and bet on Test matches</p>
              </div>
              <div>
                <strong className="text-foreground flex items-center gap-1">
                  <Trophy className="h-4 w-4 text-primary" /> ODI Rankings
                </strong>
                <p className="text-muted-foreground">#1 India, #2 Australia, #3 South Africa – Get your Online Betting ID for ODIs</p>
              </div>
              <div>
                <strong className="text-foreground flex items-center gap-1">
                  <Trophy className="h-4 w-4 text-primary" /> T20I Rankings
                </strong>
                <p className="text-muted-foreground">#1 India, #2 Australia, #3 England – Get your IPL Cricket ID for T20s</p>
              </div>
            </div>
          </div>
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
              <strong> Online Cricket ID WhatsApp Number</strong> and start betting on 
              top-ranked teams in 2 minutes.
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

      {/* ====== WHY CHOOSE US ====== */}
      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10">
            <h3 className="text-lg font-bold font-heading mb-4 flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
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
              Ipl Cricket Id, All cricket Id, Cricket Id Provider, ICC Rankings, Cricket Rankings, 
              Test Rankings, ODI Rankings, T20I Rankings
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Phone, Trophy, Users, Shield, Award, Target, Cricket } from 'lucide-react';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema, combineSchemas } from '@/lib/schema';
import JsonLd from '@/components/seo/json-ld';
import Breadcrumbs from '@/components/seo/breadcrumbs';
import { teams } from '@/lib/data/teams';

// ============================================
// WHATSAPP LINK
// ============================================
const WHATSAPP_LINK = 'https://wa.link/onlinecricketid';
const WHATSAPP_NUMBER = '+91XXXXXXXXXX'; // Replace with actual number

// ============================================
// METADATA WITH TARGET KEYWORDS
// ============================================
export const metadata: Metadata = buildMetadata({
  title: 'Online Cricket ID – Cricket Teams & IPL Teams Guide 2026',
  description:
    'Get your Online Cricket ID, IPL Cricket ID & All Cricket IDs. Complete guide to cricket teams including India, Australia, IPL teams. Best Cricket ID Provider with WhatsApp activation.',
  path: '/teams',
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
    'Cricket Teams',
    'IPL Teams',
    'India Cricket Team',
  ],
});

// ============================================
// MAIN COMPONENT
// ============================================
export default function TeamsPage() {
  const international = teams.filter((t) => t.format === 'Test');
  const franchise = teams.filter((t) => t.format === 'Franchise');

  return (
    <main className="min-h-screen pt-16 lg:pt-20">
      {/* ====== JSON-LD SCHEMA ====== */}
      <JsonLd 
        data={combineSchemas(
          breadcrumbSchema([{ name: 'Teams', path: '/teams' }]),
          {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            'name': 'Cricket Teams Guide',
            'description': 'Complete guide to cricket teams, IPL teams, and international teams. Get your Online Cricket ID and start betting on your favorite teams.',
            'url': 'https://yourdomain.com/teams',
          }
        )}
      />

      {/* ====== HERO SECTION ====== */}
      <section className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Teams' }]} />
          
          <Badge variant="secondary" className="mb-4 px-4 py-1">
            🏏 #1 Cricket ID Provider
          </Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            Cricket Teams & <span className="text-gradient">Online Cricket ID</span>
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-2xl">
            Complete guides to every major international and franchise cricket team. Get your 
            <strong>Online Cricket ID</strong>, <strong>IPL Cricket ID</strong> & 
            <strong>All Cricket IDs</strong> from India's best <strong>Cricket ID Provider</strong> 
            and bet on your favorite teams with instant WhatsApp activation.
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
              {international.length} International Teams
            </span>
            <span className="flex items-center gap-2 text-muted-foreground">
              <Users className="h-4 w-4 text-primary" />
              {franchise.length} Franchise Teams
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
                  Get your <strong>Online Cricket ID</strong> and bet on your favorite cricket teams 
                  including India, Australia, England, and all IPL teams. We are India's trusted 
                  <strong>Cricket ID Provider</strong> with instant WhatsApp activation, 
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

      {/* ====== INTERNATIONAL TEAMS ====== */}
      <section className="section-padding pt-0">
        <div className="container-custom space-y-12">
          <div>
            <h2 className="text-2xl font-bold font-heading mb-6 flex items-center gap-2">
              <Trophy className="h-6 w-6 text-primary" />
              International Cricket Teams
            </h2>
            <p className="text-muted-foreground mb-6">
              Get your <strong>Online Cricket ID</strong> and bet on these international teams. 
              Our <strong>Cricket ID Online</strong> service covers all Test-playing nations.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {international.map((team) => (
                <Link 
                  key={team.slug} 
                  href={`/teams/${team.slug}`} 
                  className="glass-card glass-card-hover rounded-2xl p-6 text-center group"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500/20 to-amber-500/20 flex items-center justify-center text-2xl font-bold text-primary mx-auto mb-3">
                    {team.shortName}
                  </div>
                  <h3 className="font-semibold font-heading group-hover:text-primary transition-colors">{team.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{team.country}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* ====== FRANCHISE TEAMS ====== */}
          <div>
            <h2 className="text-2xl font-bold font-heading mb-6 flex items-center gap-2">
              <Users className="h-6 w-6 text-primary" />
              Franchise Cricket Teams – IPL & More
            </h2>
            <p className="text-muted-foreground mb-6">
              Get your <strong>IPL Cricket ID</strong> and bet on these franchise teams. 
              Our <strong>Best Online Cricket ID</strong> covers IPL, BBL, PSL, and more.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {franchise.map((team) => (
                <Link 
                  key={team.slug} 
                  href={`/teams/${team.slug}`} 
                  className="glass-card glass-card-hover rounded-2xl p-6 text-center group"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500/20 to-amber-500/20 flex items-center justify-center text-2xl font-bold text-primary mx-auto mb-3">
                    {team.shortName}
                  </div>
                  <h3 className="font-semibold font-heading group-hover:text-primary transition-colors">{team.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{team.league}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* ====== WHATSAPP CTA SECTION ====== */}
          <div className="mt-12 text-center p-8 bg-green-50 dark:bg-green-950/20 rounded-2xl border border-green-200 dark:border-green-800">
            <h3 className="text-2xl font-bold font-heading mb-4">
              Get Your Online Cricket ID Now!
            </h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Contact us on WhatsApp for instant activation. Save our 
              <strong> Online Cricket ID WhatsApp Number</strong> and start betting on your 
              favorite cricket teams in 2 minutes.
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

          {/* ====== KEYWORD-RICH INFO BOX ====== */}
          <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10">
            <h3 className="text-lg font-bold font-heading mb-4 flex items-center gap-2">
              <Cricket className="h-5 w-5 text-primary" />
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
          <div className="p-4 border border-yellow-200 bg-yellow-50 dark:bg-yellow-950/20 rounded-xl">
            <p className="text-xs text-muted-foreground">
              <strong>Disclaimer:</strong> Real-money cricket betting is banned in India under the 
              Online Gaming Act, 2025. This website provides informational content only. 
              Consult a qualified lawyer before any real-money activity. 
              We do not guarantee profits and are not responsible for any financial loss.
            </p>
          </div>

          {/* ====== KEYWORD SUMMARY ====== */}
          <div className="p-4 bg-muted rounded-xl">
            <p className="text-xs text-muted-foreground text-center">
              <strong>Keywords:</strong> Online Cricket ID, Cricket ID, Online Betting ID, 
              Online Cricket ID Whatsapp Number, Cricket Id Online, Best Online Cricket ID, 
              Ipl Cricket Id, All cricket Id, Cricket Id Provider, Cricket Teams, IPL Teams
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

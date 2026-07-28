import type { Metadata } from 'next';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Target, Eye, Heart, Shield, Users, TrendingUp, Award, Globe } from 'lucide-react';
import { buildMetadata } from '@/lib/seo';
import { organizationSchema, breadcrumbSchema, combineSchemas } from '@/lib/schema';
import JsonLd from '@/components/seo/json-ld';
import Breadcrumbs from '@/components/seo/breadcrumbs';
import CtaSection from '@/components/seo/cta-section';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = buildMetadata({
  title: 'About CricketScoreHQ — Independent Cricket Information',
  description:
    'CricketScoreHQ is an independent cricket information website providing live scores, statistics, match previews, reviews, and news from international and franchise cricket worldwide.',
  path: '/about',
  keywords: ['about cricketscorehq', 'cricket information website', 'cricket scores', 'cricket news'],
});

const values = [
  { icon: Shield, title: 'Accuracy First', description: 'Every score, stat, and record is verified against official sources before publication.' },
  { icon: Globe, title: 'Global Coverage', description: 'We cover all 12 Test-playing nations and every major franchise league, not just one country.' },
  { icon: Award, title: 'Editorial Independence', description: 'We are independent and not affiliated with any cricket board, franchise, or broadcaster.' },
  { icon: Users, title: 'Fan-Focused', description: 'Our product is built for cricket fans, not advertisers. The reader experience comes first.' },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-16 lg:pt-20">
      <JsonLd
        data={combineSchemas(
          organizationSchema(),
          breadcrumbSchema([
            { name: 'About', path: '/about' },
          ]),
        )}
      />

      <section className="relative overflow-hidden py-16 md:py-24 pitch-pattern">
        <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden="true" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'About' }]} />
          <Badge variant="secondary" className="mb-4 px-4 py-1">About Us</Badge>
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            About <span className="text-gradient">CricketScoreHQ</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            CricketScoreHQ is an independent cricket information website dedicated to providing accurate, fast, and comprehensive coverage of cricket from around the world. We cover live scores, fixtures, player statistics, match previews, reviews, and the latest cricket news across all three international formats and every major franchise league.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="glass-card rounded-2xl p-8">
              <Target className="h-10 w-10 text-primary mb-4" />
              <h2 className="text-xl font-semibold font-heading mb-3">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To be the most accurate, fastest, and most trusted independent source of cricket information on the web — free for every fan, in every country, for every format.
              </p>
            </div>
            <div className="glass-card rounded-2xl p-8">
              <Eye className="h-10 w-10 text-primary mb-4" />
              <h2 className="text-xl font-semibold font-heading mb-3">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                A world where every cricket fan, regardless of where they live or which team they follow, has free access to the same quality of scores, stats, and analysis.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold font-heading mb-6">What We Do</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                CricketScoreHQ provides ball-by-ball live scores for every international cricket match and every major franchise league match, updated in real time. Our live scoring covers Test cricket, One-Day Internationals, T20 Internationals, and franchise leagues including the Indian Premier League, the Big Bash League, the Pakistan Super League, and The Hundred.
              </p>
              <p>
                Beyond live scores, we maintain a deep statistics database covering career records for every international player, head-to-head records between teams, and historical data for every Test, ODI, and T20I ever played. Our editorial team produces match previews, post-match reviews, player profiles, team guides, tournament guides, and long-form features on the stories shaping the game.
              </p>
              <p>
                We are independent. We are not affiliated with, endorsed by, or connected to the International Cricket Council, the Board of Control for Cricket in India, or any other cricket board, franchise, or broadcaster. Our editorial independence is core to who we are.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold font-heading mb-6">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((v, i) => (
                <div key={i} className="glass-card glass-card-hover rounded-2xl p-6">
                  <v.icon className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-semibold font-heading mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold font-heading mb-6">Editorial Standards</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                CricketScoreHQ is committed to the highest editorial standards. Our editorial policy and fact-checking policy govern everything we publish, from live scores to long-form features. Every match report is reviewed by a second editor before publication, and every statistical claim is verified against our database or official ICC records.
              </p>
              <p>
                We clearly distinguish between news, analysis, and opinion. News articles report facts; analysis articles interpret those facts; opinion articles express a viewpoint. We never blur these lines. When we make a mistake — and we do, because no newsroom is perfect — we correct it promptly and transparently, with a dated correction note on the article.
              </p>
              <p>
                You can read our full <Link href="/editorial-policy" className="text-primary hover:underline">editorial policy</Link> and <Link href="/fact-checking-policy" className="text-primary hover:underline">fact-checking policy</Link> for more detail.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        title="Get in Touch"
        description="Have a question, correction, or story tip? We'd love to hear from you."
        primaryLabel="Contact Us"
        primaryHref="/contact"
        secondaryLabel="Read Our Blog"
        secondaryHref="/blog"
      />
    </main>
  );
}

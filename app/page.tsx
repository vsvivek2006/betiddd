import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  ArrowRight,
  Radio,
  Trophy,
  TrendingUp,
  Users,
  Globe,
  Zap,
  Shield,
  Clock,
  Star,
  Calendar,
  Activity,
  Newspaper,
  ChevronRight,
  Play,
  BarChart3,
  Award,
} from 'lucide-react';
import { siteConfig } from '@/lib/site-config';
import { liveMatches, newsItems } from '@/lib/data/news';
import { series } from '@/lib/data/series';
import { providers } from '@/lib/data/providers';
import { blogPosts } from '@/lib/data/blog-posts';
import { teams } from '@/lib/data/teams';
import { organizationSchema, websiteSchema, faqSchema, combineSchemas } from '@/lib/schema';
import JsonLd from '@/components/seo/json-ld';
import FaqAccordion from '@/components/seo/faq-accordion';
import CtaSection from '@/components/seo/cta-section';

const stats = [
  { value: '2.5B+', label: 'Global Cricket Fans', icon: Globe },
  { value: '12', label: 'Test-Playing Nations', icon: Trophy },
  { value: '100+', label: 'Daily Matches Covered', icon: Activity },
  { value: '24/7', label: 'Live Score Updates', icon: Clock },
];

const benefits = [
  {
    icon: Zap,
    title: 'Ball-by-Ball Live Scores',
    description: 'Every ball of every match, updated in real time across all three international formats and major franchise leagues.',
  },
  {
    icon: BarChart3,
    title: 'Deep Statistics & Records',
    description: 'Career stats, head-to-head records, and historical data for every Test, ODI, and T20I ever played.',
  },
  {
    icon: Newspaper,
    title: 'Expert Match Analysis',
    description: 'Pre-match previews, post-match reviews, and tactical breakdowns from our editorial team.',
  },
  {
    icon: Shield,
    title: 'Accurate & Verified',
    description: 'Every scorecard, stat, and record is verified against official sources before publication.',
  },
  {
    icon: Globe,
    title: 'Global Coverage',
    description: 'International cricket, the IPL, BBL, PSL, The Hundred, and domestic cricket from 12 Full Member nations.',
  },
  {
    icon: Award,
    title: 'Independent & Trusted',
    description: 'An independent cricket information source with a clear editorial policy and fact-checking process.',
  },
];

const howItWorks = [
  {
    step: '01',
    title: 'Pick a Match',
    description: 'Browse live, upcoming, and recent matches across all formats and series on our live scores page.',
  },
  {
    step: '02',
    title: 'Follow Ball-by-Ball',
    description: 'Track every delivery with our real-time ball-by-ball commentary and scorecard updates.',
  },
  {
    step: '03',
    title: 'Dive into the Stats',
    description: 'Explore career records, head-to-head data, and match analytics for any player, team, or series.',
  },
  {
    step: '04',
    title: 'Read the Analysis',
    description: 'Get the full story with our match previews, reviews, and editorial features.',
  },
];

const paymentMethods = [
  { name: 'UPI', note: 'Unified Payments Interface' },
  { name: 'IMPS', note: 'Immediate Payment Service' },
  { name: 'Net Banking', note: 'All major Indian banks' },
  { name: 'Cards', note: 'Credit & Debit' },
  { name: 'Crypto', note: 'Digital currencies' },
  { name: 'Wallets', note: 'Mobile wallets' },
];

const testimonials = [
  {
    name: 'Arjun Mehta',
    role: 'Cricket Fan, Mumbai',
    content: 'The fastest live scores I have used. The ball-by-ball commentary is clear and the stats are the most accurate I have found anywhere.',
    rating: 5,
  },
  {
    name: 'Sarah O\'Connor',
    role: 'Cricket Journalist, London',
    content: 'CricketScoreHQ has become my go-to reference for records and match data. The editorial standards are genuinely high.',
    rating: 5,
  },
  {
    name: 'David Williams',
    role: 'Fantasy Cricket Player, Sydney',
    content: 'The match previews and player matchup data have genuinely improved my fantasy cricket results. The analysis is top class.',
    rating: 5,
  },
];

const homeFaqs = [
  {
    question: 'What is CricketScoreHQ?',
    answer:
      'CricketScoreHQ is an independent cricket information website that provides live cricket scores, fixtures, player statistics, match previews and reviews, and cricket news from international and franchise cricket worldwide.',
  },
  {
    question: 'Is CricketScoreHQ free to use?',
    answer:
      'Yes, all of our live scores, stats, news, and editorial content is free to access. We do not require a subscription or account.',
  },
  {
    question: 'How fast are the live scores updated?',
    answer:
      'Our live scores are updated ball-by-ball, typically within a second or two of each delivery. We cover all international matches and major franchise leagues.',
  },
  {
    question: 'Does CricketScoreHQ cover franchise cricket?',
    answer:
      'Yes. We cover the IPL, BBL, PSL, The Hundred, the Caribbean Premier League, and other major franchise leagues alongside international cricket.',
  },
  {
    question: 'Is CricketScoreHQ affiliated with the ICC or any cricket board?',
    answer:
      'No. CricketScoreHQ is an independent cricket information website and is not affiliated with, endorsed by, or connected to the ICC, BCCI, or any cricket board.',
  },
];

export default function HomePage() {
  const featuredPosts = blogPosts.slice(0, 3);
  const upcomingSeries = series.filter((s) => s.status === 'upcoming').slice(0, 3);
  const liveSeries = series.filter((s) => s.status === 'live');

  return (
    <main className="min-h-screen pt-16 lg:pt-20">
      <JsonLd
        data={combineSchemas(
          organizationSchema(),
          websiteSchema(),
          faqSchema(homeFaqs),
        )}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32 pitch-pattern">
        <div className="absolute inset-0 grid-pattern opacity-40" aria-hidden="true" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" aria-hidden="true" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-sm font-medium text-emerald-400">
                  {liveMatches.length} matches live now
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading leading-[1.1]">
                Live Cricket Scores,{' '}
                <span className="text-gradient">Stats & News</span>{' '}
                from Around the World
              </h1>

              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                Ball-by-ball live scores, fixtures, player statistics, match previews, reviews, and the latest cricket news from international and franchise cricket — all in one place, all free.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="btn-gradient rounded-full px-8" asChild>
                  <Link href="/live-scores">
                    <Radio className="mr-2 h-5 w-5" />
                    View Live Scores
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10" asChild>
                  <Link href="/blog">
                    Read Latest Analysis
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-6">
                {['Free Forever', 'No Account Needed', 'Ball-by-Ball'].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Star className="h-4 w-4 fill-emerald-400 text-emerald-400" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Live Score Cards */}
            <div className="relative space-y-4 fade-in-up stagger-2">
              {liveMatches.slice(0, 3).map((match) => (
                <Link
                  key={match.id}
                  href={`/live-scores#${match.id}`}
                  className="block glass-card glass-card-hover rounded-2xl p-5 group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="border-emerald-500/30 text-emerald-400 text-xs">
                      {match.format}
                    </Badge>
                    <span className="flex items-center gap-1.5 text-xs font-semibold text-red-400">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
                      </span>
                      LIVE
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">{match.series} · {match.matchNumber}</p>
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">{match.teamA}</span>
                      <span className="font-mono text-sm text-emerald-400">{match.teamAScore}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">{match.teamB}</span>
                      <span className="font-mono text-sm text-muted-foreground">{match.teamBScore}</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3 pt-3 border-t border-border/50">{match.status}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-border/50 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <stat.icon className="h-6 w-6 mx-auto mb-2 text-primary" />
                <div className="text-3xl md:text-4xl font-bold text-gradient font-heading">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="secondary" className="mb-4 px-4 py-1">Why CricketScoreHQ</Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Everything You Need to{' '}
              <span className="text-gradient">Follow Cricket</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              From ball-by-ball live scores to deep statistics and expert analysis, CricketScoreHQ is your complete cricket companion.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className="glass-card glass-card-hover rounded-2xl p-6 group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold font-heading mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-card/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="secondary" className="mb-4 px-4 py-1">How It Works</Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Follow Any Match in <span className="text-gradient">4 Simple Steps</span>
            </h2>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-amber-500 opacity-30" />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {howItWorks.map((step, i) => (
                <div key={i} className="text-center relative">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-slate-950 text-2xl font-bold flex items-center justify-center mx-auto mb-4 shadow-brand">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold font-heading mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features / Tournament Coverage */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="secondary" className="mb-4 px-4 py-1">Tournament Coverage</Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Every Major <span className="text-gradient">Cricket Tournament</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              We cover every major international and franchise cricket competition, with fixtures, live scores, stats, and analysis.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { name: 'ICC Cricket World Cup', format: 'ODI', href: '/series/icc-cricket-world-cup-2027' },
              { name: 'T20 World Cup', format: 'T20', href: '/series/icc-t20-world-cup-2026' },
              { name: 'World Test Championship', format: 'Test', href: '/series/icc-world-test-championship-2025' },
              { name: 'Indian Premier League', format: 'T20', href: '/series/ipl-2026' },
              { name: 'Big Bash League', format: 'T20', href: '/series/big-bash-league-2025-26' },
              { name: 'The Ashes', format: 'Test', href: '/series/the-ashes-2025-26' },
              { name: 'India vs England', format: 'Test', href: '/series/india-vs-england-2025' },
              { name: 'Pakistan Super League', format: 'T20', href: '/series' },
            ].map((t, i) => (
              <Link
                key={i}
                href={t.href}
                className="glass-card glass-card-hover rounded-xl p-4 group"
              >
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-xs">{t.format}</Badge>
                  <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="font-semibold text-sm">{t.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Providers Grid */}
      <section className="section-padding bg-card/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="secondary" className="mb-4 px-4 py-1">Platform Reviews</Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Cricket Platforms <span className="text-gradient">Compared & Reviewed</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Independent reviews of the cricket scoring, streaming, and information platforms, with ratings, pros, cons, and comparisons.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {providers.slice(0, 6).map((provider) => (
              <Link
                key={provider.slug}
                href={`/providers/${provider.slug}`}
                className="glass-card glass-card-hover rounded-2xl p-6 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-amber-500/20 flex items-center justify-center text-xl font-bold text-primary">
                    {provider.name.charAt(0)}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    <span className="font-semibold text-sm">{provider.rating}</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold font-heading mb-1 group-hover:text-primary transition-colors">{provider.name}</h3>
                <p className="text-xs text-muted-foreground mb-3">{provider.tagline}</p>
                <p className="text-sm text-muted-foreground line-clamp-2">{provider.description}</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button size="lg" variant="outline" className="rounded-full" asChild>
              <Link href="/providers">
                Compare All Platforms
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="secondary" className="mb-4 px-4 py-1">Comparison</Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Cricket Platform <span className="text-gradient">Comparison Table</span>
            </h2>
          </div>

          <div className="glass-card rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/30">
                    <th className="text-left p-4 font-semibold">Platform</th>
                    <th className="text-left p-4 font-semibold">Rating</th>
                    <th className="text-left p-4 font-semibold hidden md:table-cell">Established</th>
                    <th className="text-left p-4 font-semibold hidden md:table-cell">Coverage</th>
                    <th className="text-left p-4 font-semibold">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  {providers.map((p) => (
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
                      <td className="p-4 hidden md:table-cell text-muted-foreground">{p.coverage}</td>
                      <td className="p-4 text-muted-foreground">{p.tagline}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Series */}
      <section className="section-padding bg-card/30">
        <div className="container-custom">
          <div className="flex items-end justify-between mb-12">
            <div>
              <Badge variant="secondary" className="mb-4 px-4 py-1">Upcoming Series</Badge>
              <h2 className="text-3xl md:text-4xl font-bold font-heading">
                Don't Miss a <span className="text-gradient">Match</span>
              </h2>
            </div>
            <Button variant="outline" className="rounded-full hidden md:flex" asChild>
              <Link href="/series">All Series <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {upcomingSeries.map((s) => (
              <Link key={s.slug} href={`/series/${s.slug}`} className="glass-card glass-card-hover rounded-2xl p-6 group">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline">{s.format}</Badge>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold font-heading mb-2 group-hover:text-primary transition-colors">{s.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{s.description.slice(0, 100)}...</p>
                <div className="text-xs text-muted-foreground">
                  {new Date(s.startDate).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })} — {new Date(s.endDate).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Teams Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="secondary" className="mb-4 px-4 py-1">Teams</Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Follow Your <span className="text-gradient">Favourite Teams</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Complete guides to every major international and franchise cricket team, with squads, records, and fixtures.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {teams.map((team) => (
              <Link
                key={team.slug}
                href={`/teams/${team.slug}`}
                className="glass-card glass-card-hover rounded-xl p-5 text-center group"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500/20 to-amber-500/20 flex items-center justify-center text-2xl font-bold text-primary mx-auto mb-3">
                  {team.shortName}
                </div>
                <h3 className="font-semibold text-sm group-hover:text-primary transition-colors">{team.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">{team.format}{team.league ? ` · ${team.league}` : ''}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="section-padding bg-card/30">
        <div className="container-custom">
          <div className="flex items-end justify-between mb-12">
            <div>
              <Badge variant="secondary" className="mb-4 px-4 py-1">Latest News</Badge>
              <h2 className="text-3xl md:text-4xl font-bold font-heading">
                Cricket <span className="text-gradient">Headlines</span>
              </h2>
            </div>
            <Button variant="outline" className="rounded-full hidden md:flex" asChild>
              <Link href="/news">All News <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.slice(0, 3).map((news) => (
              <Link key={news.slug} href={`/news/${news.slug}`} className="glass-card glass-card-hover rounded-2xl overflow-hidden group">
                <div className="aspect-video bg-gradient-to-br from-emerald-500/10 to-amber-500/10 flex items-center justify-center">
                  <Newspaper className="h-10 w-10 text-muted-foreground/50" />
                </div>
                <div className="p-5">
                  <Badge variant="outline" className="mb-2 text-xs">{news.category}</Badge>
                  <h3 className="font-semibold font-heading mb-2 group-hover:text-primary transition-colors line-clamp-2">{news.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{news.excerpt}</p>
                  <p className="text-xs text-muted-foreground mt-3">{new Date(news.publishedAt).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Blog */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex items-end justify-between mb-12">
            <div>
              <Badge variant="secondary" className="mb-4 px-4 py-1">Featured Analysis</Badge>
              <h2 className="text-3xl md:text-4xl font-bold font-heading">
                Latest <span className="text-gradient">Articles</span>
              </h2>
            </div>
            <Button variant="outline" className="rounded-full hidden md:flex" asChild>
              <Link href="/blog">All Articles <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="glass-card glass-card-hover rounded-2xl overflow-hidden group">
                <div className="aspect-video bg-gradient-to-br from-emerald-500/10 to-amber-500/10 flex items-center justify-center">
                  <TrendingUp className="h-10 w-10 text-muted-foreground/50" />
                </div>
                <div className="p-5">
                  <Badge variant="outline" className="mb-2 text-xs">{post.category}</Badge>
                  <h3 className="font-semibold font-heading mb-2 group-hover:text-primary transition-colors line-clamp-2">{post.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mt-3">
                    <span>{post.readingTime} min read</span>
                    <span>·</span>
                    <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { day: 'numeric', month: 'short' })}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-card/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="secondary" className="mb-4 px-4 py-1">Testimonials</Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              What Our <span className="text-gradient">Readers Say</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Card key={i} className="glass-card border-0 p-6">
                <CardContent className="space-y-4">
                  <div className="flex gap-1">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic leading-relaxed">&ldquo;{t.content}&rdquo;</p>
                  <div className="flex items-center gap-3 pt-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-amber-500 flex items-center justify-center text-slate-950 font-bold text-sm">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Badge variant="secondary" className="mb-4 px-4 py-1">FAQ</Badge>
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                Frequently Asked <span className="text-gradient">Questions</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Everything you need to know about CricketScoreHQ and how to follow cricket with us.
              </p>
              <Button className="btn-gradient rounded-full" asChild>
                <Link href="/faq">View All FAQs <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
            <FaqAccordion faqs={homeFaqs} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaSection
        title="Ready to Follow Every Match?"
        description="Get ball-by-ball live scores, deep statistics, and expert analysis from every major cricket competition — all free, no account needed."
        primaryLabel="View Live Scores"
        primaryHref="/live-scores"
        secondaryLabel="Browse Articles"
        secondaryHref="/blog"
      />
    </main>
  );
}

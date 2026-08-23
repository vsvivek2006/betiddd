import type { Metadata } from 'next';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Target, Eye, Heart, Shield, Users, TrendingUp, Award, Globe, Phone, Cricket } from 'lucide-react';
import { buildMetadata } from '@/lib/seo';
import { organizationSchema, breadcrumbSchema, combineSchemas } from '@/lib/schema';
import JsonLd from '@/components/seo/json-ld';
import Breadcrumbs from '@/components/seo/breadcrumbs';
import CtaSection from '@/components/seo/cta-section';
import { siteConfig } from '@/lib/site-config';

// ============================================
// METADATA WITH TARGET KEYWORDS
// ============================================
export const metadata: Metadata = buildMetadata({
  title: 'Online Cricket ID Provider – Best Cricket ID & IPL Betting ID 2026',
  description:
    'Get your Online Cricket ID, IPL Cricket ID & All Cricket IDs from India\'s best Cricket ID Provider. Instant activation via WhatsApp. Best Online Betting ID with 24/7 support. Join now!',
  path: '/about',
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
// WHATSAPP LINK
// ============================================
const WHATSAPP_LINK = 'https://wa.link/onlinecricketid';
const WHATSAPP_NUMBER = '+91XXXXXXXXXX'; // Replace with actual number

// ============================================
// SERVICE VALUES
// ============================================
const values = [
  { 
    icon: Shield, 
    title: 'Trusted Cricket ID Provider', 
    description: 'We are a verified and trusted Cricket ID Provider with thousands of satisfied users across India. Your Online Cricket ID is 100% secure.' 
  },
  { 
    icon: Globe, 
    title: 'All Cricket IDs & IPL 2026', 
    description: 'Get All Cricket IDs including IPL Cricket ID, Exchange ID, Master ID & Multi-Exchange ID. One ID for all sports betting.' 
  },
  { 
    icon: Award, 
    title: 'Best Online Cricket ID', 
    description: 'We provide the Best Online Cricket ID with competitive odds, fast withdrawals, and 24/7 WhatsApp support. Instant activation guaranteed.' 
  },
  { 
    icon: Users, 
    title: '24/7 WhatsApp Support', 
    description: 'Our team is available 24/7 on WhatsApp. Get your Online Cricket ID WhatsApp Number and start betting within minutes.' 
  },
];

// ============================================
// FEATURES SECTION
// ============================================
const features = [
  {
    icon: Phone,
    title: 'WhatsApp ID Activation',
    description: 'Get your Cricket ID Online instantly via WhatsApp. Just send a message and receive your ID in 2 minutes.',
    link: WHATSAPP_LINK,
  },
  {
    icon: Cricket,
    title: 'IPL Cricket ID 2026',
    description: 'Get your IPL Cricket ID with exclusive markets, live odds, and real-time betting during the IPL season.',
    link: '/ipl-cricket-id',
  },
  {
    icon: Target,
    title: 'Best Betting ID Provider',
    description: 'We are the Best Online Cricket ID provider with low deposit (₹100), fast withdrawals, and 100% secure transactions.',
    link: '/online-betting-id',
  },
  {
    icon: Heart,
    title: 'All Sports & Leagues',
    description: 'Bet on cricket, football, tennis, kabaddi, and horse racing with your Online Cricket ID. All in one platform.',
    link: '/all-sports-id',
  },
];

// ============================================
// MAIN COMPONENT
// ============================================
export default function AboutPage() {
  return (
    <main className="min-h-screen pt-16 lg:pt-20">
      {/* ====== JSON-LD SCHEMA ====== */}
      <JsonLd
        data={combineSchemas(
          organizationSchema({
            name: 'Online Cricket ID Provider',
            url: 'https://yourdomain.com',
            logo: 'https://yourdomain.com/logo.png',
            description: 'Best Online Cricket ID Provider in India. Get IPL Cricket ID, All Cricket IDs with instant WhatsApp activation.',
            contactPoint: {
              telephone: WHATSAPP_NUMBER,
              contactType: 'WhatsApp Support',
              availableLanguage: ['English', 'Hindi'],
            },
          }),
          breadcrumbSchema([
            { name: 'About', path: '/about' },
          ]),
        )}
      />

      {/* ====== HERO SECTION ====== */}
      <section className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden="true" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'About' }]} />
          
          <Badge variant="secondary" className="mb-4 px-4 py-1">
            #1 Cricket ID Provider
          </Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            Get Your <span className="text-gradient">Online Cricket ID</span> Today
          </h1>
          
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            We are India's trusted <strong>Online Cricket ID Provider</strong> offering instant activation for 
            <strong> Cricket ID</strong>, <strong>IPL Cricket ID</strong>, and <strong>All Cricket IDs</strong>. 
            Get the <strong>Best Online Cricket ID</strong> with 24/7 WhatsApp support, fast withdrawals, and 
            competitive odds. Join thousands of satisfied users!
          </p>

          {/* ====== CTA BUTTONS ====== */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-5 w-5" />
                Get ID on WhatsApp
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/cricket-id">
                Explore Cricket IDs
              </Link>
            </Button>
          </div>

          {/* ====== WHATSAPP INFO ====== */}
          <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
            <span>📱 Online Cricket ID WhatsApp Number:</span>
            <a 
              href={WHATSAPP_LINK} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:underline"
            >
              Click to Chat
            </a>
          </div>
        </div>
      </section>

      {/* ====== VALUES / WHY CHOOSE US ====== */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4">
              Why Choose Our <span className="text-gradient">Online Cricket ID</span>?
            </h2>
            <p className="text-muted-foreground">
              We are the <strong>Best Online Cricket ID Provider</strong> in India with thousands of happy users.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {values.map((v, i) => (
              <div key={i} className="glass-card rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <v.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold font-heading mb-3">{v.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>

          {/* ====== WHAT WE OFFER ====== */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold font-heading mb-6">
              What We Offer – <span className="text-gradient">All Cricket IDs</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                We provide <strong>All Cricket IDs</strong> including <strong>Exchange ID</strong>, 
                <strong>Master ID</strong>, <strong>Multi-Exchange ID</strong>, and 
                <strong>Sportsbook ID</strong>. Whether you want an <strong>IPL Cricket ID</strong> for 
                the Indian Premier League or a general <strong>Online Betting ID</strong> for multiple sports, 
                we have you covered.
              </p>
              <p>
                Our <strong>Online Cricket ID</strong> gives you access to live betting on cricket matches, 
                football leagues, tennis Grand Slams, Pro Kabaddi, horse racing, and more. With one ID, 
                you can bet on all sports from a unified wallet.
              </p>
              <p>
                <strong>Fast Withdrawals:</strong> Get your winnings in 2-15 minutes via UPI, GPay, 
                PhonePe, and other payment methods. We process withdrawals 24/7.
              </p>
            </div>
          </div>

          {/* ====== FEATURES ====== */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold font-heading mb-6">
              Our <span className="text-gradient">Cricket ID</span> Features
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((f, i) => (
                <div key={i} className="glass-card glass-card-hover rounded-2xl p-6">
                  <f.icon className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-semibold font-heading mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{f.description}</p>
                  {f.link && (
                    <a 
                      href={f.link} 
                      target={f.link.startsWith('http') ? '_blank' : undefined}
                      rel={f.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-primary text-sm font-medium hover:underline inline-flex items-center"
                    >
                      Learn More →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ====== HOW TO GET ID ====== */}
          <div className="mb-16 bg-primary/5 rounded-2xl p-8">
            <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4">
              How to Get Your <span className="text-gradient">Online Cricket ID</span>?
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <strong>Step 1:</strong> Save our <strong>Online Cricket ID WhatsApp Number</strong> – 
                <a 
                  href={WHATSAPP_LINK} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:underline"
                >
                  Click to Chat
                </a>
              </p>
              <p>
                <strong>Step 2:</strong> Send us a message with your name and preferred ID type 
                (Exchange, Master, Multi-Exchange, or IPL Cricket ID).
              </p>
              <p>
                <strong>Step 3:</strong> Complete basic KYC verification (name and phone number).
              </p>
              <p>
                <strong>Step 4:</strong> Make your first deposit (minimum ₹100) via UPI, GPay, or PhonePe.
              </p>
              <p>
                <strong>Step 5:</strong> Start betting with your new <strong>Cricket ID Online</strong> instantly!
              </p>
            </div>
            <div className="mt-6">
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <Phone className="mr-2 h-5 w-5" />
                  Get ID Now on WhatsApp
                </a>
              </Button>
            </div>
          </div>

          {/* ====== WHY WE ARE THE BEST ====== */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold font-heading mb-6">
              Why We Are the <span className="text-gradient">Best Online Cricket ID</span> Provider
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                ✅ <strong>100% Trusted:</strong> Thousands of satisfied users across India trust us as their 
                <strong>Cricket ID Provider</strong>.
              </p>
              <p>
                ✅ <strong>Instant Activation:</strong> Get your <strong>Cricket ID Online</strong> within 
                2 minutes via WhatsApp.
              </p>
              <p>
                ✅ <strong>Low Deposit:</strong> Start with just ₹100 for most ID types.
              </p>
              <p>
                ✅ <strong>Fast Withdrawals:</strong> Get your money in 2-15 minutes via UPI, GPay, PhonePe.
              </p>
              <p>
                ✅ <strong>24/7 Support:</strong> Our team is available 24/7 to help you with your 
                <strong>Online Betting ID</strong>.
              </p>
              <p>
                ✅ <strong>IPL 2026 Ready:</strong> Get your <strong>IPL Cricket ID</strong> with exclusive 
                markets for the upcoming season.
              </p>
            </div>
          </div>

          {/* ====== DISCLAIMER ====== */}
          <div className="mt-12 p-6 border border-yellow-200 bg-yellow-50 dark:bg-yellow-950/20 rounded-xl">
            <p className="text-sm text-muted-foreground">
              <strong>Disclaimer:</strong> Real-money cricket betting is banned in India under the 
              Online Gaming Act, 2025. This website provides informational content only. 
              Consult a qualified lawyer before any real-money activity. 
              We do not guarantee profits and are not responsible for any financial loss.
            </p>
          </div>
        </div>
      </section>

      {/* ====== CTA SECTION ====== */}
      <CtaSection
        title="Get Your Online Cricket ID Now!"
        description="Contact us on WhatsApp for instant activation. Best Online Cricket ID provider in India with 24/7 support."
        primaryLabel="Chat on WhatsApp"
        primaryHref={WHATSAPP_LINK}
        secondaryLabel="Learn More"
        secondaryHref="/cricket-id"
      />
    </main>
  );
}

import type { Metadata } from 'next';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Phone, Trophy, Shield, Award, Target, Users } from 'lucide-react';
import Link from 'next/link';
import { buildMetadata } from '@/lib/seo';
import { faqSchema, breadcrumbSchema, combineSchemas } from '@/lib/schema';
import JsonLd from '@/components/seo/json-ld';
import Breadcrumbs from '@/components/seo/breadcrumbs';
import FaqAccordion from '@/components/seo/faq-accordion';

// ============================================
// WHATSAPP LINK
// ============================================
const WHATSAPP_LINK = 'https://wa.link/onlinecricketid';
const WHATSAPP_NUMBER = '+91XXXXXXXXXX'; // Replace with actual number

// ============================================
// METADATA WITH TARGET KEYWORDS
// ============================================
export const metadata: Metadata = buildMetadata({
  title: 'Online Cricket ID FAQ – Cricket ID Provider Questions 2026',
  description:
    'Get your Online Cricket ID, IPL Cricket ID & All Cricket IDs. FAQs about Cricket ID Provider, Online Betting ID, WhatsApp activation, and more. Best Cricket ID Provider.',
  path: '/faq',
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
    'Cricket ID FAQ',
    'Online Cricket ID Questions',
  ],
});

// ============================================
// ENHANCED FAQS WITH KEYWORDS
// ============================================
const faqs = [
  {
    question: 'What is an Online Cricket ID?',
    answer: 'An Online Cricket ID is your personal account on a cricket betting exchange platform. It allows you to place real-money bets on cricket matches, IPL, and other sports. Without a Cricket ID, you cannot deposit funds, place bets, or withdraw winnings.'
  },
  {
    question: 'How do I get an Online Cricket ID?',
    answer: 'Getting your Online Cricket ID is simple. Contact our Online Cricket ID WhatsApp Number for instant activation. You can also register through our website. We provide All Cricket IDs including Exchange ID, Master ID, Multi-Exchange ID, and Sportsbook ID.'
  },
  {
    question: 'What is the Online Cricket ID WhatsApp Number?',
    answer: 'Our Online Cricket ID WhatsApp Number is available 24/7 for instant ID activation. Save our number and send a message to get your Cricket ID Online within 2 minutes. Click the WhatsApp button on our website to chat instantly.'
  },
  {
    question: 'What types of Cricket IDs do you provide?',
    answer: 'We provide All Cricket IDs including Exchange ID, Master ID, Multi-Exchange ID, and Sportsbook ID. Get the Best Online Cricket ID for competitive odds, fast withdrawals, and 24/7 support. We also specialize in IPL Cricket ID for the Indian Premier League.'
  },
  {
    question: 'How much is the minimum deposit for a Cricket ID?',
    answer: 'Most Cricket IDs require a minimum deposit of ₹100. We offer low deposit options for beginners. Contact us on WhatsApp for more details about our Online Betting ID packages.'
  },
  {
    question: 'How fast can I withdraw money from my Cricket ID?',
    answer: 'Withdrawals from your Online Cricket ID are processed in 2-15 minutes via UPI, GPay, PhonePe, and other payment methods. We offer fast withdrawals 24/7. Contact our Online Cricket ID WhatsApp Number for instant withdrawal support.'
  },
  {
    question: 'Can I use my Cricket ID for IPL betting?',
    answer: 'Yes! We offer specialized IPL Cricket ID for IPL 2026. Get exclusive IPL markets, live odds, and real-time betting. Our Cricket ID Provider is trusted by thousands of IPL fans.'
  },
  {
    question: 'Is your Cricket ID Provider trustworthy?',
    answer: 'Yes, we are India\'s most trusted Cricket ID Provider with 10,000+ satisfied users. We offer 100% secure transactions, instant WhatsApp activation, and 24/7 customer support for your Online Cricket ID.'
  },
  {
    question: 'Can I use one Cricket ID for multiple sports?',
    answer: 'Yes, your Online Cricket ID gives you access to multiple sports including cricket, football, tennis, kabaddi, and horse racing. Get All Cricket IDs with a unified wallet system.'
  },
  {
    question: 'Do you provide KYC verification for Cricket IDs?',
    answer: 'Yes, we follow strict KYC guidelines for your Online Cricket ID security. We verify your identity to prevent fraud and ensure your Cricket ID Online is protected. Contact us on WhatsApp for KYC assistance.'
  },
  {
    question: 'How do I contact support for my Online Cricket ID?',
    answer: 'You can contact our support team 24/7 via our Online Cricket ID WhatsApp Number, email, or through our contact page. We respond to all queries within 2 minutes on WhatsApp.'
  },
  {
    question: 'Is online cricket betting legal in India?',
    answer: 'Real-money cricket betting is banned in India under the Online Gaming Act, 2025. The Supreme Court upheld this ban on May 27, 2026. Our website provides informational content only. Consult a qualified lawyer before any real-money activity.'
  },
];

// ============================================
// MAIN COMPONENT
// ============================================
export default function FaqPage() {
  return (
    <main className="min-h-screen pt-16 lg:pt-20">
      {/* ====== JSON-LD SCHEMA ====== */}
      <JsonLd 
        data={combineSchemas(
          faqSchema(faqs),
          breadcrumbSchema([{ name: 'FAQ', path: '/faq' }]),
          {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            'name': 'Online Cricket ID FAQ',
            'description': 'Frequently asked questions about Online Cricket ID, Cricket ID Provider, and betting services.',
            'url': 'https://yourdomain.com/faq',
          }
        )}
      />

      {/* ====== HERO SECTION ====== */}
      <section className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden="true" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'FAQ' }]} />
          
          <Badge variant="secondary" className="mb-4 px-4 py-1">
            🏏 #1 Cricket ID Provider
          </Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            Online Cricket ID <span className="text-gradient">FAQ</span>
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-2xl">
            Everything you need to know about <strong>Online Cricket ID</strong>, 
            <strong>Cricket ID</strong>, <strong>Online Betting ID</strong>, and our 
            <strong>Cricket ID Provider</strong> services. Get your <strong>IPL Cricket ID</strong> 
            and <strong>All Cricket IDs</strong> with instant WhatsApp activation.
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
              <Shield className="h-4 w-4 text-primary" />
              {faqs.length} FAQs Answered
            </span>
            <span className="flex items-center gap-2 text-muted-foreground">
              <Users className="h-4 w-4 text-primary" />
              10,000+ Happy Users
            </span>
            <span className="flex items-center gap-2 text-muted-foreground">
              <Award className="h-4 w-4 text-primary" />
              Trusted Cricket ID Provider
            </span>
          </div>
        </div>
      </section>

      {/* ====== KEYWORD-RICH INTRO SECTION ====== */}
      <section className="section-padding pt-0">
        <div className="container-custom max-w-3xl">
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

      {/* ====== FAQ SECTION ====== */}
      <section className="section-padding pt-0">
        <div className="container-custom max-w-3xl">
          <h2 className="text-2xl font-bold font-heading mb-6 flex items-center gap-2">
            <Trophy className="h-6 w-6 text-primary" />
            Frequently Asked Questions About Online Cricket ID
          </h2>
          <FaqAccordion faqs={faqs} />

          {/* ====== STILL HAVE QUESTIONS? ====== */}
          <div className="mt-8 text-center p-6 bg-green-50 dark:bg-green-950/20 rounded-2xl border border-green-200 dark:border-green-800">
            <h3 className="text-lg font-bold font-heading mb-2">
              Still Have Questions About Online Cricket ID?
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              Contact our <strong>Online Cricket ID WhatsApp Number</strong> for instant answers 
              and get your <strong>Cricket ID Online</strong> in 2 minutes.
            </p>
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-4 w-4" />
                Chat on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ====== KEYWORD-RICH INFO BOX ====== */}
      <section className="section-padding pt-0">
        <div className="container-custom max-w-3xl">
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
              Ipl Cricket Id, All cricket Id, Cricket Id Provider, Cricket ID FAQ, 
              Online Cricket ID Questions
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

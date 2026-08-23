import type { Metadata } from 'next';
import { Badge } from '@/components/ui/badge';
import { Mail, MessageSquare, Clock, MapPin, Phone, Shield, Users, Award, Target } from 'lucide-react';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema, combineSchemas } from '@/lib/schema';
import JsonLd from '@/components/seo/json-ld';
import Breadcrumbs from '@/components/seo/breadcrumbs';
import ContactForm from '@/components/forms/contact-form';
import { siteConfig } from '@/lib/site-config';

// ============================================
// WHATSAPP LINK
// ============================================
const WHATSAPP_LINK = 'https://wa.link/onlinecricketid';
const WHATSAPP_NUMBER = '+91XXXXXXXXXX'; // Replace with actual number

// ============================================
// METADATA WITH TARGET KEYWORDS
// ============================================
export const metadata: Metadata = buildMetadata({
  title: 'Online Cricket ID – Contact Best Cricket ID Provider | IPL ID 2026',
  description:
    'Contact India\'s best Online Cricket ID Provider. Get your Cricket ID, IPL Cricket ID & All Cricket IDs instantly via WhatsApp. 24/7 support for Online Betting ID.',
  path: '/contact',
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
    'Cricket ID WhatsApp Number',
  ],
});

// ============================================
// MAIN COMPONENT
// ============================================
export default function ContactPage() {
  return (
    <main className="min-h-screen pt-16 lg:pt-20">
      {/* ====== JSON-LD SCHEMA ====== */}
      <JsonLd 
        data={combineSchemas(
          breadcrumbSchema([{ name: 'Contact', path: '/contact' }]),
          {
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            'name': 'Online Cricket ID Provider Contact',
            'description': 'Contact India\'s best Cricket ID Provider for Online Cricket ID, IPL Cricket ID & All Cricket IDs.',
            'url': 'https://yourdomain.com/contact',
            'mainEntity': {
              '@type': 'Organization',
              'name': 'Online Cricket ID Provider',
              'url': 'https://yourdomain.com',
              'contactPoint': {
                '@type': 'ContactPoint',
                'contactType': 'WhatsApp Support',
                'telephone': WHATSAPP_NUMBER,
                'availableLanguage': ['English', 'Hindi'],
              },
            },
          }
        )}
      />

      {/* ====== HERO SECTION ====== */}
      <section className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden="true" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Contact' }]} />
          
          <Badge variant="secondary" className="mb-4 px-4 py-1">
            🏏 #1 Cricket ID Provider
          </Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            Get Your <span className="text-gradient">Online Cricket ID</span> Now!
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-2xl">
            Contact India's trusted <strong>Cricket ID Provider</strong> to get your 
            <strong>Online Cricket ID</strong>, <strong>IPL Cricket ID</strong> & 
            <strong>All Cricket IDs</strong>. We provide instant activation via WhatsApp 
            with 24/7 support. Start betting in just 2 minutes!
          </p>

          {/* ====== WHATSAPP CTA ====== */}
          <div className="mt-6 flex flex-wrap gap-4">
            <a 
              href={WHATSAPP_LINK} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors text-lg"
            >
              <Phone className="h-5 w-5" />
              Chat on WhatsApp – Get ID Now
            </a>
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
              Click to Chat Instantly
            </a>
          </div>

          {/* ====== QUICK INFO ====== */}
          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <span className="flex items-center gap-1 text-muted-foreground">
              ⚡ Instant Activation
            </span>
            <span className="flex items-center gap-1 text-muted-foreground">
              💰 ₹100 Minimum Deposit
            </span>
            <span className="flex items-center gap-1 text-muted-foreground">
              🏏 IPL 2026 Ready
            </span>
            <span className="flex items-center gap-1 text-muted-foreground">
              ⭐ Trusted by 10K+ Users
            </span>
          </div>
        </div>
      </section>

      {/* ====== CONTACT SECTION ====== */}
      <section className="section-padding">
        <div className="container-custom max-w-5xl">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* ====== LEFT SIDEBAR ====== */}
            <div className="space-y-6">
              {/* ====== WHATSAPP CARD ====== */}
              <div className="glass-card rounded-2xl p-6 bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
                <Phone className="h-8 w-8 text-green-600 dark:text-green-400 mb-3" />
                <h2 className="font-semibold font-heading mb-1">WhatsApp Support</h2>
                <p className="text-sm text-muted-foreground mb-2">
                  Get your <strong>Online Cricket ID</strong> instantly via WhatsApp
                </p>
                <a 
                  href={WHATSAPP_LINK} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-green-600 dark:text-green-400 text-sm font-semibold hover:underline flex items-center gap-1"
                >
                  Chat Now →
                </a>
                <p className="text-xs text-muted-foreground mt-2">
                  ⏱️ Response: Within 2 minutes
                </p>
              </div>

              {/* ====== EMAIL CARD ====== */}
              <div className="glass-card rounded-2xl p-6">
                <Mail className="h-8 w-8 text-primary mb-3" />
                <h2 className="font-semibold font-heading mb-1">Email Support</h2>
                <p className="text-sm text-muted-foreground mb-2">
                  For general enquiries and support
                </p>
                <a 
                  href={`mailto:${siteConfig.contact.email}`} 
                  className="text-primary text-sm hover:underline"
                >
                  {siteConfig.contact.email}
                </a>
                <p className="text-xs text-muted-foreground mt-2">
                  ⏱️ Response: Within 24 hours
                </p>
              </div>

              {/* ====== SOCIAL CARD ====== */}
              <div className="glass-card rounded-2xl p-6">
                <MessageSquare className="h-8 w-8 text-primary mb-3" />
                <h2 className="font-semibold font-heading mb-1">Social Media</h2>
                <p className="text-sm text-muted-foreground mb-2">
                  Follow us for updates and offers
                </p>
                <div className="space-y-1">
                  <a 
                    href={siteConfig.social.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary text-sm hover:underline block"
                  >
                    🐦 Twitter
                  </a>
                  <a 
                    href={siteConfig.social.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary text-sm hover:underline block"
                  >
                    📸 Instagram
                  </a>
                  <a 
                    href={siteConfig.social.telegram} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary text-sm hover:underline block"
                  >
                    ✈️ Telegram
                  </a>
                </div>
              </div>

              {/* ====== FEATURES CARD ====== */}
              <div className="glass-card rounded-2xl p-6">
                <Shield className="h-8 w-8 text-primary mb-3" />
                <h2 className="font-semibold font-heading mb-1">Why Choose Us</h2>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <Award className="h-4 w-4 text-primary mt-0.5" />
                    <span>Best Online Cricket ID Provider</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Target className="h-4 w-4 text-primary mt-0.5" />
                    <span>All Cricket IDs Available</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Users className="h-4 w-4 text-primary mt-0.5" />
                    <span>Trusted by 10,000+ Users</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Clock className="h-4 w-4 text-primary mt-0.5" />
                    <span>24/7 Customer Support</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* ====== RIGHT SIDEBAR – CONTACT FORM ====== */}
            <div className="lg:col-span-2">
              {/* ====== FORM HEADER ====== */}
              <div className="mb-6">
                <h2 className="text-2xl font-bold font-heading mb-2">
                  Get Your <span className="text-gradient">Online Cricket ID</span>
                </h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll contact you within 2 minutes on WhatsApp
                </p>
              </div>

              {/* ====== CONTACT FORM ====== */}
              <ContactForm />

              {/* ====== KEYWORD RICH INFO ====== */}
              <div className="mt-8 p-6 bg-primary/5 rounded-2xl border border-primary/10">
                <h3 className="text-lg font-semibold font-heading mb-3 flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-primary" />
                  We Provide All Cricket IDs
                </h3>
                <div className="grid sm:grid-cols-2 gap-4 text-sm text-muted-foreground">
                  <div>
                    <strong className="text-foreground">Exchange ID</strong>
                    <p>Bet against other users with competitive odds</p>
                  </div>
                  <div>
                    <strong className="text-foreground">Master ID</strong>
                    <p>Guided start for beginners with low deposit</p>
                  </div>
                  <div>
                    <strong className="text-foreground">Multi-Exchange ID</strong>
                    <p>Access multiple exchanges with one account</p>
                  </div>
                  <div>
                    <strong className="text-foreground">Sportsbook ID</strong>
                    <p>Simple fixed-odds betting against the house</p>
                  </div>
                </div>
                <div className="mt-4 text-sm">
                  <p className="text-muted-foreground">
                    📱 Get your <strong>Online Cricket ID</strong> instantly via WhatsApp: 
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

              {/* ====== DISCLAIMER ====== */}
              <div className="mt-6 p-4 border border-yellow-200 bg-yellow-50 dark:bg-yellow-950/20 rounded-xl">
                <p className="text-xs text-muted-foreground">
                  <strong>Disclaimer:</strong> Real-money cricket betting is banned in India under the 
                  Online Gaming Act, 2025. This website provides informational content only. 
                  Consult a qualified lawyer before any real-money activity. 
                  We do not guarantee profits and are not responsible for any financial loss.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

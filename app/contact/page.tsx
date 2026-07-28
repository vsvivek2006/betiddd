import type { Metadata } from 'next';
import { Badge } from '@/components/ui/badge';
import { Mail, MessageSquare, Clock, MapPin } from 'lucide-react';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema, combineSchemas } from '@/lib/schema';
import JsonLd from '@/components/seo/json-ld';
import Breadcrumbs from '@/components/seo/breadcrumbs';
import ContactForm from '@/components/forms/contact-form';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = buildMetadata({
  title: 'Contact CricketScoreHQ',
  description:
    'Get in touch with the CricketScoreHQ team for editorial enquiries, corrections, advertising, or general questions. We respond within 2 business days.',
  path: '/contact',
  keywords: ['contact cricketscorehq', 'cricket news contact', 'cricket editorial contact'],
});

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-16 lg:pt-20">
      <JsonLd data={combineSchemas(breadcrumbSchema([{ name: 'Contact', path: '/contact' }]))} />

      <section className="relative overflow-hidden py-16 md:py-24 pitch-pattern">
        <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden="true" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Contact' }]} />
          <Badge variant="secondary" className="mb-4 px-4 py-1">Contact Us</Badge>
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            Get in <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Have a question, correction, or story tip? We'd love to hear from you. Fill out the form below and we'll respond within 2 business days.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-5xl">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="space-y-6">
              <div className="glass-card rounded-2xl p-6">
                <Mail className="h-8 w-8 text-primary mb-3" />
                <h2 className="font-semibold font-heading mb-1">Email</h2>
                <p className="text-sm text-muted-foreground mb-2">For editorial enquiries and corrections</p>
                <a href={`mailto:${siteConfig.contact.email}`} className="text-primary text-sm hover:underline">{siteConfig.contact.email}</a>
              </div>
              <div className="glass-card rounded-2xl p-6">
                <MessageSquare className="h-8 w-8 text-primary mb-3" />
                <h2 className="font-semibold font-heading mb-1">Social</h2>
                <p className="text-sm text-muted-foreground mb-2">Follow us for the latest updates</p>
                <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" className="text-primary text-sm hover:underline">{siteConfig.twitter}</a>
              </div>
              <div className="glass-card rounded-2xl p-6">
                <Clock className="h-8 w-8 text-primary mb-3" />
                <h2 className="font-semibold font-heading mb-1">Response Time</h2>
                <p className="text-sm text-muted-foreground">We respond to all enquiries within 2 business days. For urgent corrections to live scores or stats, please use the subject line &ldquo;URGENT CORRECTION&rdquo;.</p>
              </div>
            </div>
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

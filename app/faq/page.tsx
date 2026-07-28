import type { Metadata } from 'next';
import { Badge } from '@/components/ui/badge';
import { buildMetadata } from '@/lib/seo';
import { faqSchema, breadcrumbSchema, combineSchemas } from '@/lib/schema';
import JsonLd from '@/components/seo/json-ld';
import Breadcrumbs from '@/components/seo/breadcrumbs';
import FaqAccordion from '@/components/seo/faq-accordion';

export const metadata: Metadata = buildMetadata({
  title: 'FAQ — Frequently Asked Questions',
  description: 'Answers to the most common questions about CricketScoreHQ, our live scores, statistics, coverage, and editorial standards.',
  path: '/faq',
  keywords: ['cricket faq', 'cricketscorehq faq', 'cricket scores questions'],
});

const faqs = [
  { question: 'What is CricketScoreHQ?', answer: 'CricketScoreHQ is an independent cricket information website that provides live cricket scores, fixtures, player statistics, match previews and reviews, and cricket news from international and franchise cricket worldwide.' },
  { question: 'Is CricketScoreHQ free to use?', answer: 'Yes, all of our live scores, stats, news, and editorial content is free to access. We do not require a subscription or account.' },
  { question: 'How fast are the live scores updated?', answer: 'Our live scores are updated ball-by-ball, typically within a second or two of each delivery. We cover all international matches and major franchise leagues.' },
  { question: 'Does CricketScoreHQ cover franchise cricket?', answer: 'Yes. We cover the IPL, BBL, PSL, The Hundred, the Caribbean Premier League, and other major franchise leagues alongside international cricket.' },
  { question: 'Is CricketScoreHQ affiliated with the ICC or any cricket board?', answer: 'No. CricketScoreHQ is an independent cricket information website and is not affiliated with, endorsed by, or connected to the ICC, BCCI, or any cricket board.' },
  { question: 'How do I find live scores for a specific match?', answer: 'Visit our Live Scores page to see all matches currently in progress, or our Fixtures page for upcoming matches. You can also browse by series or team.' },
  { question: 'How accurate are your statistics?', answer: 'Our statistics are compiled from official ICC data and verified against multiple sources before publication. If you spot an error, please contact us and we will correct it promptly.' },
  { question: 'Can I use your data on my own website?', answer: 'Our editorial content is copyrighted. For data licensing enquiries, please contact us. You are welcome to link to any of our pages.' },
  { question: 'Do you have a mobile app?', answer: 'Our website is fully responsive and works on all mobile devices. A dedicated mobile app is on our roadmap.' },
  { question: 'How do I report a correction?', answer: 'Use our contact form with the subject line "URGENT CORRECTION" for time-sensitive corrections to live scores or stats. For other corrections, a standard email is fine. We take corrections seriously and will update the article with a dated correction note.' },
  { question: 'Do you cover women\'s cricket?', answer: 'Yes. We cover women\'s international cricket and major women\'s franchise leagues including the Women\'s Premier League and the Women\'s Big Bash League.' },
  { question: 'How often is the rankings page updated?', answer: 'Our rankings page reflects the official ICC rankings, which are updated weekly on Wednesdays for Test, ODI, and T20I cricket.' },
];

export default function FaqPage() {
  return (
    <main className="min-h-screen pt-16 lg:pt-20">
      <JsonLd data={combineSchemas(faqSchema(faqs), breadcrumbSchema([{ name: 'FAQ', path: '/faq' }]))} />

      <section className="relative overflow-hidden py-16 md:py-24 pitch-pattern">
        <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden="true" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'FAQ' }]} />
          <Badge variant="secondary" className="mb-4 px-4 py-1">Help Centre</Badge>
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Everything you need to know about CricketScoreHQ and how to follow cricket with us.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-3xl">
          <FaqAccordion faqs={faqs} />
        </div>
      </section>
    </main>
  );
}

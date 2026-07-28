import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import LegalPageLayout from '@/components/layout/legal-page-layout';

export const metadata: Metadata = buildMetadata({
  title: 'Fact-Checking Policy',
  description: 'CricketScoreHQ fact-checking policy: how we verify cricket scores, statistics, records, and news before publication.',
  path: '/fact-checking-policy',
});

export default function FactCheckingPolicyPage() {
  return (
    <LegalPageLayout
      title="Fact-Checking Policy"
      description="How we verify every score, stat, and claim before publication."
      breadcrumbName="Fact-Checking Policy"
      lastUpdated="July 2025"
    >
      <h2>Our Commitment to Accuracy</h2>
      <p>
        CricketScoreHQ is a cricket information website, and accuracy is the foundation of everything we do. Our fact-checking policy describes the steps we take to verify every score, statistic, record, and news claim before it is published on our site.
      </p>

      <h2>Live Scores and Scorecards</h2>
      <p>
        Our live scores are sourced from official scoring partners and are updated ball-by-ball. We cross-check scorecards against official sources at the end of each match. If a discrepancy is identified, we correct it promptly and note the correction on the scorecard.
      </p>

      <h2>Statistics and Records</h2>
      <p>
        All career statistics, head-to-head records, and historical data on CricketScoreHQ are compiled from official ICC data and verified against multiple sources before publication. When we cite a record, we verify it against our database and, where possible, against the official ICC record.
      </p>

      <h2>News Reporting</h2>
      <p>
        For news articles, we follow these fact-checking steps:
      </p>
      <ul>
        <li>Use primary sources (official statements, scorecards, on-the-record quotes) wherever possible</li>
        <li>Cross-check claims against at least two independent sources</li>
        <li>Avoid publishing unverified rumours; if we do report a rumour, we clearly label it as such</li>
        <li>Seek comment from relevant parties before publishing claims that could affect their reputation</li>
        <li>Have every news article reviewed by a second editor before publication</li>
      </ul>

      <h2>Analysis and Opinion</h2>
      <p>
        Analysis and opinion articles are based on verified facts. The interpretation may be the author\'s own, but the underlying facts are checked using the same process as news articles. We do not publish analysis based on unverified claims.
      </p>

      <h2>Corrections Process</h2>
      <p>
        If a reader, source, or member of our team identifies an error after publication, we correct it promptly and transparently. Every correction includes:
      </p>
      <ul>
        <li>A dated correction note at the top or bottom of the article</li>
        <li>A clear explanation of what was changed and why</li>
        <li>The original, incorrect text preserved where appropriate for transparency</li>
      </ul>

      <h2>Contact Us</h2>
      <p>
        If you believe we have published an error, please <a href="/contact">contact us</a> with the subject line &ldquo;URGENT CORRECTION&rdquo; for time-sensitive corrections, or a standard email for other corrections. We take all correction requests seriously and will respond within 2 business days.
      </p>
    </LegalPageLayout>
  );
}

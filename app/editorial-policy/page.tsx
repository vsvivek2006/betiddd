import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import LegalPageLayout from '@/components/layout/legal-page-layout';

export const metadata: Metadata = buildMetadata({
  title: 'Editorial Policy',
  description: 'CricketScoreHQ editorial policy: how we source, verify, and publish cricket news, scores, and analysis.',
  path: '/editorial-policy',
});

export default function EditorialPolicyPage() {
  return (
    <LegalPageLayout
      title="Editorial Policy"
      description="Our commitment to accurate, fair, and independent cricket journalism."
      breadcrumbName="Editorial Policy"
      lastUpdated="July 2025"
    >
      <h2>Our Editorial Mission</h2>
      <p>
        CricketScoreHQ is committed to providing accurate, fair, and independent cricket information. Our editorial policy governs everything we publish, from live scores to long-form features, and is designed to maintain the trust of our readers.
      </p>

      <h2>Independence</h2>
      <p>
        CricketScoreHQ is an independent cricket information website. We are not affiliated with, endorsed by, or connected to the ICC, BCCI, or any cricket board, franchise, or broadcaster. Our editorial decisions are made solely by our editorial team, without influence from any external party.
      </p>

      <h2>Sourcing and Verification</h2>
      <p>
        We source our information from official ICC data, official cricket board communications, match scorecards, and on-the-record statements from players, coaches, and officials. For live scores and statistics, we use data from official scoring partners. For news, we rely on primary sources and on-the-record reporting.
      </p>
      <p>
        Every statistical claim is verified against our database or official ICC records before publication. Every news article is reviewed by a second editor before publication. If we cannot verify a claim, we do not publish it.
      </p>

      <h2>Distinguishing News, Analysis, and Opinion</h2>
      <p>
        We clearly distinguish between three types of content:
      </p>
      <ul>
        <li><strong>News:</strong> Reports of facts — what happened, when, and where. News articles are straight reporting.</li>
        <li><strong>Analysis:</strong> Interpretation of facts — what they mean, why they matter, and what may come next. Analysis articles are clearly labeled as such.</li>
        <li><strong>Opinion:</strong> A viewpoint expressed by a named author. Opinion articles are clearly labeled and do not represent the position of CricketScoreHQ as a whole.</li>
      </ul>

      <h2>Corrections</h2>
      <p>
        When we make a mistake — and we do, because no newsroom is perfect — we correct it promptly and transparently. Every correction includes a dated correction note explaining what was changed and why. Significant factual errors are corrected at the top of the article; minor errors (typos, formatting) are fixed silently.
      </p>

      <h2>Conflicts of Interest</h2>
      <p>
        Our editorial team does not accept gifts, travel, or compensation from any cricket board, franchise, or broadcaster in exchange for coverage. If a member of our editorial team has a personal or financial relationship with a subject of coverage, they recuse themselves from that coverage.
      </p>

      <h2>User-Generated Content</h2>
      <p>
        We do not currently publish user-generated content. All content on CricketScoreHQ is produced by our editorial team.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have questions about our editorial policy or wish to suggest a correction, please <a href="/contact">contact us</a>.
      </p>
    </LegalPageLayout>
  );
}

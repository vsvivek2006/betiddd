import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import LegalPageLayout from '@/components/layout/legal-page-layout';

export const metadata: Metadata = buildMetadata({
  title: 'Disclaimer',
  description: 'CricketScoreHQ disclaimer: our content is for informational purposes only and we are not affiliated with the ICC, BCCI, or any cricket board.',
  path: '/disclaimer',
  noIndex: false,
});

export default function DisclaimerPage() {
  return (
    <LegalPageLayout
      title="Disclaimer"
      description="Please read this disclaimer carefully before using CricketScoreHQ."
      breadcrumbName="Disclaimer"
      lastUpdated="July 2025"
    >
      <h2>General Information</h2>
      <p>
        The information provided by CricketScoreHQ on this website is for general informational purposes only. All information on the site is provided in good faith; however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.
      </p>

      <h2>No Affiliation</h2>
      <p>
        CricketScoreHQ is an independent cricket information website. We are not affiliated with, endorsed by, sponsored by, or connected to the International Cricket Council (ICC), the Board of Control for Cricket in India (BCCI), any national cricket board, any franchise league, any franchise team, or any broadcaster. All trademarks, logos, and brand names mentioned on this site are the property of their respective owners.
      </p>

      <h2>Accuracy of Scores and Statistics</h2>
      <p>
        While we strive to provide accurate and up-to-date live scores, statistics, and records, we cannot guarantee that all information is free from error. Live scores may be delayed by a few seconds due to data transmission. Statistics are compiled from official sources but may occasionally contain errors. If you spot an error, please contact us and we will correct it promptly.
      </p>

      <h2>External Links</h2>
      <p>
        Our website may contain links to external websites that are not provided or maintained by us. We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites. The inclusion of any link does not imply endorsement by us.
      </p>

      <h2>Editorial Content</h2>
      <p>
        Match previews, reviews, player profiles, and other editorial content on this site represent the views of our editorial team at the time of publication. They are not intended as betting advice, prediction guarantees, or financial advice. Cricket is an unpredictable sport, and no outcome can be guaranteed.
      </p>

      <h2>No Gambling or Betting</h2>
      <p>
        CricketScoreHQ does not offer, facilitate, or promote gambling or betting of any kind. We do not provide betting odds, betting tips, or betting recommendations. We are a cricket information website only. If you choose to gamble, please do so legally and responsibly in your jurisdiction, and be aware of the risks.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        Under no circumstance shall we be liable to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk.
      </p>

      <h2>Changes to This Disclaimer</h2>
      <p>
        We may update this disclaimer from time to time. We will notify you of any changes by posting the new disclaimer on this page and updating the &ldquo;last updated&rdquo; date. You are advised to check this page periodically for any changes.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any questions about this disclaimer, please contact us through our <a href="/contact">contact page</a>.
      </p>
    </LegalPageLayout>
  );
}

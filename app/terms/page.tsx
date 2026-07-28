import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import LegalPageLayout from '@/components/layout/legal-page-layout';

export const metadata: Metadata = buildMetadata({
  title: 'Terms of Use',
  description: 'CricketScoreHQ terms of use: the rules and conditions for using our cricket information website.',
  path: '/terms',
});

export default function TermsPage() {
  return (
    <LegalPageLayout
      title="Terms of Use"
      description="The terms and conditions for using CricketScoreHQ."
      breadcrumbName="Terms"
      lastUpdated="July 2025"
    >
      <h2>Acceptance of Terms</h2>
      <p>
        By accessing and using CricketScoreHQ, you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our website.
      </p>

      <h2>Use of Our Content</h2>
      <p>
        All content on CricketScoreHQ, including text, graphics, logos, and software, is the property of CricketScoreHQ or its content creators and is protected by copyright and other intellectual property laws. You may:
      </p>
      <ul>
        <li>View and use our content for personal, non-commercial purposes</li>
        <li>Link to our pages from your website or social media</li>
        <li>Share excerpts with attribution and a link back to the original page</li>
      </ul>
      <p>You may not:</p>
      <ul>
        <li>Republish our content in full without written permission</li>
        <li>Use our content for commercial purposes without a license</li>
        <li>Scrape, copy, or systematically extract data from our website</li>
        <li>Modify, distribute, or create derivative works from our content</li>
      </ul>

      <h2>User Conduct</h2>
      <p>
        You agree to use our website only for lawful purposes and in a manner that does not infringe the rights of, restrict, or inhibit anyone else\'s use and enjoyment of the site. Prohibited behavior includes harassing, defamatory, or otherwise objectionable conduct.
      </p>

      <h2>Third-Party Links</h2>
      <p>
        Our website may contain links to third-party websites. We are not responsible for the content, privacy policies, or practices of third-party websites. You access third-party websites at your own risk.
      </p>

      <h2>Disclaimer of Warranties</h2>
      <p>
        Our website is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind, either express or implied. We do not guarantee that the site will be uninterrupted, error-free, or free of viruses or other harmful components.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, CricketScoreHQ shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of, or inability to use, our website.
      </p>

      <h2>Governing Law</h2>
      <p>
        These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles.
      </p>

      <h2>Changes to These Terms</h2>
      <p>
        We may update these Terms of Use from time to time. We will notify you of any changes by posting the new terms on this page and updating the &ldquo;last updated&rdquo; date.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any questions about these Terms, please <a href="/contact">contact us</a>.
      </p>
    </LegalPageLayout>
  );
}

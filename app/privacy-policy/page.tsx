import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import LegalPageLayout from '@/components/layout/legal-page-layout';

export const metadata: Metadata = buildMetadata({
  title: 'Privacy Policy',
  description: 'CricketScoreHQ privacy policy: what data we collect, how we use it, and your rights regarding your personal information.',
  path: '/privacy-policy',
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      description="How CricketScoreHQ collects, uses, and protects your information."
      breadcrumbName="Privacy Policy"
      lastUpdated="July 2025"
    >
      <h2>Introduction</h2>
      <p>
        At CricketScoreHQ, accessible from this website, one of our main priorities is the privacy of our visitors. This Privacy Policy describes the types of information we may collect and how we use, protect, and disclose that information.
      </p>

      <h2>Information We Collect</h2>
      <p>We may collect the following types of information:</p>
      <ul>
        <li><strong>Information you provide:</strong> When you use our contact form, we collect your name, email address, and the content of your message.</li>
        <li><strong>Automatically collected information:</strong> We may automatically collect certain information when you visit our site, including your IP address, browser type, device type, pages visited, and the time and date of your visit.</li>
        <li><strong>Cookies and similar technologies:</strong> We use cookies and similar technologies to improve your browsing experience, analyze site traffic, and understand how you use our site.</li>
      </ul>

      <h2>How We Use Your Information</h2>
      <p>We use the information we collect for the following purposes:</p>
      <ul>
        <li>To provide and maintain our service</li>
        <li>To respond to your enquiries and provide support</li>
        <li>To analyze and improve our website and content</li>
        <li>To detect, prevent, and address technical issues</li>
        <li>To comply with legal obligations</li>
      </ul>

      <h2>Cookies</h2>
      <p>
        Cookies are small files placed on your device by the websites you visit. We use cookies to understand how visitors use our site and to improve the user experience. You can choose to disable cookies through your browser settings, though some features of our site may not function properly without them.
      </p>

      <h2>Third-Party Services</h2>
      <p>
        We may use third-party services such as analytics providers and advertising networks that collect information governed by their own privacy policies. We do not control these third parties and are not responsible for their privacy practices.
      </p>

      <h2>Data Security</h2>
      <p>
        We take reasonable measures to protect your information from unauthorized access, alteration, or destruction. However, no method of transmission over the internet or method of electronic storage is 100% secure, and we cannot guarantee absolute security.
      </p>

      <h2>Your Rights</h2>
      <p>
        Depending on your location, you may have the right to access, correct, delete, or restrict the use of your personal information. To exercise any of these rights, please contact us through our contact page.
      </p>

      <h2>Children\'s Privacy</h2>
      <p>
        Our website is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal information, please contact us and we will take steps to delete such information.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the &ldquo;last updated&rdquo; date.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please <a href="/contact">contact us</a>.
      </p>
    </LegalPageLayout>
  );
}

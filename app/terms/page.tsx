import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import LegalPageLayout from '@/components/layout/legal-page-layout';
import Link from 'next/link';

// ============================================
// WHATSAPP LINK
// ============================================
const WHATSAPP_LINK = 'https://wa.link/onlinecricketid';

// ============================================
// METADATA WITH TARGET KEYWORDS
// ============================================
export const metadata: Metadata = buildMetadata({
  title: 'Online Cricket ID Terms of Use – Cricket ID Provider Terms 2026',
  description:
    'Read our Terms of Use for Online Cricket ID, Cricket ID & Online Betting ID services. Terms and conditions for Cricket ID Provider and All Cricket IDs usage.',
  path: '/terms',
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
    'Online Cricket ID Terms',
    'Cricket ID Terms of Use',
  ],
});

// ============================================
// MAIN COMPONENT
// ============================================
export default function TermsPage() {
  return (
    <LegalPageLayout
      title="Online Cricket ID Terms of Use"
      description="Terms and conditions for using Online Cricket ID, Cricket ID & Online Betting ID services. Please read these terms carefully before using our Cricket ID Provider services."
      breadcrumbName="Terms"
      lastUpdated="August 2026"
    >
      {/* ====== ACCEPTANCE OF TERMS ====== */}
      <h2>Acceptance of Terms</h2>
      <p>
        By accessing and using <strong>Online Cricket ID Provider</strong> services, you accept and agree 
        to be bound by these Terms of Use. These terms apply to all services including 
        <strong>Online Cricket ID</strong>, <strong>Cricket ID</strong>, 
        <strong>Online Betting ID</strong>, <strong>IPL Cricket ID</strong>, and 
        <strong>All Cricket IDs</strong>. If you do not agree to these terms, please do not use our services.
      </p>

      {/* ====== WHATSAPP ID ACTIVATION ====== */}
      <h2>WhatsApp ID Activation Service</h2>
      <p>
        Our <strong>Online Cricket ID</strong> activation service is provided via WhatsApp. By contacting 
        our <strong>Online Cricket ID WhatsApp Number</strong>, you agree to:
      </p>
      <ul>
        <li>Provide accurate and complete information during registration</li>
        <li>Use your <strong>Cricket ID Online</strong> for lawful purposes only</li>
        <li>Not share your <strong>Cricket ID</strong> credentials with third parties</li>
        <li>Be responsible for all activities conducted using your <strong>Online Betting ID</strong></li>
      </ul>
      <p>
        📱 <strong>Online Cricket ID WhatsApp Number:</strong> 
        <a 
          href={WHATSAPP_LINK} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-primary font-semibold hover:underline"
        >
          Click to Chat
        </a>
      </p>

      {/* ====== USE OF OUR SERVICES ====== */}
      <h2>Use of Our Cricket ID Services</h2>
      <p>
        We provide <strong>All Cricket IDs</strong> including Exchange ID, Master ID, 
        Multi-Exchange ID, and Sportsbook ID. As a <strong>Cricket ID Provider</strong>, we offer:
      </p>
      <ul>
        <li><strong>Online Cricket ID</strong> – For general betting on cricket and other sports</li>
        <li><strong>IPL Cricket ID</strong> – Specialized for Indian Premier League betting</li>
        <li><strong>Online Betting ID</strong> – For multi-sport betting</li>
        <li><strong>Best Online Cricket ID</strong> – Premium ID with enhanced features</li>
      </ul>
      <p>
        You may use our services for personal, non-commercial purposes only. Commercial use of 
        our <strong>Cricket ID</strong> services requires prior written permission.
      </p>

      {/* ====== USER CONDUCT ====== */}
      <h2>User Conduct</h2>
      <p>
        You agree to use your <strong>Online Cricket ID</strong> and our services only for lawful purposes 
        and in a manner that does not infringe the rights of, restrict, or inhibit anyone else's use 
        and enjoyment of the services. Prohibited behavior includes:
      </p>
      <ul>
        <li>Using <strong>Cricket ID</strong> for illegal gambling activities</li>
        <li>Sharing or selling your <strong>Online Betting ID</strong> to others</li>
        <li>Attempting to hack or compromise our systems</li>
        <li>Harassing, defamatory, or otherwise objectionable conduct</li>
        <li>Using <strong>All Cricket IDs</strong> for money laundering or fraud</li>
      </ul>

      {/* ====== KYC AND VERIFICATION ====== */}
      <h2>KYC and Verification</h2>
      <p>
        As a trusted <strong>Cricket ID Provider</strong>, we follow KYC (Know Your Customer) guidelines 
        to ensure the security of our <strong>Online Cricket ID</strong> services. You agree to:
      </p>
      <ul>
        <li>Provide accurate identification documents when requested</li>
        <li>Verify your age (must be 18 years or older)</li>
        <li>Confirm your identity for withdrawal processing</li>
        <li>Maintain up-to-date contact information for your <strong>Cricket ID Online</strong></li>
      </ul>

      {/* ====== WITHDRAWALS AND PAYMENTS ====== */}
      <h2>Withdrawals and Payments</h2>
      <p>
        Our <strong>Online Cricket ID</strong> services include fast withdrawals via UPI, GPay, PhonePe, 
        and other payment methods. By using our services, you agree to:
      </p>
      <ul>
        <li>Provide accurate payment details for withdrawals</li>
        <li>Complete KYC verification before large withdrawals</li>
        <li>Accept that withdrawal times may vary (2-30 minutes)</li>
        <li>Not dispute legitimate transactions on your <strong>Online Betting ID</strong></li>
      </ul>
      <p>
        <strong>Minimum Deposit:</strong> ₹100 for most <strong>Cricket ID</strong> types.
      </p>

      {/* ====== INTELLECTUAL PROPERTY ====== */}
      <h2>Intellectual Property</h2>
      <p>
        All content on <strong>Online Cricket ID Provider</strong>, including text, graphics, logos, 
        and software, is the property of <strong>Online Cricket ID Provider</strong> or its content creators 
        and is protected by copyright and other intellectual property laws. You may:
      </p>
      <ul>
        <li>View and use our content for personal, non-commercial purposes</li>
        <li>Link to our pages from your website or social media</li>
        <li>Share excerpts with attribution and a link back to the original page</li>
      </ul>
      <p>You may not:</p>
      <ul>
        <li>Republish our content in full without written permission</li>
        <li>Use our <strong>Online Cricket ID</strong> branding for commercial purposes</li>
        <li>Scrape, copy, or systematically extract data from our website</li>
        <li>Modify, distribute, or create derivative works from our content</li>
      </ul>

      {/* ====== THIRD-PARTY LINKS ====== */}
      <h2>Third-Party Links</h2>
      <p>
        Our website and <strong>Online Cricket ID</strong> services may contain links to third-party websites 
        including payment gateways and WhatsApp. We are not responsible for the content, privacy policies, 
        or practices of third-party websites. You access third-party websites at your own risk.
      </p>
      <p>
        Our <strong>Online Cricket ID WhatsApp Number</strong> link redirects to WhatsApp, 
        which is governed by WhatsApp's own terms and conditions.
      </p>

      {/* ====== DISCLAIMER OF WARRANTIES ====== */}
      <h2>Disclaimer of Warranties</h2>
      <p>
        Our <strong>Online Cricket ID</strong>, <strong>Cricket ID</strong>, and 
        <strong>Online Betting ID</strong> services are provided &ldquo;as is&rdquo; and 
        &ldquo;as available&rdquo; without warranties of any kind, either express or implied.
      </p>
      <p>
        We do not guarantee that:
      </p>
      <ul>
        <li>Your <strong>IPL Cricket ID</strong> will always have the best odds</li>
        <li>Services will be uninterrupted, error-free, or secure</li>
        <li>Any particular outcome will result from using <strong>All Cricket IDs</strong></li>
        <li>Your <strong>Best Online Cricket ID</strong> will guarantee profits</li>
      </ul>

      {/* ====== LIMITATION OF LIABILITY ====== */}
      <h2>Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, <strong>Online Cricket ID Provider</strong> shall not be 
        liable for any direct, indirect, incidental, consequential, or punitive damages arising from:
      </p>
      <ul>
        <li>Use of your <strong>Online Cricket ID</strong></li>
        <li>Inability to use <strong>Cricket ID</strong> services</li>
        <li>Loss of funds from <strong>Online Betting ID</strong> transactions</li>
        <li>Technical issues affecting your <strong>Cricket ID Online</strong></li>
        <li>Third-party actions affecting your <strong>IPL Cricket ID</strong></li>
      </ul>

      {/* ====== GOVERNING LAW ====== */}
      <h2>Governing Law</h2>
      <p>
        These Terms shall be governed by and construed in accordance with applicable laws of India, 
        without regard to conflict of law principles. Any disputes arising from your use of 
        <strong>Online Cricket ID</strong> or <strong>Cricket ID Provider</strong> services shall be 
        subject to the exclusive jurisdiction of the courts in India.
      </p>
      <p>
        <strong>Legal Notice:</strong> Real-money cricket betting is banned in India under the 
        Online Gaming Act, 2025. Users are responsible for complying with local laws when using 
        <strong>Online Cricket ID</strong> and <strong>Online Betting ID</strong> services.
      </p>

      {/* ====== CHANGES TO TERMS ====== */}
      <h2>Changes to These Terms</h2>
      <p>
        We may update these Terms of Use from time to time. We will notify you of any changes by posting 
        the new terms on this page and updating the &ldquo;last updated&rdquo; date. You are advised to 
        check this page periodically for any changes.
      </p>

      {/* ====== RESPONSIBLE BETTING ====== */}
      <h2>Responsible Betting</h2>
      <p>
        <strong>Online Cricket ID Provider</strong> promotes responsible betting practices. 
        When using your <strong>Cricket ID Online</strong> or <strong>Online Betting ID</strong>:
      </p>
      <ul>
        <li>Set a budget before every match and stick to it</li>
        <li>Never chase losses – it's a common trap</li>
        <li>Only use money you can afford to lose</li>
        <li>If betting stops being enjoyable, take a break</li>
        <li>Seek professional help if you're struggling with gambling-related issues</li>
      </ul>

      {/* ====== CONTACT US ====== */}
      <h2>Contact Us</h2>
      <p>
        If you have any questions about these Terms of Use, our <strong>Online Cricket ID</strong> services, 
        or our <strong>Cricket ID Provider</strong> policies, please contact us:
      </p>
      <ul>
        <li>
          📱 <strong>Online Cricket ID WhatsApp Number:</strong> 
          <a 
            href={WHATSAPP_LINK} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary font-semibold hover:underline"
          >
            Click to Chat
          </a>
        </li>
        <li>
          📧 <strong>Email:</strong> 
          <a href="mailto:support@onlinecricketid.com" className="text-primary hover:underline">
            support@onlinecricketid.com
          </a>
        </li>
        <li>
          📍 <strong>Contact Page:</strong> 
          <Link href="/contact" className="text-primary hover:underline">
            Contact Us
          </Link>
        </li>
      </ul>

      {/* ====== WHATSAPP CTA ====== */}
      <div style={{ 
        marginTop: '2rem', 
        padding: '1.5rem', 
        backgroundColor: '#f0fdf4', 
        borderRadius: '0.75rem',
        border: '1px solid #86efac',
      }}>
        <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
          🏏 Get Your Online Cricket ID Now!
        </h3>
        <p style={{ color: '#6b7280', marginBottom: '0.75rem' }}>
          Contact us on WhatsApp for instant activation of your <strong>Online Cricket ID</strong>, 
          <strong>IPL Cricket ID</strong> & <strong>All Cricket IDs</strong>.
        </p>
        <a 
          href={WHATSAPP_LINK} 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            backgroundColor: '#16a34a',
            color: 'white',
            padding: '0.75rem 1.5rem',
            borderRadius: '0.5rem',
            fontWeight: '600',
            textDecoration: 'none',
          }}
        >
          📱 Chat on WhatsApp – Get ID Now
        </a>
        <p style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '0.5rem' }}>
          ⏱️ Instant Activation • ₹100 Minimum Deposit • 24/7 Support
        </p>
      </div>

      {/* ====== KEYWORD SUMMARY ====== */}
      <div style={{ 
        marginTop: '2rem', 
        padding: '1rem', 
        backgroundColor: '#f3f4f6', 
        borderRadius: '0.5rem',
        fontSize: '0.75rem',
        color: '#6b7280',
      }}>
        <p>
          <strong>Keywords:</strong> Online Cricket ID, Cricket ID, Online Betting ID, 
          Online Cricket ID Whatsapp Number, Cricket Id Online, Best Online Cricket ID, 
          Ipl Cricket Id, All cricket Id, Cricket Id Provider
        </p>
      </div>
    </LegalPageLayout>
  );
}

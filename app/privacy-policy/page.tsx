import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import LegalPageLayout from '@/components/layout/legal-page-layout';
import Link from 'next/link';

// ============================================
// WHATSAPP LINK
// ============================================
const WHATSAPP_LINK = 'https://wa.link/onlinecricketid';
const WHATSAPP_NUMBER = '+91XXXXXXXXXX'; // Replace with actual number

// ============================================
// METADATA WITH TARGET KEYWORDS
// ============================================
export const metadata: Metadata = buildMetadata({
  title: 'Online Cricket ID Privacy Policy – Cricket ID Provider Privacy 2026',
  description:
    'Read our Privacy Policy for Online Cricket ID, Cricket ID & Online Betting ID services. Learn how we protect your data as a trusted Cricket ID Provider.',
  path: '/privacy-policy',
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
    'Online Cricket ID Privacy',
    'Cricket ID Privacy Policy',
  ],
});

// ============================================
// MAIN COMPONENT
// ============================================
export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      title="Online Cricket ID Privacy Policy"
      description="How we collect, use, and protect your information when you use our Online Cricket ID, Cricket ID & Online Betting ID services. Your privacy matters to us as a trusted Cricket ID Provider."
      breadcrumbName="Privacy Policy"
      lastUpdated="August 2026"
    >
      {/* ====== INTRODUCTION ====== */}
      <h2>Introduction</h2>
      <p>
        At <strong>Online Cricket ID Provider</strong>, accessible from this website, one of our main 
        priorities is the privacy of our visitors. This Privacy Policy describes the types of information 
        we may collect and how we use, protect, and disclose that information when you use our 
        <strong>Online Cricket ID</strong>, <strong>Cricket ID</strong>, 
        <strong>Online Betting ID</strong>, <strong>IPL Cricket ID</strong>, and 
        <strong>All Cricket IDs</strong> services.
      </p>
      <p>
        As a trusted <strong>Cricket ID Provider</strong>, we are committed to protecting your personal 
        information and ensuring your <strong>Online Cricket ID</strong> experience is secure and private.
      </p>

      {/* ====== WHATSAPP ACTIVATION PRIVACY ====== */}
      <h2>WhatsApp ID Activation Privacy</h2>
      <p>
        When you contact our <strong>Online Cricket ID WhatsApp Number</strong> to get your 
        <strong>Cricket ID Online</strong>, we collect the following information:
      </p>
      <ul>
        <li>Your WhatsApp phone number</li>
        <li>Your name and basic identification details</li>
        <li>Your preferred <strong>Cricket ID</strong> type (Exchange, Master, Multi-Exchange, or Sportsbook)</li>
        <li>Your transaction history for your <strong>Online Betting ID</strong></li>
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

      {/* ====== INFORMATION WE COLLECT ====== */}
      <h2>Information We Collect</h2>
      <p>
        When you use our <strong>Online Cricket ID</strong> services, we may collect the following 
        types of information:
      </p>
      <ul>
        <li>
          <strong>Information you provide:</strong> When you register for a <strong>Cricket ID</strong>, 
          we collect your name, phone number, email address, and preferred ID type.
        </li>
        <li>
          <strong>Transaction information:</strong> We collect deposit and withdrawal details for your 
          <strong>Online Betting ID</strong> to process your transactions securely.
        </li>
        <li>
          <strong>Automatically collected information:</strong> We may automatically collect certain 
          information when you use our <strong>Cricket ID Online</strong> service, including your IP 
          address, browser type, device type, and usage patterns.
        </li>
        <li>
          <strong>Cookies and similar technologies:</strong> We use cookies and similar technologies 
          to improve your <strong>Online Cricket ID</strong> experience and analyze site traffic.
        </li>
      </ul>

      {/* ====== HOW WE USE YOUR INFORMATION ====== */}
      <h2>How We Use Your Information</h2>
      <p>
        As a responsible <strong>Cricket ID Provider</strong>, we use the information we collect for 
        the following purposes:
      </p>
      <ul>
        <li>To provide and maintain your <strong>Online Cricket ID</strong> service</li>
        <li>To process deposits and withdrawals for your <strong>Online Betting ID</strong></li>
        <li>To verify your identity and prevent fraud (KYC compliance)</li>
        <li>To respond to your enquiries and provide support for your <strong>Cricket ID</strong></li>
        <li>To analyze and improve our <strong>All Cricket IDs</strong> services</li>
        <li>To detect, prevent, and address technical or security issues</li>
        <li>To comply with legal obligations and regulations</li>
      </ul>

      {/* ====== KYC AND DATA PROTECTION ====== */}
      <h2>KYC and Data Protection</h2>
      <p>
        As a trusted <strong>Cricket ID Provider</strong>, we follow strict KYC (Know Your Customer) 
        guidelines to ensure the security of your <strong>Online Cricket ID</strong>. Your data is 
        protected through:
      </p>
      <ul>
        <li><strong>Encryption:</strong> All your <strong>Cricket ID</strong> data is encrypted during transmission</li>
        <li><strong>Secure Storage:</strong> Your <strong>Online Betting ID</strong> information is stored securely</li>
        <li><strong>Limited Access:</strong> Only authorized personnel can access your <strong>All Cricket IDs</strong> data</li>
        <li><strong>Regular Audits:</strong> We regularly audit our security practices for your <strong>IPL Cricket ID</strong></li>
      </ul>

      {/* ====== COOKIES ====== */}
      <h2>Cookies</h2>
      <p>
        Cookies are small files placed on your device by the websites you visit. We use cookies to 
        understand how visitors use our <strong>Online Cricket ID</strong> services and to improve 
        the user experience. You can choose to disable cookies through your browser settings, though 
        some features of our <strong>Cricket ID</strong> services may not function properly without them.
      </p>

      {/* ====== THIRD-PARTY SERVICES ====== */}
      <h2>Third-Party Services</h2>
      <p>
        We may use third-party services such as payment gateways and analytics providers that collect 
        information governed by their own privacy policies. We do not control these third parties and 
        are not responsible for their privacy practices.
      </p>
      <p>
        Our <strong>Online Cricket ID WhatsApp Number</strong> redirects to WhatsApp, which is governed 
        by WhatsApp's own privacy policy. Please review WhatsApp's privacy policy for more information 
        about how they handle your data.
      </p>

      {/* ====== DATA SECURITY ====== */}
      <h2>Data Security</h2>
      <p>
        We take reasonable measures to protect your <strong>Online Cricket ID</strong> information from 
        unauthorized access, alteration, or destruction. However, no method of transmission over the 
        internet or method of electronic storage is 100% secure, and we cannot guarantee absolute security.
      </p>
      <p>
        To keep your <strong>Cricket ID</strong> safe, we recommend:
      </p>
      <ul>
        <li>Never sharing your <strong>Online Betting ID</strong> credentials with anyone</li>
        <li>Using a unique and strong password for your <strong>Cricket ID Online</strong></li>
        <li>Enabling two-factor authentication if available</li>
        <li>Contacting us immediately if you suspect unauthorized access to your <strong>All Cricket IDs</strong></li>
      </ul>

      {/* ====== YOUR RIGHTS ====== */}
      <h2>Your Rights</h2>
      <p>
        As a user of our <strong>Online Cricket ID</strong> services, you have the following rights:
      </p>
      <ul>
        <li><strong>Access:</strong> Request a copy of your <strong>Cricket ID</strong> data</li>
        <li><strong>Correction:</strong> Correct inaccurate information in your <strong>Online Betting ID</strong></li>
        <li><strong>Deletion:</strong> Request deletion of your <strong>Cricket ID Online</strong> data</li>
        <li><strong>Restriction:</strong> Restrict processing of your <strong>All Cricket IDs</strong> information</li>
        <li><strong>Portability:</strong> Transfer your <strong>IPL Cricket ID</strong> data to another provider</li>
      </ul>
      <p>
        To exercise any of these rights, please contact us through our 
        <Link href="/contact" className="text-primary hover:underline">contact page</Link> or via 
        WhatsApp at our <strong>Online Cricket ID WhatsApp Number</strong>.
      </p>

      {/* ====== CHILDREN'S PRIVACY ====== */}
      <h2>Children's Privacy</h2>
      <p>
        Our <strong>Online Cricket ID</strong> services are not directed to children under the age of 18. 
        We do not knowingly collect personal information from children under 18. If you believe a child 
        has provided us with personal information, please contact us and we will take steps to delete 
        such information.
      </p>

      {/* ====== CHANGES TO THIS POLICY ====== */}
      <h2>Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
        the new policy on this page and updating the "last updated" date. You are advised to check this 
        page periodically for any changes regarding your <strong>Online Cricket ID</strong> privacy.
      </p>

      {/* ====== CONTACT US ====== */}
      <h2>Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, our <strong>Online Cricket ID</strong> 
        services, or our <strong>Cricket ID Provider</strong> data practices, please contact us:
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
          <strong>IPL Cricket ID</strong> & <strong>All Cricket IDs</strong>. Your privacy is our priority.
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
          Ipl Cricket Id, All cricket Id, Cricket Id Provider, Online Cricket ID Privacy, 
          Cricket ID Privacy Policy
        </p>
      </div>
    </LegalPageLayout>
  );
}

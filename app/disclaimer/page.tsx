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
  title: 'Online Cricket ID Disclaimer – Cricket ID Provider Legal Notice 2026',
  description:
    'Read our disclaimer for Online Cricket ID, Cricket ID & Online Betting ID services. Legal notice for Cricket ID Provider. Learn about All Cricket IDs and IPL Cricket ID.',
  path: '/disclaimer',
  noIndex: false,
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
    'Cricket ID Disclaimer',
    'Online Betting ID Legal',
  ],
});

// ============================================
// MAIN COMPONENT
// ============================================
export default function DisclaimerPage() {
  return (
    <LegalPageLayout
      title="Online Cricket ID Disclaimer"
      description="Please read this disclaimer carefully before using our Cricket ID Provider services. Important legal information about Online Cricket ID, IPL Cricket ID & All Cricket IDs."
      breadcrumbName="Disclaimer"
      lastUpdated="August 2026"
    >
      {/* ====== GENERAL INFORMATION ====== */}
      <h2>General Information</h2>
      <p>
        The information provided by <strong>Online Cricket ID Provider</strong> on this website is for general informational purposes only. All information on the site is provided in good faith; however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.
      </p>
      <p>
        This disclaimer applies to all services including <strong>Online Cricket ID</strong>, 
        <strong>Cricket ID</strong>, <strong>Online Betting ID</strong>, 
        <strong>IPL Cricket ID</strong>, and <strong>All Cricket IDs</strong> provided by us.
      </p>

      {/* ====== WHATSAPP ID ACTIVATION ====== */}
      <h2>WhatsApp ID Activation Service</h2>
      <p>
        We provide instant <strong>Online Cricket ID</strong> activation via WhatsApp. Our 
        <strong>Online Cricket ID WhatsApp Number</strong> is available 24/7 for ID creation and support. 
        By contacting us on WhatsApp, you agree to receive communications regarding your 
        <strong>Cricket ID Online</strong>.
      </p>
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

      {/* ====== NO AFFILIATION ====== */}
      <h2>No Affiliation</h2>
      <p>
        <strong>Online Cricket ID Provider</strong> is an independent <strong>Cricket ID Provider</strong>. 
        We are not affiliated with, endorsed by, sponsored by, or connected to the International Cricket Council (ICC), 
        the Board of Control for Cricket in India (BCCI), any national cricket board, any franchise league, 
        any franchise team, or any broadcaster. All trademarks, logos, and brand names mentioned on this site 
        are the property of their respective owners.
      </p>
      <p>
        We are an independent provider of <strong>Online Betting ID</strong> and 
        <strong>Cricket ID Online</strong> services. We do not claim any official affiliation with any cricket 
        governing body or league.
      </p>

      {/* ====== ACCURACY OF ID SERVICES ====== */}
      <h2>Accuracy of Cricket ID Services</h2>
      <p>
        While we strive to provide the <strong>Best Online Cricket ID</strong> services, we cannot guarantee 
        that all information is free from error. We provide <strong>All Cricket IDs</strong> including 
        Exchange ID, Master ID, Multi-Exchange ID, and Sportsbook ID. Each <strong>Cricket ID</strong> 
        is created with the highest accuracy, but users should verify their account details upon activation.
      </p>
      <p>
        <strong>IPL Cricket ID</strong> services are provided with live odds and real-time markets. 
        However, odds and markets are subject to change without prior notice.
      </p>

      {/* ====== EXTERNAL LINKS ====== */}
      <h2>External Links</h2>
      <p>
        Our website may contain links to external websites including payment gateways and WhatsApp. 
        We do not guarantee the accuracy, relevance, timeliness, or completeness of any information 
        on these external websites. The inclusion of any link does not imply endorsement by us.
      </p>
      <p>
        Our <strong>Online Cricket ID WhatsApp Number</strong> link directs to WhatsApp services, 
        which are governed by WhatsApp's own terms and conditions.
      </p>

      {/* ====== EDITORIAL CONTENT ====== */}
      <h2>Editorial Content</h2>
      <p>
        Match previews, reviews, player profiles, and other editorial content on this site represent 
        the views of our editorial team at the time of publication. They are not intended as betting advice, 
        prediction guarantees, or financial advice. Cricket is an unpredictable sport, and no outcome can be guaranteed.
      </p>
      <p>
        Information about <strong>Online Cricket ID</strong>, <strong>IPL Cricket ID</strong>, and 
        <strong>All Cricket IDs</strong> is provided for educational and informational purposes only.
      </p>

      {/* ====== GAMBLING DISCLAIMER ====== */}
      <h2>Gambling & Betting Disclaimer</h2>
      <p>
        <strong>Online Cricket ID Provider</strong> provides <strong>Cricket ID</strong> and 
        <strong>Online Betting ID</strong> services. However, we do not offer, facilitate, or promote 
        illegal gambling or betting. We provide informational content about <strong>Online Cricket ID</strong> 
        and related services.
      </p>
      <p>
        <strong>Important Legal Notice:</strong> Real-money cricket betting is banned in India under the 
        Online Gaming Act, 2025. The Supreme Court upheld this ban on May 27, 2026 in 
        State of Tamil Nadu v. Junglee Games India Pvt. Ltd.
      </p>
      <p>
        If you choose to gamble, please do so legally and responsibly in your jurisdiction, 
        and be aware of the risks. <strong>Online Cricket ID</strong> and 
        <strong>Online Betting ID</strong> should only be used in jurisdictions where such activities are legal.
      </p>

      {/* ====== KYC AND COMPLIANCE ====== */}
      <h2>KYC and Compliance</h2>
      <p>
        As a responsible <strong>Cricket ID Provider</strong>, we follow KYC (Know Your Customer) guidelines 
        to prevent fraud and underage access. Our <strong>Online Cricket ID</strong> services require 
        basic verification including name, age, and phone number.
      </p>
      <p>
        We comply with all applicable laws and regulations in India. We do not provide 
        <strong>Online Cricket ID</strong> to individuals under 18 years of age.
      </p>

      {/* ====== RESPONSIBLE BETTING ====== */}
      <h2>Responsible Betting</h2>
      <p>
        We promote responsible betting practices. <strong>Online Cricket ID</strong> and 
        <strong>Online Betting ID</strong> should be used responsibly:
      </p>
      <ul>
        <li>Set a budget before every match and stick to it</li>
        <li>Never chase losses</li>
        <li>Only use money you can afford to lose</li>
        <li>If betting stops being enjoyable, step back</li>
        <li>Seek professional help if you're struggling with gambling-related issues</li>
      </ul>

      {/* ====== LIMITATION OF LIABILITY ====== */}
      <h2>Limitation of Liability</h2>
      <p>
        Under no circumstance shall <strong>Online Cricket ID Provider</strong> be liable to you for any loss 
        or damage of any kind incurred as a result of the use of the site or reliance on any information 
        provided on the site. Your use of the site and your reliance on any information on the site is 
        solely at your own risk.
      </p>
      <p>
        This includes but is not limited to losses from <strong>Online Cricket ID</strong> usage, 
        <strong>Online Betting ID</strong> transactions, or any <strong>Cricket ID</strong> services.
      </p>

      {/* ====== CHANGES TO DISCLAIMER ====== */}
      <h2>Changes to This Disclaimer</h2>
      <p>
        We may update this disclaimer from time to time. We will notify you of any changes by posting 
        the new disclaimer on this page and updating the "last updated" date. You are advised to check 
        this page periodically for any changes.
      </p>

      {/* ====== CONTACT US ====== */}
      <h2>Contact Us</h2>
      <p>
        If you have any questions about this disclaimer, our <strong>Online Cricket ID</strong> services, 
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

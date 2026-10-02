// app/privacy/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Driveway Gates London collects, uses, and shares your personal data under UK GDPR.',
  alternates: { canonical: `${siteConfig.url}/privacy/` },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = '2 October 2026';


// Helper to keep the H2 pattern consistent across sections.
function LegalH2({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <h2>
      {n}. {children}
    </h2>
  );
}

export default function PrivacyPage() {
  return (
    <div id="top" className="showcase-page subpage tone-forest privacy-page">
      <Header />

      <main id="main">
        <div className="page-wrap"><section className="sub-hero">
          <img className="hero-backdrop" src="/showcase/assets/content/gate-aluminium-sliding-modern-dark-brick-553aa55.webp" alt="" aria-hidden="true" width={1200} height={800} fetchPriority="high" />
          <nav className="breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><span aria-current="page">Privacy Policy</span></nav>
          <h1>Privacy Policy</h1><p className="lead">Last updated: {LAST_UPDATED}</p>
        </section></div>

        <section className="page-wrap">
          <div className="legal-content">
            <div>

              <LegalH2 n="1">Who we are</LegalH2>
              <p>
                This website, Driveway Gates London (drivewaygateslondon.co.uk), operates under
                the trading name &apos;Driveway Gates London&apos;. We design, supply and install
                driveway gates across Greater London. For any data protection request, <Link href="/contact/">contact us using our enquiry form</Link> and we will respond
                with a named contact.
              </p>

              <LegalH2 n="2">What data we collect</LegalH2>
              <p>When you submit an enquiry through our quote form, we collect:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Your full name</li>
                <li>Your email address</li>
                <li>Your phone number</li>
                <li>Your London area or postcode</li>
                <li>The type of gate or service you are interested in</li>
                <li>The page URL where you submitted the enquiry</li>
              </ul>
              <p>
                If you accept analytics cookies, we also collect standard analytics data through
                Google Analytics, including anonymised IP address, browser type, device type,
                pages visited, referral source, session duration, successful enquiry submissions
                and clicks on our phone links. Our enquiry and phone-click events do not include
                your name, email address, phone number, postcode or message. A phone-link click
                does not tell us whether a call connected. Analytics data is used to
                understand site traffic in aggregate and is not used to identify individual
                users.
              </p>

              <LegalH2 n="3">How we use your data</LegalH2>
              <p>We use the personal data you submit through the quote form to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Contact you about your enquiry</li>
                <li>Arrange your free site survey</li>
                <li>Prepare and send your written quote</li>
              </ul>
              <p>
                The lawful basis for this processing is your consent, which you give by
                submitting the enquiry form. You can withdraw consent at any time by contacting
                us.
              </p>

              <LegalH2 n="4">Who we share your data with</LegalH2>
              <p>
                Your details are shared with the surveyor and installation team assigned to your
                enquiry so they can contact you and carry out the work you agree to. We do not
                sell your data to third parties and we do not pass your data to marketing lists.
              </p>
              <p>
                We use Google Sheets (via a Google Apps Script webhook) to record incoming
                enquiries, and Google Analytics to measure site traffic. Google may process this
                data on servers outside the United Kingdom and European Economic Area, subject
                to standard contractual clauses.
              </p>

              <LegalH2 n="5">How long we keep your data</LegalH2>
              <p>
                Enquiry submissions are retained for 24 months so we can respond to follow-up
                questions about your survey, quote, or installation. After 24 months, the data
                is deleted from our records. You can request earlier deletion at any time by
                contacting us.
              </p>

              <LegalH2 n="6">Your rights under UK GDPR</LegalH2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of any inaccurate data</li>
                <li>Request deletion of your data (right to be forgotten)</li>
                <li>Object to or restrict processing</li>
                <li>Withdraw consent at any time</li>
                <li>Lodge a complaint with the Information Commissioner&apos;s Office (ico.org.uk)</li>
              </ul>
              <p>
                To exercise any of these rights, {' '}
                <Link href="/contact/">contact us using our enquiry form</Link>. We will respond within
                one month.
              </p>

              <LegalH2 n="7">Cookies</LegalH2>
              <p>
                Google Analytics cookies are set only if you click Accept on the cookie banner.
                If you reject them or ignore the banner, no analytics cookies are set. Your
                choice is stored in your browser so we do not ask again on every visit. You can
                clear it at any time by deleting this site&apos;s data in your browser settings,
                and you can block cookies entirely through your browser.
              </p>
              <p>
                Separately, the map on the contact page and the one in the footer are served
                by Google Maps and load with the page rather than waiting to be asked.
                Loading either lets Google set its own cookies and passes it your IP address,
                whatever you chose in the banner. The footer map is fetched only once you
                scroll down far enough to reach it. Blocking third-party content in your
                browser stops both, and the rest of the site carries on working.
              </p>

              <LegalH2 n="8">Changes to this policy</LegalH2>
              <p>
                We may update this policy from time to time. The last updated date at the top of
                this page reflects the most recent change. We recommend checking back
                periodically if you have a live enquiry with us.
              </p>

              <LegalH2 n="9">Contact</LegalH2>
              <p>
                Questions about this privacy policy or about how we handle your data:
                <br />
                <Link href="/contact/">contact us using our enquiry form</Link>
              </p>

              <div className="mt-12 pt-6 border-t border-brand-100 flex gap-6 text-[13px]">
                <Link href="/contact/" className="text-brand-600 hover:text-brand-800 transition-colors">Contact</Link>
                <Link href="/" className="text-brand-600 hover:text-brand-800 transition-colors">Home</Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

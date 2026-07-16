// app/privacy/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Driveway Gates London collects, uses, and shares your personal data under UK GDPR.',
  alternates: { canonical: `${siteConfig.url}/privacy/` },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = '16 July 2026';
const CONTACT_EMAIL = 'hello@drivewaygateslondon.co.uk';

// Helper to keep the H2 pattern consistent across sections.
function LegalH2({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <h2 className="font-syne font-bold text-xl md:text-2xl tracking-tight text-brand-950 mt-10 mb-3 flex items-baseline gap-3">
      <span className="text-sm text-brand-500 font-semibold tracking-wider">{n}</span>
      <span>{children}</span>
    </h2>
  );
}

export default function PrivacyPage() {
  return (
    <>
      <Header />

      <main className="flex-grow">
        <section className="bg-brand-950 border-b-[3px] border-brand-900">
          <div className="container-width py-12 md:py-16">
            <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />
            <div className="max-w-3xl mt-6">
              <h1
                className="font-syne font-extrabold uppercase tracking-tight text-white mb-4"
                style={{ fontSize: 'clamp(24px, 4vw, 40px)', lineHeight: 1.02, letterSpacing: '-.02em' }}
              >
                Privacy <span className="text-brand-500">Policy</span>
              </h1>
              <p className="text-brand-300 text-sm uppercase tracking-wider">
                Last updated: {LAST_UPDATED}
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="container-width py-10 md:py-14">
            <div className="max-w-3xl text-[15px] leading-relaxed text-brand-900 space-y-4 [&_p]:mb-0 [&_a]:text-brand-600 [&_a]:underline hover:[&_a]:text-brand-800">

              <LegalH2 n="1">Who we are</LegalH2>
              <p>
                This website, Driveway Gates London (drivewaygateslondon.co.uk), operates under
                the trading name &apos;Driveway Gates London&apos;. We design, supply and install
                driveway gates across Greater London. For any data protection request, email us
                at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> and we will respond
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
                pages visited, referral source, and session duration. Analytics data is used to
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
                submitting the enquiry form. You can withdraw consent at any time by emailing
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
                emailing us.
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
                To exercise any of these rights, email{' '}
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. We will respond within
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
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
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
    </>
  );
}

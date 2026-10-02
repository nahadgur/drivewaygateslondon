export const GA_ID = 'G-F4ZHZBYKEL';
export const CONSENT_KEY = 'cookie-consent-v1';
type Consent = 'accepted' | 'rejected' | null;
type AnalyticsWindow = Window & { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void };
let consent: Consent = null;
let configured = false;

function cleanUrl(value: string) {
  try { const url = new URL(value); return url.origin + url.pathname; }
  catch { return ''; }
}

// The queue and Google script exist only after opt-in. No pre-consent events
// are stored for replay. Query strings, form fields and phone numbers stay out.
export function setAnalyticsConsent(value: Consent) {
  consent = value;
  if (typeof window === 'undefined' || value !== 'accepted' || configured) return;
  const target = window as AnalyticsWindow;
  target.dataLayer = target.dataLayer || [];
  target.gtag = function () { target.dataLayer!.push(arguments); };
  target.gtag('js', new Date());
  target.gtag('config', GA_ID, {
    page_location: cleanUrl(window.location.href),
    page_referrer: cleanUrl(document.referrer),
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });
  configured = true;
}

function send(name: string, parameters: Record<string, string>) {
  if (typeof window === 'undefined' || consent !== 'accepted') return;
  try {
    (window as AnalyticsWindow).gtag?.('event', name, {
      ...parameters,
      page_location: cleanUrl(window.location.href),
      page_path: window.location.pathname,
      page_referrer: cleanUrl(document.referrer),
      transport_type: 'beacon',
    });
  } catch { /* Analytics must never prevent an enquiry or a phone call. */ }
}

export function trackEnquiry(formId: 'contact_enquiry' | 'hero_enquiry' | 'modal_enquiry') {
  send('generate_lead', { form_id: formId, lead_source: 'website_enquiry' });
}

export function trackPhoneClick(placement: 'header' | 'footer' | 'mobile_menu' | 'mobile_bar' | 'content') {
  send('phone_click', { click_placement: placement });
}

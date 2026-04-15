'use client';

import { Mail, Clock, ShieldCheck, CheckCircle } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroLeadForm } from '@/components/HeroLeadForm';

const WHAT_HAPPENS = [
  { n: '01', title: 'You share your details', desc: 'Tell us your phone number, the type of gate you are after, and your area or postcode. Takes under a minute.' },
  { n: '02', title: 'We match you to a vetted installer', desc: 'We connect you with an independent installer in our London network who specialises in your gate type and covers your area.' },
  { n: '03', title: 'You get a free call back', desc: 'A vetted local installer calls you back — typically within 2 hours during business hours — to discuss your project and arrange a free site survey.' },
];

const ASSURANCES = [
  { icon: ShieldCheck, title: 'Vetted installers only', desc: 'Every installer in our network has at least 50 completed residential installations and full public liability insurance.' },
  { icon: Clock,       title: 'Fast response',         desc: 'Typical call-back time is under 2 hours during working hours (Monday to Sunday, 8am to 8pm).' },
  { icon: CheckCircle, title: 'Free, no obligation',   desc: 'Our matching service is free. You only pay if you choose to go ahead with the installer after a quote and site survey.' },
];

export function ContactPageClient() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-brand-900 text-brand-50 pt-16 pb-12 md:pt-24 md:pb-16">
          <div className="container-width">
            <div className="max-w-3xl">
              <div className="font-syne font-bold text-[10px] tracking-[.25em] uppercase text-brand-300 mb-4">Contact</div>
              <h1 className="font-syne font-extrabold text-4xl md:text-6xl uppercase tracking-tight leading-[1.05] mb-6">
                Get in touch — we'll match you with a vetted installer
              </h1>
              <p className="text-lg md:text-xl text-brand-200 leading-relaxed">
                Driveway Gates London is a free referral service. Share your details below and a vetted local gate installer calls you back, typically within 2 hours. No pressure, no obligation.
              </p>
            </div>
          </div>
        </section>

        {/* Form + info */}
        <section className="py-16 md:py-24 bg-brand-50">
          <div className="container-width">
            <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
              {/* Form */}
              <div id="quote-form">
                <HeroLeadForm />
              </div>

              {/* What happens next */}
              <div>
                <div className="craft-label">How it works</div>
                <h2 className="craft-h2 mb-8">What happens after you submit</h2>
                <ol className="space-y-6">
                  {WHAT_HAPPENS.map(item => (
                    <li key={item.n} className="flex gap-5">
                      <div className="font-syne font-extrabold text-2xl text-brand-500 flex-shrink-0 w-10">{item.n}</div>
                      <div>
                        <h3 className="font-syne font-bold text-lg uppercase tracking-tight text-brand-900 mb-1.5">{item.title}</h3>
                        <p className="text-brand-700 leading-relaxed">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>

                <div className="mt-10 pt-8 border-t-2 border-brand-200">
                  <h3 className="font-syne font-bold text-sm uppercase tracking-[.15em] text-brand-900 mb-4">Prefer email?</h3>
                  <a
                    href="mailto:hello@drivewaygateslondon.co.uk"
                    className="inline-flex items-center gap-3 text-brand-900 hover:text-brand-500 transition-colors font-semibold"
                  >
                    <Mail className="w-5 h-5" />
                    hello@drivewaygateslondon.co.uk
                  </a>
                  <p className="text-brand-600 text-sm mt-2">We aim to reply to email enquiries within one working day.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Assurances */}
        <section className="py-16 md:py-20 bg-white border-t-2 border-brand-200">
          <div className="container-width">
            <div className="grid md:grid-cols-3 gap-8">
              {ASSURANCES.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex flex-col gap-3">
                  <div className="w-12 h-12 bg-brand-900 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-brand-50" />
                  </div>
                  <h3 className="font-syne font-bold text-base uppercase tracking-tight text-brand-900">{title}</h3>
                  <p className="text-brand-700 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

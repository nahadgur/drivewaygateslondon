'use client';

import { Mail, Phone, MapPin, Clock, ShieldCheck, CheckCircle } from 'lucide-react';
import { siteConfig, addressOneLine, phoneHref } from '@/data/site';
import { MapEmbed } from '@/components/MapEmbed';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroLeadForm } from '@/components/HeroLeadForm';

const WHAT_HAPPENS = [
  { n: '01', title: 'You share your details', desc: 'Tell us your phone number, the type of gate you are after, and your area or postcode. Takes under a minute.' },
  { n: '02', title: 'We call you back', desc: 'One of our team calls you back within 24 hours to discuss your project and arrange a free site survey at a time that suits you.' },
  { n: '03', title: 'Free survey, written quote', desc: 'We visit your property, measure up, and talk through design and material options. You then receive a written fixed quote with no hidden costs.' },
];

const ASSURANCES = [
  { icon: ShieldCheck, title: 'We install ourselves', desc: 'We design, supply and install every gate with our own team, and we carry full public liability insurance.' },
  { icon: Clock,       title: 'Fast response',         desc: 'We call you back within 24 hours (Monday to Sunday, 8am to 8pm).' },
  { icon: CheckCircle, title: 'Free, no obligation',   desc: 'The site survey and written quote are free. You only pay if you choose to go ahead with the installation.' },
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
                Get in touch about your driveway gates
              </h1>
              <p className="text-lg md:text-xl text-brand-200 leading-relaxed">
                We design, supply and install driveway gates across London. Share your details below and we call you back within 24 hours to arrange a free site survey. No pressure, no obligation.
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

                {siteConfig.phone ? (
                  <div className="mt-10 pt-8 border-t-2 border-brand-200">
                    <h3 className="font-syne font-bold text-sm uppercase tracking-[.15em] text-brand-900 mb-4">Rather talk it through?</h3>
                    <a
                      href={phoneHref}
                      className="inline-flex items-center gap-3 text-brand-900 hover:text-brand-500 transition-colors font-semibold"
                    >
                      <Phone className="w-5 h-5" />
                      {siteConfig.phone}
                    </a>
                    <p className="text-brand-600 text-sm mt-2">Lines are open during working hours. Outside them, the form reaches us fastest.</p>
                  </div>
                ) : null}

                <div className="mt-10 pt-8 border-t-2 border-brand-200">
                  <h3 className="font-syne font-bold text-sm uppercase tracking-[.15em] text-brand-900 mb-4">Prefer email?</h3>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="inline-flex items-center gap-3 text-brand-900 hover:text-brand-500 transition-colors font-semibold"
                  >
                    <Mail className="w-5 h-5" />
                    {siteConfig.email}
                  </a>
                  <p className="text-brand-600 text-sm mt-2">We aim to reply to email enquiries within one working day.</p>
                </div>

                <div className="mt-10 pt-8 border-t-2 border-brand-200">
                  <h3 className="font-syne font-bold text-sm uppercase tracking-[.15em] text-brand-900 mb-4">Where we are</h3>
                  <address className="inline-flex items-start gap-3 not-italic text-brand-900 font-semibold">
                    <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
                    {addressOneLine}
                  </address>
                  <p className="text-brand-600 text-sm mt-2">Installations are carried out across Greater London, so the survey comes to you rather than the other way round.</p>
                  <MapEmbed variant="contact" className="mt-4" />
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

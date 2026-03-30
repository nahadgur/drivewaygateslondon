'use client';

import { useState } from 'react';
import { CheckCircle, ShieldCheck, Clock, Award, Phone } from 'lucide-react';

interface HeroLeadFormProps { city?: string; service?: string; }

const GATE_TYPES = [
  'Electric Sliding Gates','Electric Swing Gates','Wooden Driveway Gates',
  'Metal Driveway Gates','Automated Gate Systems','Gate Automation (Retrofit)',
  'Commercial Gates','Gate Repair and Maintenance',
];

const TRUST_BADGES = [
  { icon: Phone,       label: 'Call back within 2 hours' },
  { icon: ShieldCheck, label: 'Fully insured installers' },
  { icon: Award,       label: '50+ installs each' },
  { icon: Clock,       label: 'Free no-obligation survey' },
];

const GOOGLE_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbwIkSKA8qGfLjJ3e_lUUJp5U0oNZLo51wpZtXvdvNSaPXNyynWrdtN-ZcoYql3hcAjy/exec';

export function HeroLeadForm({ city, service }: HeroLeadFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess]       = useState(false);
  const [formData, setFormData] = useState({
    fullName: '', phone: '', email: '',
    location: city || '', treatment: service || '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const payload = { ...formData, location: formData.location || city || '',
        treatment: formData.treatment || service || '',
        page: window.location.href, source: 'Driveway Gates London' };
      const res  = await fetch(GOOGLE_SCRIPT_URL, { method: 'POST', body: JSON.stringify(payload) });
      const text = await res.text();
      let data: { ok?: boolean; error?: string } = {};
      try { data = JSON.parse(text); } catch {}
      if (data?.ok === false) throw new Error(data.error || 'Submission failed');
      setIsSubmitting(false); setIsSuccess(true);
    } catch (err) {
      console.error(err); setIsSubmitting(false);
      alert('Something went wrong. Please try again.');
    }
  };

  const inputClass = 'w-full px-4 py-3 border-2 border-brand-200 bg-brand-50 text-brand-900 placeholder-brand-400 text-sm focus:outline-none focus:border-brand-500 transition font-body';

  if (isSuccess) {
    return (
      <div className="bg-brand-50 border-2 border-brand-900 p-8 flex flex-col items-center justify-center text-center gap-4 min-h-[380px]">
        <div className="w-14 h-14 bg-brand-500 flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-white" />
        </div>
        <h3 className="font-syne font-extrabold text-xl uppercase tracking-tight text-brand-900">Request Received!</h3>
        <p className="text-brand-600 text-sm max-w-xs">
          A vetted installer{city ? ` in ${city}` : ''} will call you back shortly — typically within 2 hours.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-brand-50 border-2 border-brand-900 p-6 md:p-8">
      {/* Header */}
      <div className="mb-5 border-b-2 border-brand-200 pb-5">
        <div className="font-syne font-bold text-[9px] tracking-[.2em] uppercase text-brand-500 mb-2">Free Matching Service</div>
        <h3 className="font-syne font-extrabold text-xl uppercase tracking-tight text-brand-900 leading-tight">
          Get a Fast Quote{city ? ` in ${city}` : ''}
        </h3>
        <p className="text-brand-600 text-sm mt-1">Tell us your number — a vetted local installer calls you back.</p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div className="relative">
          <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-500 pointer-events-none" />
          <input required name="phone" type="tel" value={formData.phone} onChange={handleChange}
            placeholder="Your phone number *"
            className={inputClass + ' pl-10 text-base font-semibold'} autoComplete="tel" />
        </div>
        <input required name="fullName" type="text" value={formData.fullName} onChange={handleChange}
          placeholder="Full Name *" className={inputClass} />
        <input required name="email" type="email" value={formData.email} onChange={handleChange}
          placeholder="Email Address *" className={inputClass} />
        <select required name="treatment" value={formData.treatment} onChange={handleChange}
          className={inputClass + ' appearance-none cursor-pointer'}>
          <option value="" disabled>What type of gate? *</option>
          {GATE_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
        </select>
        {!city && (
          <input required name="location" type="text" value={formData.location} onChange={handleChange}
            placeholder="Your London area or postcode *" className={inputClass} />
        )}
        <button disabled={isSubmitting} type="submit"
          className="w-full bg-brand-900 hover:bg-brand-500 disabled:opacity-60 text-brand-50 font-syne font-bold py-3.5 px-6 transition-colors text-sm tracking-[.1em] uppercase mt-1">
          {isSubmitting ? 'Sending…' : 'Request a Free Call Back →'}
        </button>
        <p className="text-center text-xs text-brand-500">
          Typically within <strong className="text-brand-700">2 hours</strong> · 100% free · No obligation
        </p>
      </form>

      <div className="mt-5 pt-5 border-t-2 border-brand-200 grid grid-cols-2 gap-3">
        {TRUST_BADGES.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2">
            <div className="w-7 h-7 border border-brand-400/30 flex items-center justify-center flex-shrink-0">
              <Icon className="w-3.5 h-3.5 text-brand-500" />
            </div>
            <span className="text-xs text-brand-600 leading-snug">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

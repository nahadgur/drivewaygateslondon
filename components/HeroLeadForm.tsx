'use client';

import { useState } from 'react';
import { CheckCircle, ShieldCheck, Clock, Award, Phone } from 'lucide-react';

interface HeroLeadFormProps {
  city?: string;
  service?: string;
}

const GATE_TYPES = [
  'Electric Sliding Gates',
  'Electric Swing Gates',
  'Wooden Driveway Gates',
  'Metal Driveway Gates',
  'Automated Gate Systems',
  'Gate Automation (Retrofit)',
  'Commercial Gates',
  'Gate Repair and Maintenance',
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
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    location: city || '',
    treatment: service || '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const payload = {
        fullName: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        location: formData.location || city || '',
        treatment: formData.treatment || service || '',
        page: window.location.href,
        source: 'Driveway Gates London',
      };

      const res = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify(payload),
      });

      const text = await res.text();
      let data: { ok?: boolean; error?: string } = {};
      try { data = JSON.parse(text); } catch {}

      if (data && data.ok === false) throw new Error(data.error || 'Submission failed');

      setIsSubmitting(false);
      setIsSuccess(true);
    } catch (err) {
      console.error(err);
      setIsSubmitting(false);
      alert('Something went wrong. Please try again.');
    }
  };

  const inputClass =
    'w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition';

  if (isSuccess) {
    return (
      <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-2xl border border-gray-100 flex flex-col items-center justify-center text-center gap-4 min-h-[380px]">
        <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center">
          <CheckCircle className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-display font-bold">Request Received!</h3>
        <p className="text-gray-600 max-w-xs">
          A vetted installer{city ? ` in ${city}` : ''} will call you back shortly. We typically reach out within 2 hours.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white text-gray-900 rounded-2xl p-6 md:p-8 shadow-2xl border border-gray-100">

      {/* Header */}
      <div className="mb-5">
        <span className="inline-block px-3 py-1 bg-brand-50 text-brand-600 text-xs font-bold uppercase tracking-wider rounded-full mb-3">
          Free Matching Service
        </span>
        <h3 className="text-2xl font-display font-bold leading-tight">
          Get a Fast Quote{city ? ` in ${city}` : ''}
        </h3>
        <p className="text-gray-500 text-sm mt-1">
          Tell us your number — a vetted local installer calls you back.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">

        {/* Phone first — the primary capture field */}
        <div className="relative">
          <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-500 pointer-events-none" />
          <input
            required
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your phone number *"
            className={inputClass + ' pl-10 text-base font-medium'}
            autoComplete="tel"
          />
        </div>

        <input
          required
          name="fullName"
          type="text"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Full Name *"
          className={inputClass}
        />

        <input
          required
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address *"
          className={inputClass}
        />

        <select
          required
          name="treatment"
          value={formData.treatment}
          onChange={handleChange}
          className={inputClass + ' appearance-none cursor-pointer'}
        >
          <option value="" disabled>What type of gate? *</option>
          {GATE_TYPES.map(t => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>

        {!city && (
          <input
            required
            name="location"
            type="text"
            value={formData.location}
            onChange={handleChange}
            placeholder="Your London area or postcode *"
            className={inputClass}
          />
        )}

        {/* CTA button */}
        <button
          disabled={isSubmitting}
          type="submit"
          className="w-full bg-brand-500 hover:bg-brand-600 active:scale-[0.98] disabled:opacity-60 text-white font-bold py-3.5 px-6 rounded-xl transition-all text-base mt-1 shadow-md shadow-brand-500/20"
        >
          {isSubmitting ? 'Sending…' : 'Request a Free Call Back →'}
        </button>

        {/* Micro-copy below button */}
        <p className="text-center text-xs text-gray-500 leading-relaxed">
          We typically call back within <strong className="text-gray-700">2 hours</strong> · 100% free, no obligation · No spam
        </p>
      </form>

      {/* Trust badges — inline, adjacent to form */}
      <div className="mt-5 pt-5 border-t border-gray-100 grid grid-cols-2 gap-3">
        {TRUST_BADGES.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2">
            <div className="w-7 h-7 bg-brand-50 rounded-lg flex items-center justify-center flex-shrink-0">
              <Icon className="w-3.5 h-3.5 text-brand-600" />
            </div>
            <span className="text-xs text-gray-600 leading-snug">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

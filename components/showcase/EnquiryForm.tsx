'use client';

import { useEffect, useRef, useState } from 'react';
import { GOOGLE_SCRIPT_URL, GATE_TYPES } from '@/data/leadForm';
import { gateTypeForSlug } from '@/components/HeroLeadForm';

export function EnquiryForm() {
  const [values, setValues] = useState({ fullName: '', phone: '', email: '', location: '', treatment: 'Not sure yet' });
  const [state, setState] = useState<'ready' | 'sending' | 'success'>('ready');
  const [error, setError] = useState('');
  const sending = useRef(false);
  const request = useRef<AbortController | null>(null);
  const result = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const treatment = gateTypeForSlug(params.get('gate') || undefined);
    setValues(current => ({ ...current, location: params.get('area') || '', treatment: GATE_TYPES.includes(treatment) ? treatment : 'Not sure yet' }));
    return () => request.current?.abort();
  }, []);
  useEffect(() => { if (state === 'success') result.current?.focus(); }, [state]);
  function change(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setValues(current => ({ ...current, [event.target.name]: event.target.value }));
  }
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending.current) return;
    sending.current = true; setState('sending'); setError('');
    const controller = new AbortController(); request.current = controller;
    const timeout = window.setTimeout(() => controller.abort(), 20000);
    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST', signal: controller.signal,
        body: JSON.stringify({ ...values, page: window.location.href, source: 'Driveway Gates London' }),
      });
      if (!response.ok) throw new Error('Submission failed');
      const text = await response.text();
      let data: { ok?: boolean; error?: string } = {};
      try { data = JSON.parse(text); } catch { /* The existing endpoint can return plain text. */ }
      if (data.ok === false) throw new Error(data.error || 'Submission failed');
      setState('success');
    } catch {
      setError('We could not send your enquiry. Please try again or call 020 3773 1310.');
      setState('ready');
    } finally { window.clearTimeout(timeout); sending.current = false; }
  }
  if (state === 'success') return <div className="quote-form enquiry-success" ref={result} tabIndex={-1} role="status">
    <h2>Request received</h2><p>Thank you. We will call you back to discuss your driveway gates and arrange a free site survey.</p>
    <a className="button phone-button" href="tel:+442037731310">020 3773 1310</a>
  </div>;
  return <form id="quote-form" className="quote-form" data-production="true" onSubmit={submit}>
    <h2>Get a Fast Quote</h2><p>Tell us your number and we will call you back.</p>
    <div className="form-row">
      <label>Full name<input name="fullName" autoComplete="name" required value={values.fullName} onChange={change} /></label>
      <label>Phone number<input name="phone" type="tel" autoComplete="tel" required pattern={"[+0-9\\(\\) .\\-]{7,}"} value={values.phone} onChange={change} /></label>
    </div>
    <label>Email address<input name="email" type="email" autoComplete="email" required value={values.email} onChange={change} /></label>
    <label>Area or postcode<input name="location" autoComplete="postal-code" required value={values.location} onChange={change} /></label>
    <label>Gate type<select name="treatment" value={values.treatment} onChange={change}>{GATE_TYPES.map(value => <option key={value}>{value}</option>)}</select></label>
    {error && <p className="enquiry-error" role="alert">{error}</p>}
    <button className="button" disabled={state === 'sending'} type="submit">{state === 'sending' ? 'Sending…' : 'Request a Free Call Back'} <span aria-hidden="true">→</span></button>
    <p className="form-note">By submitting, you agree that we can contact you about your enquiry. <a href="/privacy/">Privacy Policy</a></p>
  </form>;
}

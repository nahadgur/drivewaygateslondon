'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { CheckCircle, X } from 'lucide-react';
import { GATE_TYPES, GOOGLE_SCRIPT_URL } from '@/data/leadForm';
import { useScrollLock } from '@/lib/useScrollLock';

interface LeadFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LeadFormModal({ isOpen, onClose }: LeadFormModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess]       = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [animationState, setAnimationState] = useState<'idle' | 'entering' | 'exiting'>('idle');
  const modalRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const successHeadingRef = useRef<HTMLHeadingElement>(null);

  // Animation state management
  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setAnimationState('entering');
    } else if (shouldRender) {
      setAnimationState('exiting');
      const timer = setTimeout(() => {
        setShouldRender(false);
        setAnimationState('idle');
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen, shouldRender]);

  // Escape key to close
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Body scroll lock — shared owner, see lib/useScrollLock
  useScrollLock(isOpen);

  // Auto-focus first input on open + restore focus on close
  useEffect(() => {
    if (isOpen && modalRef.current) {
      previousFocusRef.current = document.activeElement as HTMLElement;
      const firstInput = modalRef.current.querySelector<HTMLElement>('input, select, button');
      firstInput?.focus();
    }
    if (!isOpen && previousFocusRef.current) {
      previousFocusRef.current.focus();
      previousFocusRef.current = null;
    }
  }, [isOpen]);

  // Move focus to the confirmation when the form is replaced by it.
  useEffect(() => {
    if (isSuccess) successHeadingRef.current?.focus();
  }, [isSuccess]);

  // Focus trap — keep Tab cycling within the modal
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key !== 'Tab' || !modalRef.current) return;
    const focusable = modalRef.current.querySelectorAll<HTMLElement>(
      'input, select, textarea, button, [tabindex]:not([tabindex="-1"])'
    );
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }, []);

  if (!shouldRender) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);
    try {
      const formData = new FormData(e.currentTarget);
      const payload = {
        phone: formData.get('phone') as string,
        fullName: formData.get('fullName') as string,
        email: formData.get('email') as string,
        treatment: formData.get('treatment') as string,
        location: formData.get('location') as string,
        page: window.location.href,
        source: 'Driveway Gates London',
      };

      const res = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify(payload),
      });

      const text = await res.text();
      let data: any = {};
      try { data = JSON.parse(text); } catch {}

      if (data && data.ok === false) throw new Error(data.error || 'Submission failed');

      setIsSubmitting(false);
      setIsSuccess(true);
    } catch (err) {
      console.error(err);
      setIsSubmitting(false);
      setErrorMessage('Something went wrong. Please check your details and try again.');
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  const labelClass = "block text-xs font-bold text-gray-600 mb-1 ml-1";
  const inputClass =
    "w-full px-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition";

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm
        ${animationState === 'entering' ? 'animate-backdrop-in' : animationState === 'exiting' ? 'animate-backdrop-out' : 'opacity-100'}`}
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="lead-modal-title"
        className={`relative w-full max-w-lg max-h-[calc(100dvh-2rem)] overflow-y-auto overflow-x-hidden bg-white rounded-2xl shadow-2xl
          ${animationState === 'entering' ? 'animate-modal-in' : 'animate-modal-out'}`}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 flex items-center justify-center min-w-[44px] min-h-[44px] text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-all z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-5 sm:p-8">
          {isSuccess ? (
            <div role="status" aria-live="polite" className="flex flex-col items-center text-center py-8 space-y-4">
              <div aria-hidden className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h2 id="lead-modal-title" ref={successHeadingRef} tabIndex={-1} className="text-2xl font-display font-bold text-gray-900 outline-none">Request Received!</h2>
              <p className="text-gray-600">Thanks, your request is in. We will call you back within <strong className="text-gray-800">2 hours</strong> to arrange your free site survey. Check your email for confirmation.</p>
              <button
                onClick={() => { setIsSuccess(false); onClose(); }}
                className="mt-2 bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 px-8 rounded-xl transition-colors text-sm shadow-md shadow-brand-600/20"
              >
                Done
              </button>
            </div>
          ) : (
            <>
              <div className="mb-4 sm:mb-6">
                <span className="hidden sm:inline-block px-3 py-1 bg-brand-50 text-brand-600 text-xs font-bold uppercase tracking-wider rounded-full mb-3">
                  Free Site Survey
                </span>
                <h2 id="lead-modal-title" className="text-xl sm:text-2xl font-display font-bold text-gray-900">Book Your Free Site Survey</h2>
                <p className="hidden sm:block text-gray-600 text-sm mt-1">Tell us about your project and we will call you back to arrange a free survey.</p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-2.5 sm:gap-3">
                {errorMessage && (
                  <div role="alert" className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                    <span className="text-red-500 text-lg leading-none mt-0.5">!</span>
                    <div className="flex-1">
                      <p className="text-red-800 text-sm font-medium">{errorMessage}</p>
                    </div>
                    <button type="button" onClick={() => setErrorMessage(null)} className="flex items-center justify-center min-w-[44px] min-h-[44px] -m-2 text-red-400 hover:text-red-600 transition-colors" aria-label="Dismiss error">
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                )}
                <div>
                  <label htmlFor="lead-phone" className={labelClass}>Phone number <span className="text-red-400">*</span></label>
                  <input id="lead-phone" required name="phone" type="tel" placeholder="e.g. 07700 900123" className={inputClass} autoComplete="tel" />
                </div>
                <div>
                  <label htmlFor="lead-name" className={labelClass}>Full name <span className="text-red-400">*</span></label>
                  <input id="lead-name" required name="fullName" type="text" placeholder="e.g. James Patterson" className={inputClass} autoComplete="name" />
                </div>
                <div>
                  <label htmlFor="lead-email" className={labelClass}>Email address <span className="text-red-400">*</span></label>
                  <input id="lead-email" required name="email" type="email" placeholder="e.g. james@example.com" className={inputClass} autoComplete="email" />
                </div>
                <div>
                  <label htmlFor="lead-gate-type" className={labelClass}>Type of gate <span className="text-red-400">*</span></label>
                  <select id="lead-gate-type" required name="treatment" className={inputClass + ' appearance-none cursor-pointer'} defaultValue="">
                    <option value="" disabled>Select a gate type</option>
                    {GATE_TYPES.map(t => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="lead-location" className={labelClass}>Your area or postcode <span className="text-red-400">*</span></label>
                  <input id="lead-location" required name="location" type="text" placeholder="e.g. Barnet or N11" className={inputClass} />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-600 hover:bg-brand-700 active:scale-[0.98] disabled:opacity-60 text-white font-bold py-3.5 px-6 rounded-xl transition-all text-base mt-1 shadow-md shadow-brand-600/20"
                >
                  {isSubmitting ? 'Sending…' : 'Request a Free Call Back →'}
                </button>

                <p className="text-center text-xs text-gray-500 leading-relaxed">
                  We typically call back within <strong className="text-gray-700">2 hours</strong> · 100% free, no obligation
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

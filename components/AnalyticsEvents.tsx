'use client';

import { useEffect } from 'react';
import { trackPhoneClick } from '@/lib/analytics';

export function AnalyticsEvents() {
  useEffect(() => {
    function click(event: MouseEvent) {
      const target = event.target instanceof Element ? event.target.closest('a[href^="tel:"]') : null;
      if (!target) return;
      const placement = target.closest('#mobile-menu') ? 'mobile_menu'
        : target.closest('.mobile-enquiry-bar') ? 'mobile_bar'
        : target.closest('.site-header') ? 'header'
        : target.closest('.site-footer,footer') ? 'footer' : 'content';
      trackPhoneClick(placement);
    }
    document.addEventListener('click', click);
    return () => document.removeEventListener('click', click);
  }, []);
  return null;
}

'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { initShowcase } from './interactions';

export function Enhancements() {
  const pathname = usePathname();
  useEffect(() => initShowcase(), [pathname]);
  return null;
}

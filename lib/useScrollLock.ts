'use client';

import { useEffect } from 'react';

/**
 * Body scroll lock with a single owner.
 *
 * The mobile menu and the lead modal can both be open across the same render
 * (tapping "Get a Free Quote" inside the menu closes the menu and opens the
 * modal in one batch). When each component wrote `document.body.style.overflow`
 * itself, whichever effect ran last won: the modal captured the menu's 'hidden'
 * as the value to restore, the menu then cleared it — so the modal opened over a
 * scrollable page, and closing it restored 'hidden' permanently.
 *
 * A module-level count keeps the lock owned by the *set* of lockers rather than
 * whichever one ran last. The original value is captured on the first lock and
 * restored only when the last one releases.
 */
let lockCount = 0;
let restoreValue = '';

export function useScrollLock(active: boolean) {
  useEffect(() => {
    if (!active) return;

    if (lockCount === 0) {
      restoreValue = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
    }
    lockCount += 1;

    return () => {
      lockCount -= 1;
      if (lockCount === 0) document.body.style.overflow = restoreValue;
    };
  }, [active]);
}

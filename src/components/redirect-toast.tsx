'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { toast } from 'sonner';

import { deleteCookieByKey, getCookieByKey } from '@/actions/cookies';

export function RedirectToast() {
  const pathname = usePathname();

  useEffect(() => {
    let mounted = true;

    const showCookieToast = async () => {
      const message = await getCookieByKey('toast');
      if (!mounted || !message) return;

      await deleteCookieByKey('toast');
      if (mounted) toast.success(message);
    };

    const timer = setTimeout(showCookieToast, 100);
    return () => {
      mounted = false;
      clearTimeout(timer);
    };
  }, [pathname]);
  return null;
}

'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { useFunnelStore } from '@/lib/store';
import { FUNNEL_SCREENS } from '@/lib/funnel-data';

function HomeRedirect() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { resetFunnel, currentSlug } = useFunnelStore();
  
  useEffect(() => {
    // Reset funnel if ?reset=true is in URL
    if (searchParams.get('reset') === 'true') {
      resetFunnel();
      router.replace(`/${FUNNEL_SCREENS[0].slug}`);
      return;
    }
    
    // Redirect to current or first screen
    const targetSlug = currentSlug || FUNNEL_SCREENS[0].slug;
    router.replace(`/${targetSlug}`);
  }, [searchParams, resetFunnel, router, currentSlug]);
  
  return (
    <div className="min-h-screen bg-prism-black flex items-center justify-center">
      <div className="text-prism-muted">Loading...</div>
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-prism-black" />}>
      <HomeRedirect />
    </Suspense>
  );
}

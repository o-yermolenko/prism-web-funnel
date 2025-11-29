'use client';

import { Suspense, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import ScreenRenderer from '@/components/ScreenRenderer';
import { useFunnelStore } from '@/lib/store';

function FunnelWithReset() {
  const searchParams = useSearchParams();
  const resetFunnel = useFunnelStore((state) => state.resetFunnel);
  
  useEffect(() => {
    // Reset funnel if ?reset=true is in URL
    if (searchParams.get('reset') === 'true') {
      resetFunnel();
      // Remove reset param from URL
      window.history.replaceState({}, '', '/');
    }
  }, [searchParams, resetFunnel]);
  
  return <ScreenRenderer />;
}

export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-prism-black" />}>
      <FunnelWithReset />
    </Suspense>
  );
}

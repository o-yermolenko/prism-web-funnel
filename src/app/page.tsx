'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import ScreenRenderer from '@/components/ScreenRenderer';
import { useFunnelStore } from '@/lib/store';

export default function Home() {
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

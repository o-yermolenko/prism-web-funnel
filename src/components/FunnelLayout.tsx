'use client';

import { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useFunnelStore } from '@/lib/store';
import { getScreenBySlug } from '@/lib/funnel-data';
import ProgressLine from './ProgressLine';

interface FunnelLayoutProps {
  children: ReactNode;
  showProgress?: boolean;
  showBackButton?: boolean;
  onBack?: () => void;
}

export default function FunnelLayout({
  children,
  showProgress = true,
  showBackButton = true,
  onBack,
}: FunnelLayoutProps) {
  const router = useRouter();
  const { currentSlug, getPrevSlug } = useFunnelStore();
  const currentScreen = getScreenBySlug(currentSlug);
  const isFirstScreen = currentScreen?.id === 1;

  // Scroll to top when screen changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentSlug]);

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      const prevSlug = getPrevSlug();
      if (prevSlug) {
        router.push(`/${prevSlug}`);
      }
    }
  };

  return (
    <div className="relative min-h-screen min-h-[100dvh] bg-prism-black flex flex-col overflow-x-hidden">
      {/* Progress bar with step counter at the very top */}
      {showProgress && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-prism-black/90 backdrop-blur-sm border-b border-white/5">
          <ProgressLine />
        </div>
      )}

      {/* Back button - positioned below progress bar */}
      {showBackButton && !isFirstScreen && (
        <div className="fixed top-14 left-4 sm:top-16 sm:left-5 z-50">
          <button
            onClick={handleBack}
            className="relative flex items-center justify-center w-10 h-10 rounded-xl backdrop-blur-md bg-prism-surface/80 border border-white/10 text-prism-muted-light hover:text-prism-white hover:bg-prism-surface hover:border-prism-electric-blue/30 transition-all duration-300"
            aria-label="Go back"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>
        </div>
      )}

      {/* Main content - proper spacing below progress bar on mobile */}
      <main className="flex-1 flex flex-col items-center px-4 sm:px-6 pt-28 sm:pt-24 pb-8 sm:pb-12 sm:justify-center">
        <div className="w-full flex flex-col items-center sm:justify-center">
          {children}
        </div>
      </main>
    </div>
  );
}

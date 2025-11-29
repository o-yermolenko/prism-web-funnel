'use client';

import { ReactNode } from 'react';
import { useFunnelStore } from '@/lib/store';
import FrequencyWave from './FrequencyWave';

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
  const { currentScreen, prevScreen } = useFunnelStore();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      prevScreen();
    }
  };

  return (
    <div className="relative min-h-screen min-h-[100dvh] bg-prism-black flex flex-col overflow-x-hidden">
      {/* Frequency wave progress indicator at top - thin and subtle */}
      {showProgress && (
        <div className="fixed top-0 left-0 right-0 z-10 pointer-events-none">
          <div className="h-10 mt-3">
            <FrequencyWave position="top" />
          </div>
        </div>
      )}

      {/* Back button with frosted glass background - higher z-index */}
      {showBackButton && currentScreen > 1 && (
        <div className="fixed top-4 left-4 sm:top-5 sm:left-5 z-50">
          <button
            onClick={handleBack}
            className="relative flex items-center justify-center w-10 h-10 rounded-full backdrop-blur-md bg-white/5 border border-white/10 text-prism-muted hover:text-prism-white hover:bg-white/10 transition-all duration-300"
            aria-label="Go back"
          >
            <svg
              width="20"
              height="20"
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

      {/* Main content - higher z-index than wave so text covers it when scrolling */}
      <main className="relative z-20 flex-1 flex flex-col items-center sm:justify-center px-4 sm:px-6 pt-4 sm:pt-6 pb-8 sm:pb-12 overflow-y-auto">
        {/* Gradient cover that fades from transparent (showing wave) to solid black */}
        <div className="w-full h-10 bg-gradient-to-b from-transparent via-prism-black/50 to-prism-black" />
        {/* Content with solid background */}
        <div className="w-full flex-1 flex flex-col items-center sm:justify-center bg-prism-black -mt-2">
          {children}
        </div>
      </main>
    </div>
  );
}

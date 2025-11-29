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
    <div className="relative min-h-screen bg-prism-black flex flex-col">
      {/* Back button */}
      {showBackButton && currentScreen > 1 && (
        <button
          onClick={handleBack}
          className="fixed top-6 left-6 z-50 text-prism-muted hover:text-prism-white transition-colors duration-300 p-2 -m-2"
          aria-label="Go back"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-20">
        {children}
      </main>

      {/* Frequency wave progress indicator */}
      {showProgress && (
        <div className="fixed bottom-0 left-0 right-0 h-16 pointer-events-none">
          <FrequencyWave />
        </div>
      )}
    </div>
  );
}


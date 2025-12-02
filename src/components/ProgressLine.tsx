'use client';

import { useFunnelStore } from '@/lib/store';
import { FUNNEL_SCREENS, getScreenIndex } from '@/lib/funnel-data';

export default function ProgressLine() {
  const { getProgress, currentSlug } = useFunnelStore();
  const progress = getProgress();
  
  // Calculate step display (skip welcome screen in count)
  const totalSteps = FUNNEL_SCREENS.length - 1; // Exclude gender screen
  const currentIndex = getScreenIndex(currentSlug);
  const currentStep = Math.max(1, currentIndex); // Start from 1 after gender

  return (
    <div className="w-full flex items-center gap-4 px-4 py-2 bg-prism-black/80 backdrop-blur-sm">
      {/* Step counter */}
      <div className="flex-shrink-0">
        <span className="font-raw text-xs text-prism-muted-light tracking-wider">
          <span className="text-prism-white font-medium">{currentStep}</span>
          <span className="text-prism-muted mx-1">/</span>
          <span>{totalSteps}</span>
        </span>
      </div>
      
      {/* Progress bar */}
      <div className="flex-1 h-[3px] bg-prism-muted/20 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-prism-electric-blue to-prism-cyan rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

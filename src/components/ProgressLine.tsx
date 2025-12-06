'use client';

import { useFunnelStore } from '@/lib/store';
import { FUNNEL_SCREENS, getScreenIndex } from '@/lib/funnel-data';

export default function ProgressLine() {
  const { getProgress, currentSlug } = useFunnelStore();
  const progress = getProgress();
  
  // Calculate step display
  const totalSteps = FUNNEL_SCREENS.length - 1;
  const currentIndex = getScreenIndex(currentSlug);
  const currentStep = Math.max(1, currentIndex);

  return (
    <div className="w-full flex items-center gap-4 px-4 py-3 bg-prism-black">
      {/* Step counter - monospace */}
      <div className="flex-shrink-0">
        <span className="font-raw text-xs text-prism-muted tracking-badge">
          <span className="text-prism-white">{currentStep}</span>
          <span className="text-prism-border mx-1">/</span>
          <span>{totalSteps}</span>
        </span>
      </div>
      
      {/* Progress bar - sharp, no rounded corners */}
      <div className="flex-1 h-[2px] bg-prism-border overflow-hidden">
        <div
          className="h-full bg-prism-electric-blue transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

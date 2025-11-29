'use client';

import { useFunnelStore } from '@/lib/store';

export default function ProgressLine() {
  const { getProgress } = useFunnelStore();
  const progress = getProgress();

  return (
    <div className="w-full h-[2px] bg-prism-muted/20">
      <div
        className="h-full bg-prism-electric-blue transition-all duration-500 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}


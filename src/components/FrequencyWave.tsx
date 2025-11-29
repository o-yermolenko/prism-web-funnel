'use client';

import { useFunnelStore } from '@/lib/store';
import { useMemo } from 'react';

export default function FrequencyWave() {
  const { getProgress } = useFunnelStore();
  const progress = getProgress();
  
  // Generate wave bars with varying heights based on progress
  const bars = useMemo(() => {
    const count = 60;
    return Array.from({ length: count }, (_, i) => {
      // Create a wave pattern
      const position = i / count;
      const waveIntensity = Math.sin(position * Math.PI * 4 + Date.now() / 1000) * 0.3 + 0.7;
      const progressFactor = position <= progress / 100 ? 1 : 0.2;
      
      return {
        height: waveIntensity * progressFactor,
        active: position <= progress / 100,
        index: i,
      };
    });
  }, [progress]);

  return (
    <div className="w-full h-full flex items-end justify-center gap-[2px] px-4">
      {bars.map((bar) => (
        <div
          key={bar.index}
          className={`w-[2px] rounded-full transition-all duration-500 ease-out ${
            bar.active 
              ? 'bg-gradient-to-t from-prism-electric-blue/30 to-prism-electric-blue' 
              : 'bg-prism-muted/20'
          }`}
          style={{
            height: `${bar.height * 32}px`,
            animationDelay: `${bar.index * 50}ms`,
          }}
        />
      ))}
      
      {/* Subtle glow effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 50% 100% at ${progress}% 100%, rgba(0, 102, 255, 0.1) 0%, transparent 70%)`,
        }}
      />
    </div>
  );
}


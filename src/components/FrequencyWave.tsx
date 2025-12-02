'use client';

import { useFunnelStore } from '@/lib/store';
import { useEffect, useState, useRef } from 'react';

interface FrequencyWaveProps {
  position?: 'top' | 'bottom';
}

export default function FrequencyWave({ position = 'top' }: FrequencyWaveProps) {
  const { getProgress, currentSlug } = useFunnelStore();
  const progress = getProgress();
  const [time, setTime] = useState(0);
  const [transitionAmplitude, setTransitionAmplitude] = useState(1);
  const prevScreenRef = useRef(currentSlug);
  
  // Slow, deliberate animation
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(t => t + 0.02);
    }, 16);
    return () => clearInterval(interval);
  }, []);
  
  // Gentle "settling" transition when screen changes
  useEffect(() => {
    if (currentSlug !== prevScreenRef.current) {
      setTransitionAmplitude(1.4); // Gentle surge
      prevScreenRef.current = currentSlug;
      
      // Settle back slowly
      const timeout = setTimeout(() => {
        setTransitionAmplitude(1);
      }, 500);
      
      return () => clearTimeout(timeout);
    }
  }, [currentSlug]);
  
  const generateWavePath = (width: number, height: number) => {
    const points: string[] = [];
    const segments = 80;
    const centerY = height / 2;
    const progressX = (progress / 100) * width;
    
    for (let i = 0; i <= segments; i++) {
      const x = (i / segments) * width;
      
      // Base amplitude with transition effect
      const baseAmplitude = 6 * transitionAmplitude;
      
      // Amplitude fades after progress point
      const amplitude = x <= progressX 
        ? baseAmplitude 
        : baseAmplitude * 0.15;
      
      const y = centerY + Math.sin((x * 0.02) + time) * amplitude;
      
      points.push(i === 0 ? `M ${x} ${y}` : `L ${x} ${y}`);
    }
    
    return points.join(' ');
  };

  const width = 600;
  const height = 32;
  
  return (
    <div className="w-full h-8 relative overflow-hidden">
      <svg 
        viewBox={`0 0 ${width} ${height}`} 
        className="w-full h-full" 
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0066ff" stopOpacity="0.8" />
            <stop offset={`${progress}%`} stopColor="#0066ff" stopOpacity="1" />
            <stop offset={`${Math.min(progress + 5, 100)}%`} stopColor="#0066ff" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#0066ff" stopOpacity="0.08" />
          </linearGradient>
          
          <filter id="glow">
            <feGaussianBlur stdDeviation="1.5" result="blur"/>
            <feMerge>
              <feMergeNode in="blur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Single clean wave */}
        <path
          d={generateWavePath(width, height)}
          fill="none"
          stroke="url(#waveGradient)"
          strokeWidth={2}
          strokeLinecap="round"
          filter="url(#glow)"
          className="transition-all duration-500 ease-out"
        />
      </svg>
    </div>
  );
}

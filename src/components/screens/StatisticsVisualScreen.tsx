'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useFunnelNavigation } from '@/hooks/useFunnelNavigation';
import FunnelLayout from '../FunnelLayout';
import { FunnelScreen } from '@/types/funnel';

interface StatisticsVisualScreenProps {
  screen: FunnelScreen;
}

export default function StatisticsVisualScreen({ screen }: StatisticsVisualScreenProps) {
  const { goToNext } = useFunnelNavigation();
  const [animatedValue, setAnimatedValue] = useState(0);
  
  const targetValue = parseInt(screen.statistics?.value || '78');

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = targetValue / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= targetValue) {
        setAnimatedValue(targetValue);
        clearInterval(timer);
      } else {
        setAnimatedValue(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [targetValue]);

  return (
    <FunnelLayout showProgress={screen.showProgress} showBackButton={screen.showBackButton}>
      <div className="w-full max-w-xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-6"
        >
          <span className="text-xs tracking-[0.15em] text-prism-warning font-raw uppercase border border-prism-warning/30 bg-prism-warning/10 px-4 py-2 rounded-full">
            A Surprising Statistic
          </span>
        </motion.div>

        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-2xl md:text-3xl lg:text-4xl font-semibold text-prism-white mb-3 tracking-tight"
        >
          {screen.header}
        </motion.h1>

        {screen.subheader && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-prism-muted-light mb-10"
          >
            {screen.subheader}
          </motion.p>
        )}

        {/* Circular progress visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-56 h-56 mx-auto mb-8"
        >
          {/* Background circle */}
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="8"
            />
            {/* Animated progress circle */}
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={`${(animatedValue / 100) * 283} 283`}
              className="transition-all duration-100"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ff9100" />
                <stop offset="100%" stopColor="#ff3d71" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Center text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-5xl font-bold text-prism-white">
              {animatedValue}%
            </span>
          </div>
        </motion.div>

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg text-prism-white mb-3 max-w-md mx-auto"
        >
          {screen.statistics?.label}
        </motion.p>

        {/* Source */}
        {screen.statistics?.source && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-xs text-prism-muted mb-10"
          >
            Source: {screen.statistics.source}
          </motion.p>
        )}

        {/* Impact message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="p-5 bg-prism-urgency/10 border border-prism-urgency/20 rounded-2xl mb-10 max-w-md mx-auto"
        >
          <p className="text-prism-white text-sm">
            This highlights how challenging it is to find genuine understanding—even with the best intentions.
          </p>
        </motion.div>

        {/* Continue button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <button onClick={() => goToNext()} className="btn-primary">
            Continue
          </button>
        </motion.div>
      </div>
    </FunnelLayout>
  );
}


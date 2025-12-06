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
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl lg:text-4xl font-refined font-medium text-prism-white mb-3 tracking-tight"
        >
          {screen.header}
        </motion.h1>

        {screen.subheader && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-prism-secondary mb-12"
          >
            {screen.subheader}
          </motion.p>
        )}

        {/* Large statistic - monospace */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <span className="font-raw text-8xl md:text-9xl text-prism-electric-blue tracking-tight">
            {animatedValue}
          </span>
          <span className="font-raw text-4xl text-prism-muted">%</span>
        </motion.div>

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg text-prism-secondary mb-4 max-w-md mx-auto"
        >
          {screen.statistics?.label}
        </motion.p>

        {/* Source */}
        {screen.statistics?.source && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="font-raw text-xs text-prism-muted tracking-badge uppercase mb-12"
          >
            {screen.statistics.source}
          </motion.p>
        )}

        {/* Continue button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <button onClick={() => goToNext()} className="btn-primary">
            Continue
          </button>
        </motion.div>
      </div>
    </FunnelLayout>
  );
}

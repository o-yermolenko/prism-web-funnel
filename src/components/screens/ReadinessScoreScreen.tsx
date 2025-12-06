'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useFunnelNavigation } from '@/hooks/useFunnelNavigation';
import FunnelLayout from '../FunnelLayout';
import { FunnelScreen } from '@/types/funnel';

interface ReadinessScoreScreenProps {
  screen: FunnelScreen;
}

export default function ReadinessScoreScreen({ screen }: ReadinessScoreScreenProps) {
  const { goToNext } = useFunnelNavigation();
  const [animatedScore, setAnimatedScore] = useState(0);
  const [showFactors, setShowFactors] = useState(false);
  
  const readiness = screen.readinessScore;
  const targetScore = readiness?.score || 87;

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = targetScore / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= targetScore) {
        setAnimatedScore(targetScore);
        clearInterval(timer);
        setTimeout(() => setShowFactors(true), 500);
      } else {
        setAnimatedScore(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [targetScore]);

  if (!readiness) return null;

  return (
    <FunnelLayout showProgress={screen.showProgress} showBackButton={screen.showBackButton}>
      <div className="w-full max-w-xl mx-auto text-center px-4">
        {/* Badge - monospace */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="inline-block mb-8"
        >
          <span className="font-raw text-xs tracking-badge text-prism-success uppercase border border-prism-success/30 px-4 py-2">
            Analysis Complete
          </span>
        </motion.div>

        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-2xl md:text-3xl font-refined font-medium text-prism-white mb-10 tracking-tight"
        >
          {screen.header}
        </motion.h1>

        {/* Score - large monospace number */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <span className="font-raw text-7xl text-prism-white tracking-tight">
            {animatedScore}
          </span>
          <span className="font-raw text-3xl text-prism-muted ml-1">%</span>
          <div className="mt-2">
            <span className="font-raw text-xs text-prism-success uppercase tracking-badge">
              {readiness.label}
            </span>
          </div>
        </motion.div>

        {/* Insight */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg text-prism-secondary mb-10 max-w-md mx-auto"
        >
          {readiness.insight}
        </motion.p>

        {/* Factors - sharp boxes */}
        {showFactors && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-6 border border-prism-border mb-10"
          >
            <p className="font-raw text-xs text-prism-muted uppercase tracking-badge mb-6">
              Readiness Factors
            </p>
            
            <div className="space-y-4">
              {readiness.factors.map((factor, index) => (
                <motion.div
                  key={factor.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-prism-secondary">{factor.label}</span>
                    <span className="font-raw text-sm text-prism-white">{factor.value}%</span>
                  </div>
                  <div className="h-1 bg-prism-border overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${factor.value}%` }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      className="h-full bg-prism-electric-blue"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <button onClick={() => goToNext()} className="btn-primary w-full sm:w-auto">
            Continue
          </button>
        </motion.div>
      </div>
    </FunnelLayout>
  );
}

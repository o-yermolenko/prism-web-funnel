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
    // Animate score counting up
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
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-block mb-6"
        >
          <span className="text-xs tracking-[0.15em] text-prism-success font-raw uppercase border border-prism-success/30 bg-prism-success/10 px-4 py-2 rounded-full">
            Analysis Complete
          </span>
        </motion.div>

        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-2xl md:text-3xl font-semibold text-prism-white mb-8 tracking-tight"
        >
          {screen.header}
        </motion.h1>

        {/* Score Circle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-48 h-48 mx-auto mb-8"
        >
          {/* Background circle */}
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="6"
            />
            {/* Animated progress circle */}
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="url(#scoreGradient)"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray={`${(animatedScore / 100) * 283} 283`}
              className="transition-all duration-100"
            />
            <defs>
              <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00e676" />
                <stop offset="100%" stopColor="#00d4ff" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Center content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-5xl font-bold text-prism-white">
              {animatedScore}%
            </span>
            <span className="text-sm text-prism-success font-semibold uppercase tracking-wider mt-1">
              {readiness.label}
            </span>
          </div>
        </motion.div>

        {/* Insight */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg text-prism-cyan mb-8 max-w-md mx-auto"
        >
          {readiness.insight}
        </motion.p>

        {/* Factors */}
        {showFactors && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-6 bg-prism-surface border border-white/5 rounded-2xl mb-8"
          >
            <p className="text-xs text-prism-muted uppercase tracking-wider mb-4">
              Your Readiness Factors
            </p>
            
            <div className="space-y-4">
              {readiness.factors.map((factor, index) => (
                <motion.div
                  key={factor.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-prism-muted-light">{factor.label}</span>
                    <span className="text-sm font-semibold text-prism-white">{factor.value}%</span>
                  </div>
                  <div className="h-2 bg-prism-muted/20 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${factor.value}%` }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      className="h-full bg-gradient-to-r from-prism-electric-blue to-prism-success rounded-full"
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
            See My Transformation Path
          </button>
        </motion.div>
      </div>
    </FunnelLayout>
  );
}


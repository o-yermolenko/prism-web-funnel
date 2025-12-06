'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useFunnelNavigation } from '@/hooks/useFunnelNavigation';
import FunnelLayout from '../FunnelLayout';
import { FunnelScreen } from '@/types/funnel';

interface GenderScreenProps {
  screen: FunnelScreen;
}

// Rotating unfiltered thoughts - product demo + social proof
const UNFILTERED_THOUGHTS = [
  "I'm exhausted from pretending to be okay",
  "I wish someone would finally see the real me",
  "I have people around me but I still feel alone",
  "I'm tired of translating myself for everyone",
];

export default function GenderScreen({ screen }: GenderScreenProps) {
  const { saveAnswerAndNextDelayed } = useFunnelNavigation();
  const [selected, setSelected] = useState<string | null>(null);
  const [onlineCount, setOnlineCount] = useState(148);
  const [currentThought, setCurrentThought] = useState(0);

  // Simulate live activity
  useEffect(() => {
    const interval = setInterval(() => {
      setOnlineCount(prev => {
        const change = Math.random() > 0.5 ? 1 : -1;
        return Math.max(142, Math.min(158, prev + change));
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Rotate through unfiltered thoughts
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentThought(prev => (prev + 1) % UNFILTERED_THOUGHTS.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const handleSelect = (optionId: string) => {
    setSelected(optionId);
    saveAnswerAndNextDelayed(optionId, 400);
  };

  return (
    <FunnelLayout showProgress={false} showBackButton={false}>
      {/* Subtle background frequency wave */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <svg 
          className="absolute bottom-0 left-0 w-full h-64 opacity-[0.03]"
          viewBox="0 0 1200 200"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,100 Q150,50 300,100 T600,100 T900,100 T1200,100 L1200,200 L0,200 Z"
            fill="url(#waveGradient)"
            animate={{
              d: [
                "M0,100 Q150,50 300,100 T600,100 T900,100 T1200,100 L1200,200 L0,200 Z",
                "M0,100 Q150,150 300,100 T600,100 T900,100 T1200,100 L1200,200 L0,200 Z",
                "M0,100 Q150,50 300,100 T600,100 T900,100 T1200,100 L1200,200 L0,200 Z",
              ]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0066ff" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#00d4ff" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#0066ff" stopOpacity="0.5" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative w-full max-w-lg mx-auto px-4 sm:px-6 py-6 sm:py-8 flex flex-col min-h-screen">
        
        {/* Top row: Badge + Live count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-between mb-6 sm:mb-8"
        >
          {/* Monospace badge */}
          <span className="font-raw text-xs tracking-badge text-prism-muted uppercase border border-prism-border px-3 py-1.5">
            3-MINUTE QUIZ
          </span>

          {/* Live pulse indicator */}
          <div className="flex items-center gap-2">
            <motion.span 
              className="relative flex h-2 w-2"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-prism-success opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-prism-success"></span>
            </motion.span>
            <span className="font-raw text-sm text-prism-muted">
              <span className="text-prism-success">{onlineCount}</span> online
            </span>
          </div>
        </motion.div>

        {/* Main content - centered */}
        <div className="flex-1 flex flex-col justify-center">
          
          {/* Rotating unfiltered thoughts - CREATES LIFE */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6"
          >
            <div className="border border-prism-border/50 px-4 py-3 mx-auto max-w-sm">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentThought}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="font-raw text-sm text-prism-secondary text-center leading-relaxed"
                >
                  "{UNFILTERED_THOUGHTS[currentThought]}"
                </motion.p>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Headline with subtle glow */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-refined font-medium text-prism-white text-center mb-4 tracking-tight leading-tight"
          >
            Your Mind.
            <br />
            <motion.span 
              className="text-prism-electric-blue"
              animate={{ 
                textShadow: [
                  '0 0 20px rgba(0, 102, 255, 0)',
                  '0 0 20px rgba(0, 102, 255, 0.3)',
                  '0 0 20px rgba(0, 102, 255, 0)',
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              Finally Unfiltered.
            </motion.span>
          </motion.h1>

          {/* Subhead - action-oriented */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="text-base sm:text-lg text-prism-secondary text-center mb-6 sm:mb-8 max-w-xs mx-auto"
          >
            3 minutes to understand what you've never said out loud
          </motion.p>

          {/* Gender Cards - Optimized for mobile (smaller aspect ratio) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-row gap-3 justify-center mb-6 w-full px-2"
          >
            {/* Male Card */}
            <motion.button
              onClick={() => handleSelect('male')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`group relative flex-1 aspect-[4/5] sm:aspect-[3/4] max-w-[160px] sm:max-w-[180px] rounded-lg transition-all duration-300 border overflow-hidden ${
                selected === 'male'
                  ? 'border-prism-electric-blue bg-prism-surface shadow-[0_0_30px_rgba(0,102,255,0.25)]'
                  : 'border-prism-border hover:border-prism-electric-blue hover:shadow-[0_0_20px_rgba(0,102,255,0.15)] bg-prism-surface/50'
              }`}
            >
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-prism-black/80 via-transparent to-transparent" />
              
              {/* Content at bottom - 44px+ touch target */}
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 flex items-center justify-between">
                <span className={`font-refined text-base sm:text-lg font-medium transition-colors duration-300 ${
                  selected === 'male'
                    ? 'text-prism-white'
                    : 'text-prism-white/90 group-hover:text-prism-white'
                }`}>
                  Male
                </span>
                <motion.div 
                  className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-all duration-300 ${
                    selected === 'male' 
                      ? 'bg-prism-electric-blue' 
                      : 'bg-prism-border/50 group-hover:bg-prism-electric-blue/50'
                  }`}
                  animate={selected !== 'male' ? { x: [0, 2, 0] } : {}}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <svg 
                    className="w-5 h-5 text-prism-white"
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </motion.div>
              </div>
            </motion.button>

            {/* Female Card */}
            <motion.button
              onClick={() => handleSelect('female')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`group relative flex-1 aspect-[4/5] sm:aspect-[3/4] max-w-[160px] sm:max-w-[180px] rounded-lg transition-all duration-300 border overflow-hidden ${
                selected === 'female'
                  ? 'border-prism-electric-blue bg-prism-surface shadow-[0_0_30px_rgba(0,102,255,0.25)]'
                  : 'border-prism-border hover:border-prism-electric-blue hover:shadow-[0_0_20px_rgba(0,102,255,0.15)] bg-prism-surface/50'
              }`}
            >
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-prism-black/80 via-transparent to-transparent" />
              
              {/* Content at bottom - 44px+ touch target */}
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 flex items-center justify-between">
                <span className={`font-refined text-base sm:text-lg font-medium transition-colors duration-300 ${
                  selected === 'female'
                    ? 'text-prism-white'
                    : 'text-prism-white/90 group-hover:text-prism-white'
                }`}>
                  Female
                </span>
                <motion.div 
                  className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-all duration-300 ${
                    selected === 'female' 
                      ? 'bg-prism-electric-blue' 
                      : 'bg-prism-border/50 group-hover:bg-prism-electric-blue/50'
                  }`}
                  animate={selected !== 'female' ? { x: [0, 2, 0] } : {}}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <svg 
                    className="w-5 h-5 text-prism-white"
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </motion.div>
              </div>
            </motion.button>
          </motion.div>

          {/* Testimonial with recency - feels LIVE */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="border border-prism-border/50 p-3 sm:p-4 mb-4 sm:mb-6 max-w-sm mx-auto"
          >
            <p className="text-prism-secondary text-sm text-center italic mb-2">
              "Finally understood why I felt so stuck"
            </p>
            <p className="font-raw text-xs text-prism-muted text-center tracking-badge">
              — Sarah, 34 · <span className="text-prism-success">Just now</span>
            </p>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.55 }}
            className="text-center mb-4"
          >
            <span className="font-raw text-xs text-prism-muted tracking-badge">
              Free · Private · 3 min
            </span>
          </motion.div>

          {/* Social proof number */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="text-center"
          >
            <span className="font-raw text-xs text-prism-muted tracking-badge">
              <span className="text-prism-secondary">2,723</span> this week
            </span>
          </motion.div>
        </div>
      </div>
    </FunnelLayout>
  );
}

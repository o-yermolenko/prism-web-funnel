'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useFunnelNavigation } from '@/hooks/useFunnelNavigation';
import FunnelLayout from '../FunnelLayout';
import { FunnelScreen } from '@/types/funnel';

interface GenderScreenProps {
  screen: FunnelScreen;
}

const AVATAR_INITIALS = ['S', 'M', 'E', 'J', 'A'];
const AVATAR_COLORS = [
  'from-blue-600 to-blue-500',
  'from-blue-500 to-cyan-500',
  'from-cyan-600 to-cyan-500',
  'from-blue-700 to-blue-600',
  'from-cyan-500 to-blue-400',
];

export default function GenderScreen({ screen }: GenderScreenProps) {
  const { saveAnswerAndNextDelayed } = useFunnelNavigation();
  const [selected, setSelected] = useState<string | null>(null);
  const [onlineCount, setOnlineCount] = useState(149);

  // Simulate live activity
  useEffect(() => {
    const interval = setInterval(() => {
      setOnlineCount(prev => {
        const change = Math.random() > 0.5 ? 1 : -1;
        return Math.max(140, Math.min(165, prev + change));
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSelect = (optionId: string) => {
    setSelected(optionId);
    saveAnswerAndNextDelayed(optionId, 300);
  };

  return (
    <FunnelLayout showProgress={false} showBackButton={false}>
      <div className="relative w-full max-w-md mx-auto px-4 py-6 flex flex-col min-h-[calc(100vh-2rem)]">
        
        {/* Top row: Badge + Online count */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-between mb-6"
        >
          {/* Time anchor badge */}
          <span className="text-xs tracking-[0.1em] text-prism-cyan font-medium uppercase border border-prism-cyan/40 bg-prism-cyan/10 px-4 py-2 rounded-full inline-flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
            3-MINUTE QUIZ
          </span>

          {/* Live online count */}
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-prism-success opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-prism-success"></span>
            </span>
            <span className="text-sm">
              <span className="text-prism-success font-semibold">{onlineCount}</span>
              <span className="text-prism-muted-light ml-1">online</span>
            </span>
          </div>
          </motion.div>

        {/* Brand mark */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="flex items-center justify-center gap-2 mb-4"
        >
          <div className="w-2 h-2 rounded-full bg-prism-electric-blue" />
          <span className="text-sm font-semibold tracking-[0.15em] text-prism-white uppercase">PRISM</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-semibold text-prism-white text-center mb-2 tracking-tight leading-[1.15]"
        >
          Get Your Personal<br />
          <span className="bg-gradient-to-r from-prism-electric-blue to-prism-cyan bg-clip-text text-transparent">Clarity Profile</span>
        </motion.h1>

        {/* Subheadline */}
          <motion.p
          initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="text-base text-prism-muted-light text-center mb-6 max-w-xs mx-auto"
          >
          Understand what's holding you back and find your path to clarity
          </motion.p>

        {/* Avatar stack + count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className="flex -space-x-2">
            {AVATAR_INITIALS.map((initial, i) => (
              <div
                key={i}
                className={`w-8 h-8 rounded-full bg-gradient-to-br ${AVATAR_COLORS[i]} border-2 border-prism-black flex items-center justify-center text-xs font-semibold text-white shadow-lg`}
              >
                {initial}
              </div>
            ))}
          </div>
          <span className="text-sm text-prism-muted-light">
            <span className="text-prism-cyan font-semibold">2,723+</span> took this quiz this week
          </span>
        </motion.div>

        {/* Testimonial card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="p-4 bg-prism-surface/80 border border-white/10 rounded-2xl mb-8"
        >
          <div className="flex justify-center gap-1 mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg key={star} width="16" height="16" viewBox="0 0 24 24" fill="#ffd000">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <p className="text-sm text-prism-white text-center italic mb-1">
            "Finally understood why I felt so stuck"
          </p>
          <p className="text-xs text-prism-muted text-center">— Sarah, 34</p>
        </motion.div>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-center mb-4"
        >
          <h2 className="text-lg font-semibold text-prism-white mb-1">Start Your Journey</h2>
          <p className="text-sm text-prism-muted-light">Select your gender to begin</p>
        </motion.div>

        {/* Gender Cards - LARGE with photos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex flex-row gap-4 justify-center mb-8 flex-1"
        >
          {/* Male Card */}
          <motion.button
            onClick={() => handleSelect('male')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`group relative flex-1 max-w-[180px] min-h-[260px] rounded-2xl overflow-hidden transition-all duration-300 ${
              selected === 'male'
                ? 'ring-2 ring-prism-electric-blue shadow-prism-strong'
                : 'ring-1 ring-white/20 hover:ring-prism-electric-blue/60'
            }`}
          >
            {/* Photo placeholder with warm gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#3d3022] via-[#2a2218] to-prism-black">
              {/* Face silhouette - warm tones */}
              <div className="absolute inset-0 flex items-center justify-center pt-4">
                <div className="w-24 h-32 rounded-full bg-gradient-to-b from-amber-200/20 via-amber-100/10 to-transparent blur-sm" />
              </div>
              {/* Shoulders */}
              <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-32 h-20 rounded-t-full bg-gradient-to-t from-stone-600/30 to-transparent" />
            </div>
            
            {/* Bottom gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-prism-black via-prism-black/40 to-transparent" />
            
            {/* Label with arrow */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="flex items-center justify-between">
                <span className="text-xl font-semibold text-prism-white">Male</span>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  selected === 'male'
                    ? 'bg-prism-electric-blue'
                    : 'bg-white/20 group-hover:bg-prism-electric-blue/70'
                }`}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </div>
              </div>
              </div>

            {/* Selection checkmark */}
            {selected === 'male' && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-prism-success flex items-center justify-center"
                >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </motion.div>
              )}
          </motion.button>

          {/* Female Card */}
          <motion.button
            onClick={() => handleSelect('female')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`group relative flex-1 max-w-[180px] min-h-[260px] rounded-2xl overflow-hidden transition-all duration-300 ${
              selected === 'female'
                ? 'ring-2 ring-prism-electric-blue shadow-prism-strong'
                : 'ring-1 ring-white/20 hover:ring-prism-electric-blue/60'
            }`}
          >
            {/* Photo placeholder with warm gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#3a2828] via-[#281c1c] to-prism-black">
              {/* Face silhouette - warm tones */}
              <div className="absolute inset-0 flex items-center justify-center pt-4">
                <div className="w-24 h-32 rounded-full bg-gradient-to-b from-rose-200/20 via-rose-100/10 to-transparent blur-sm" />
              </div>
              {/* Shoulders */}
              <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-28 h-20 rounded-t-full bg-gradient-to-t from-rose-900/30 to-transparent" />
            </div>
            
            {/* Bottom gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-prism-black via-prism-black/40 to-transparent" />
            
            {/* Label with arrow */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="flex items-center justify-between">
                <span className="text-xl font-semibold text-prism-white">Female</span>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  selected === 'female'
                    ? 'bg-prism-electric-blue'
                    : 'bg-white/20 group-hover:bg-prism-electric-blue/70'
                }`}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Selection checkmark */}
            {selected === 'female' && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-prism-success flex items-center justify-center"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </motion.div>
            )}
          </motion.button>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.45 }}
          className="flex items-center justify-center gap-4 text-xs text-prism-muted-light mb-3"
        >
          <span className="flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-prism-success">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            100% Free
          </span>
          <span className="flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-prism-warning">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0110 0v4" />
            </svg>
            Private & Secure
          </span>
          <span className="flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-prism-cyan">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
            3 min
          </span>
        </motion.div>

        {/* Authority signal */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="flex items-center justify-center gap-2 text-xs text-prism-muted"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-prism-success">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          Based on proven psychological frameworks
        </motion.div>
      </div>
    </FunnelLayout>
  );
}

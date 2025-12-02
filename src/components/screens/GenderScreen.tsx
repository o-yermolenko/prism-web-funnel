'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useFunnelNavigation } from '@/hooks/useFunnelNavigation';
import FunnelLayout from '../FunnelLayout';
import DecryptedText from '../DecryptedText';
import { FunnelScreen } from '@/types/funnel';

interface GenderScreenProps {
  screen: FunnelScreen;
}

export default function GenderScreen({ screen }: GenderScreenProps) {
  const { saveAnswerAndNextDelayed } = useFunnelNavigation();
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (optionId: string) => {
    setSelected(optionId);
    saveAnswerAndNextDelayed(optionId, 400);
  };

  return (
    <FunnelLayout showProgress={false} showBackButton={false}>
      {/* Background glow effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-radial from-prism-electric-blue/10 via-prism-electric-blue/5 to-transparent rounded-full blur-3xl" />
      </div>
      
      <div className="relative w-full max-w-2xl mx-auto text-center z-10">
        {/* Badge */}
        {screen.badge && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <span className="text-xs tracking-[0.2em] text-prism-cyan font-raw uppercase border border-prism-cyan/30 bg-prism-cyan/5 px-4 py-2 rounded-full">
              {screen.badge}
            </span>
          </motion.div>
        )}

        {/* Header with decrypt animation - BOLDER */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-refined font-semibold text-prism-white mb-4 tracking-tight leading-[1.1]"
        >
          {screen.header.split('\n').map((line, index) => (
            <span key={index}>
              <DecryptedText
                text={line}
                animateOn="view"
                sequential={true}
                speed={30}
                maxIterations={15}
                revealDirection="center"
                characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
                className="text-prism-white"
                encryptedClassName="text-prism-muted"
              />
              {index < screen.header.split('\n').length - 1 && <br />}
            </span>
          ))}
        </motion.h1>

        {/* Subheader */}
        {screen.subheader && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-prism-muted-light mb-10"
          >
            {screen.subheader}
          </motion.p>
        )}

        {/* Social Proof Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="inline-flex items-center gap-3 mb-10 px-5 py-3 bg-gradient-to-r from-prism-surface to-prism-deep border border-white/10 rounded-2xl"
        >
          {/* Avatar stack */}
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full bg-gradient-to-br from-prism-electric-blue/30 to-prism-cyan/20 border-2 border-prism-deep flex items-center justify-center"
              >
                <div className="w-4 h-4 rounded-full bg-prism-muted/30" />
              </div>
            ))}
          </div>
          <div className="text-left">
            <div className="text-sm font-medium text-prism-white">
              <span className="text-prism-cyan">127,000+</span> people
            </div>
            <div className="text-xs text-prism-muted-light">have started their journey</div>
          </div>
        </motion.div>

        {/* Gender Options - Enhanced cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-row gap-4 sm:gap-6 justify-center px-4 sm:px-0"
        >
          {screen.options?.map((option) => (
            <button
              key={option.id}
              onClick={() => handleSelect(option.id)}
              className={`group relative flex-1 max-w-[160px] sm:max-w-[220px] h-56 sm:h-64 rounded-2xl transition-all duration-300 ${
                selected === option.id
                  ? 'border-2 border-prism-electric-blue bg-gradient-to-b from-prism-electric-blue/15 to-prism-electric-blue/5 shadow-prism-glow'
                  : 'border border-white/10 bg-prism-surface hover:border-prism-electric-blue/50 hover:bg-prism-surface/80'
              }`}
            >
              {/* Silhouette placeholder */}
              <div className="absolute inset-0 flex items-center justify-center pt-4">
                <div className={`w-16 h-24 sm:w-20 sm:h-32 rounded-full bg-gradient-to-b transition-all duration-500 ${
                  selected === option.id
                    ? 'from-prism-electric-blue/30 to-prism-cyan/10'
                    : 'from-prism-muted/15 to-transparent group-hover:from-prism-electric-blue/20'
                }`} />
              </div>
              
              {/* Label */}
              <div className="absolute bottom-5 left-0 right-0 text-center">
                <span className={`text-lg font-semibold transition-colors duration-300 ${
                  selected === option.id
                    ? 'text-prism-white'
                    : 'text-prism-muted-light group-hover:text-prism-white'
                }`}>
                  {option.text}
                </span>
              </div>

              {/* Selection indicator */}
              {selected === option.id && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-4 right-4 w-7 h-7 rounded-full bg-gradient-to-r from-prism-electric-blue to-prism-cyan flex items-center justify-center shadow-lg"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </motion.div>
              )}

              {/* Hover arrow indicator */}
              {!selected && (
                <div className="absolute bottom-5 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-prism-electric-blue">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </button>
          ))}
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-wrap justify-center gap-4 mt-10"
        >
          <div className="flex items-center gap-2 text-xs text-prism-muted-light">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-prism-success">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            Private & Secure
          </div>
          <div className="flex items-center gap-2 text-xs text-prism-muted-light">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-prism-warning">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            4.8 Rating
          </div>
        </motion.div>

        {/* Legal footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 text-xs text-prism-muted max-w-md mx-auto"
        >
          By continuing, you agree to our{' '}
          <a href="#" className="underline hover:text-prism-muted-light transition-colors">Terms</a>{' '}
          and{' '}
          <a href="#" className="underline hover:text-prism-muted-light transition-colors">Privacy Policy</a>
        </motion.p>
      </div>
    </FunnelLayout>
  );
}

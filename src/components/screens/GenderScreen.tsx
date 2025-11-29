'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useFunnelStore } from '@/lib/store';
import FunnelLayout from '../FunnelLayout';
import { FunnelScreen } from '@/types/funnel';

interface GenderScreenProps {
  screen: FunnelScreen;
}

export default function GenderScreen({ screen }: GenderScreenProps) {
  const { setAnswer, nextScreen } = useFunnelStore();
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (optionId: string) => {
    setSelected(optionId);
    setAnswer(screen.id, optionId);
    
    // Delay for visual feedback
    setTimeout(() => {
      nextScreen();
    }, 400);
  };

  return (
    <FunnelLayout showProgress={false} showBackButton={false}>
      <div className="w-full max-w-2xl mx-auto text-center">
        {/* Badge */}
        {screen.badge && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-8"
          >
            <span className="text-xs tracking-[0.2em] text-prism-muted-light font-raw uppercase border border-prism-muted/30 px-4 py-2">
              {screen.badge}
            </span>
          </motion.div>
        )}

        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-refined font-medium text-prism-white mb-4 tracking-tight leading-tight"
        >
          {screen.header}
        </motion.h1>

        {/* Subheader */}
        {screen.subheader && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-prism-muted-light mb-16"
          >
            {screen.subheader}
          </motion.p>
        )}

        {/* Gender Options */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-row gap-4 sm:gap-6 justify-center px-4 sm:px-0"
        >
          {screen.options?.map((option, index) => (
            <button
              key={option.id}
              onClick={() => handleSelect(option.id)}
              className={`group relative flex-1 max-w-[160px] sm:max-w-[256px] h-56 sm:h-72 border transition-all duration-500 ${
                selected === option.id
                  ? 'border-prism-electric-blue bg-prism-electric-blue/5'
                  : 'border-prism-muted/30 hover:border-prism-muted-light bg-transparent'
              }`}
            >
              {/* Silhouette placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className={`w-16 h-28 sm:w-24 sm:h-40 rounded-full bg-gradient-to-b transition-all duration-500 ${
                  selected === option.id
                    ? 'from-prism-electric-blue/20 to-prism-electric-blue/5'
                    : 'from-prism-muted/10 to-transparent group-hover:from-prism-muted/20'
                }`} />
              </div>
              
              {/* Label */}
              <div className="absolute bottom-6 left-0 right-0 text-center">
                <span className={`text-lg font-refined transition-colors duration-300 ${
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
                  className="absolute top-4 right-4 w-6 h-6 rounded-full bg-prism-electric-blue flex items-center justify-center"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </motion.div>
              )}
            </button>
          ))}
        </motion.div>

        {/* Legal footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-xs text-prism-muted max-w-md mx-auto"
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


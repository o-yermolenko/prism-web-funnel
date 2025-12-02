'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useFunnelNavigation } from '@/hooks/useFunnelNavigation';
import FunnelLayout from '../FunnelLayout';
import { FunnelScreen } from '@/types/funnel';

interface QuestionSingleScreenProps {
  screen: FunnelScreen;
}

export default function QuestionSingleScreen({ screen }: QuestionSingleScreenProps) {
  const { saveAnswerAndNextDelayed, goToNext, setAnswer, currentSlug } = useFunnelNavigation();
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (optionId: string) => {
    setSelected(optionId);
    setAnswer(currentSlug, optionId);
    
    if (screen.autoAdvance) {
      saveAnswerAndNextDelayed(optionId, 500);
    }
  };

  return (
    <FunnelLayout showProgress={screen.showProgress} showBackButton={screen.showBackButton}>
      <div className="w-full max-w-xl mx-auto">
        {/* Header Section - consistent spacing before options */}
        <div className="mb-12 sm:mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl lg:text-4xl font-refined font-semibold text-prism-white tracking-tight text-center leading-snug"
          >
            {screen.header}
          </motion.h1>

          {/* Subheader */}
          {screen.subheader && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-prism-muted-light mt-4 text-center text-base md:text-lg"
            >
              {screen.subheader}
            </motion.p>
          )}
        </div>

        {/* Options - Enhanced card style */}
        <div className="space-y-3">
          {screen.options?.map((option, index) => (
            <motion.button
              key={option.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.06 }}
              onClick={() => handleSelect(option.id)}
              className={`w-full group relative text-left p-5 rounded-2xl transition-all duration-300 ${
                selected === option.id
                  ? 'border-2 border-prism-electric-blue bg-gradient-to-r from-prism-electric-blue/12 to-prism-cyan/5 shadow-prism'
                  : 'border border-white/10 bg-prism-surface hover:border-prism-electric-blue/40 hover:bg-prism-surface/80'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <span className={`text-base md:text-lg font-medium transition-colors duration-300 ${
                    selected === option.id
                      ? 'text-prism-white'
                      : 'text-prism-muted-light group-hover:text-prism-white'
                  }`}>
                    {option.text}
                  </span>
                  
                  {option.subtext && (
                    <span className={`block text-sm mt-1.5 transition-colors duration-300 ${
                      selected === option.id
                        ? 'text-prism-muted-light'
                        : 'text-prism-muted'
                    }`}>
                      {option.subtext}
                    </span>
                  )}
                </div>
                
                {/* Selection indicator */}
                <div className={`ml-4 w-6 h-6 rounded-full border-2 transition-all duration-300 flex items-center justify-center flex-shrink-0 ${
                  selected === option.id
                    ? 'border-prism-electric-blue bg-gradient-to-r from-prism-electric-blue to-prism-cyan'
                    : 'border-prism-muted/40 group-hover:border-prism-electric-blue/50'
                }`}>
                  {selected === option.id && (
                    <motion.svg
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="3"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </motion.svg>
                  )}
                </div>
              </div>
              
              {/* Arrow indicator on hover (not selected) */}
              {!selected && (
                <div className="absolute right-5 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-prism-electric-blue">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </motion.button>
          ))}
        </div>

        {/* Manual continue button if not auto-advance */}
        {!screen.autoAdvance && selected && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-10 flex justify-center"
          >
            <button
              onClick={() => goToNext()}
              className="btn-primary w-full sm:w-auto"
            >
              Continue
            </button>
          </motion.div>
        )}
      </div>
    </FunnelLayout>
  );
}

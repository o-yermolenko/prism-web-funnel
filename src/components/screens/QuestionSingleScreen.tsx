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
      saveAnswerAndNextDelayed(optionId, 400);
    }
  };

  return (
    <FunnelLayout showProgress={screen.showProgress} showBackButton={screen.showBackButton}>
      <div className="w-full max-w-xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 sm:mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl lg:text-4xl font-refined font-medium text-prism-white tracking-tight text-center leading-snug"
          >
            {screen.header}
          </motion.h1>

          {/* Subheader */}
          {screen.subheader && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-prism-secondary mt-4 text-center text-base md:text-lg"
            >
              {screen.subheader}
            </motion.p>
          )}
        </div>

        {/* Options - SHARP cards */}
        <div className="space-y-3">
          {screen.options?.map((option, index) => (
            <motion.button
              key={option.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.06 }}
              onClick={() => handleSelect(option.id)}
              className={`w-full group relative text-left p-5 transition-all duration-300 border ${
                selected === option.id
                  ? 'border-prism-electric-blue bg-prism-electric-blue/5'
                  : 'border-prism-border hover:border-prism-electric-blue/50 bg-transparent'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <span className={`text-base md:text-lg font-refined transition-colors duration-300 ${
                    selected === option.id
                      ? 'text-prism-white'
                      : 'text-prism-secondary group-hover:text-prism-white'
                  }`}>
                    {option.text}
                  </span>
                  
                  {option.subtext && (
                    <span className={`block text-sm mt-1.5 transition-colors duration-300 ${
                      selected === option.id
                        ? 'text-prism-secondary'
                        : 'text-prism-muted'
                    }`}>
                      {option.subtext}
                    </span>
                  )}
                </div>
                
                {/* Selection indicator - sharp square, not circle */}
                <div className={`ml-4 w-5 h-5 border transition-all duration-300 flex items-center justify-center flex-shrink-0 ${
                  selected === option.id
                    ? 'border-prism-electric-blue bg-prism-electric-blue'
                    : 'border-prism-border group-hover:border-prism-electric-blue/50'
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

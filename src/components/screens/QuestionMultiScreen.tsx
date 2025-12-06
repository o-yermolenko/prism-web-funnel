'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useFunnelNavigation } from '@/hooks/useFunnelNavigation';
import FunnelLayout from '../FunnelLayout';
import { FunnelScreen } from '@/types/funnel';

interface QuestionMultiScreenProps {
  screen: FunnelScreen;
}

export default function QuestionMultiScreen({ screen }: QuestionMultiScreenProps) {
  const { saveAnswerAndNext } = useFunnelNavigation();
  const [selected, setSelected] = useState<string[]>([]);

  const handleToggle = (optionId: string) => {
    setSelected(prev => {
      // If "all" is selected, clear others and select all
      if (optionId === 'all') {
        return prev.includes('all') ? [] : ['all'];
      }
      
      // If selecting another option while "all" is selected, remove "all"
      const newSelection = prev.filter(id => id !== 'all');
      
      if (prev.includes(optionId)) {
        return newSelection.filter(id => id !== optionId);
      } else {
        return [...newSelection, optionId];
      }
    });
  };

  const handleContinue = () => {
    if (selected.length > 0) {
      saveAnswerAndNext(selected);
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

        {/* Options - SHARP multi-select cards */}
        <div className="space-y-3">
          {screen.options?.map((option, index) => {
            const isSelected = selected.includes(option.id);
            
            return (
              <motion.button
                key={option.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.06 }}
                onClick={() => handleToggle(option.id)}
                className={`w-full group relative text-left p-5 transition-all duration-300 border ${
                  isSelected
                    ? 'border-prism-electric-blue bg-prism-electric-blue/5'
                    : 'border-prism-border hover:border-prism-electric-blue/50 bg-transparent'
                }`}
              >
                <div className="flex items-center gap-4">
                  {/* Checkbox - SHARP square, not rounded */}
                  <div className={`w-5 h-5 border transition-all duration-300 flex items-center justify-center flex-shrink-0 ${
                    isSelected
                      ? 'border-prism-electric-blue bg-prism-electric-blue'
                      : 'border-prism-border group-hover:border-prism-electric-blue/50'
                  }`}>
                    {isSelected && (
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
                  
                  {/* Text */}
                  <span className={`text-base md:text-lg font-refined transition-colors duration-300 ${
                    isSelected
                      ? 'text-prism-white'
                      : 'text-prism-secondary group-hover:text-prism-white'
                  }`}>
                    {option.text}
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Selection count - minimal */}
        {selected.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 flex justify-center"
          >
            <span className="font-raw text-xs text-prism-muted uppercase tracking-badge">
              {selected.length} selected
            </span>
          </motion.div>
        )}

        {/* Continue button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="mt-8 flex justify-center"
        >
          <button
            onClick={handleContinue}
            disabled={selected.length === 0}
            className={`w-full sm:w-auto transition-all duration-300 ${
              selected.length > 0
                ? 'btn-primary'
                : 'px-8 py-4 bg-transparent text-prism-muted cursor-not-allowed border border-prism-border'
            }`}
          >
            Continue
          </button>
        </motion.div>
      </div>
    </FunnelLayout>
  );
}

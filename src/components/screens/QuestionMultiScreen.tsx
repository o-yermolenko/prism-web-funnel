'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useFunnelStore } from '@/lib/store';
import FunnelLayout from '../FunnelLayout';
import { FunnelScreen } from '@/types/funnel';

interface QuestionMultiScreenProps {
  screen: FunnelScreen;
}

export default function QuestionMultiScreen({ screen }: QuestionMultiScreenProps) {
  const { setAnswer, nextScreen } = useFunnelStore();
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
      setAnswer(screen.id, selected);
      nextScreen();
    }
  };

  return (
    <FunnelLayout showProgress={screen.showProgress} showBackButton={screen.showBackButton}>
      <div className="w-full max-w-xl mx-auto">
        {/* Header Section - consistent spacing before options */}
        <div className="mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-refined font-medium text-prism-white tracking-tight text-center leading-relaxed"
          >
            {screen.header}
          </motion.h1>

          {/* Subheader */}
          {screen.subheader && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-prism-muted-light mt-6 text-center"
            >
              {screen.subheader}
            </motion.p>
          )}
        </div>

        {/* Options */}
        <div className="space-y-4">
          {screen.options?.map((option, index) => {
            const isSelected = selected.includes(option.id);
            
            return (
              <motion.button
                key={option.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.15 + index * 0.06 }}
                onClick={() => handleToggle(option.id)}
                className={`w-full group relative text-left p-5 border transition-all duration-300 ${
                  isSelected
                    ? 'border-prism-electric-blue bg-prism-electric-blue/5'
                    : 'border-prism-muted/30 hover:border-prism-muted-light'
                }`}
              >
                <div className="flex items-center gap-4">
                  {/* Checkbox */}
                  <div className={`w-5 h-5 border-2 transition-all duration-300 flex items-center justify-center ${
                    isSelected
                      ? 'border-prism-electric-blue bg-prism-electric-blue'
                      : 'border-prism-muted/50'
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
                  <span className={`text-lg transition-colors duration-300 ${
                    isSelected
                      ? 'text-prism-white'
                      : 'text-prism-muted-light group-hover:text-prism-white'
                  }`}>
                    {option.text}
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Continue button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="mt-16 flex justify-center"
        >
          <button
            onClick={handleContinue}
            disabled={selected.length === 0}
            className={`px-12 py-4 text-lg transition-all duration-300 ${
              selected.length > 0
                ? 'btn-primary hover:shadow-prism'
                : 'bg-prism-muted/20 text-prism-muted cursor-not-allowed'
            }`}
          >
            Continue
          </button>
        </motion.div>
      </div>
    </FunnelLayout>
  );
}


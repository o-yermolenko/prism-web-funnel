'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useFunnelStore } from '@/lib/store';
import FunnelLayout from '../FunnelLayout';
import { FunnelScreen } from '@/types/funnel';

interface QuestionSingleScreenProps {
  screen: FunnelScreen;
}

export default function QuestionSingleScreen({ screen }: QuestionSingleScreenProps) {
  const { setAnswer, nextScreen } = useFunnelStore();
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (optionId: string) => {
    setSelected(optionId);
    setAnswer(screen.id, optionId);
    
    if (screen.autoAdvance) {
      setTimeout(() => {
        nextScreen();
      }, 500);
    }
  };

  return (
    <FunnelLayout showProgress={screen.showProgress} showBackButton={screen.showBackButton}>
      <div className="w-full max-w-xl mx-auto">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-refined font-medium text-prism-white mb-4 tracking-tight text-center leading-relaxed"
        >
          {screen.header}
        </motion.h1>

        {/* Subheader */}
        {screen.subheader && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-prism-muted-light mb-10 text-center"
          >
            {screen.subheader}
          </motion.p>
        )}

        {/* Options */}
        <div className="space-y-3">
          {screen.options?.map((option, index) => (
            <motion.button
              key={option.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.15 + index * 0.08 }}
              onClick={() => handleSelect(option.id)}
              className={`w-full group relative text-left p-5 border transition-all duration-300 ${
                selected === option.id
                  ? 'border-prism-electric-blue bg-prism-electric-blue/5'
                  : 'border-prism-muted/30 hover:border-prism-muted-light'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <span className={`text-lg transition-colors duration-300 ${
                    selected === option.id
                      ? 'text-prism-white'
                      : 'text-prism-muted-light group-hover:text-prism-white'
                  }`}>
                    {option.text}
                  </span>
                  
                  {option.subtext && (
                    <span className={`block text-sm mt-1 transition-colors duration-300 ${
                      selected === option.id
                        ? 'text-prism-muted-light'
                        : 'text-prism-muted'
                    }`}>
                      {option.subtext}
                    </span>
                  )}
                </div>
                
                {/* Selection indicator */}
                <div className={`ml-4 w-5 h-5 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                  selected === option.id
                    ? 'border-prism-electric-blue bg-prism-electric-blue'
                    : 'border-prism-muted/50'
                }`}>
                  {selected === option.id && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-2 h-2 bg-prism-white rounded-full"
                    />
                  )}
                </div>
              </div>
              
              {/* Hover glow effect */}
              <div className={`absolute inset-0 transition-opacity duration-300 pointer-events-none ${
                selected === option.id ? 'opacity-100' : 'opacity-0'
              }`}>
                <div className="absolute inset-0 bg-gradient-to-r from-prism-electric-blue/5 to-transparent" />
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
            className="mt-8 flex justify-center"
          >
            <button
              onClick={() => nextScreen()}
              className="btn-primary px-10 py-3"
            >
              Continue
            </button>
          </motion.div>
        )}
      </div>
    </FunnelLayout>
  );
}


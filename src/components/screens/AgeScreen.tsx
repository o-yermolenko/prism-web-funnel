'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useFunnelNavigation } from '@/hooks/useFunnelNavigation';
import FunnelLayout from '../FunnelLayout';
import { FunnelScreen } from '@/types/funnel';

interface AgeScreenProps {
  screen: FunnelScreen;
}

export default function AgeScreen({ screen }: AgeScreenProps) {
  const { saveAnswerAndNextDelayed } = useFunnelNavigation();
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (optionId: string) => {
    setSelected(optionId);
    saveAnswerAndNextDelayed(optionId, 400);
  };

  return (
    <FunnelLayout showProgress={screen.showProgress} showBackButton={screen.showBackButton}>
      <div className="w-full max-w-xl mx-auto text-center">
        {/* Header Section - consistent spacing before options */}
        <div className="mb-12 sm:mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl lg:text-4xl font-refined font-semibold text-prism-white tracking-tight"
          >
            {screen.header}
          </motion.h1>

          {/* Subheader */}
          {screen.subheader && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-prism-muted-light mt-4 text-base md:text-lg"
            >
              {screen.subheader}
            </motion.p>
          )}
        </div>

        {/* Age Options - Enhanced grid cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4"
        >
          {screen.options?.map((option, index) => (
            <motion.button
              key={option.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
              onClick={() => handleSelect(option.id)}
              className={`group relative py-5 px-6 rounded-2xl transition-all duration-300 ${
                selected === option.id
                  ? 'border-2 border-prism-electric-blue bg-gradient-to-br from-prism-electric-blue/15 to-prism-cyan/5 text-prism-white shadow-prism'
                  : 'border border-white/10 bg-prism-surface hover:border-prism-electric-blue/40 text-prism-muted-light hover:text-prism-white'
              }`}
            >
              <span className="text-lg font-semibold">{option.text}</span>
              
              {/* Selection checkmark */}
              {selected === option.id && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-2 right-2 w-5 h-5 rounded-full bg-gradient-to-r from-prism-electric-blue to-prism-cyan flex items-center justify-center"
                >
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </motion.div>
              )}

              {/* Hover arrow */}
              {!selected && (
                <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-prism-electric-blue">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </FunnelLayout>
  );
}

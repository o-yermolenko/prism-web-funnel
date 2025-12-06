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
        {/* Header Section */}
        <div className="mb-12 sm:mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl lg:text-4xl font-refined font-medium text-prism-white tracking-tight"
          >
            {screen.header}
          </motion.h1>

          {/* Subheader */}
          {screen.subheader && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-prism-secondary mt-4 text-base md:text-lg"
            >
              {screen.subheader}
            </motion.p>
          )}
        </div>

        {/* Age Options - SHARP grid cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4"
        >
          {screen.options?.map((option, index) => (
            <motion.button
              key={option.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
              onClick={() => handleSelect(option.id)}
              className={`group relative py-5 px-6 transition-all duration-300 border ${
                selected === option.id
                  ? 'border-prism-electric-blue bg-prism-electric-blue/5 text-prism-white'
                  : 'border-prism-border hover:border-prism-electric-blue/50 text-prism-secondary hover:text-prism-white bg-transparent'
              }`}
            >
              <span className="font-raw text-lg tracking-wide">{option.text}</span>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </FunnelLayout>
  );
}

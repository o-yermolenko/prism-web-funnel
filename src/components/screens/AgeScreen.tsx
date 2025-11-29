'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useFunnelStore } from '@/lib/store';
import FunnelLayout from '../FunnelLayout';
import { FunnelScreen } from '@/types/funnel';

interface AgeScreenProps {
  screen: FunnelScreen;
}

export default function AgeScreen({ screen }: AgeScreenProps) {
  const { setAnswer, nextScreen } = useFunnelStore();
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (optionId: string) => {
    setSelected(optionId);
    setAnswer(screen.id, optionId);
    
    setTimeout(() => {
      nextScreen();
    }, 400);
  };

  return (
    <FunnelLayout showProgress={screen.showProgress} showBackButton={screen.showBackButton}>
      <div className="w-full max-w-xl mx-auto text-center">
        {/* Header Section - consistent spacing before options */}
        <div className="mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-refined font-medium text-prism-white tracking-tight"
          >
            {screen.header}
          </motion.h1>

          {/* Subheader */}
          {screen.subheader && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-prism-muted-light mt-6"
            >
              {screen.subheader}
            </motion.p>
          )}
        </div>

        {/* Age Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-4"
        >
          {screen.options?.map((option, index) => (
            <motion.button
              key={option.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
              onClick={() => handleSelect(option.id)}
              className={`relative py-4 px-6 border transition-all duration-300 ${
                selected === option.id
                  ? 'border-prism-electric-blue bg-prism-electric-blue/10 text-prism-white'
                  : 'border-prism-muted/30 hover:border-prism-muted-light text-prism-muted-light hover:text-prism-white'
              }`}
            >
              <span className="text-lg font-raw">{option.text}</span>
              
              {selected === option.id && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-prism-electric-blue"
                />
              )}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </FunnelLayout>
  );
}


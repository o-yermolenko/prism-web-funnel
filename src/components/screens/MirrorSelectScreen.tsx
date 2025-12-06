'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useFunnelNavigation } from '@/hooks/useFunnelNavigation';
import FunnelLayout from '../FunnelLayout';
import { FunnelScreen } from '@/types/funnel';

interface MirrorSelectScreenProps {
  screen: FunnelScreen;
}

export default function MirrorSelectScreen({ screen }: MirrorSelectScreenProps) {
  const { saveAnswerAndNextDelayed } = useFunnelNavigation();
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (optionId: string) => {
    setSelected(optionId);
    saveAnswerAndNextDelayed(optionId, 600);
  };

  return (
    <FunnelLayout showProgress={screen.showProgress} showBackButton={screen.showBackButton}>
      <div className="w-full max-w-2xl mx-auto">
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
            className="text-prism-secondary mb-12 text-center"
          >
            {screen.subheader}
          </motion.p>
        )}

        {/* Options - styled as "raw thoughts" in monospace */}
        <div className="space-y-4">
          {screen.options?.map((option, index) => (
            <motion.button
              key={option.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              onClick={() => handleSelect(option.id)}
              className={`w-full group relative text-left p-6 border transition-all duration-300 ${
                selected === option.id
                  ? 'border-prism-electric-blue bg-prism-electric-blue/5'
                  : 'border-prism-border hover:border-prism-electric-blue/50'
              }`}
            >
              {/* Text in monospace - raw thought */}
              <p className={`font-raw text-base leading-relaxed transition-colors duration-300 ${
                selected === option.id
                  ? 'text-prism-white'
                  : 'text-prism-secondary group-hover:text-prism-white'
              }`}>
                "{option.text}"
              </p>
            </motion.button>
          ))}
        </div>
      </div>
    </FunnelLayout>
  );
}

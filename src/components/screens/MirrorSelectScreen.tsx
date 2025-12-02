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
            className="text-prism-muted-light mb-12 text-center"
          >
            {screen.subheader}
          </motion.p>
        )}

        {/* Options - styled as "raw thoughts" */}
        <div className="space-y-4">
          {screen.options?.map((option, index) => (
            <motion.button
              key={option.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              onClick={() => handleSelect(option.id)}
              className={`w-full group relative text-left p-6 border transition-all duration-500 ${
                selected === option.id
                  ? 'border-prism-electric-blue bg-gradient-to-r from-prism-electric-blue/10 to-transparent'
                  : 'border-prism-muted/20 hover:border-prism-muted/40'
              }`}
            >
              {/* Quote mark */}
              <span className={`absolute -top-2 -left-1 text-4xl transition-colors duration-300 ${
                selected === option.id
                  ? 'text-prism-electric-blue/50'
                  : 'text-prism-muted/30'
              }`}>
                "
              </span>
              
              {/* Text in monospace - raw thought */}
              <p className={`font-raw text-lg leading-relaxed transition-colors duration-300 pl-4 ${
                selected === option.id
                  ? 'text-prism-white'
                  : 'text-prism-muted-light group-hover:text-prism-white/80'
              }`}>
                {option.text}
              </p>
              
              {/* Selection glow */}
              {selected === option.id && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    boxShadow: 'inset 0 0 30px rgba(0, 102, 255, 0.1)',
                  }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </FunnelLayout>
  );
}

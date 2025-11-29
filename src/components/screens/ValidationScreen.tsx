'use client';

import { motion } from 'framer-motion';
import { useFunnelStore } from '@/lib/store';
import FunnelLayout from '../FunnelLayout';
import { FunnelScreen } from '@/types/funnel';

interface ValidationScreenProps {
  screen: FunnelScreen;
}

export default function ValidationScreen({ screen }: ValidationScreenProps) {
  const { nextScreen } = useFunnelStore();

  return (
    <FunnelLayout showProgress={screen.showProgress} showBackButton={screen.showBackButton}>
      <div className="w-full max-w-2xl mx-auto text-center px-4">
        {/* Statistics display */}
        {screen.statistics && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="text-6xl md:text-8xl font-refined font-medium text-prism-electric-blue">
              {screen.statistics.value}
            </span>
          </motion.div>
        )}

        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: screen.statistics ? 0.2 : 0 }}
          className="text-2xl md:text-3xl lg:text-4xl font-refined font-medium text-prism-white mb-6 tracking-tight leading-relaxed"
        >
          {screen.header}
        </motion.h1>

        {/* Subheader */}
        {screen.subheader && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-prism-muted-light mb-8 leading-relaxed"
          >
            {screen.subheader}
          </motion.p>
        )}

        {/* Source citation */}
        {screen.statistics?.source && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-sm text-prism-muted mb-12"
          >
            Source: {screen.statistics.source}
          </motion.p>
        )}

        {/* Diagnosis block */}
        {screen.diagnosis && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-left border border-prism-muted/20 p-8 mb-8"
          >
            <p className="text-sm text-prism-muted uppercase tracking-wider mb-6">
              {screen.diagnosis.title}
            </p>
            
            <div className="space-y-4">
              {screen.diagnosis.items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.15 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-6 h-6 border border-prism-electric-blue/50 flex items-center justify-center">
                    <span className="text-prism-electric-blue text-sm">⚠</span>
                  </div>
                  <p className="text-prism-white/90 leading-relaxed">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
            
            {screen.diagnosis.warning && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="mt-8 pt-6 border-t border-prism-muted/20 text-prism-muted-light text-sm italic"
              >
                {screen.diagnosis.warning}
              </motion.p>
            )}
          </motion.div>
        )}

        {/* Continue button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: screen.diagnosis ? 1.2 : 0.4 }}
          onClick={() => nextScreen()}
          className="btn-primary px-12 py-4 text-lg hover:shadow-prism transition-shadow duration-300"
        >
          Continue
        </motion.button>
      </div>
    </FunnelLayout>
  );
}


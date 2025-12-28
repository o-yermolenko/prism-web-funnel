'use client';

import { motion } from 'framer-motion';
import { useFunnelNavigation } from '@/hooks/useFunnelNavigation';
import FunnelLayout from '../FunnelLayout';
import { FunnelScreen } from '@/types/funnel';

interface ValidationScreenProps {
  screen: FunnelScreen;
}

export default function ValidationScreen({ screen }: ValidationScreenProps) {
  const { goToNext } = useFunnelNavigation();

  // Check if this is a simple validation (no statistics/diagnosis)
  const isSimpleValidation = !screen.statistics && !screen.diagnosis;

  return (
    <FunnelLayout showProgress={screen.showProgress} showBackButton={screen.showBackButton}>
      <div className="w-full max-w-2xl mx-auto text-center px-4">
        
        {/* Visual element for simple validations */}
        {isSimpleValidation && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <div className="relative w-24 h-24 mx-auto">
              {/* Animated frequency bars */}
              <div className="absolute inset-0 flex items-center justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-1.5 bg-gradient-to-t from-prism-electric-blue to-prism-cyan"
                    animate={{ 
                      height: ['20%', `${40 + Math.random() * 50}%`, '20%'],
                    }}
                    transition={{ 
                      duration: 1 + Math.random() * 0.5, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: i * 0.1 
                    }}
                    style={{ height: '20%' }}
                  />
                ))}
              </div>
              {/* Outer ring */}
              <motion.div
                className="absolute inset-0 border border-prism-electric-blue/30 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>
        )}

        {/* Statistics display */}
        {screen.statistics && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="font-raw text-6xl md:text-8xl text-prism-electric-blue tracking-tight">
              {screen.statistics.value}
            </span>
          </motion.div>
        )}

        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-2xl md:text-3xl lg:text-4xl font-refined font-medium text-prism-white mb-4 tracking-tight leading-snug"
        >
          {screen.header}
        </motion.h1>

        {/* Subheader */}
        {screen.subheader && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-lg md:text-xl text-prism-secondary mb-10 leading-relaxed max-w-md mx-auto"
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
            className="font-raw text-xs text-prism-muted tracking-badge uppercase mb-12"
          >
            {screen.statistics.source}
          </motion.p>
        )}

        {/* Diagnosis block */}
        {screen.diagnosis && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-left border border-prism-border p-8 mb-10"
          >
            <p className="font-raw text-xs text-prism-muted uppercase tracking-badge mb-6">
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
                  <span className="text-prism-muted">—</span>
                  <p className="text-prism-secondary leading-relaxed">
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
                className="mt-8 pt-6 border-t border-prism-border text-prism-secondary text-sm"
              >
                {screen.diagnosis.warning}
              </motion.p>
            )}
          </motion.div>
        )}

        {/* Continue button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: screen.diagnosis ? 1.2 : 0.5 }}
        >
          <button
            onClick={() => goToNext()}
            className="btn-primary w-full sm:w-auto"
          >
            Continue
          </button>
        </motion.div>
      </div>
    </FunnelLayout>
  );
}

'use client';

import { motion } from 'framer-motion';
import { useFunnelNavigation } from '@/hooks/useFunnelNavigation';
import FunnelLayout from '../FunnelLayout';
import { FunnelScreen } from '@/types/funnel';

interface BeforeAfterScreenProps {
  screen: FunnelScreen;
}

export default function BeforeAfterScreen({ screen }: BeforeAfterScreenProps) {
  const { goToNext } = useFunnelNavigation();
  const beforeAfter = screen.beforeAfter;

  if (!beforeAfter) return null;

  return (
    <FunnelLayout showProgress={screen.showProgress} showBackButton={screen.showBackButton}>
      <div className="w-full max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-refined font-medium text-prism-white mb-3 tracking-tight">
            {screen.header}
          </h1>
          {screen.subheader && (
            <p className="text-prism-secondary text-lg">{screen.subheader}</p>
          )}
        </motion.div>

        {/* Before/After Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 gap-4 mb-10"
        >
          {/* NOW Column */}
          <div className="space-y-3">
            <div className="text-center mb-4">
              <span className="font-raw text-xs tracking-badge text-prism-muted uppercase">
                Now
              </span>
            </div>
            
            {beforeAfter.states.map((state, index) => (
              <motion.div
                key={`before-${state.label}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="p-4 border border-prism-border"
              >
                <p className="font-raw text-xs text-prism-muted uppercase tracking-badge mb-1">
                  {state.label}
                </p>
                <p className="font-refined text-prism-secondary">{state.before}</p>
              </motion.div>
            ))}
          </div>

          {/* AFTER Column */}
          <div className="space-y-3">
            <div className="text-center mb-4">
              <span className="font-raw text-xs tracking-badge text-prism-electric-blue uppercase">
                After {beforeAfter.timeframe}
              </span>
            </div>
            
            {beforeAfter.states.map((state, index) => (
              <motion.div
                key={`after-${state.label}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="p-4 border border-prism-electric-blue/30"
              >
                <p className="font-raw text-xs text-prism-muted uppercase tracking-badge mb-1">
                  {state.label}
                </p>
                <p className="font-refined text-prism-white">{state.after}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center font-raw text-xs text-prism-muted tracking-badge mb-10"
        >
          *Results vary based on individual commitment
        </motion.p>

        {/* Continue button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex justify-center"
        >
          <button onClick={() => goToNext()} className="btn-primary w-full sm:w-auto">
            Continue
          </button>
        </motion.div>
      </div>
    </FunnelLayout>
  );
}

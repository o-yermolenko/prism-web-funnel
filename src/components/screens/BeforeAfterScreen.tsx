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
          className="text-center mb-10"
        >
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-prism-white mb-3 tracking-tight">
            {screen.header}
          </h1>
          {screen.subheader && (
            <p className="text-prism-muted-light text-lg">{screen.subheader}</p>
          )}
        </motion.div>

        {/* Before/After Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 gap-4 mb-8"
        >
          {/* NOW Column */}
          <div className="space-y-3">
            <div className="text-center mb-4">
              <span className="inline-block px-4 py-1.5 bg-prism-urgency/20 border border-prism-urgency/30 rounded-full text-sm font-medium text-prism-urgency">
                Now
              </span>
            </div>
            
            {beforeAfter.states.map((state, index) => (
              <motion.div
                key={`before-${state.label}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="p-4 bg-prism-surface border border-prism-urgency/20 rounded-xl"
              >
                <p className="text-xs text-prism-muted-light mb-1">{state.label}</p>
                <p className="font-semibold text-prism-urgency">{state.before}</p>
              </motion.div>
            ))}
          </div>

          {/* AFTER Column */}
          <div className="space-y-3">
            <div className="text-center mb-4">
              <span className="inline-block px-4 py-1.5 bg-prism-success/20 border border-prism-success/30 rounded-full text-sm font-medium text-prism-success">
                After {beforeAfter.timeframe}
              </span>
            </div>
            
            {beforeAfter.states.map((state, index) => (
              <motion.div
                key={`after-${state.label}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="p-4 bg-prism-surface border border-prism-success/20 rounded-xl"
              >
                <p className="text-xs text-prism-muted-light mb-1">{state.label}</p>
                <p className="font-semibold text-prism-success">{state.after}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Arrow indicator between columns (mobile: center, desktop: hidden) */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-prism-electric-blue to-prism-cyan flex items-center justify-center shadow-prism-glow">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </motion.div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center text-xs text-prism-muted mb-8"
        >
          *Results vary based on individual commitment. This visualization represents typical user progress.
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


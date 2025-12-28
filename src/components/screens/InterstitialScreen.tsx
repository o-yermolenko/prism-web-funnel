'use client';

import { motion } from 'framer-motion';
import { useFunnelNavigation } from '@/hooks/useFunnelNavigation';
import FunnelLayout from '../FunnelLayout';
import { FunnelScreen } from '@/types/funnel';

interface InterstitialScreenProps {
  screen: FunnelScreen;
}

export default function InterstitialScreen({ screen }: InterstitialScreenProps) {
  const { goToNext } = useFunnelNavigation();

  return (
    <FunnelLayout showProgress={screen.showProgress} showBackButton={screen.showBackButton}>
      <div className="w-full max-w-xl mx-auto text-center px-4">
        
        {/* Visual element - animated icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="relative w-20 h-20 mx-auto">
            {/* Pulsing rings */}
            <motion.div
              className="absolute inset-0 border border-prism-electric-blue/30 rounded-full"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute inset-0 border border-prism-electric-blue/20 rounded-full"
              animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            />
            {/* Center icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="w-12 h-12 border-2 border-prism-electric-blue flex items-center justify-center"
                animate={{ rotate: [0, 90, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg className="w-6 h-6 text-prism-electric-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Badge - monospace, technical */}
        {screen.badge && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <span className="font-raw text-xs tracking-badge text-prism-electric-blue uppercase border border-prism-electric-blue/30 px-4 py-2 bg-prism-electric-blue/5">
              {screen.badge}
            </span>
          </motion.div>
        )}

        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-2xl md:text-3xl lg:text-4xl font-refined font-medium text-prism-white mb-4 tracking-tight"
        >
          {screen.header}
        </motion.h1>

        {/* Subheader */}
        {screen.subheader && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg md:text-xl text-prism-secondary mb-8 max-w-md mx-auto"
          >
            {screen.subheader}
          </motion.p>
        )}

        {/* Content - minimal box with icon */}
        {screen.content && screen.content.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="p-6 border border-prism-border mb-10 text-left bg-prism-surface/30"
          >
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 border border-prism-electric-blue/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-prism-electric-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </div>
              <div>
                {screen.content.map((line, i) => (
                  <p key={i} className="text-prism-secondary">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Continue button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <button onClick={() => goToNext()} className="btn-primary w-full sm:w-auto">
            Continue
          </button>
        </motion.div>
      </div>
    </FunnelLayout>
  );
}

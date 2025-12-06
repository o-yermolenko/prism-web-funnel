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
        {/* Badge */}
        {screen.badge && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-block mb-6"
          >
            <span className="text-xs tracking-[0.15em] text-prism-cyan font-raw uppercase border border-prism-cyan/30 bg-prism-cyan/10 px-4 py-2 rounded-full">
              {screen.badge}
            </span>
          </motion.div>
        )}

        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 flex justify-center"
        >
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-prism-success/20 to-prism-cyan/10 flex items-center justify-center">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-prism-success">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>
        </motion.div>

        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl md:text-3xl lg:text-4xl font-semibold text-prism-white mb-4 tracking-tight"
        >
          {screen.header}
        </motion.h1>

        {/* Subheader */}
        {screen.subheader && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-prism-cyan mb-8"
          >
            {screen.subheader}
          </motion.p>
        )}

        {/* Content */}
        {screen.content && screen.content.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-5 bg-prism-surface border border-white/5 rounded-2xl mb-10"
          >
            {screen.content.map((line, i) => (
              <p key={i} className="text-prism-muted-light">
                {line}
              </p>
            ))}
          </motion.div>
        )}

        {/* Social proof mini */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-7 h-7 rounded-full bg-gradient-to-br from-prism-electric-blue/30 to-prism-cyan/20 border-2 border-prism-black"
              />
            ))}
          </div>
          <span className="text-sm text-prism-muted-light">Thousands before you</span>
        </motion.div>

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


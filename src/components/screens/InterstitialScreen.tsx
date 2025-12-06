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
        {/* Badge - monospace, technical */}
        {screen.badge && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="inline-block mb-8"
          >
            <span className="font-raw text-xs tracking-badge text-prism-muted uppercase border border-prism-border px-4 py-2">
              {screen.badge}
            </span>
          </motion.div>
        )}

        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-2xl md:text-3xl lg:text-4xl font-refined font-medium text-prism-white mb-4 tracking-tight"
        >
          {screen.header}
        </motion.h1>

        {/* Subheader */}
        {screen.subheader && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-prism-secondary mb-10"
          >
            {screen.subheader}
          </motion.p>
        )}

        {/* Content - minimal box */}
        {screen.content && screen.content.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-6 border border-prism-border mb-12"
          >
            {screen.content.map((line, i) => (
              <p key={i} className="text-prism-secondary">
                {line}
              </p>
            ))}
          </motion.div>
        )}

        {/* Continue button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <button onClick={() => goToNext()} className="btn-primary w-full sm:w-auto">
            Continue
          </button>
        </motion.div>
      </div>
    </FunnelLayout>
  );
}

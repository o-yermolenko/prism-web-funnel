'use client';

import { motion } from 'framer-motion';
import { useFunnelNavigation } from '@/hooks/useFunnelNavigation';
import FunnelLayout from '../FunnelLayout';
import { FunnelScreen } from '@/types/funnel';

interface SocialProofScreenProps {
  screen: FunnelScreen;
}

export default function SocialProofScreen({ screen }: SocialProofScreenProps) {
  const { goToNext } = useFunnelNavigation();

  return (
    <FunnelLayout showProgress={screen.showProgress} showBackButton={screen.showBackButton}>
      <div className="w-full max-w-2xl mx-auto text-center px-4">
        
        {/* Header - The emotional hook */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-refined font-medium text-prism-white mb-6 tracking-tight"
        >
          {screen.header}
        </motion.h1>

        {/* Subheader with the number integrated */}
        {screen.subheader && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-prism-secondary mb-16 max-w-md mx-auto"
          >
            {screen.subheader}
          </motion.p>
        )}

        {/* Quote - Authority, not testimonial */}
        {screen.socialProof?.quote && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16 p-8 border-l-2 border-prism-electric-blue max-w-lg mx-auto text-left bg-prism-surface/30"
          >
            <p className="text-prism-white/90 italic text-lg leading-relaxed mb-4">
              "{screen.socialProof.quote.text}"
            </p>
            <p className="font-mono text-xs text-prism-muted uppercase tracking-widest">
              — {screen.socialProof.quote.source}
            </p>
          </motion.div>
        )}

        {/* Media logos - text only, muted */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-12"
        >
          <p className="font-mono text-xs text-prism-muted uppercase tracking-widest mb-4">
            As featured in
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 text-prism-muted">
            <span className="text-sm font-refined">Psychology Today</span>
            <span className="text-sm font-refined">Forbes</span>
            <span className="text-sm font-refined">WIRED</span>
          </div>
        </motion.div>

        {/* Continue button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <button onClick={() => goToNext()} className="btn-primary">
            Continue
          </button>
        </motion.div>
      </div>
    </FunnelLayout>
  );
}

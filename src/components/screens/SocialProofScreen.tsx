'use client';

import { motion } from 'framer-motion';
import { useFunnelNavigation } from '@/hooks/useFunnelNavigation';
import FunnelLayout from '../FunnelLayout';
import { FunnelScreen } from '@/types/funnel';

interface SocialProofScreenProps {
  screen: FunnelScreen;
}

// Media logos - simplified SVG representations
const MEDIA_LOGOS = [
  { name: 'Forbes', width: 80 },
  { name: 'Psychology Today', width: 120 },
  { name: 'The Guardian', width: 100 },
  { name: 'WIRED', width: 70 },
];

export default function SocialProofScreen({ screen }: SocialProofScreenProps) {
  const { goToNext } = useFunnelNavigation();

  return (
    <FunnelLayout showProgress={screen.showProgress} showBackButton={screen.showBackButton}>
      <div className="w-full max-w-2xl mx-auto text-center">
        {/* User count - big and bold */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-4 px-8 py-5 bg-gradient-to-r from-prism-surface to-prism-deep border border-prism-electric-blue/20 rounded-3xl shadow-prism">
            {/* Avatar stack */}
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-prism-electric-blue/40 to-prism-cyan/20 border-2 border-prism-deep flex items-center justify-center"
                  style={{ zIndex: 6 - i }}
                >
                  <div className="w-5 h-5 rounded-full bg-prism-muted/30" />
                </div>
              ))}
            </div>
            <div className="text-left">
              <div className="text-3xl font-bold text-prism-white">
                {screen.socialProof?.userCount || '2,500,000+'}
              </div>
              <div className="text-sm text-prism-muted-light">people already joined</div>
            </div>
          </div>
        </motion.div>

        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl md:text-4xl lg:text-5xl font-semibold text-prism-white mb-4 tracking-tight"
        >
          {screen.header}
        </motion.h1>

        {/* Subheader */}
        {screen.subheader && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-prism-muted-light mb-10 max-w-lg mx-auto"
          >
            {screen.subheader}
          </motion.p>
        )}

        {/* Quote card */}
        {screen.socialProof?.quote && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-10 p-6 bg-prism-surface border border-white/5 rounded-2xl max-w-lg mx-auto"
          >
            <div className="text-4xl text-prism-electric-blue/30 mb-2">"</div>
            <p className="text-prism-white italic text-lg leading-relaxed mb-4">
              {screen.socialProof.quote.text}
            </p>
            <p className="text-sm text-prism-cyan font-medium">
              — {screen.socialProof.quote.source}
            </p>
          </motion.div>
        )}

        {/* Media logos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-10"
        >
          <p className="text-xs text-prism-muted uppercase tracking-wider mb-4">As featured in</p>
          <div className="flex flex-wrap justify-center items-center gap-6 opacity-50">
            {MEDIA_LOGOS.map((logo) => (
              <div
                key={logo.name}
                className="text-prism-muted-light font-semibold text-sm"
                style={{ width: logo.width }}
              >
                {logo.name}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Continue button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <button onClick={() => goToNext()} className="btn-primary">
            Continue
          </button>
        </motion.div>
      </div>
    </FunnelLayout>
  );
}


'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useFunnelNavigation } from '@/hooks/useFunnelNavigation';
import FunnelLayout from '../FunnelLayout';
import { FunnelScreen } from '@/types/funnel';
import { MIRROR_INSIGHTS } from '@/lib/funnel-data';

interface MirrorRevealScreenProps {
  screen: FunnelScreen;
}

export default function MirrorRevealScreen({ screen }: MirrorRevealScreenProps) {
  const { getAnswer, goToNext } = useFunnelNavigation();
  const [showInsight, setShowInsight] = useState(false);
  const [showButton, setShowButton] = useState(false);
  
  // Get the selected thought from previous screen
  const selectedThought = getAnswer('mirror-select') as string;
  const insight = MIRROR_INSIGHTS[selectedThought] || MIRROR_INSIGHTS['pretending'];

  useEffect(() => {
    const timer1 = setTimeout(() => setShowInsight(true), 1200);
    const timer2 = setTimeout(() => setShowButton(true), 3000);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <FunnelLayout showProgress={false} showBackButton={screen.showBackButton}>
      <div className="w-full max-w-2xl mx-auto">
        {/* User's raw thought */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="border border-prism-border p-6 mb-10"
        >
          <p className="font-raw text-prism-secondary text-base leading-relaxed">
            "{insight.raw}"
          </p>
        </motion.div>

        {/* Processing indicator */}
        {!showInsight && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex justify-center my-12"
          >
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-prism-electric-blue animate-pulse" />
              <span className="font-raw text-xs text-prism-muted uppercase tracking-badge">
                Processing...
              </span>
            </div>
          </motion.div>
        )}

        {/* AI Insight */}
        <AnimatePresence>
          {showInsight && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="border border-prism-electric-blue/30 p-8"
            >
              {/* Insight text */}
              <div className="space-y-6">
                {insight.insight.split('\n\n').map((paragraph, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.3 }}
                    className={`font-refined text-lg leading-relaxed ${
                      paragraph.startsWith('The question')
                        ? 'text-prism-secondary italic mt-8 pt-6 border-t border-prism-border'
                        : 'text-prism-white'
                    }`}
                  >
                    {paragraph.includes('\n') 
                      ? paragraph.split('\n').map((line, lineIndex) => (
                          <span key={lineIndex}>
                            {line}
                            {lineIndex < paragraph.split('\n').length - 1 && <br />}
                          </span>
                        ))
                      : paragraph
                    }
                  </motion.p>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Continue button */}
        <AnimatePresence>
          {showButton && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-12 flex justify-center"
            >
              <button
                onClick={() => goToNext()}
                className="btn-primary"
              >
                I want more of this
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </FunnelLayout>
  );
}

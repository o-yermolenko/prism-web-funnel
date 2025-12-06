'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function ConfirmationScreen() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-prism-black flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-md mx-auto text-center">
        {/* Minimal prism icon */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-16 h-16 mx-auto mb-12 relative"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon
              points="50,10 10,90 90,90"
              fill="none"
              stroke="#0066ff"
              strokeWidth="1"
              opacity="0.6"
            />
          </svg>
        </motion.div>

        {showContent && (
          <>
            {/* Header */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-refined font-medium text-prism-white mb-4 tracking-tight"
            >
              Your void is ready.
            </motion.h1>

            {/* Subheader */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-prism-secondary mb-10"
            >
              Check your email. We'll see you inside.
            </motion.p>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-16 h-[1px] bg-prism-border mx-auto mb-10"
            />

            {/* Additional info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="font-raw text-xs text-prism-muted tracking-badge uppercase space-y-2"
            >
              <p>Confirmation sent to your email</p>
              <p>Your journey begins now</p>
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
}

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
        {/* Prism icon animation */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="w-24 h-24 mx-auto mb-12 relative"
        >
          {/* Glowing prism */}
          <div className="absolute inset-0 bg-prism-electric-blue/20 blur-2xl rounded-full" />
          
          <svg viewBox="0 0 100 100" className="w-full h-full relative">
            {/* Prism triangle */}
            <defs>
              <linearGradient id="prismGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0066ff" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#0066ff" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#8800ff" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            
            <polygon
              points="50,10 10,90 90,90"
              fill="url(#prismGradient)"
              stroke="#0066ff"
              strokeWidth="1"
              opacity="0.8"
            />
            
            {/* Inner glow */}
            <polygon
              points="50,25 25,75 75,75"
              fill="none"
              stroke="#0066ff"
              strokeWidth="0.5"
              opacity="0.4"
            />
          </svg>
          
          {/* Animated light rays */}
          <motion.div
            animate={{ 
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-16"
          >
            <div className="h-[1px] bg-gradient-to-r from-prism-red/50 to-transparent mb-2" />
            <div className="h-[1px] bg-gradient-to-r from-prism-orange/50 to-transparent mb-2" />
            <div className="h-[1px] bg-gradient-to-r from-prism-yellow/50 to-transparent mb-2" />
            <div className="h-[1px] bg-gradient-to-r from-prism-green/50 to-transparent mb-2" />
            <div className="h-[1px] bg-gradient-to-r from-prism-cyan/50 to-transparent mb-2" />
            <div className="h-[1px] bg-gradient-to-r from-prism-electric-blue/50 to-transparent mb-2" />
            <div className="h-[1px] bg-gradient-to-r from-prism-violet/50 to-transparent" />
          </motion.div>
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
              className="text-lg text-prism-muted-light mb-8"
            >
              Check your email. We'll see you inside.
            </motion.p>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-24 h-[1px] bg-prism-muted/30 mx-auto mb-8"
            />

            {/* Additional info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-prism-muted text-sm space-y-2"
            >
              <p>A confirmation has been sent to your email.</p>
              <p>Your journey to being unfiltered begins now.</p>
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
}


'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useFunnelNavigation } from '@/hooks/useFunnelNavigation';
import { FunnelScreen } from '@/types/funnel';

interface LoadingScreenProps {
  screen: FunnelScreen;
}

export default function LoadingScreen({ screen }: LoadingScreenProps) {
  const { goToNext } = useFunnelNavigation();
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  
  const messages = screen.content || [
    'A space where you don\'t have to perform...',
    'Where your intensity is understood...',
    'Where raw becomes clear...',
  ];

  const handleAdvance = useCallback(() => {
    goToNext();
  }, [goToNext]);

  useEffect(() => {
    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 80);

    // Message rotation
    const messageInterval = setInterval(() => {
      setMessageIndex(prev => (prev + 1) % messages.length);
    }, 2500);

    // Auto-advance after loading completes
    const advanceTimeout = setTimeout(() => {
      handleAdvance();
    }, 5000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(messageInterval);
      clearTimeout(advanceTimeout);
    };
  }, [messages.length, handleAdvance]);

  return (
    <div className="min-h-screen bg-prism-black flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-md mx-auto text-center">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-refined font-medium text-prism-white mb-12 tracking-tight"
        >
          {screen.header}
        </motion.h1>

        {/* Prism animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-32 h-32 mx-auto mb-12"
        >
          {/* Rotating prism */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0"
          >
            {/* Prism triangle */}
            <div 
              className="absolute inset-0 border border-prism-muted/30"
              style={{
                clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
              }}
            />
          </motion.div>

          {/* Inner glow */}
          <motion.div
            animate={{ 
              opacity: [0.3, 0.7, 0.3],
              scale: [0.8, 1.1, 0.8],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-4 bg-gradient-to-br from-prism-electric-blue/20 to-prism-violet/10 blur-xl"
            style={{
              clipPath: 'polygon(50% 10%, 10% 90%, 90% 90%)',
            }}
          />

          {/* Light rays */}
          <motion.div
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute -right-8 top-1/2 -translate-y-1/2 w-12 h-24"
          >
            <div className="h-[1px] bg-gradient-to-r from-prism-red/40 to-transparent mb-2 transform -rotate-12" />
            <div className="h-[1px] bg-gradient-to-r from-prism-orange/40 to-transparent mb-2 transform -rotate-6" />
            <div className="h-[1px] bg-gradient-to-r from-prism-yellow/40 to-transparent mb-2" />
            <div className="h-[1px] bg-gradient-to-r from-prism-green/40 to-transparent mb-2 transform rotate-6" />
            <div className="h-[1px] bg-gradient-to-r from-prism-cyan/40 to-transparent mb-2 transform rotate-12" />
            <div className="h-[1px] bg-gradient-to-r from-prism-electric-blue/40 to-transparent mb-2 transform rotate-[18deg]" />
            <div className="h-[1px] bg-gradient-to-r from-prism-violet/40 to-transparent transform rotate-[24deg]" />
          </motion.div>
        </motion.div>

        {/* Progress bar */}
        <div className="w-full h-[2px] bg-prism-muted/20 mb-8 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-prism-electric-blue to-prism-cyan"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        {/* Rotating messages */}
        <div className="h-12 relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={messageIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 text-prism-muted-light italic"
            >
              {messages[messageIndex]}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}


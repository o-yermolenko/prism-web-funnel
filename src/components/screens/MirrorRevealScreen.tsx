'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useFunnelStore } from '@/lib/store';
import FunnelLayout from '../FunnelLayout';
import { FunnelScreen } from '@/types/funnel';
import { MIRROR_INSIGHTS } from '@/lib/funnel-data';

interface MirrorRevealScreenProps {
  screen: FunnelScreen;
}

export default function MirrorRevealScreen({ screen }: MirrorRevealScreenProps) {
  const { getAnswer, nextScreen } = useFunnelStore();
  const [showInsight, setShowInsight] = useState(false);
  const [showButton, setShowButton] = useState(false);
  
  // Get the selected thought from previous screen (screen 16)
  const selectedThought = getAnswer(16) as string;
  const insight = MIRROR_INSIGHTS[selectedThought] || MIRROR_INSIGHTS['pretending'];

  useEffect(() => {
    // Show prism animation, then reveal insight
    const timer1 = setTimeout(() => setShowInsight(true), 1500);
    const timer2 = setTimeout(() => setShowButton(true), 3500);
    
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
          className="border border-prism-muted/30 p-6 mb-8"
        >
          <p className="font-raw text-prism-muted-light text-lg leading-relaxed">
            "{insight.raw}"
          </p>
        </motion.div>

        {/* Prism refraction animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showInsight ? 0 : 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center my-8"
        >
          <div className="relative">
            {/* Prism triangle */}
            <motion.div
              animate={{ 
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-16 h-16 relative"
            >
              <div 
                className="absolute inset-0 bg-gradient-to-br from-prism-white/10 to-transparent"
                style={{
                  clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                }}
              />
              
              {/* Light beam entering */}
              <motion.div
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute -left-12 top-1/2 w-12 h-[2px] bg-gradient-to-r from-transparent to-prism-white/50"
              />
              
              {/* Dispersed light exiting */}
              <motion.div
                animate={{ opacity: [0.2, 0.6, 0.2] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                className="absolute -right-16 top-1/3 w-16 h-8 overflow-hidden"
              >
                <div className="h-[1px] bg-prism-red/60 mb-1 transform rotate-[-15deg]" />
                <div className="h-[1px] bg-prism-orange/60 mb-1 transform rotate-[-10deg]" />
                <div className="h-[1px] bg-prism-yellow/60 mb-1 transform rotate-[-5deg]" />
                <div className="h-[1px] bg-prism-green/60 mb-1" />
                <div className="h-[1px] bg-prism-cyan/60 mb-1 transform rotate-[5deg]" />
                <div className="h-[1px] bg-prism-electric-blue/60 mb-1 transform rotate-[10deg]" />
                <div className="h-[1px] bg-prism-violet/60 transform rotate-[15deg]" />
              </motion.div>
            </motion.div>
            
            <p className="text-center text-prism-muted text-sm mt-4">Refracting...</p>
          </div>
        </motion.div>

        {/* AI Insight */}
        <AnimatePresence>
          {showInsight && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Subtle prism glow border */}
              <div className="absolute -inset-[1px] bg-gradient-to-r from-prism-electric-blue/20 via-prism-violet/10 to-prism-cyan/20 opacity-50" />
              
              <div className="relative border border-prism-muted/20 bg-prism-black p-8">
                {/* Insight text */}
                <div className="space-y-4">
                  {insight.insight.split('\n\n').map((paragraph, index) => (
                    <motion.p
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.3 }}
                      className={`font-refined text-lg leading-relaxed ${
                        paragraph.startsWith('The question')
                          ? 'text-prism-muted-light italic mt-6'
                          : 'text-prism-white/90'
                      }`}
                    >
                      {/* Handle line breaks within paragraphs (especially for the question/answer format) */}
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
              className="mt-10 flex justify-center"
            >
              <button
                onClick={() => nextScreen()}
                className="btn-primary px-12 py-4 text-lg hover:shadow-prism transition-shadow duration-300"
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


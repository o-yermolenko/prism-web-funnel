'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useFunnelNavigation } from '@/hooks/useFunnelNavigation';
import { FunnelScreen } from '@/types/funnel';

interface GenderScreenProps {
  screen: FunnelScreen;
}

const TESTIMONIALS = [
  { quote: "Finally understood why I felt so stuck", name: "Sarah", age: 34, time: "Just now" },
  { quote: "Saw myself clearly for the first time", name: "Michael", age: 29, time: "2 min ago" },
  { quote: "This explained everything about how I think", name: "Emma", age: 31, time: "Just now" },
  { quote: "Wish I found this years ago", name: "David", age: 37, time: "5 min ago" },
];

export default function GenderScreen({ screen }: GenderScreenProps) {
  const { saveAnswerAndNextDelayed } = useFunnelNavigation();
  const [selected, setSelected] = useState<string | null>(null);
  const [onlineCount, setOnlineCount] = useState(148);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOnlineCount(prev => {
        const change = Math.random() > 0.5 ? 1 : -1;
        return Math.max(142, Math.min(158, prev + change));
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % TESTIMONIALS.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const handleSelect = (optionId: string) => {
    setSelected(optionId);
    saveAnswerAndNextDelayed(optionId, 400);
  };

  return (
    <div className="min-h-[100dvh] bg-prism-black relative overflow-hidden flex flex-col">
      {/* Header with logo */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative z-10"
      >
        <div className="flex items-center justify-between px-4 py-3">
          <div className="w-8" />
          
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-prism-electric-blue" />
            <span className="font-refined text-lg font-bold tracking-[0.15em] text-prism-white">
              PRISM
            </span>
          </div>
          
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-prism-success opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-prism-success"></span>
            </span>
            <span className="font-raw text-xs text-prism-muted">
              <span className="text-prism-success">{onlineCount}</span>
            </span>
          </div>
        </div>
        
        <div className="h-0.5 bg-gradient-to-r from-prism-electric-blue via-prism-cyan to-prism-electric-blue opacity-40" />
      </motion.header>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col px-4 py-6">
        <div className="max-w-md mx-auto text-center w-full flex flex-col items-center">

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
            className="text-3xl md:text-4xl font-refined font-medium mb-3 tracking-tight"
          >
            <span className="text-prism-white">YOUR MIND.</span>
            <br />
            <span className="text-prism-electric-blue">FINALLY UNFILTERED.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.3 }}
            className="text-base md:text-lg mb-6 tracking-wide text-prism-secondary"
          >
            DISCOVER WHAT YOU&apos;VE NEVER SAID OUT LOUD
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            className="mb-5"
          >
            <span 
              className="inline-block px-4 py-2 font-raw text-sm uppercase tracking-badge border"
              style={{ 
                backgroundColor: 'rgba(0, 102, 255, 0.1)', 
                color: '#0066ff', 
                borderColor: 'rgba(0, 102, 255, 0.3)' 
              }}
            >
              3-Minute Assessment
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.3 }}
            className="mb-4 text-sm text-prism-muted"
          >
            What best describes you?
          </motion.p>

          {/* Gender Cards - Memento-style grid layout */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.3 }}
            className="w-full grid grid-cols-2 gap-3"
          >
            {/* Male Card */}
            <motion.button
              onClick={() => handleSelect('male')}
              whileTap={{ scale: 0.97 }}
              className={`group relative block overflow-hidden border-2 transition-all duration-200 active:scale-[0.97] ${
                selected === 'male'
                  ? 'border-prism-electric-blue shadow-[0_0_20px_rgba(0,102,255,0.3)]'
                  : 'border-prism-border hover:border-prism-electric-blue/50'
              }`}
              style={{ backgroundColor: '#0a0a0f' }}
            >
              <div className="aspect-[3/4] relative overflow-hidden">
                <Image
                  src="/images/male-photo.png"
                  alt="Male"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 50vw, 200px"
                />
              </div>
              
              <div 
                className={`p-3 flex items-center justify-between transition-all duration-200 ${
                  selected === 'male' 
                    ? 'bg-prism-electric-blue' 
                    : 'bg-prism-surface group-hover:bg-prism-electric-blue/20'
                }`}
              >
                <span className="text-prism-white font-refined font-medium text-base">Male</span>
                <svg 
                  className="w-5 h-5 text-prism-white/80" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.button>

            {/* Female Card */}
            <motion.button
              onClick={() => handleSelect('female')}
              whileTap={{ scale: 0.97 }}
              className={`group relative block overflow-hidden border-2 transition-all duration-200 active:scale-[0.97] ${
                selected === 'female'
                  ? 'border-prism-electric-blue shadow-[0_0_20px_rgba(0,102,255,0.3)]'
                  : 'border-prism-border hover:border-prism-electric-blue/50'
              }`}
              style={{ backgroundColor: '#0a0a0f' }}
            >
              <div className="aspect-[3/4] relative overflow-hidden">
                <Image
                  src="/images/female-photo.png"
                  alt="Female"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 50vw, 200px"
                />
              </div>
              
              <div 
                className={`p-3 flex items-center justify-between transition-all duration-200 ${
                  selected === 'female' 
                    ? 'bg-prism-electric-blue' 
                    : 'bg-prism-surface group-hover:bg-prism-electric-blue/20'
                }`}
              >
                <span className="text-prism-white font-refined font-medium text-base">Female</span>
                <svg 
                  className="w-5 h-5 text-prism-white/80" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.button>
          </motion.div>
        </div>
        
        <div className="flex-1" />

        {/* Rotating Testimonials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="mt-6 text-center h-14 max-w-md mx-auto"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-prism-secondary text-sm italic mb-1">
                &ldquo;{TESTIMONIALS[currentTestimonial].quote}&rdquo;
              </p>
              <p className="font-raw text-xs text-prism-muted tracking-badge">
                — {TESTIMONIALS[currentTestimonial].name}, {TESTIMONIALS[currentTestimonial].age} · <span className="text-prism-success">{TESTIMONIALS[currentTestimonial].time}</span>
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Trust footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.3 }}
          className="mt-4 text-center"
        >
          <p className="font-raw text-xs text-prism-muted tracking-badge mb-2">
            Free · Private · 3 min · <span className="text-prism-secondary">2,723</span> this week
          </p>
        </motion.div>
      </div>
    </div>
  );
}

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useFunnelStore } from '@/lib/store';
import FunnelLayout from '../FunnelLayout';
import { FunnelScreen } from '@/types/funnel';

interface GenderScreenProps {
  screen: FunnelScreen;
}

export default function GenderScreen({ screen }: GenderScreenProps) {
  const { setAnswer, nextScreen } = useFunnelStore();
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (optionId: string) => {
    setSelected(optionId);
    setAnswer(screen.id, optionId);
    
    // Delay for visual feedback
    setTimeout(() => {
      nextScreen();
    }, 400);
  };

  return (
    <FunnelLayout showProgress={false} showBackButton={false}>
      <div className="w-full max-w-2xl mx-auto text-center">
        {/* Badge */}
        {screen.badge && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-8"
          >
            <span className="text-xs tracking-[0.2em] text-prism-muted-light font-raw uppercase border border-prism-muted/30 px-4 py-2">
              {screen.badge}
            </span>
          </motion.div>
        )}

        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-refined font-medium text-prism-white mb-4 tracking-tight leading-tight"
        >
          {screen.header}
        </motion.h1>

        {/* Subheader */}
        {screen.subheader && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-prism-muted-light mb-16"
          >
            {screen.subheader}
          </motion.p>
        )}

        {/* Gender Options */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          {screen.options?.map((option) => (
            <button
              key={option.id}
              onClick={() => handleSelect(option.id)}
              className={`group relative w-full sm:w-64 h-72 border transition-all duration-500 ${
                selected === option.id
                  ? 'border-prism-electric-blue bg-prism-electric-blue/5'
                  : 'border-prism-muted/30 hover:border-prism-muted-light bg-transparent'
              }`}
            >
              {/* Silhouette with haircut */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg viewBox="0 0 100 140" className="w-24 h-40">
                  <defs>
                    <linearGradient id={`gradient-${option.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor={selected === option.id ? "#0066ff" : "#ffffff"} stopOpacity={selected === option.id ? 0.2 : 0.1} />
                      <stop offset="100%" stopColor={selected === option.id ? "#0066ff" : "#ffffff"} stopOpacity={selected === option.id ? 0.05 : 0} />
                    </linearGradient>
                  </defs>
                  
                  {/* Male haircut - short cropped on top */}
                  {option.id === 'male' && (
                    <path
                      d="M35 42 C35 30, 42 24, 50 24 C58 24, 65 30, 65 42 C65 36, 58 30, 50 30 C42 30, 35 36, 35 42"
                      fill={`url(#gradient-${option.id})`}
                      className="transition-all duration-500"
                    />
                  )}
                  
                  {/* Female haircut - longer flowing hair */}
                  {option.id === 'female' && (
                    <>
                      {/* Hair top */}
                      <path
                        d="M32 42 C32 26, 40 20, 50 20 C60 20, 68 26, 68 42 C68 32, 60 24, 50 24 C40 24, 32 32, 32 42"
                        fill={`url(#gradient-${option.id})`}
                        className="transition-all duration-500"
                      />
                      {/* Left flowing hair */}
                      <path
                        d="M32 42 C28 52, 28 65, 30 80 C30 70, 30 55, 34 45 Z"
                        fill={`url(#gradient-${option.id})`}
                        className="transition-all duration-500"
                      />
                      {/* Right flowing hair */}
                      <path
                        d="M68 42 C72 52, 72 65, 70 80 C70 70, 70 55, 66 45 Z"
                        fill={`url(#gradient-${option.id})`}
                        className="transition-all duration-500"
                      />
                    </>
                  )}
                  
                  {/* Head - same for both */}
                  <ellipse 
                    cx="50" 
                    cy="50" 
                    rx="16" 
                    ry="20"
                    fill={`url(#gradient-${option.id})`}
                    className="transition-all duration-500"
                  />
                  
                  {/* Neck */}
                  <rect
                    x="43"
                    y="68"
                    width="14"
                    height="16"
                    fill={`url(#gradient-${option.id})`}
                    className="transition-all duration-500"
                  />
                  
                  {/* Shoulders */}
                  <ellipse
                    cx="50"
                    cy="92"
                    rx="28"
                    ry="16"
                    fill={`url(#gradient-${option.id})`}
                    className="transition-all duration-500"
                  />
                </svg>
              </div>
              
              {/* Label */}
              <div className="absolute bottom-6 left-0 right-0 text-center">
                <span className={`text-lg font-refined transition-colors duration-300 ${
                  selected === option.id
                    ? 'text-prism-white'
                    : 'text-prism-muted-light group-hover:text-prism-white'
                }`}>
                  {option.text}
                </span>
              </div>

              {/* Selection indicator */}
              {selected === option.id && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-4 right-4 w-6 h-6 rounded-full bg-prism-electric-blue flex items-center justify-center"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </motion.div>
              )}
            </button>
          ))}
        </motion.div>

        {/* Legal footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-xs text-prism-muted max-w-md mx-auto"
        >
          By continuing, you agree to our{' '}
          <a href="#" className="underline hover:text-prism-muted-light transition-colors">Terms</a>{' '}
          and{' '}
          <a href="#" className="underline hover:text-prism-muted-light transition-colors">Privacy Policy</a>
        </motion.p>
      </div>
    </FunnelLayout>
  );
}


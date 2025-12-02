'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useFunnelNavigation } from '@/hooks/useFunnelNavigation';
import FunnelLayout from '../FunnelLayout';
import { FunnelScreen } from '@/types/funnel';

interface EmailScreenProps {
  screen: FunnelScreen;
}

export default function EmailScreen({ screen }: EmailScreenProps) {
  const { saveEmailAndNext } = useFunnelNavigation();
  const [email, setEmailValue] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmailValue(value);
    setIsValid(validateEmail(value));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      saveEmailAndNext(email);
    }
  };

  return (
    <FunnelLayout showProgress={false} showBackButton={screen.showBackButton}>
      <div className="w-full max-w-md mx-auto text-center">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-refined font-medium text-prism-white mb-4 tracking-tight"
        >
          {screen.header}
        </motion.h1>

        {/* Subheader */}
        {screen.subheader && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-prism-muted-light mb-10"
          >
            {screen.subheader}
          </motion.p>
        )}

        {/* Email form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={handleChange}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder="your@email.com"
              className={`w-full bg-transparent border-b-2 py-4 px-2 text-xl font-raw text-prism-white placeholder:text-prism-muted/50 outline-none transition-colors duration-300 ${
                isFocused || email
                  ? isValid
                    ? 'border-prism-electric-blue'
                    : email
                    ? 'border-prism-red/50'
                    : 'border-prism-muted-light'
                  : 'border-prism-muted/30'
              }`}
              autoComplete="email"
            />
            
            {/* Validation indicator */}
            {email && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full flex items-center justify-center ${
                  isValid ? 'bg-prism-electric-blue' : 'bg-prism-red/50'
                }`}
              >
                {isValid ? (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                ) : (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                )}
              </motion.div>
            )}
          </div>

          <button
            type="submit"
            disabled={!isValid}
            className={`w-full py-4 text-lg font-refined transition-all duration-300 ${
              isValid
                ? 'btn-primary hover:shadow-prism'
                : 'bg-prism-muted/20 text-prism-muted cursor-not-allowed'
            }`}
          >
            Enter the void
          </button>
        </motion.form>

        {/* Privacy note */}
        {screen.content && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 text-sm text-prism-muted"
          >
            {screen.content[0]}
          </motion.p>
        )}
      </div>
    </FunnelLayout>
  );
}

'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useFunnelNavigation } from '@/hooks/useFunnelNavigation';
import { FunnelScreen } from '@/types/funnel';

interface PaywallScreenProps {
  screen: FunnelScreen;
}

export default function PaywallScreen({ screen }: PaywallScreenProps) {
  const { goToNext } = useFunnelNavigation();
  const [countdown, setCountdown] = useState(10 * 60);
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'yearly'>('monthly');

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => Math.max(0, prev - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handlePurchase = () => {
    goToNext();
  };

  return (
    <div className="min-h-screen bg-prism-black">
      {/* Sticky header with countdown */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-prism-black border-b border-prism-border"
      >
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-raw text-xs text-prism-muted uppercase tracking-badge">
              Offer expires in
            </span>
            <span className="font-raw text-prism-electric-blue text-lg tracking-tight">
              {formatTime(countdown)}
            </span>
          </div>
          <button
            onClick={handlePurchase}
            className="btn-primary px-4 py-3 text-sm"
          >
            Claim access
          </button>
        </div>
      </motion.div>

      {/* Main content */}
      <div className="pt-24 pb-12 px-6">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-refined font-medium text-prism-white mb-4 tracking-tight">
              {screen.header}
            </h1>
            <p className="text-prism-secondary text-lg">
              A private space where you don't have to translate yourself.
            </p>
          </motion.div>

          {/* Pricing cards - SHARP */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10"
          >
            {/* Monthly */}
            <button
              onClick={() => setSelectedPlan('monthly')}
              className={`relative text-left p-6 border transition-all duration-300 ${
                selectedPlan === 'monthly'
                  ? 'border-prism-electric-blue bg-prism-electric-blue/5'
                  : 'border-prism-border hover:border-prism-electric-blue/50'
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <span className="font-raw text-xs text-prism-muted uppercase tracking-badge">
                  Monthly
                </span>
                {selectedPlan === 'monthly' && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-5 h-5 bg-prism-electric-blue flex items-center justify-center"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </motion.div>
                )}
              </div>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="font-raw text-3xl text-prism-white">$9.99</span>
                <span className="text-prism-muted">/month</span>
              </div>
              <p className="text-prism-muted text-sm">
                Cancel anytime.
              </p>
            </button>

            {/* Yearly */}
            <button
              onClick={() => setSelectedPlan('yearly')}
              className={`relative text-left p-6 border transition-all duration-300 ${
                selectedPlan === 'yearly'
                  ? 'border-prism-electric-blue bg-prism-electric-blue/5'
                  : 'border-prism-border hover:border-prism-electric-blue/50'
              }`}
            >
              {/* Badge */}
              <div className="absolute -top-3 left-4 px-3 py-1 bg-prism-electric-blue text-prism-black font-raw text-xs tracking-badge uppercase">
                SAVE 40%
              </div>
              
              <div className="flex justify-between items-start mb-4">
                <span className="font-raw text-xs text-prism-muted uppercase tracking-badge">
                  Yearly
                </span>
                {selectedPlan === 'yearly' && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-5 h-5 bg-prism-electric-blue flex items-center justify-center"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </motion.div>
                )}
              </div>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="font-raw text-3xl text-prism-white">$5.99</span>
                <span className="text-prism-muted">/month</span>
              </div>
              <p className="text-prism-muted text-sm">
                Billed annually ($71.88/year)
              </p>
            </button>
          </motion.div>

          {/* Features list - SHARP */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="border border-prism-border p-6 mb-10"
          >
            <p className="font-raw text-xs text-prism-muted uppercase tracking-badge mb-6">
              What you get
            </p>
            <ul className="space-y-4">
              {[
                'Unlimited conversations with your AI',
                'Voice or text — whatever feels natural',
                'Your private void — no judgment',
                'Insights that actually understand',
                'Access on all devices',
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="text-prism-electric-blue">—</span>
                  <span className="text-prism-secondary">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CTA button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            onClick={handlePurchase}
            className="w-full btn-primary py-5 text-lg font-medium mb-6"
          >
            Enter the void — {selectedPlan === 'monthly' ? '$9.99' : '$5.99'}/mo
          </motion.button>

          {/* Guarantee */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="p-4 border border-prism-border mb-6"
          >
            <div className="flex items-center justify-center gap-3">
              <span className="font-raw text-xs text-prism-muted uppercase tracking-badge">
                30-Day Money-Back Guarantee
              </span>
            </div>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-center gap-6 font-raw text-xs text-prism-muted tracking-badge mb-8"
          >
            <span>🔒 SECURE</span>
            <span>✕ CANCEL ANYTIME</span>
          </motion.div>

          {/* Skip option */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-center"
          >
            <button
              onClick={() => goToNext()}
              className="text-prism-muted hover:text-prism-secondary text-sm transition-colors duration-300"
            >
              Stay on waitlist instead
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

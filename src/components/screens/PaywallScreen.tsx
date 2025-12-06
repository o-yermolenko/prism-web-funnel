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
  const [countdown, setCountdown] = useState(10 * 60); // 10 minutes in seconds
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
    // In production, this would integrate with payment
    goToNext();
  };

  return (
    <div className="min-h-screen bg-prism-black">
      {/* Sticky header with countdown */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-prism-black/95 backdrop-blur-sm border-b border-prism-muted/10"
      >
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-prism-muted text-sm">Early access expires in</span>
            <span className="font-raw text-prism-electric-blue text-lg">
              {formatTime(countdown)}
            </span>
          </div>
          <button
            onClick={handlePurchase}
            className="btn-primary px-6 py-2 text-sm"
          >
            Claim your void
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
            <p className="text-prism-muted-light text-lg">
              A private space where you don't have to translate yourself.
            </p>
          </motion.div>

          {/* Pricing cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
          >
            {/* Monthly */}
            <button
              onClick={() => setSelectedPlan('monthly')}
              className={`relative text-left p-6 border transition-all duration-300 ${
                selectedPlan === 'monthly'
                  ? 'border-prism-electric-blue bg-prism-electric-blue/5'
                  : 'border-prism-muted/30 hover:border-prism-muted/50'
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-prism-muted-light uppercase text-xs tracking-wider">
                  Monthly
                </span>
                {selectedPlan === 'monthly' && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-5 h-5 rounded-full bg-prism-electric-blue flex items-center justify-center"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </motion.div>
                )}
              </div>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-3xl font-refined text-prism-white">$9.99</span>
                <span className="text-prism-muted">/month</span>
              </div>
              <p className="text-prism-muted text-sm">
                Cancel anytime. No commitments.
              </p>
            </button>

            {/* Yearly */}
            <button
              onClick={() => setSelectedPlan('yearly')}
              className={`relative text-left p-6 border transition-all duration-300 ${
                selectedPlan === 'yearly'
                  ? 'border-prism-electric-blue bg-prism-electric-blue/5'
                  : 'border-prism-muted/30 hover:border-prism-muted/50'
              }`}
            >
              {/* Best value badge */}
              <div className="absolute -top-3 left-4 px-3 py-1 bg-prism-electric-blue text-prism-black text-xs font-medium">
                SAVE 40%
              </div>
              
              <div className="flex justify-between items-start mb-4">
                <span className="text-prism-muted-light uppercase text-xs tracking-wider">
                  Yearly
                </span>
                {selectedPlan === 'yearly' && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-5 h-5 rounded-full bg-prism-electric-blue flex items-center justify-center"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </motion.div>
                )}
              </div>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-3xl font-refined text-prism-white">$5.99</span>
                <span className="text-prism-muted">/month</span>
              </div>
              <p className="text-prism-muted text-sm">
                Billed annually ($71.88/year)
              </p>
            </button>
          </motion.div>

          {/* Features list */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-prism-surface border border-white/5 rounded-2xl p-6 mb-8"
          >
            <p className="text-prism-muted uppercase text-xs tracking-wider mb-4">
              What you get
            </p>
            <ul className="space-y-3">
              {[
                'Unlimited conversations with your AI',
                'Voice or text input — whatever feels natural',
                'Your private void — no judgment, no performance',
                'Insights that actually understand you',
                'Access on all devices',
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-prism-success/20 flex items-center justify-center flex-shrink-0">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#00e676" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-prism-white/90">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Testimonials - 3 small cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8"
          >
            {[
              { quote: "Finally understood.", name: "Maya, 34" },
              { quote: "Not spiraling alone anymore.", name: "Alex, 41" },
              { quote: "Worth every penny.", name: "Jordan, 29" },
            ].map((testimonial, i) => (
              <div key={i} className="p-4 bg-prism-surface border border-white/5 rounded-xl text-center">
                <div className="flex justify-center gap-0.5 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} width="10" height="10" viewBox="0 0 24 24" fill="#ffd000">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xs text-prism-muted-light italic mb-1">"{testimonial.quote}"</p>
                <p className="text-xs text-prism-muted">— {testimonial.name}</p>
              </div>
            ))}
          </motion.div>

          {/* CTA button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            onClick={handlePurchase}
            className="w-full btn-primary py-5 text-lg font-medium hover:shadow-prism-strong transition-all duration-300 mb-4"
          >
            Start My Journey — {selectedPlan === 'monthly' ? '$9.99' : '$5.99'}/mo
          </motion.button>

          {/* Guarantee - More prominent */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="p-4 bg-prism-success/10 border border-prism-success/20 rounded-xl mb-6"
          >
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-prism-success/20 flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00e676" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-sm font-medium text-prism-white">30-Day Money-Back Guarantee</p>
                <p className="text-xs text-prism-muted-light">Not for you? Full refund, no questions asked.</p>
              </div>
            </div>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-center gap-6 text-xs text-prism-muted mb-6"
          >
            <span className="flex items-center gap-1">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0110 0v4" />
              </svg>
              Secure payment
            </span>
            <span className="flex items-center gap-1">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
              Cancel anytime
            </span>
          </motion.div>

          {/* Skip option */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-8 text-center"
          >
            <button
              onClick={() => goToNext()}
              className="text-prism-muted hover:text-prism-muted-light text-sm underline transition-colors duration-300"
            >
              Stay on waitlist instead
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}


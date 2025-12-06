'use client';

import { motion } from 'framer-motion';
import { useFunnelNavigation } from '@/hooks/useFunnelNavigation';
import FunnelLayout from '../FunnelLayout';
import { FunnelScreen } from '@/types/funnel';

interface ValidationScreenProps {
  screen: FunnelScreen;
}

// Icons for different screen purposes
const TransitionIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
    <circle cx="32" cy="32" r="30" stroke="url(#grad1)" strokeWidth="2" />
    <path d="M20 32h24M36 24l8 8-8 8" stroke="url(#grad1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0088ff" />
        <stop offset="100%" stopColor="#00d4ff" />
      </linearGradient>
    </defs>
  </svg>
);

const UnlockIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
    <rect x="16" y="28" width="32" height="24" rx="4" stroke="url(#grad2)" strokeWidth="2" />
    <path d="M24 28V20a8 8 0 0116 0" stroke="url(#grad2)" strokeWidth="2" strokeLinecap="round" />
    <circle cx="32" cy="40" r="3" fill="#00d4ff" />
    <defs>
      <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0088ff" />
        <stop offset="100%" stopColor="#00d4ff" />
      </linearGradient>
    </defs>
  </svg>
);

const DailyIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
    <circle cx="32" cy="32" r="24" stroke="url(#grad3)" strokeWidth="2" />
    <path d="M32 20v12l8 8" stroke="url(#grad3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="32" cy="32" r="3" fill="#00e676" />
    <defs>
      <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0088ff" />
        <stop offset="100%" stopColor="#00e676" />
      </linearGradient>
    </defs>
  </svg>
);

export default function ValidationScreen({ screen }: ValidationScreenProps) {
  const { goToNext } = useFunnelNavigation();
  
  // Determine icon based on screen purpose
  const getIcon = () => {
    if (screen.purpose?.includes('Transition')) return <TransitionIcon />;
    if (screen.purpose?.includes('Future') || screen.purpose?.includes('benefit')) return <DailyIcon />;
    return <UnlockIcon />;
  };

  // Check if this is a transition/future-pacing screen (simpler layout with enhancements)
  const isTransitionScreen = !screen.statistics && !screen.diagnosis;

  return (
    <FunnelLayout showProgress={screen.showProgress} showBackButton={screen.showBackButton}>
      <div className="w-full max-w-2xl mx-auto text-center px-4">
        
        {/* For transition screens - add visual icon */}
        {isTransitionScreen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex justify-center"
          >
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-prism-electric-blue/20 to-prism-cyan/10 flex items-center justify-center">
              {getIcon()}
            </div>
          </motion.div>
        )}

        {/* Statistics display */}
        {screen.statistics && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="text-6xl md:text-8xl font-refined font-medium text-prism-electric-blue">
              {screen.statistics.value}
            </span>
          </motion.div>
        )}

        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-2xl md:text-3xl lg:text-4xl font-semibold text-prism-white mb-4 tracking-tight leading-snug"
        >
          {screen.header}
        </motion.h1>

        {/* Subheader */}
        {screen.subheader && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-lg md:text-xl text-prism-cyan mb-8 leading-relaxed"
          >
            {screen.subheader}
          </motion.p>
        )}

        {/* Enhanced content for transition screens */}
        {isTransitionScreen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mb-10"
          >
            {/* Feature cards for "What if you didn't have to?" type screens */}
            {screen.purpose?.includes('Transition') && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {[
                  { 
                    icon: (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <circle cx="12" cy="12" r="3" fill="currentColor" />
                      </svg>
                    ), 
                    text: 'Clarity on demand' 
                  },
                  { 
                    icon: (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="5" y="11" width="14" height="10" rx="2" />
                        <path d="M8 11V7a4 4 0 018 0" strokeLinecap="round" />
                      </svg>
                    ), 
                    text: 'No more translating' 
                  },
                  { 
                    icon: (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                      </svg>
                    ), 
                    text: 'Instant understanding' 
                  },
                ].map((feature, i) => (
                  <motion.div
                    key={feature.text}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                    className="p-4 bg-prism-surface border border-white/5 rounded-xl text-center"
                  >
                    <div className="text-prism-cyan mb-3 flex justify-center">{feature.icon}</div>
                    <span className="text-sm text-prism-muted-light">{feature.text}</span>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Benefits for "Imagine doing this every day" type screens */}
            {screen.purpose?.includes('benefit') && (
              <div className="p-6 bg-prism-surface border border-prism-success/20 rounded-2xl text-left mb-8">
                <p className="text-xs text-prism-success uppercase tracking-wider mb-4">What this means for you</p>
                <div className="space-y-3">
                  {[
                    'Process your thoughts clearly',
                    'Make decisions with confidence',
                    'Finally feel understood',
                    'Stop the mental exhaustion',
                  ].map((benefit, i) => (
                    <motion.div
                      key={benefit}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-5 h-5 rounded-full bg-prism-success/20 flex items-center justify-center flex-shrink-0">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#00e676" strokeWidth="3">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <span className="text-prism-white">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Social proof for transition screens */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center justify-center gap-4 text-sm text-prism-muted-light"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-7 h-7 rounded-full bg-gradient-to-br from-prism-electric-blue/30 to-prism-cyan/20 border-2 border-prism-black"
                  />
                ))}
              </div>
              <span>Trusted by 127,000+ people</span>
            </motion.div>
          </motion.div>
        )}

        {/* Source citation */}
        {screen.statistics?.source && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-sm text-prism-muted mb-12"
          >
            Source: {screen.statistics.source}
          </motion.p>
        )}

        {/* Diagnosis block */}
        {screen.diagnosis && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-left bg-prism-surface border border-prism-urgency/20 rounded-2xl p-8 mb-8"
          >
            <p className="text-sm text-prism-urgency uppercase tracking-wider mb-6">
              {screen.diagnosis.title}
            </p>
            
            <div className="space-y-4">
              {screen.diagnosis.items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.15 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-prism-urgency/20 flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#ff3d71" strokeWidth="2">
                      <path d="M12 9v4M12 17h.01" />
                    </svg>
                  </div>
                  <p className="text-prism-white/90 leading-relaxed">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
            
            {screen.diagnosis.warning && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="mt-8 pt-6 border-t border-prism-urgency/20 text-prism-warning text-sm"
              >
                ⚠️ {screen.diagnosis.warning}
              </motion.p>
            )}
          </motion.div>
        )}

        {/* Continue button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: screen.diagnosis ? 1.2 : 0.7 }}
        >
          <button
            onClick={() => goToNext()}
            className="btn-primary w-full sm:w-auto"
          >
            Continue
          </button>
        </motion.div>
      </div>
    </FunnelLayout>
  );
}

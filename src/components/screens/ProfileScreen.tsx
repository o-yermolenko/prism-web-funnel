'use client';

import { motion } from 'framer-motion';
import { useFunnelNavigation } from '@/hooks/useFunnelNavigation';
import FunnelLayout from '../FunnelLayout';
import { FunnelScreen } from '@/types/funnel';

interface ProfileScreenProps {
  screen: FunnelScreen;
}

export default function ProfileScreen({ screen }: ProfileScreenProps) {
  const { goToNext, getAnswer } = useFunnelNavigation();
  
  const primaryNeed = getAnswer('primary-need') as string;
  const bestTime = getAnswer('use-timing') as string;
  const dailyPractice = getAnswer('time-commitment') as string;

  const needMap: Record<string, string> = {
    'unfiltered': 'A space to be unfiltered',
    'decisions': 'Help with decision-making',
    'clarity': 'Clarity on your thoughts',
    'understands': 'Something that finally understands',
  };

  const timeMap: Record<string, string> = {
    'night': 'Late night thinking',
    'conversations': 'Before difficult conversations',
    'spiraling': 'When spiraling',
    'always': 'Anytime you need it',
  };

  const practiceMap: Record<string, string> = {
    '5min': '5 minutes daily',
    '10min': '10 minutes daily',
    '15min': '15 minutes daily',
    '20min': '20+ minutes daily',
  };

  return (
    <FunnelLayout showProgress={false} showBackButton={false}>
      <div className="w-full max-w-2xl mx-auto text-center px-4">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-refined font-medium text-prism-white mb-12 tracking-tight"
        >
          {screen.header}
        </motion.h1>

        {/* Insight content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border-t border-b border-prism-border py-10 mb-12"
        >
          <div className="space-y-4 text-left max-w-lg mx-auto">
            {screen.content?.map((line, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.15 }}
                className={`font-refined text-xl leading-relaxed ${
                  line === '' 
                    ? 'h-6' 
                    : 'text-prism-secondary'
                }`}
              >
                {line}
              </motion.p>
            ))}
          </div>
        </motion.div>

        {/* Personalized profile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="mb-12"
        >
          <p className="font-raw text-xs text-prism-muted uppercase tracking-badge mb-6">
            Your Profile
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-prism-border p-4">
              <p className="font-raw text-xs text-prism-muted uppercase tracking-badge mb-2">
                Primary Need
              </p>
              <p className="text-prism-white font-refined">
                {needMap[primaryNeed] || 'Clarity & Understanding'}
              </p>
            </div>
            
            <div className="border border-prism-border p-4">
              <p className="font-raw text-xs text-prism-muted uppercase tracking-badge mb-2">
                Best Time
              </p>
              <p className="text-prism-white font-refined">
                {timeMap[bestTime] || 'Whenever needed'}
              </p>
            </div>
            
            <div className="border border-prism-border p-4">
              <p className="font-raw text-xs text-prism-muted uppercase tracking-badge mb-2">
                Daily Practice
              </p>
              <p className="text-prism-white font-refined">
                {practiceMap[dailyPractice] || '10 minutes daily'}
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.8 }}
          onClick={() => goToNext()}
          className="btn-primary"
        >
          Get early access
        </motion.button>
      </div>
    </FunnelLayout>
  );
}

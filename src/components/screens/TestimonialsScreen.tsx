'use client';

import { motion } from 'framer-motion';
import { useFunnelNavigation } from '@/hooks/useFunnelNavigation';
import FunnelLayout from '../FunnelLayout';
import { FunnelScreen } from '@/types/funnel';
import { TESTIMONIALS } from '@/lib/funnel-data';

interface TestimonialsScreenProps {
  screen: FunnelScreen;
}

export default function TestimonialsScreen({ screen }: TestimonialsScreenProps) {
  const { goToNext } = useFunnelNavigation();

  return (
    <FunnelLayout showProgress={false} showBackButton={screen.showBackButton}>
      <div className="w-full max-w-2xl mx-auto text-center px-4">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-refined font-medium text-prism-white mb-12 tracking-tight"
        >
          {screen.header}
        </motion.h1>

        {/* Testimonials - No avatars, no stars, just quotes */}
        <div className="space-y-6 mb-12">
          {TESTIMONIALS.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
              className="relative border border-prism-border p-6 text-left"
            >
              {/* Quote text */}
              <p className="font-refined text-base text-prism-secondary leading-relaxed mb-4">
                "{testimonial.quote}"
              </p>
              
              {/* Author - minimal, just initials and role */}
              <div className="flex items-center gap-3">
                <span className="font-raw text-xs text-prism-muted uppercase tracking-badge">
                  — {testimonial.name}, {testimonial.age}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          onClick={() => goToNext()}
          className="btn-primary"
        >
          Continue
        </motion.button>
      </div>
    </FunnelLayout>
  );
}

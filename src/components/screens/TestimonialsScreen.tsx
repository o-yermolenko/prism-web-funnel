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

        {/* Testimonials */}
        <div className="space-y-6 mb-12">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
              className="relative border border-prism-muted/20 p-6 text-left"
            >
              {/* Quote mark */}
              <span className="absolute -top-3 left-4 text-3xl text-prism-electric-blue/30">
                "
              </span>
              
              {/* Quote text */}
              <p className="font-refined text-lg text-prism-white/90 leading-relaxed mb-4 pl-2">
                {testimonial.quote}
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-3 pl-2">
                <div className="w-8 h-8 rounded-full bg-prism-muted/20 flex items-center justify-center">
                  <span className="text-prism-muted-light text-sm">
                    {testimonial.name[0]}
                  </span>
                </div>
                <div>
                  <p className="text-prism-white text-sm font-refined">
                    {testimonial.name}
                  </p>
                  <p className="text-prism-muted text-xs">
                    {testimonial.age}
                  </p>
                </div>
              </div>
              
              {/* Subtle glow on hover */}
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-prism-electric-blue/5 to-transparent" />
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
          className="btn-primary px-12 py-4 text-lg hover:shadow-prism transition-shadow duration-300"
        >
          Join them
        </motion.button>
      </div>
    </FunnelLayout>
  );
}


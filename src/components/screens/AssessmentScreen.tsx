'use client';

import { motion } from 'framer-motion';
import { useFunnelNavigation } from '@/hooks/useFunnelNavigation';
import FunnelLayout from '../FunnelLayout';
import { FunnelScreen, AssessmentMetric } from '@/types/funnel';

interface AssessmentScreenProps {
  screen: FunnelScreen;
}

const LEVEL_STYLES = {
  low: { text: 'text-prism-success', position: 15 },
  medium: { text: 'text-prism-secondary', position: 45 },
  high: { text: 'text-prism-cyan', position: 70 },
  critical: { text: 'text-prism-electric-blue', position: 90 },
};

function MetricCard({ metric, index }: { metric: AssessmentMetric; index: number }) {
  const styles = LEVEL_STYLES[metric.level];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
      className="p-4 border border-prism-border"
    >
      <p className="font-raw text-xs text-prism-muted uppercase tracking-badge mb-1">
        {metric.label}
      </p>
      <p className={`font-refined font-medium ${styles.text}`}>
        {metric.value}
      </p>
    </motion.div>
  );
}

export default function AssessmentScreen({ screen }: AssessmentScreenProps) {
  const { goToNext } = useFunnelNavigation();
  const assessment = screen.assessment;
  
  if (!assessment) return null;
  
  const riskStyles = LEVEL_STYLES[assessment.riskLevel];

  return (
    <FunnelLayout showProgress={screen.showProgress} showBackButton={screen.showBackButton}>
      <div className="w-full max-w-xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h1 className="text-2xl md:text-3xl font-refined font-medium text-prism-white mb-2 tracking-tight">
            {screen.header}
          </h1>
          {screen.subheader && (
            <p className="text-prism-secondary">{screen.subheader}</p>
          )}
        </motion.div>

        {/* Risk Level Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-10 p-6 border border-prism-border"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="font-raw text-xs text-prism-muted uppercase tracking-badge">
              {assessment.riskLabel}
            </span>
            <span className={`font-raw text-xs uppercase tracking-badge ${riskStyles.text}`}>
              {assessment.riskLevel}
            </span>
          </div>
          
          {/* Minimal gradient bar */}
          <div className="relative h-1 bg-prism-border mb-2">
            <div 
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-prism-success via-prism-cyan to-prism-electric-blue"
              style={{ width: `${riskStyles.position}%` }}
            />
            {/* Indicator */}
            <motion.div
              initial={{ left: '0%' }}
              animate={{ left: `${riskStyles.position}%` }}
              transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 bg-prism-white"
            />
          </div>
          
          <div className="flex justify-between font-raw text-xs text-prism-muted tracking-badge">
            <span>LOW</span>
            <span>HIGH</span>
          </div>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-3 mb-10">
          {assessment.metrics.map((metric, index) => (
            <MetricCard key={metric.label} metric={metric} index={index} />
          ))}
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="p-6 border border-prism-border mb-10"
        >
          <p className="text-prism-secondary text-sm leading-relaxed">
            {assessment.summary}
          </p>
        </motion.div>

        {/* Continue button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex justify-center"
        >
          <button onClick={() => goToNext()} className="btn-primary w-full sm:w-auto">
            Continue
          </button>
        </motion.div>
      </div>
    </FunnelLayout>
  );
}

'use client';

import { motion } from 'framer-motion';
import { useFunnelNavigation } from '@/hooks/useFunnelNavigation';
import FunnelLayout from '../FunnelLayout';
import { FunnelScreen, AssessmentMetric } from '@/types/funnel';

interface AssessmentScreenProps {
  screen: FunnelScreen;
}

const LEVEL_COLORS = {
  low: { bg: 'bg-prism-success/20', border: 'border-prism-success/30', text: 'text-prism-success', position: 15 },
  medium: { bg: 'bg-prism-warning/20', border: 'border-prism-warning/30', text: 'text-prism-warning', position: 45 },
  high: { bg: 'bg-orange-500/20', border: 'border-orange-500/30', text: 'text-orange-400', position: 70 },
  critical: { bg: 'bg-prism-urgency/20', border: 'border-prism-urgency/30', text: 'text-prism-urgency', position: 90 },
};

function MetricCard({ metric, index }: { metric: AssessmentMetric; index: number }) {
  const colors = LEVEL_COLORS[metric.level];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
      className={`p-4 rounded-xl ${colors.bg} border ${colors.border}`}
    >
      <div className="flex items-center gap-3">
        {metric.icon && <span className="text-2xl">{metric.icon}</span>}
        <div className="flex-1">
          <p className="text-sm text-prism-muted-light">{metric.label}</p>
          <p className={`font-semibold ${colors.text}`}>{metric.value}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function AssessmentScreen({ screen }: AssessmentScreenProps) {
  const { goToNext } = useFunnelNavigation();
  const assessment = screen.assessment;
  
  if (!assessment) return null;
  
  const riskColors = LEVEL_COLORS[assessment.riskLevel];

  return (
    <FunnelLayout showProgress={screen.showProgress} showBackButton={screen.showBackButton}>
      <div className="w-full max-w-xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-2xl md:text-3xl font-semibold text-prism-white mb-2 tracking-tight">
            {screen.header}
          </h1>
          {screen.subheader && (
            <p className="text-prism-muted-light">{screen.subheader}</p>
          )}
        </motion.div>

        {/* Risk Level Indicator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-8 p-6 bg-prism-surface border border-white/5 rounded-2xl"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-prism-muted-light">{assessment.riskLabel}</span>
            <span className={`text-sm font-bold uppercase ${riskColors.text}`}>
              {assessment.riskLevel} Level
            </span>
          </div>
          
          {/* Gradient bar */}
          <div className="relative h-3 rounded-full overflow-hidden mb-2">
            <div className="absolute inset-0 bg-gradient-to-r from-prism-success via-prism-warning via-orange-500 to-prism-urgency" />
            {/* Indicator */}
            <motion.div
              initial={{ left: '0%' }}
              animate={{ left: `${riskColors.position}%` }}
              transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-prism-white border-2 border-prism-black shadow-lg"
            />
          </div>
          
          <div className="flex justify-between text-xs text-prism-muted">
            <span>Low</span>
            <span>Medium</span>
            <span>High</span>
          </div>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          {assessment.metrics.map((metric, index) => (
            <MetricCard key={metric.label} metric={metric} index={index} />
          ))}
        </div>

        {/* Summary Warning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="p-5 bg-prism-urgency/10 border border-prism-urgency/20 rounded-2xl mb-8"
        >
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-prism-urgency/20 flex items-center justify-center flex-shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-prism-urgency">
                <path d="M12 9v4M12 17h.01M12 3l9.5 16.5H2.5L12 3z" />
              </svg>
            </div>
            <p className="text-sm text-prism-white leading-relaxed">
              {assessment.summary}
            </p>
          </div>
        </motion.div>

        {/* Continue button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex justify-center"
        >
          <button onClick={() => goToNext()} className="btn-primary w-full sm:w-auto">
            See What's Possible
          </button>
        </motion.div>
      </div>
    </FunnelLayout>
  );
}


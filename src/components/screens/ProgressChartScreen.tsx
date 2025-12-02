'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useFunnelNavigation } from '@/hooks/useFunnelNavigation';
import FunnelLayout from '../FunnelLayout';
import { FunnelScreen } from '@/types/funnel';

interface ProgressChartScreenProps {
  screen: FunnelScreen;
}

export default function ProgressChartScreen({ screen }: ProgressChartScreenProps) {
  const { goToNext } = useFunnelNavigation();
  const [animationProgress, setAnimationProgress] = useState(0);
  const chart = screen.progressChart;

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationProgress(1);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (!chart) return null;

  const maxValue = 100;
  const chartHeight = 200;

  // Calculate SVG path for the lines
  const getPath = (values: number[]) => {
    const width = 300;
    const padding = 20;
    const availableWidth = width - padding * 2;
    const stepX = availableWidth / (values.length - 1);
    
    return values.map((val, i) => {
      const x = padding + i * stepX;
      const y = chartHeight - (val / maxValue) * (chartHeight - 40);
      return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
    }).join(' ');
  };

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
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-prism-white mb-3 tracking-tight">
            {screen.header}
          </h1>
          {screen.subheader && (
            <p className="text-prism-muted-light text-lg">{screen.subheader}</p>
          )}
        </motion.div>

        {/* Chart Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-6 bg-prism-surface border border-white/5 rounded-2xl mb-8"
        >
          {/* Chart */}
          <div className="relative" style={{ height: chartHeight + 40 }}>
            <svg 
              viewBox={`0 0 300 ${chartHeight + 40}`} 
              className="w-full h-full"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Grid lines */}
              {[0, 25, 50, 75, 100].map((val) => {
                const y = chartHeight - (val / maxValue) * (chartHeight - 40);
                return (
                  <g key={val}>
                    <line 
                      x1="20" 
                      y1={y} 
                      x2="280" 
                      y2={y} 
                      stroke="rgba(255,255,255,0.1)" 
                      strokeDasharray="4 4"
                    />
                    <text 
                      x="10" 
                      y={y + 4} 
                      fill="rgba(255,255,255,0.4)" 
                      fontSize="10"
                    >
                      {val}%
                    </text>
                  </g>
                );
              })}

              {/* Without product line (faded, declining) */}
              <motion.path
                d={getPath(chart.withoutProduct)}
                fill="none"
                stroke="#ff3d71"
                strokeWidth="2"
                strokeDasharray="4 4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: animationProgress, opacity: 0.5 }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />

              {/* With product line (bright, growing) */}
              <motion.path
                d={getPath(chart.withProduct)}
                fill="none"
                stroke="url(#progressGradient)"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: animationProgress }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />

              {/* Gradient fill under with-product line */}
              <motion.path
                d={`${getPath(chart.withProduct)} L 280 ${chartHeight} L 20 ${chartHeight} Z`}
                fill="url(#areaGradient)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                transition={{ duration: 1, delay: 1.5 }}
              />

              {/* Gradient definitions */}
              <defs>
                <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0088ff" />
                  <stop offset="100%" stopColor="#00e676" />
                </linearGradient>
                <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#0088ff" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#0088ff" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* X-axis labels */}
              {chart.timePoints.map((label, i) => {
                const x = 20 + (i * 260) / (chart.timePoints.length - 1);
                return (
                  <text 
                    key={label} 
                    x={x} 
                    y={chartHeight + 25} 
                    fill="rgba(255,255,255,0.6)" 
                    fontSize="11"
                    textAnchor="middle"
                  >
                    {label}
                  </text>
                );
              })}
            </svg>
          </div>

          {/* Legend */}
          <div className="flex justify-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-4 h-1 rounded bg-gradient-to-r from-prism-electric-blue to-prism-success" />
              <span className="text-sm text-prism-muted-light">With PRISM</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-1 rounded bg-prism-urgency/50" style={{ backgroundImage: 'repeating-linear-gradient(90deg, #ff3d71 0, #ff3d71 4px, transparent 4px, transparent 8px)' }} />
              <span className="text-sm text-prism-muted-light">Without</span>
            </div>
          </div>
        </motion.div>

        {/* Key insight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="p-5 bg-prism-success/10 border border-prism-success/20 rounded-2xl mb-8"
        >
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-prism-success/20 flex items-center justify-center flex-shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-prism-success">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-prism-white mb-1">Users see significant clarity improvement</p>
              <p className="text-sm text-prism-muted-light">Based on self-reported clarity scores after 4 weeks of daily use</p>
            </div>
          </div>
        </motion.div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center text-xs text-prism-muted mb-8"
        >
          *Chart is illustrative. Individual results may vary.
        </motion.p>

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


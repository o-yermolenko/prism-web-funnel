'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useFunnelNavigation } from '@/hooks/useFunnelNavigation';
import FunnelLayout from '../FunnelLayout';
import { FunnelScreen } from '@/types/funnel';
import { TESTIMONIALS } from '@/lib/funnel-data';

interface LoadingEngagementScreenProps {
  screen: FunnelScreen;
}

export default function LoadingEngagementScreen({ screen }: LoadingEngagementScreenProps) {
  const { goToNext } = useFunnelNavigation();
  const [progress, setProgress] = useState(0);
  const [currentStage, setCurrentStage] = useState(0);
  const [showQuestion, setShowQuestion] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questionAnswered, setQuestionAnswered] = useState(false);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const stages = screen.content || [
    'Analyzing your thought patterns...',
    'Identifying your unique frequency...',
    'Mapping your mental landscape...',
    'Calibrating your void...',
    'Preparing your personalized profile...',
  ];

  const questions = screen.engagementQuestions || [];
  
  // Loading duration: 20 seconds (pattern says 15-30s)
  const TOTAL_DURATION = 20000;
  const PROGRESS_INTERVAL = TOTAL_DURATION / 100;

  const handleQuestionAnswer = useCallback(() => {
    setQuestionAnswered(true);
    
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(prev => prev + 1);
        setQuestionAnswered(false);
      } else {
        // All questions answered, proceed
        setTimeout(() => goToNext(), 1000);
      }
    }, 500);
  }, [currentQuestion, questions.length, goToNext]);

  useEffect(() => {
    // Progress animation - slower (20 seconds total)
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, PROGRESS_INTERVAL);

    // Stage changes - spread across the duration
    const stageInterval = TOTAL_DURATION / stages.length;
    const stageTimers = stages.map((_, index) => {
      return setTimeout(() => {
        setCurrentStage(index);
      }, index * stageInterval);
    });

    // Show first question after initial loading (5 seconds)
    const questionTimer = setTimeout(() => {
      if (questions.length > 0) {
        setShowQuestion(true);
      }
    }, 5000);
    
    // Testimonial rotation - every 4 seconds
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonialIndex(prev => (prev + 1) % TESTIMONIALS.length);
    }, 4000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(testimonialInterval);
      stageTimers.forEach(clearTimeout);
      clearTimeout(questionTimer);
    };
  }, [stages.length, questions.length, PROGRESS_INTERVAL]);

  // Auto-advance if no questions or all done
  useEffect(() => {
    if (progress >= 100 && questions.length === 0) {
      setTimeout(() => goToNext(), 1000);
    }
  }, [progress, questions.length, goToNext]);

  const currentTestimonial = TESTIMONIALS[currentTestimonialIndex];

  return (
    <FunnelLayout showProgress={false} showBackButton={false}>
      <div className="w-full max-w-xl mx-auto text-center">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-3xl font-semibold text-prism-white mb-8 tracking-tight"
        >
          {screen.header}
        </motion.h1>

        {/* Animated loader */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative w-40 h-40 mx-auto mb-8"
        >
          {/* Background circle */}
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="4"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="url(#loaderGradient)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray={`${(progress / 100) * 283} 283`}
              className="transition-all duration-100"
            />
            <defs>
              <linearGradient id="loaderGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0088ff" />
                <stop offset="100%" stopColor="#00d4ff" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Center percentage */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold text-prism-white">{progress}%</span>
          </div>
        </motion.div>

        {/* Stage text */}
        <AnimatePresence mode="wait">
          <motion.p
            key={currentStage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-prism-muted-light mb-10"
          >
            {stages[currentStage]}
          </motion.p>
        </AnimatePresence>

        {/* Engagement Question */}
        <AnimatePresence>
          {showQuestion && questions[currentQuestion] && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              className="p-6 bg-prism-surface border border-white/5 rounded-2xl mb-8"
            >
              <p className="text-xs text-prism-cyan uppercase tracking-wider mb-3">
                To move forward, tell us:
              </p>
              <p className="text-lg font-semibold text-prism-white mb-6">
                {questions[currentQuestion].question}
              </p>
              
              <div className="flex gap-3 justify-center">
                {questions[currentQuestion].options.map((option) => (
                  <button
                    key={option}
                    onClick={handleQuestionAnswer}
                    disabled={questionAnswered}
                    className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      questionAnswered
                        ? 'bg-prism-electric-blue/20 text-prism-electric-blue border border-prism-electric-blue/30'
                        : 'bg-prism-deep border border-white/10 text-prism-white hover:border-prism-electric-blue/50'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Testimonial rotator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="p-5 bg-prism-deep border border-white/5 rounded-2xl"
        >
          <p className="text-xs text-prism-muted uppercase tracking-wider mb-3">
            While we prepare your results...
          </p>
          <div className="flex items-center justify-center gap-1 mb-3">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg key={star} width="16" height="16" viewBox="0 0 24 24" fill="#ffd000">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonialIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-prism-white italic mb-3">"{currentTestimonial.quote}"</p>
              <p className="text-sm text-prism-muted-light">
                — {currentTestimonial.name}, {currentTestimonial.age}
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </FunnelLayout>
  );
}

'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useFunnelNavigation } from '@/hooks/useFunnelNavigation';
import FunnelLayout from '../FunnelLayout';
import { FunnelScreen } from '@/types/funnel';

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

  const stages = screen.content || [
    'Analyzing your thought patterns...',
    'Identifying your unique frequency...',
    'Mapping your mental landscape...',
    'Calibrating your void...',
    'Preparing your personalized profile...',
  ];

  const questions = screen.engagementQuestions || [];
  
  const TOTAL_DURATION = 20000;
  const PROGRESS_INTERVAL = TOTAL_DURATION / 100;

  const handleQuestionAnswer = useCallback(() => {
    setQuestionAnswered(true);
    
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(prev => prev + 1);
        setQuestionAnswered(false);
      } else {
        setTimeout(() => goToNext(), 1000);
      }
    }, 500);
  }, [currentQuestion, questions.length, goToNext]);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, PROGRESS_INTERVAL);

    const stageInterval = TOTAL_DURATION / stages.length;
    const stageTimers = stages.map((_, index) => {
      return setTimeout(() => {
        setCurrentStage(index);
      }, index * stageInterval);
    });

    const questionTimer = setTimeout(() => {
      if (questions.length > 0) {
        setShowQuestion(true);
      }
    }, 5000);

    return () => {
      clearInterval(progressInterval);
      stageTimers.forEach(clearTimeout);
      clearTimeout(questionTimer);
    };
  }, [stages.length, questions.length, PROGRESS_INTERVAL]);

  useEffect(() => {
    if (progress >= 100 && questions.length === 0) {
      setTimeout(() => goToNext(), 1000);
    }
  }, [progress, questions.length, goToNext]);

  return (
    <FunnelLayout showProgress={false} showBackButton={false}>
      <div className="w-full max-w-xl mx-auto text-center">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-3xl font-refined font-medium text-prism-white mb-10 tracking-tight"
        >
          {screen.header}
        </motion.h1>

        {/* Progress display - minimal, technical */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-10"
        >
          {/* Progress bar - sharp */}
          <div className="h-1 bg-prism-border mb-4">
            <div
              className="h-full bg-prism-electric-blue transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          {/* Percentage - monospace */}
          <span className="font-raw text-2xl text-prism-white tracking-tight">
            {progress}%
          </span>
        </motion.div>

        {/* Stage text */}
        <AnimatePresence mode="wait">
          <motion.p
            key={currentStage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-prism-secondary mb-12 font-raw text-sm tracking-wide"
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
              className="p-6 border border-prism-border mb-8"
            >
              <p className="font-raw text-xs text-prism-muted uppercase tracking-badge mb-4">
                To continue
              </p>
              <p className="text-lg font-refined text-prism-white mb-6">
                {questions[currentQuestion].question}
              </p>
              
              <div className="flex gap-3 justify-center">
                {questions[currentQuestion].options.map((option) => (
                  <button
                    key={option}
                    onClick={handleQuestionAnswer}
                    disabled={questionAnswered}
                    className={`px-6 py-3 font-refined transition-all duration-300 border ${
                      questionAnswered
                        ? 'border-prism-electric-blue bg-prism-electric-blue/10 text-prism-electric-blue'
                        : 'border-prism-border text-prism-white hover:border-prism-electric-blue/50'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </FunnelLayout>
  );
}

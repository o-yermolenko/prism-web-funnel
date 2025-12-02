'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { getScreenBySlug, FUNNEL_SCREENS } from '@/lib/funnel-data';
import { useFunnelStore } from '@/lib/store';
import {
  GenderScreen,
  AgeScreen,
  ValidationScreen,
  QuestionSingleScreen,
  QuestionMultiScreen,
  MirrorSelectScreen,
  MirrorRevealScreen,
  EmailScreen,
  LoadingScreen,
  ProfileScreen,
  TestimonialsScreen,
  PaywallScreen,
  ConfirmationScreen,
  SocialProofScreen,
  StatisticsVisualScreen,
  AssessmentScreen,
  BeforeAfterScreen,
  ProgressChartScreen,
  LoadingEngagementScreen,
} from '@/components/screens';

export default function StepPage() {
  const params = useParams();
  const router = useRouter();
  const step = params.step as string;
  const { setCurrentSlug } = useFunnelStore();
  
  const screen = getScreenBySlug(step);
  
  useEffect(() => {
    if (screen) {
      setCurrentSlug(step);
    }
  }, [step, screen, setCurrentSlug]);
  
  // Redirect to first screen if slug not found
  useEffect(() => {
    if (!screen && FUNNEL_SCREENS.length > 0) {
      router.replace(`/${FUNNEL_SCREENS[0].slug}`);
    }
  }, [screen, router]);
  
  if (!screen) {
    return (
      <div className="min-h-screen bg-prism-black flex items-center justify-center">
        <p className="text-prism-muted">Loading...</p>
      </div>
    );
  }

  const renderScreen = () => {
    switch (screen.type) {
      case 'gender':
        return <GenderScreen screen={screen} />;
      
      case 'age':
        return <AgeScreen screen={screen} />;
      
      case 'validation':
        return <ValidationScreen screen={screen} />;
      
      case 'question-single':
        return <QuestionSingleScreen screen={screen} />;
      
      case 'question-multi':
        return <QuestionMultiScreen screen={screen} />;
      
      case 'mirror-select':
        return <MirrorSelectScreen screen={screen} />;
      
      case 'mirror-reveal':
        return <MirrorRevealScreen screen={screen} />;
      
      case 'email':
        return <EmailScreen screen={screen} />;
      
      case 'loading':
        return <LoadingScreen screen={screen} />;
      
      case 'loading-engagement':
        return <LoadingEngagementScreen screen={screen} />;
      
      case 'profile':
        return <ProfileScreen screen={screen} />;
      
      case 'testimonials':
        return <TestimonialsScreen screen={screen} />;
      
      case 'paywall':
        return <PaywallScreen screen={screen} />;
      
      case 'confirmation':
        return <ConfirmationScreen />;
      
      case 'social-proof':
        return <SocialProofScreen screen={screen} />;
      
      case 'statistics-visual':
        return <StatisticsVisualScreen screen={screen} />;
      
      case 'assessment':
        return <AssessmentScreen screen={screen} />;
      
      case 'before-after':
        return <BeforeAfterScreen screen={screen} />;
      
      case 'progress-chart':
        return <ProgressChartScreen screen={screen} />;
      
      default:
        return (
          <div className="min-h-screen bg-prism-black flex items-center justify-center">
            <p className="text-prism-muted">Unknown screen type: {screen.type}</p>
          </div>
        );
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={step}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {renderScreen()}
      </motion.div>
    </AnimatePresence>
  );
}


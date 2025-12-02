'use client';

import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { useFunnelStore } from '@/lib/store';
import { getNextScreen, getPrevScreen, getScreenBySlug } from '@/lib/funnel-data';

export function useFunnelNavigation() {
  const router = useRouter();
  const { currentSlug, setAnswer, setEmail, getAnswer } = useFunnelStore();

  const goToNext = useCallback(() => {
    const nextScreen = getNextScreen(currentSlug);
    if (nextScreen) {
      router.push(`/${nextScreen.slug}`);
    }
  }, [currentSlug, router]);

  const goToPrev = useCallback(() => {
    const prevScreen = getPrevScreen(currentSlug);
    if (prevScreen) {
      router.push(`/${prevScreen.slug}`);
    }
  }, [currentSlug, router]);

  const goToSlug = useCallback((slug: string) => {
    router.push(`/${slug}`);
  }, [router]);

  const saveAnswerAndNext = useCallback((answer: string | string[]) => {
    setAnswer(currentSlug, answer);
    goToNext();
  }, [currentSlug, setAnswer, goToNext]);

  const saveAnswerAndNextDelayed = useCallback((answer: string | string[], delay = 400) => {
    setAnswer(currentSlug, answer);
    setTimeout(() => {
      goToNext();
    }, delay);
  }, [currentSlug, setAnswer, goToNext]);

  const saveEmailAndNext = useCallback((email: string) => {
    setEmail(email);
    goToNext();
  }, [setEmail, goToNext]);

  return {
    currentSlug,
    goToNext,
    goToPrev,
    goToSlug,
    saveAnswerAndNext,
    saveAnswerAndNextDelayed,
    saveEmailAndNext,
    setAnswer,
    getAnswer,
  };
}


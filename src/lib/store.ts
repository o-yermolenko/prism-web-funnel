import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { FUNNEL_SCREENS, getScreenBySlug, getNextScreen, getPrevScreen, getScreenIndex } from './funnel-data';

interface FunnelStore {
  // Current state
  currentSlug: string;
  answers: Record<string, string | string[]>;
  email: string;
  startedAt: number | null;
  
  // Actions
  setCurrentSlug: (slug: string) => void;
  setAnswer: (slug: string, answer: string | string[]) => void;
  setEmail: (email: string) => void;
  resetFunnel: () => void;
  
  // Computed helpers
  getAnswer: (slug: string) => string | string[] | undefined;
  getProgress: () => number;
  getNextSlug: () => string | undefined;
  getPrevSlug: () => string | undefined;
}

const FIRST_SCREEN_SLUG = FUNNEL_SCREENS[0]?.slug || 'gender';

export const useFunnelStore = create<FunnelStore>()(
  persist(
    (set, get) => ({
      currentSlug: FIRST_SCREEN_SLUG,
      answers: {},
      email: '',
      startedAt: null,

      setCurrentSlug: (slug) => set((state) => ({ 
        currentSlug: slug,
        startedAt: state.startedAt ?? Date.now()
      })),
      
      setAnswer: (slug, answer) => set((state) => ({
        answers: { ...state.answers, [slug]: answer }
      })),
      
      setEmail: (email) => set({ email }),
      
      resetFunnel: () => set({
        currentSlug: FIRST_SCREEN_SLUG,
        answers: {},
        email: '',
        startedAt: null,
      }),
      
      getAnswer: (slug) => get().answers[slug],
      
      getProgress: () => {
        const { currentSlug } = get();
        const currentIndex = getScreenIndex(currentSlug);
        const totalScreens = FUNNEL_SCREENS.length;
        return Math.min(100, Math.round(((currentIndex + 1) / totalScreens) * 100));
      },
      
      getNextSlug: () => {
        const { currentSlug } = get();
        const nextScreen = getNextScreen(currentSlug);
        return nextScreen?.slug;
      },
      
      getPrevSlug: () => {
        const { currentSlug } = get();
        const prevScreen = getPrevScreen(currentSlug);
        return prevScreen?.slug;
      },
    }),
    {
      name: 'prism-funnel-storage',
    }
  )
);

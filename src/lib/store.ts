import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface FunnelStore {
  // Current state
  currentScreen: number;
  answers: Record<number, string | string[]>;
  email: string;
  startedAt: number | null;
  
  // Actions
  setScreen: (screen: number) => void;
  nextScreen: () => void;
  prevScreen: () => void;
  setAnswer: (screenId: number, answer: string | string[]) => void;
  setEmail: (email: string) => void;
  resetFunnel: () => void;
  
  // Computed
  getAnswer: (screenId: number) => string | string[] | undefined;
  getProgress: () => number;
}

export const useFunnelStore = create<FunnelStore>()(
  persist(
    (set, get) => ({
      currentScreen: 1,
      answers: {},
      email: '',
      startedAt: null,

      setScreen: (screen) => set({ currentScreen: screen }),
      
      nextScreen: () => set((state) => {
        const next = state.currentScreen + 1;
        return { 
          currentScreen: next,
          startedAt: state.startedAt ?? Date.now()
        };
      }),
      
      prevScreen: () => set((state) => ({
        currentScreen: Math.max(1, state.currentScreen - 1)
      })),
      
      setAnswer: (screenId, answer) => set((state) => ({
        answers: { ...state.answers, [screenId]: answer }
      })),
      
      setEmail: (email) => set({ email }),
      
      resetFunnel: () => set({
        currentScreen: 1,
        answers: {},
        email: '',
        startedAt: null,
      }),
      
      getAnswer: (screenId) => get().answers[screenId],
      
      getProgress: () => {
        const { currentScreen } = get();
        // Progress based on total screens (26)
        return Math.min(100, Math.round((currentScreen / 26) * 100));
      },
    }),
    {
      name: 'prism-funnel-storage',
    }
  )
);


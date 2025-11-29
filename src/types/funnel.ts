// Prism Funnel Types

export type ScreenType = 
  | 'gender'
  | 'age'
  | 'validation'
  | 'question-single'
  | 'question-multi'
  | 'mirror-select'
  | 'mirror-reveal'
  | 'email'
  | 'loading'
  | 'profile'
  | 'testimonials'
  | 'paywall'
  | 'confirmation';

export interface FunnelOption {
  id: string;
  text: string;
  icon?: string;
  subtext?: string;
  value?: string;
}

export interface FunnelScreen {
  id: number;
  type: ScreenType;
  emotionalState: string;
  purpose: string;
  header: string;
  subheader?: string;
  badge?: string;
  options?: FunnelOption[];
  content?: string[];
  statistics?: {
    value: string;
    label: string;
    source?: string;
  };
  diagnosis?: {
    title: string;
    items: string[];
    warning?: string;
  };
  autoAdvance?: boolean;
  showProgress?: boolean;
  showBackButton?: boolean;
}

export interface FunnelState {
  currentScreen: number;
  answers: Record<number, string | string[]>;
  email?: string;
  startedAt?: Date;
  completedAt?: Date;
}

export interface UserProfile {
  gender?: 'male' | 'female';
  age?: string;
  primaryNeed?: string;
  bestTime?: string;
  dailyPractice?: string;
}


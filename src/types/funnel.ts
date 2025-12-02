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
  | 'loading-engagement'
  | 'profile'
  | 'testimonials'
  | 'paywall'
  | 'confirmation'
  // New LTV-maximizing screen types
  | 'social-proof'
  | 'statistics-visual'
  | 'assessment'
  | 'before-after'
  | 'progress-chart';

export interface FunnelOption {
  id: string;
  text: string;
  icon?: string;
  subtext?: string;
  value?: string;
}

export interface AssessmentMetric {
  label: string;
  value: string;
  level: 'low' | 'medium' | 'high' | 'critical';
  icon?: string;
}

export interface BeforeAfterState {
  label: string;
  before: string;
  after: string;
}

export interface FunnelScreen {
  id: number;
  slug: string;
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
  // Social proof data
  socialProof?: {
    userCount: string;
    mediaLogos?: string[];
    quote?: {
      text: string;
      source: string;
    };
  };
  // Assessment metrics
  assessment?: {
    riskLevel: 'low' | 'medium' | 'high' | 'critical';
    riskLabel: string;
    metrics: AssessmentMetric[];
    summary: string;
  };
  // Before/After comparison
  beforeAfter?: {
    states: BeforeAfterState[];
    timeframe?: string;
  };
  // Engagement questions for loading
  engagementQuestions?: {
    question: string;
    options: string[];
  }[];
  // Progress chart data
  progressChart?: {
    timePoints: string[];
    withProduct: number[];
    withoutProduct: number[];
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


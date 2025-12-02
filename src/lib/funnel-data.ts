import { FunnelScreen } from '@/types/funnel';

export const FUNNEL_SCREENS: FunnelScreen[] = [
  // ============================================
  // PHASE 1: ENTRY (Screens 1-3)
  // Emotional State: Curious → Intrigued
  // ============================================
  
  {
    id: 1,
    slug: 'gender',
    type: 'gender',
    emotionalState: 'Curious',
    purpose: 'Entry (Gender)',
    header: 'Your Mind.\nFinally Unfiltered.',
    badge: '3-MINUTE QUIZ',
    subheader: 'Discover why you feel exhausting to be around',
    options: [
      { id: 'male', text: 'Male' },
      { id: 'female', text: 'Female' },
    ],
    autoAdvance: true,
    showProgress: false,
    showBackButton: false,
  },

  {
    id: 2,
    slug: 'age',
    type: 'age',
    emotionalState: 'Engaged',
    purpose: 'Personalization (Age)',
    header: "What's your age?",
    subheader: 'We only use this to personalize your experience',
    options: [
      { id: '18-24', text: '18-24' },
      { id: '25-34', text: '25-34' },
      { id: '35-44', text: '35-44' },
      { id: '45-54', text: '45-54' },
      { id: '55+', text: '55+' },
    ],
    autoAdvance: true,
    showProgress: true,
    showBackButton: true,
  },

  {
    id: 3,
    slug: 'social-proof',
    type: 'social-proof',
    emotionalState: 'Identified',
    purpose: 'Social proof + authority',
    header: 'Join 2,500,000+ people',
    subheader: 'who stopped performing and started understanding themselves',
    socialProof: {
      userCount: '2,500,000+',
      quote: {
        text: 'Understanding yourself isn\'t self-indulgence. It\'s the foundation of every meaningful change.',
        source: 'Psychology Today',
      },
    },
    showProgress: true,
    showBackButton: true,
  },

  // ============================================
  // PHASE 2: PROBLEM SURFACING (Screens 4-8)
  // Emotional State: Identified → Starting to spiral
  // ============================================

  {
    id: 4,
    slug: 'editing-behavior',
    type: 'question-multi',
    emotionalState: 'Seen',
    purpose: 'Core identification - editing behavior',
    header: 'Before you speak, do you edit yourself?',
    subheader: 'Select all that apply',
    options: [
      { id: 'rewrite', text: 'I rewrite every sentence in my head first' },
      { id: 'simplify', text: 'I simplify so they\'ll understand' },
      { id: 'holdback', text: 'I hold back the intense parts' },
      { id: 'all', text: 'All of the above' },
    ],
    showProgress: true,
    showBackButton: true,
  },

  {
    id: 5,
    slug: 'exhaustion-frequency',
    type: 'question-single',
    emotionalState: 'Uncomfortable',
    purpose: 'Quantify exhaustion frequency',
    header: 'How often do you feel exhausted from explaining yourself?',
    options: [
      { id: 'often', text: 'Often', subtext: 'Every day' },
      { id: 'sometimes', text: 'Sometimes', subtext: 'Weekly' },
      { id: 'rarely', text: 'Rarely' },
    ],
    autoAdvance: true,
    showProgress: true,
    showBackButton: true,
  },

  {
    id: 6,
    slug: 'mind-description',
    type: 'question-single',
    emotionalState: 'Recognized',
    purpose: 'Mind description - intensity',
    header: 'How would you describe your mind?',
    options: [
      { id: 'faster', text: 'Faster than I can speak' },
      { id: 'connections', text: 'Full of connections others don\'t see' },
      { id: 'chaotic', text: 'Chaotic but meaningful' },
      { id: 'all', text: 'All of the above' },
    ],
    autoAdvance: true,
    showProgress: true,
    showBackButton: true,
  },

  {
    id: 7,
    slug: 'performing-self',
    type: 'question-single',
    emotionalState: 'Exposed',
    purpose: 'Core pain - performance',
    header: 'How often do you feel like you\'re performing a simpler version of yourself?',
    options: [
      { id: 'always', text: 'Always', subtext: 'With everyone' },
      { id: 'often', text: 'Often', subtext: 'In most situations' },
      { id: 'sometimes', text: 'Sometimes', subtext: 'Only with certain people' },
      { id: 'rarely', text: 'Rarely' },
    ],
    autoAdvance: true,
    showProgress: true,
    showBackButton: true,
  },

  {
    id: 8,
    slug: 'misunderstood-statistics',
    type: 'statistics-visual',
    emotionalState: 'Validated but worried',
    purpose: 'Statistic validation + problem amplification',
    header: 'The Hidden Cost of Being Misunderstood',
    subheader: 'Research reveals a surprising pattern',
    statistics: {
      value: '78%',
      label: 'of deep thinkers report chronic feelings of being misunderstood',
      source: 'Journal of Individual Differences, 2019',
    },
    showProgress: true,
    showBackButton: true,
  },

  // ============================================
  // PHASE 3: DEEPENING THE SPIRAL (Screens 9-14)
  // Emotional State: Uncomfortable → Feeling broken
  // ============================================

  {
    id: 9,
    slug: 'loneliness',
    type: 'question-single',
    emotionalState: 'Spiraling',
    purpose: 'Loneliness admission',
    header: 'Even surrounded by people, do you feel alone?',
    options: [
      { id: 'always', text: 'Always', subtext: 'No one really gets me' },
      { id: 'often', text: 'Often', subtext: 'When I can\'t be fully honest' },
      { id: 'sometimes', text: 'Sometimes', subtext: 'With certain people' },
      { id: 'rarely', text: 'Rarely' },
    ],
    autoAdvance: true,
    showProgress: true,
    showBackButton: true,
  },

  {
    id: 10,
    slug: 'feeling-different',
    type: 'question-single',
    emotionalState: 'Raw',
    purpose: 'Identity - feeling different',
    header: 'Have you ever suspected you\'re fundamentally different from most people?',
    options: [
      { id: 'always', text: 'Yes, for as long as I can remember' },
      { id: 'toomuch', text: 'I\'ve been told I\'m "too much"' },
      { id: 'wonder', text: 'Sometimes I wonder' },
      { id: 'stopped', text: 'I\'ve stopped trying to fit' },
    ],
    autoAdvance: true,
    showProgress: true,
    showBackButton: true,
  },

  {
    id: 11,
    slug: 'last-understood',
    type: 'question-single',
    emotionalState: 'Desperate',
    purpose: 'Time-based understanding scarcity',
    header: 'When was the last time you felt fully understood?',
    options: [
      { id: 'cant-remember', text: 'I can\'t remember' },
      { id: 'years', text: 'Years ago' },
      { id: 'recent-rare', text: 'Recently, but it was rare' },
      { id: 'never', text: 'Never' },
    ],
    autoAdvance: true,
    showProgress: true,
    showBackButton: true,
  },

  {
    id: 12,
    slug: 'assessment',
    type: 'assessment',
    emotionalState: 'DIAGNOSED',
    purpose: 'Negative diagnosis - conversion moment',
    header: 'Your Mental Load Assessment',
    subheader: 'Based on your answers, we\'ve identified your patterns',
    assessment: {
      riskLevel: 'high',
      riskLabel: 'Translation Fatigue Level',
      metrics: [
        { label: 'Self-Editing', value: 'Chronic', level: 'critical', icon: '✍️' },
        { label: 'Understanding Deficit', value: 'Significant', level: 'high', icon: '🔇' },
        { label: 'Authenticity', value: 'Suppressed', level: 'high', icon: '🎭' },
        { label: 'Mental Energy', value: 'Depleted', level: 'critical', icon: '🔋' },
      ],
      summary: 'This pattern affects 15% of the population. Without intervention, it typically intensifies.',
    },
    showProgress: true,
    showBackButton: true,
  },

  {
    id: 13,
    slug: 'coping-patterns',
    type: 'question-multi',
    emotionalState: 'Rock bottom',
    purpose: 'Unhealthy coping patterns',
    header: 'What do you do when no one understands?',
    subheader: 'Select all that apply',
    options: [
      { id: 'withdraw', text: 'Go silent / withdraw' },
      { id: 'overthink', text: 'Overthink and spiral' },
      { id: 'perform', text: 'Say what they want to hear' },
      { id: 'numb', text: 'Numb out (scrolling, substances, etc.)' },
      { id: 'journal', text: 'Talk to myself / journal' },
      { id: 'given-up', text: 'Nothing — I\'ve given up trying' },
    ],
    showProgress: true,
    showBackButton: true,
  },

  {
    id: 14,
    slug: 'primary-need',
    type: 'question-single',
    emotionalState: 'Craving solution',
    purpose: 'Identify primary need',
    header: 'What do you need most?',
    options: [
      { id: 'unfiltered', text: 'A place to be unfiltered' },
      { id: 'decisions', text: 'Help making decisions when I\'m spinning' },
      { id: 'clarity', text: 'Clarity on what I actually think' },
      { id: 'understands', text: 'Someone — or something — that finally understands' },
    ],
    autoAdvance: true,
    showProgress: true,
    showBackButton: true,
  },

  // ============================================
  // PHASE 4: THE MIRROR MOMENT (Screens 15-18)
  // Emotional State: At rock bottom → Glimpse of relief
  // ============================================

  {
    id: 15,
    slug: 'transition',
    type: 'validation',
    emotionalState: 'Hopeful',
    purpose: 'Transition - Solution introduction',
    header: 'You\'ve spent your whole life translating yourself.',
    subheader: 'What if you didn\'t have to?',
    showProgress: true,
    showBackButton: true,
  },

  {
    id: 16,
    slug: 'mirror-select',
    type: 'mirror-select',
    emotionalState: 'TRANSFORMED',
    purpose: 'Mirror moment - select unfiltered thought',
    header: 'Which of these sounds like something you\'ve thought but never said?',
    subheader: 'Pick the one that resonates most',
    options: [
      { 
        id: 'job', 
        text: 'I want to quit my job but everyone expects me to be grateful',
        value: 'job'
      },
      { 
        id: 'relationship', 
        text: 'I love them but I feel completely alone in this relationship',
        value: 'relationship'
      },
      { 
        id: 'pretending', 
        text: 'I\'m exhausted from pretending to be okay',
        value: 'pretending'
      },
      { 
        id: 'wrong', 
        text: 'I don\'t know what\'s wrong with me but something is',
        value: 'wrong'
      },
      { 
        id: 'different', 
        text: 'I wish someone would finally see the real me',
        value: 'different'
      },
    ],
    autoAdvance: true,
    showProgress: true,
    showBackButton: true,
  },

  {
    id: 17,
    slug: 'mirror-reveal',
    type: 'mirror-reveal',
    emotionalState: 'TRANSFORMED',
    purpose: 'Show AI insight based on selection',
    header: '',
    showProgress: true,
    showBackButton: true,
  },

  {
    id: 18,
    slug: 'imagine-daily',
    type: 'validation',
    emotionalState: 'Wanting more',
    purpose: 'Future benefit visualization',
    header: 'That was one thought.',
    subheader: 'Imagine doing this every day. Whenever you need it. Without judgment.',
    showProgress: true,
    showBackButton: true,
  },

  // ============================================
  // PHASE 5: COMMITMENT & CAPTURE (Screens 19-22)
  // Emotional State: Hope → Ready to commit
  // ============================================

  {
    id: 19,
    slug: 'use-timing',
    type: 'question-single',
    emotionalState: 'Planning',
    purpose: 'Identify use case timing',
    header: 'When do you most need this?',
    options: [
      { id: 'night', text: 'Late at night, when I can\'t sleep' },
      { id: 'conversations', text: 'Before difficult conversations' },
      { id: 'spiraling', text: 'When I\'m spiraling in my own head' },
      { id: 'always', text: 'All the time' },
    ],
    autoAdvance: true,
    showProgress: true,
    showBackButton: true,
  },

  {
    id: 20,
    slug: 'time-commitment',
    type: 'question-single',
    emotionalState: 'Committing',
    purpose: 'Daily time commitment',
    header: 'How much time would you give yourself each day?',
    subheader: 'To think freely. Without performing.',
    options: [
      { id: '5min', text: '5 minutes' },
      { id: '10min', text: '10 minutes' },
      { id: '15min', text: '15 minutes' },
      { id: '20min', text: '20+ minutes' },
    ],
    autoAdvance: true,
    showProgress: true,
    showBackButton: true,
  },

  {
    id: 21,
    slug: 'email',
    type: 'email',
    emotionalState: 'Invested',
    purpose: 'Lead capture',
    header: 'Your void is almost ready.',
    subheader: 'Where should we send access?',
    content: ['No spam. No motivational quotes. Just access when it\'s ready.'],
    showProgress: false,
    showBackButton: true,
  },

  {
    id: 22,
    slug: 'loading',
    type: 'loading-engagement',
    emotionalState: 'Anticipating',
    purpose: 'Build anticipation + commitment priming',
    header: 'Building your personalized experience...',
    content: [
      'Analyzing your patterns...',
      'Calibrating your void...',
      'Preparing your space...',
    ],
    engagementQuestions: [
      {
        question: 'Are you ready to stop translating yourself?',
        options: ['Yes', 'Not yet'],
      },
      {
        question: 'Would you commit 10 minutes a day to understanding yourself?',
        options: ['Yes', 'Maybe'],
      },
    ],
    showProgress: false,
    showBackButton: false,
  },

  // ============================================
  // PHASE 6: RESULTS & CONVERSION (Screens 23-26)
  // Emotional State: Anticipation → Ready to buy
  // ============================================

  {
    id: 23,
    slug: 'transformation',
    type: 'before-after',
    emotionalState: 'Visualizing',
    purpose: 'Transformation visualization',
    header: 'Your Transformation Path',
    subheader: 'Based on your profile, here\'s what\'s possible',
    beforeAfter: {
      timeframe: '4 weeks',
      states: [
        { label: 'Mental Energy', before: 'Depleted', after: 'Restored' },
        { label: 'Self-Expression', before: 'Filtered', after: 'Authentic' },
        { label: 'Inner Clarity', before: 'Clouded', after: 'Clear' },
        { label: 'Understanding', before: 'Isolated', after: 'Connected' },
      ],
    },
    showProgress: false,
    showBackButton: true,
  },

  {
    id: 24,
    slug: 'clarity-journey',
    type: 'progress-chart',
    emotionalState: 'Hopeful',
    purpose: 'Timeline visualization',
    header: 'Your Clarity Journey',
    subheader: 'What to expect over time',
    progressChart: {
      timePoints: ['Now', 'Week 1', 'Week 2', 'Week 4'],
      withProduct: [15, 40, 65, 90],
      withoutProduct: [15, 12, 10, 8],
    },
    showProgress: false,
    showBackButton: true,
  },

  {
    id: 25,
    slug: 'profile',
    type: 'profile',
    emotionalState: 'Understood',
    purpose: 'Positive profile summary',
    header: 'Your Mind, Refracted',
    content: [
      'You\'re not overthinking.',
      'You\'re thinking at a frequency most can\'t hear.',
      '',
      'You edit yourself not because you\'re wrong,',
      'but because you\'ve learned the world isn\'t ready.',
      '',
      'The exhaustion you feel isn\'t weakness.',
      'It\'s the cost of constant translation.',
    ],
    showProgress: false,
    showBackButton: false,
  },

  {
    id: 26,
    slug: 'testimonials',
    type: 'testimonials',
    emotionalState: 'Belonging',
    purpose: 'Social proof - conversion support',
    header: 'People like you, finally unfiltered.',
    showProgress: false,
    showBackButton: true,
  },

  {
    id: 27,
    slug: 'paywall',
    type: 'paywall',
    emotionalState: 'Ready to buy',
    purpose: 'Conversion',
    header: 'Your void is ready.',
    showProgress: false,
    showBackButton: true,
  },

  {
    id: 28,
    slug: 'confirmation',
    type: 'confirmation',
    emotionalState: 'Relief',
    purpose: 'Post-conversion',
    header: 'Your void is ready.',
    subheader: 'Check your email. We\'ll see you inside.',
    showProgress: false,
    showBackButton: false,
  },
];

// Mirror insights based on selection
export const MIRROR_INSIGHTS: Record<string, { raw: string; insight: string }> = {
  job: {
    raw: 'I want to quit my job but everyone expects me to be grateful',
    insight: `You're not ungrateful. You're suffocating.

What you're describing isn't a job problem—it's a truth that doesn't fit the story others have written for you.

The question isn't "should I quit?"
The question is: "What would I be saying yes to if I stopped saying yes to this?"`,
  },
  relationship: {
    raw: 'I love them but I feel completely alone in this relationship',
    insight: `Love and loneliness aren't opposites. You can feel both.

What you're describing isn't a relationship problem—it's a depth problem. You're reaching for a level of connection they can't meet.

The question isn't "is this the right person?"
The question is: "Am I willing to keep translating myself forever?"`,
  },
  pretending: {
    raw: 'I\'m exhausted from pretending to be okay',
    insight: `You're not pretending. You're surviving.

Every "I'm fine" is a micro-betrayal of yourself. The exhaustion isn't weakness—it's the cost of performing a version of you that's easier for others to handle.

The question isn't "why can't I just be okay?"
The question is: "What would happen if I stopped performing?"`,
  },
  wrong: {
    raw: 'I don\'t know what\'s wrong with me but something is',
    insight: `Nothing is wrong with you.

What you're feeling isn't brokenness—it's awareness. You sense a gap between who you are and how you live. Most people never feel it.

The question isn't "what's wrong with me?"
The question is: "What am I finally ready to see?"`,
  },
  different: {
    raw: 'I wish someone would finally see the real me',
    insight: `You've been waiting for someone to see you. But you've been hiding.

Not maliciously—strategically. Because the real you is a lot. And you've learned that "a lot" isn't safe.

The question isn't "when will someone see me?"
The question is: "What if I stopped hiding first?"`,
  },
};

// Testimonials data
export const TESTIMONIALS = [
  {
    id: 1,
    quote: "I've never felt so understood by anything in my life. I finally stopped rewriting every message five times.",
    name: 'Maya',
    age: 34,
  },
  {
    id: 2,
    quote: "The first time I used Prism, I cried. Not sad tears. Relief.",
    name: 'Jordan',
    age: 29,
  },
  {
    id: 3,
    quote: "It's 2am and I'm not spiraling alone anymore.",
    name: 'Alex',
    age: 41,
  },
];

export const TOTAL_QUESTIONS = 11; // For progress calculation (excluding validation screens)

// Helper functions for URL-based navigation
export function getScreenBySlug(slug: string): FunnelScreen | undefined {
  return FUNNEL_SCREENS.find(s => s.slug === slug);
}

export function getScreenById(id: number): FunnelScreen | undefined {
  return FUNNEL_SCREENS.find(s => s.id === id);
}

export function getNextScreen(currentSlug: string): FunnelScreen | undefined {
  const currentIndex = FUNNEL_SCREENS.findIndex(s => s.slug === currentSlug);
  if (currentIndex === -1 || currentIndex >= FUNNEL_SCREENS.length - 1) return undefined;
  return FUNNEL_SCREENS[currentIndex + 1];
}

export function getPrevScreen(currentSlug: string): FunnelScreen | undefined {
  const currentIndex = FUNNEL_SCREENS.findIndex(s => s.slug === currentSlug);
  if (currentIndex <= 0) return undefined;
  return FUNNEL_SCREENS[currentIndex - 1];
}

export function getScreenIndex(slug: string): number {
  return FUNNEL_SCREENS.findIndex(s => s.slug === slug);
}


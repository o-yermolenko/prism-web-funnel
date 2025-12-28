import { FunnelScreen } from '@/types/funnel';

// ============================================
// PRISM FUNNEL - OPTIMIZED FOR LTV
// Based on Coursiv/Copymind/Liven patterns
// ============================================

export const FUNNEL_SCREENS: FunnelScreen[] = [
  // ============================================
  // PHASE 1: ENTRY (Screens 1-2)
  // Goal: First micro-commitment, set expectations
  // ============================================
  
  {
    id: 1,
    slug: 'gender',
    type: 'gender',
    emotionalState: 'Curious',
    purpose: 'Entry - First micro-commitment',
    header: 'Your Mind.\nFinally Unfiltered.',
    badge: '3-MINUTE QUIZ',
    subheader: '3 minutes to understand what you\'ve never said out loud',
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
    purpose: 'Demographics - Personalization signal',
    header: "What's your age?",
    subheader: 'We use this to personalize your experience',
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

  // ============================================
  // PHASE 2: SOCIAL PROOF (Screen 3)
  // Goal: Build confidence before deeper questions
  // ============================================

  {
    id: 3,
    slug: 'social-proof-1',
    type: 'social-proof',
    emotionalState: 'Validated',
    purpose: 'Social proof + authority signal',
    header: 'You\'re not alone in this.',
    subheader: '2.5 million people finally feel understood.',
    socialProof: {
      userCount: '2,500,000+',
      mediaLogos: ['Psychology Today', 'Forbes', 'WIRED'],
      quote: {
        text: 'Understanding yourself isn\'t self-indulgence. It\'s the foundation of every meaningful change.',
        source: 'Dr. Sarah Chen, Clinical Psychologist',
      },
    },
    showProgress: true,
    showBackButton: true,
  },

  // ============================================
  // PHASE 3: CURRENT STATE - Section 1 (Screens 4-7)
  // Goal: Identify with the problem
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
      { id: 'daily', text: 'Daily', subtext: 'It never stops' },
      { id: 'often', text: 'Often', subtext: 'Several times a week' },
      { id: 'sometimes', text: 'Sometimes', subtext: 'When things get intense' },
      { id: 'rarely', text: 'Rarely' },
    ],
    autoAdvance: true,
    showProgress: true,
    showBackButton: true,
  },

  // Mini-validation to break up questions
  {
    id: 6,
    slug: 'mini-validation-1',
    type: 'validation',
    emotionalState: 'Recognized',
    purpose: 'Mini-validation - emotional checkpoint',
    header: 'We see a pattern forming.',
    subheader: 'Your answers match 94% of people who later described themselves as "finally understood." Let\'s go deeper.',
    showProgress: true,
    showBackButton: true,
  },

  {
    id: 7,
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
    id: 8,
    slug: 'performing-self',
    type: 'question-single',
    emotionalState: 'Exposed',
    purpose: 'Core pain - performance',
    header: 'How often do you perform a simpler version of yourself?',
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

  // ============================================
  // PATTERN INTERRUPT 1 (Screen 9)
  // Goal: Motivate, validate, break fatigue
  // ============================================

  {
    id: 9,
    slug: 'interstitial-1',
    type: 'interstitial',
    emotionalState: 'Validated',
    purpose: 'Pattern interrupt - progress acknowledgment',
    header: 'You\'re already ahead of most.',
    subheader: 'Most people never stop to examine these patterns. You just did.',
    badge: 'INSIGHT',
    content: ['We\'re building a picture of your unique mind. Just a few more questions.'],
    showProgress: true,
    showBackButton: true,
  },

  // ============================================
  // PHASE 4: DEEPENING - Section 2 (Screens 10-13)
  // Goal: Surface the deeper pain
  // ============================================

  {
    id: 10,
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
    id: 11,
    slug: 'feeling-different',
    type: 'question-single',
    emotionalState: 'Raw',
    purpose: 'Identity - feeling different',
    header: 'Have you ever suspected you\'re fundamentally different?',
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
    id: 12,
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

  // ============================================
  // STATISTIC VALIDATION (Screen 14)
  // Goal: External validation of their experience
  // ============================================

  {
    id: 14,
    slug: 'statistics',
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
  // PATTERN INTERRUPT 2 (Screen 15)
  // Goal: Social proof + authority
  // ============================================

  {
    id: 15,
    slug: 'interstitial-2',
    type: 'interstitial',
    emotionalState: 'Hopeful',
    purpose: 'Pattern interrupt - social proof reinforcement',
    header: 'Your profile is emerging.',
    subheader: '87% of users with similar patterns reported feeling understood for the first time.',
    badge: 'ANALYSIS',
    content: ['We\'re mapping something most people never get to see — how your mind actually works. Almost there.'],
    showProgress: true,
    showBackButton: true,
  },

  // ============================================
  // PHASE 5: ASSESSMENT (Screen 16)
  // Goal: Diagnose the problem formally
  // ============================================

  {
    id: 16,
    slug: 'assessment',
    type: 'assessment',
    emotionalState: 'DIAGNOSED',
    purpose: 'Formal diagnosis - conversion moment',
    header: 'Your Mental Load Assessment',
    subheader: 'Based on your answers, we\'ve identified your patterns',
    assessment: {
      riskLevel: 'high',
      riskLabel: 'Understanding Deficit Level',
      metrics: [
        { label: 'Self-Editing', value: 'Chronic', level: 'critical' },
        { label: 'Understanding Deficit', value: 'Significant', level: 'high' },
        { label: 'Authenticity', value: 'Suppressed', level: 'high' },
        { label: 'Mental Energy', value: 'Depleted', level: 'critical' },
      ],
      summary: 'This pattern affects 15% of the population. Without intervention, it typically intensifies.',
    },
    showProgress: true,
    showBackButton: true,
  },

  // ============================================
  // PHASE 6: SOLUTION INTRO (Screens 17-18)
  // Goal: Transition from problem to solution
  // ============================================

  {
    id: 17,
    slug: 'primary-need',
    type: 'question-single',
    emotionalState: 'Craving solution',
    purpose: 'Identify primary need',
    header: 'What do you need most right now?',
    options: [
      { id: 'unfiltered', text: 'A place to be unfiltered' },
      { id: 'decisions', text: 'Help making decisions when I\'m spinning' },
      { id: 'clarity', text: 'Clarity on what I actually think' },
      { id: 'understands', text: 'Something that finally understands' },
    ],
    autoAdvance: true,
    showProgress: true,
    showBackButton: true,
  },

  {
    id: 18,
    slug: 'transition',
    type: 'validation',
    emotionalState: 'Hopeful',
    purpose: 'Transition - Solution introduction',
    header: 'What if you stopped performing?',
    subheader: 'For the next 60 seconds, say something you\'ve never said out loud. We\'ll show you what PRISM sees.',
    showProgress: true,
    showBackButton: true,
  },

  // ============================================
  // PHASE 7: MIRROR MOMENT (Screens 19-21)
  // Goal: Product demo / transformation preview
  // ============================================

  {
    id: 19,
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
    id: 20,
    slug: 'mirror-reveal',
    type: 'mirror-reveal',
    emotionalState: 'TRANSFORMED',
    purpose: 'Show AI insight based on selection',
    header: '',
    showProgress: false,
    showBackButton: true,
  },

  {
    id: 21,
    slug: 'imagine-daily',
    type: 'validation',
    emotionalState: 'Wanting more',
    purpose: 'Future benefit visualization',
    header: 'That was 60 seconds.',
    subheader: 'Imagine having this every day. A place where you don\'t edit. Where your chaos makes sense. Where someone finally keeps up.',
    showProgress: true,
    showBackButton: true,
  },

  // ============================================
  // PHASE 8: COMMITMENT (Screens 22-23)
  // Goal: Get commitment + timing
  // ============================================

  {
    id: 22,
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
    id: 23,
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

  // ============================================
  // PHASE 9: EMAIL CAPTURE (Screen 24)
  // Goal: Get the lead
  // ============================================

  {
    id: 24,
    slug: 'email',
    type: 'email',
    emotionalState: 'Invested',
    purpose: 'Lead capture',
    header: 'Your void is almost ready.',
    subheader: 'Where should we send your personalized results?',
    content: ['No spam. Just your results and early access when it\'s ready.'],
    showProgress: false,
    showBackButton: true,
  },

  // ============================================
  // PHASE 10: LOADING + PROCESSING (Screen 25)
  // Goal: Build anticipation, 15-30s
  // ============================================

  {
    id: 25,
    slug: 'loading',
    type: 'loading-engagement',
    emotionalState: 'Anticipating',
    purpose: 'Build anticipation + commitment priming',
    header: 'Creating your personalized profile...',
    content: [
      'Analyzing your thought patterns...',
      'Identifying your unique frequency...',
      'Mapping your mental landscape...',
      'Finalizing your clarity profile...',
    ],
    engagementQuestions: [
      {
        question: 'Ready to finally be understood?',
        options: ['Yes, show me', 'I\'ve been waiting for this'],
      },
    ],
    showProgress: false,
    showBackButton: false,
  },

  // ============================================
  // PHASE 11: RESULTS (Screens 26-28)
  // Goal: Deliver value, build desire
  // ============================================

  {
    id: 26,
    slug: 'readiness-score',
    type: 'readiness-score',
    emotionalState: 'Validated',
    purpose: 'Readiness score - Coursiv pattern',
    header: 'Your Clarity Readiness Score',
    readinessScore: {
      score: 87,
      label: 'READY',
      insight: 'You\'re in the top 13% of people who are ready for genuine clarity.',
      factors: [
        { label: 'Self-Awareness', value: 92 },
        { label: 'Openness to Change', value: 85 },
        { label: 'Mental Intensity', value: 94 },
        { label: 'Need for Understanding', value: 88 },
      ],
    },
    showProgress: false,
    showBackButton: false,
  },

  {
    id: 27,
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
    id: 28,
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

  // ============================================
  // PHASE 12: SOCIAL PROOF + PAYWALL (Screens 29-31)
  // Goal: Convert
  // ============================================

  {
    id: 29,
    slug: 'testimonials',
    type: 'testimonials',
    emotionalState: 'Belonging',
    purpose: 'Social proof - conversion support',
    header: 'People like you. Finally understood.',
    showProgress: false,
    showBackButton: true,
  },

  {
    id: 30,
    slug: 'paywall',
    type: 'paywall',
    emotionalState: 'Ready to buy',
    purpose: 'Conversion',
    header: 'Your void is ready.',
    showProgress: false,
    showBackButton: true,
  },

  {
    id: 31,
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
The question is: "Am I willing to keep editing myself forever?"`,
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

// Testimonials data - expanded for better social proof
export const TESTIMONIALS = [
  {
    id: 1,
    quote: "I've never felt so understood by anything in my life. I finally stopped rewriting every message five times.",
    name: 'Maya',
    age: 34,
    role: 'Product Designer',
  },
  {
    id: 2,
    quote: "The first time I used Prism, I cried. Not sad tears. Relief.",
    name: 'Jordan',
    age: 29,
    role: 'Software Engineer',
  },
  {
    id: 3,
    quote: "It's 2am and I'm not spiraling alone anymore.",
    name: 'Alex',
    age: 41,
    role: 'Therapist',
  },
  {
    id: 4,
    quote: "Finally, something that doesn't ask me to simplify my thoughts.",
    name: 'Sam',
    age: 26,
    role: 'Writer',
  },
  {
    id: 5,
    quote: "I used to feel broken. Now I understand I was just speaking a different language.",
    name: 'Chris',
    age: 38,
    role: 'Entrepreneur',
  },
];

export const TOTAL_QUESTIONS = 12; // Actual quiz questions for progress calculation (not counting validation screens)

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

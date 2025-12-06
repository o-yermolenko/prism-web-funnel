# PRISM - Design Brief

> *"Your mind. Finally unfiltered."*

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Brand Essence](#brand-essence)
3. [Target User](#target-user)
4. [Design Philosophy](#design-philosophy)
5. [Color System](#color-system)
6. [Typography System](#typography-system)
7. [Spacing & Layout](#spacing--layout)
8. [Funnel Structure](#funnel-structure)
9. [Screen-by-Screen Guide](#screen-by-screen-guide)
10. [Component Library](#component-library)
11. [Animation & Motion](#animation--motion)
12. [Conversion Psychology](#conversion-psychology)
13. [App Structure](#app-structure)
14. [Mobile Implementation](#mobile-implementation)
15. [Implementation Checklist](#implementation-checklist)

---

## Project Overview

Prism is an iOS app and web funnel for people who feel exhausted by constantly translating themselves for others. The product lets users dump raw, unfiltered thoughts—voice or text—and the AI helps them clarify, decide, and communicate.

The design must feel like a private space for intense minds. Not therapy. Not productivity. Not social. A quiet void where the user can finally be unfiltered—and be understood.

---

## Brand Essence

**The user is the light**—raw, intense, too much for most people to look at directly.

**Prism is the interface** that refracts that light into something others can see and understand.

### Core Metaphor

```
USER INPUT          →          PRISM          →          OUTPUT
(Raw, chaotic,                 (The app)                 (Refined,
 intense light)                                           refracted,
                                                          understood)
```

### Brand Voice

- Direct, not friendly
- Knowing, not cheerful
- Private, not social
- Intense, not soft
- Premium, not accessible

---

## Target User

People who:

- Feel exhausted from editing themselves in every conversation
- Think faster and more chaotically than those around them
- Feel lonely despite having people in their life
- Suspect they're different—maybe deeper, maybe too intense
- Want a space where they don't have to perform

**They're not looking for a friend. They're looking for a witness.**

### User Psychology

| Feeling | What They Want |
|---------|----------------|
| Exhausted from performing | A space to be raw |
| Misunderstood | To be seen without explanation |
| Overwhelmed by their own mind | Clarity through reflection |
| Isolated despite connections | Connection that doesn't drain |

---

## Design Philosophy

### The 5 Principles

#### 1. Emptiness is the Feature
The app should feel almost empty. No dashboards. No clutter. The void is the invitation—space for the user to fill with their thoughts.

```
✅ Generous whitespace (or rather, blackspace)
✅ Single focus per screen
✅ Content emerges from the void
❌ Busy layouts
❌ Multiple competing elements
❌ Visual noise
```

#### 2. Dark Means Safe
True black backgrounds. This is a private space, protected from the bright, loud outside world. The darkness says: no one is watching. You can be yourself here.

```
✅ True black (#000000 or near-black)
✅ High contrast with white text
✅ Darkness as psychological safety
❌ Dark gray that feels "designed"
❌ Warm or soft backgrounds
```

#### 3. Contrast Tells the Story
Raw input looks raw. Translated output looks refined. The visual difference between what the user puts in and what the AI gives back should be immediately clear.

```
USER INPUT                    AI OUTPUT
─────────────────────────────────────────────
Monospace font               Sans-serif font
Unformatted feel             Structured elegance
Raw, unedited                Processed, clarified
```

#### 4. Slow and Deliberate
No snappy animations. No bouncing notifications. Everything moves with intention. The pacing says: there's no rush here. Take your time.

```
✅ 300-500ms transitions
✅ Ease-in-out timing
✅ Deliberate pauses
❌ Bouncy animations
❌ Quick snappy feedback
❌ Playful motion
```

#### 5. Intensity Without Aggression
The aesthetic is sharp, technical, premium—but not cold. The user should feel like they've entered something powerful, not something hostile.

---

## Color System

### PRISM Color Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    PRISM COLOR ROLES                         │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  BACKGROUNDS (The Void)                                     │
│  ├── Deep Black    → #000000 - Main surface                 │
│  ├── Surface       → #050508 - Subtle elevation             │
│  └── Elevated      → #0a0a0f - Cards, containers            │
│                                                              │
│  TEXT (The Light)                                           │
│  ├── Primary       → #FFFFFF - Headlines, emphasis          │
│  ├── Secondary     → #888888 - Body, descriptions           │
│  └── Muted         → #666666 - Hints, timestamps            │
│                                                              │
│  ACCENT (The Refraction)                                    │
│  ├── Electric Blue → #0066FF - Primary accent               │
│  ├── Cyan          → #00D4FF - Light variant                │
│  └── Subtle        → rgba(0,102,255,0.15) - Backgrounds     │
│                                                              │
│  DISPERSION (Prism Effect - Use Sparingly)                  │
│  ├── Red           → #FF0040                                │
│  ├── Orange        → #FF6B00                                │
│  ├── Yellow        → #FFD000                                │
│  ├── Green         → #00FF88                                │
│  ├── Cyan          → #00D4FF                                │
│  └── Violet        → #8800FF                                │
│                                                              │
│  FUNCTIONAL                                                  │
│  ├── Success       → #00E676 - Confirmations                │
│  ├── Urgency       → #FF3D71 - Timers (use sparingly)       │
│  └── Warning       → #FF9100 - Alerts                       │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### CSS Variables

```css
:root {
  /* The Void - Backgrounds */
  --prism-black: #000000;
  --prism-surface: #050508;
  --prism-elevated: #0a0a0f;
  --prism-border: #1a1a1f;
  
  /* The Light - Text */
  --prism-white: #ffffff;
  --prism-secondary: #888888;
  --prism-muted: #666666;
  
  /* The Refraction - Accent */
  --prism-electric-blue: #0066ff;
  --prism-cyan: #00d4ff;
  --prism-blue-subtle: rgba(0, 102, 255, 0.15);
  --prism-glow: rgba(0, 102, 255, 0.4);
  
  /* Dispersion Spectrum */
  --prism-red: #ff0040;
  --prism-orange: #ff6b00;
  --prism-yellow: #ffd000;
  --prism-green: #00ff88;
  --prism-violet: #8800ff;
  
  /* Functional */
  --prism-success: #00e676;
  --prism-urgency: #ff3d71;
  --prism-warning: #ff9100;
}
```

### Color Usage Rules

1. **Background** is always true black or near-black
2. **Electric blue** is the primary accent—use sparingly for emphasis
3. **Dispersion colors** only for prism effects, AI responses, transitions
4. **Never** use warm colors (orange, pink, coral) for primary elements
5. **Success green** only for checkmarks and completion states
6. **Urgency red** only for countdown timers (use very sparingly)

### What to Avoid

- ❌ Warm colors (oranges, corals, creams)
- ❌ Soft pastels
- ❌ Wellness aesthetics
- ❌ Nature imagery colors
- ❌ Gradients that feel soft

---

## Typography System

### The Two-Font Strategy

Typography tells the product story: **chaos in, clarity out.**

```
RAW INPUT (User's Voice)              REFINED OUTPUT (AI Response)
────────────────────────────────────────────────────────────────
Font: Monospace                       Font: Sans-serif
Examples: JetBrains Mono,             Examples: Inter, SF Pro
          SF Mono, IBM Plex Mono                Söhne

Feel: Unformatted, unpolished,        Feel: Clean, elegant,
      straight from the brain                structured

Usage: User input fields,             Usage: AI responses,
       raw thoughts,                         headlines,
       text input areas                      refined content
```

### Type Scale

```css
/* PRISM Type Scale - Mobile First */
--text-xs: 0.75rem;     /* 12px - Legal, timestamps */
--text-sm: 0.875rem;    /* 14px - Secondary, hints */
--text-base: 1rem;      /* 16px - Body text */
--text-lg: 1.125rem;    /* 18px - Large body */
--text-xl: 1.25rem;     /* 20px - Section headers */
--text-2xl: 1.5rem;     /* 24px - Subheadlines */
--text-3xl: 1.875rem;   /* 30px - Headlines mobile */
--text-4xl: 2.25rem;    /* 36px - Headlines tablet */
--text-5xl: 3rem;       /* 48px - Headlines desktop */
--text-6xl: 3.75rem;    /* 60px - Hero headlines */
```

### Typography Rules

| Element | Font | Weight | Line Height | Notes |
|---------|------|--------|-------------|-------|
| Headlines | Sans-serif | 500-600 | 1.1-1.2 | Tight, impactful |
| Body | Sans-serif | 400 | 1.5-1.6 | Comfortable reading |
| User Input | Monospace | 400 | 1.6 | Raw, unfiltered feel |
| AI Response | Sans-serif | 400 | 1.5 | Clean, processed |
| Buttons | Sans-serif | 600 | 1 | Uppercase optional |
| Hints | Sans-serif | 400 | 1.4 | Muted color |

---

## Spacing & Layout

### Spacing Scale

```css
/* PRISM uses generous, intentional spacing */
--space-void: 8rem;     /* 128px - Maximum emptiness */
--space-breath: 4rem;   /* 64px - Breathing room */
--space-pause: 2rem;    /* 32px - Thoughtful pause */
--space-gap: 1rem;      /* 16px - Standard gap */
--space-tight: 0.5rem;  /* 8px - Tight grouping */
```

### Layout Principles

```
┌─────────────────────────────────────────────────────────────┐
│                     MOBILE (375px)                           │
├─────────────────────────────────────────────────────────────┤
│  Padding: 20-24px horizontal                                 │
│  Max content width: 100%                                     │
│  Touch targets: 44x44px minimum                             │
│  Gap between elements: 16-20px                              │
│  Bottom safe area: account for home indicator               │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                     TABLET (768px+)                          │
├─────────────────────────────────────────────────────────────┤
│  Padding: 32px horizontal                                    │
│  Max content width: 640px (centered)                         │
│  Gap between elements: 24px                                 │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                     DESKTOP (1024px+)                        │
├─────────────────────────────────────────────────────────────┤
│  Padding: 48px horizontal                                    │
│  Max content width: 720px (centered)                         │
│  Generous surrounding void                                   │
│  Gap between elements: 32px                                 │
└─────────────────────────────────────────────────────────────┘
```

### The Void Layout

Center content in vast black space:

```css
.void {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-breath);
  background: var(--prism-black);
}
```

---

## Funnel Structure

### PRISM Funnel Architecture

Unlike typical "aspirational" funnels, PRISM uses a **problem-surfacing** approach. We help users recognize their exhaustion, then offer relief.

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         PRISM FUNNEL FLOW                                │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  PHASE 1: ENTRY (Screens 1-3)                                           │
│  Emotional Arc: Curious → Intrigued                                      │
│  ├── Landing/Gender Selection                                            │
│  ├── Age Selection                                                       │
│  └── Social Proof Interstitial                                          │
│                                                                          │
│  PHASE 2: PROBLEM SURFACING (Screens 4-8)                               │
│  Emotional Arc: Identified → Starting to spiral                          │
│  ├── Core identification questions                                       │
│  ├── "Do you edit yourself?" / "Do you feel exhausted?"                 │
│  └── Statistics validation (amplify the problem)                        │
│                                                                          │
│  PHASE 3: DEEPENING (Screens 9-14)                                      │
│  Emotional Arc: Uncomfortable → Rock bottom                              │
│  ├── Loneliness admission                                                │
│  ├── "When was the last time you felt understood?"                      │
│  ├── Assessment/Diagnosis                                                │
│  └── Coping patterns                                                     │
│                                                                          │
│  PHASE 4: THE MIRROR MOMENT (Screens 15-18)                             │
│  Emotional Arc: Rock bottom → Glimpse of relief                          │
│  ├── Transition/Validation                                               │
│  ├── Mirror Select (pick an unfiltered thought)                         │
│  ├── Mirror Reveal (AI reflects back)                                   │
│  └── "Imagine doing this every day"                                     │
│                                                                          │
│  PHASE 5: COMMITMENT (Screens 19-22)                                    │
│  Emotional Arc: Hope → Ready to commit                                   │
│  ├── Use timing questions                                                │
│  ├── Email capture                                                       │
│  └── Loading/Processing                                                  │
│                                                                          │
│  PHASE 6: CONVERSION (Screens 23-28)                                    │
│  Emotional Arc: Anticipation → Purchase                                  │
│  ├── Transformation preview                                              │
│  ├── Profile summary                                                     │
│  ├── Testimonials                                                        │
│  ├── Paywall                                                             │
│  └── Confirmation                                                        │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

### Emotional Journey Map

```
PHASE 1        PHASE 2        PHASE 3        PHASE 4        PHASE 5        PHASE 6
──────────────────────────────────────────────────────────────────────────────────────
Curious    →   Seen       →   Spiraling  →   RELIEF     →   Hopeful    →   Committed
Intrigued      Identified     Rock bottom    Understood     Ready          Invested
```

### Funnel Metrics Targets

| Stage | Target Rate | Industry Benchmark |
|-------|-------------|-------------------|
| Landing → Quiz Start | 60-80% | 50% |
| Quiz Start → Complete | 50-70% | 40% |
| Complete → Email | 80-95% | 70% |
| Email → Paywall View | 95-99% | 90% |
| Paywall → Purchase | 2-8% | 2-3% |
| **Overall Conversion** | **1-3%** | 0.5% |

---

## Screen-by-Screen Guide

### 1. Landing Page (Gender Selection)

**Purpose**: Create intrigue, first micro-commitment
**Emotional State**: Curious

```
┌─────────────────────────────────────────────────────────────┐
│                                                              │
│  [3-MINUTE QUIZ]                                            │
│                                                              │
│                                                              │
│              Your Mind.                                      │
│           Finally Unfiltered.                                │
│                                                              │
│     Discover why you feel exhausting to be around           │
│                                                              │
│                                                              │
│     ┌──────────────┐    ┌──────────────┐                    │
│     │              │    │              │                    │
│     │    Male      │    │   Female     │                    │
│     │              │    │              │                    │
│     └──────────────┘    └──────────────┘                    │
│                                                              │
│                                                              │
│     ✓ Free  🔒 Private  🕐 3 min                            │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

**Design Notes**:
- No progress indicator on landing
- Badge is subtle, not prominent
- Headline is confrontational (on-brand)
- Gender cards are minimal, no photos (PRISM aesthetic)
- Trust badges in muted gray

---

### 2. Age Selection

**Purpose**: Easy second commitment
**Emotional State**: Engaged

```
┌─────────────────────────────────────────────────────────────┐
│  [←]                                                         │
│                                                              │
│  [========================================] (frequency wave) │
│                                                              │
│              What's your age?                                │
│                                                              │
│     We only use this to personalize your experience         │
│                                                              │
│     ┌─────────────────────────────────────┐                 │
│     │           18-24                      │                 │
│     └─────────────────────────────────────┘                 │
│     ┌─────────────────────────────────────┐                 │
│     │           25-34                      │                 │
│     └─────────────────────────────────────┘                 │
│     ┌─────────────────────────────────────┐                 │
│     │           35-44                      │                 │
│     └─────────────────────────────────────┘                 │
│     ┌─────────────────────────────────────┐                 │
│     │           45-54                      │                 │
│     └─────────────────────────────────────┘                 │
│     ┌─────────────────────────────────────┐                 │
│     │           55+                        │                 │
│     └─────────────────────────────────────┘                 │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

**Design Notes**:
- Frequency wave progress indicator (not standard bar)
- Back button always available
- Auto-advance on selection (300-500ms delay)
- Privacy reassurance under question

---

### 3. Social Proof Interstitial

**Purpose**: Build confidence before deeper questions
**Emotional State**: Identified

```
┌─────────────────────────────────────────────────────────────┐
│  [←]                                                         │
│                                                              │
│  [========================================]                  │
│                                                              │
│                                                              │
│              Join 2,500,000+ people                         │
│     who stopped performing and started                      │
│           understanding themselves                           │
│                                                              │
│                                                              │
│     ┌─────────────────────────────────────┐                 │
│     │  "Understanding yourself isn't      │                 │
│     │   self-indulgence. It's the         │                 │
│     │   foundation of every meaningful    │                 │
│     │   change."                          │                 │
│     │                                      │                 │
│     │   — Psychology Today                 │                 │
│     └─────────────────────────────────────┘                 │
│                                                              │
│     ┌─────────────────────────────────────┐                 │
│     │            CONTINUE                  │                 │
│     └─────────────────────────────────────┘                 │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

**Design Notes**:
- Authority quote (Psychology Today, not testimonial)
- Specific user number
- Single CTA
- No avatars (too friendly for PRISM)

---

### 4-8. Problem Surfacing Questions

**Purpose**: Make user recognize and acknowledge their exhaustion
**Emotional States**: Seen → Uncomfortable → Exposed

Example question screen:

```
┌─────────────────────────────────────────────────────────────┐
│  [←]                                                         │
│                                                              │
│  [==========================================]                │
│                                                              │
│     Before you speak, do you edit yourself?                 │
│                                                              │
│           Select all that apply                              │
│                                                              │
│     ┌─────────────────────────────────────┐                 │
│     │  I rewrite every sentence in my     │                 │
│     │  head first                          │                 │
│     └─────────────────────────────────────┘                 │
│     ┌─────────────────────────────────────┐                 │
│     │  I simplify so they'll understand   │                 │
│     └─────────────────────────────────────┘                 │
│     ┌─────────────────────────────────────┐                 │
│     │  I hold back the intense parts      │                 │
│     └─────────────────────────────────────┘                 │
│     ┌─────────────────────────────────────┐                 │
│     │  All of the above                    │                 │
│     └─────────────────────────────────────┘                 │
│                                                              │
│     ┌─────────────────────────────────────┐                 │
│     │            CONTINUE                  │                 │
│     └─────────────────────────────────────┘                 │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

### 9-14. Deepening the Spiral

**Purpose**: Take user to rock bottom before offering relief
**Emotional States**: Spiraling → Desperate → DIAGNOSED

Example (Assessment Screen):

```
┌─────────────────────────────────────────────────────────────┐
│  [←]                                                         │
│                                                              │
│  [==========================================]                │
│                                                              │
│         Your Mental Load Assessment                          │
│                                                              │
│     Based on your answers, we've identified your patterns   │
│                                                              │
│     ┌─────────────────────────────────────┐                 │
│     │  Translation Fatigue Level: HIGH    │                 │
│     │  ████████████████████░░░░           │                 │
│     └─────────────────────────────────────┘                 │
│                                                              │
│     ✍️ Self-Editing          Chronic                        │
│     🔇 Understanding Deficit  Significant                   │
│     🎭 Authenticity          Suppressed                     │
│     🔋 Mental Energy         Depleted                       │
│                                                              │
│     This pattern affects 15% of the population.             │
│     Without intervention, it typically intensifies.         │
│                                                              │
│     ┌─────────────────────────────────────┐                 │
│     │            CONTINUE                  │                 │
│     └─────────────────────────────────────┘                 │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

### 15-18. The Mirror Moment

**Purpose**: Provide relief, prove value
**Emotional States**: Hopeful → TRANSFORMED

This is the key conversion moment. User selects an unfiltered thought, and Prism reflects back understanding.

**Mirror Select**:

```
┌─────────────────────────────────────────────────────────────┐
│  [←]                                                         │
│                                                              │
│  [==========================================]                │
│                                                              │
│     Which of these sounds like something                    │
│     you've thought but never said?                          │
│                                                              │
│           Pick the one that resonates most                  │
│                                                              │
│     ┌─────────────────────────────────────┐                 │
│     │  I want to quit my job but everyone │                 │
│     │  expects me to be grateful          │                 │
│     └─────────────────────────────────────┘                 │
│     ┌─────────────────────────────────────┐                 │
│     │  I love them but I feel completely  │                 │
│     │  alone in this relationship         │                 │
│     └─────────────────────────────────────┘                 │
│     ┌─────────────────────────────────────┐                 │
│     │  I'm exhausted from pretending      │                 │
│     │  to be okay                         │                 │
│     └─────────────────────────────────────┘                 │
│     ┌─────────────────────────────────────┐                 │
│     │  I wish someone would finally       │                 │
│     │  see the real me                    │                 │
│     └─────────────────────────────────────┘                 │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

**Mirror Reveal**:

```
┌─────────────────────────────────────────────────────────────┐
│  [←]                                                         │
│                                                              │
│     ┌─────────────────────────────────────┐                 │
│     │  "I'm exhausted from pretending     │  ← Raw input   │
│     │   to be okay"                        │    (monospace) │
│     └─────────────────────────────────────┘                 │
│                                                              │
│              [PRISM ANIMATION]                               │
│              ◇ Refracting...                                │
│                                                              │
│     ┌─────────────────────────────────────┐                 │
│     │  You're not pretending.             │  ← AI insight  │
│     │  You're surviving.                  │    (sans-serif)│
│     │                                      │                 │
│     │  Every "I'm fine" is a              │                 │
│     │  micro-betrayal of yourself.        │                 │
│     │                                      │                 │
│     │  The exhaustion isn't weakness—     │                 │
│     │  it's the cost of performing        │                 │
│     │  a version of you that's easier     │                 │
│     │  for others to handle.              │                 │
│     │                                      │                 │
│     │  The question isn't "why can't      │                 │
│     │  I just be okay?"                   │                 │
│     │                                      │                 │
│     │  The question is: "What would       │                 │
│     │  happen if I stopped performing?"   │                 │
│     └─────────────────────────────────────┘                 │
│                                                              │
│     ┌─────────────────────────────────────┐                 │
│     │       I WANT MORE OF THIS           │                 │
│     └─────────────────────────────────────┘                 │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

**Design Notes**:
- Raw input in monospace, boxed
- Prism animation during processing
- AI insight in sans-serif, with subtle prism glow border
- Typography contrast IS the product demonstration

---

### 19-22. Commitment & Capture

**Purpose**: Capture lead, build anticipation
**Emotional States**: Planning → Invested

**Email Screen**:

```
┌─────────────────────────────────────────────────────────────┐
│  [←]                                                         │
│                                                              │
│                                                              │
│              Your void is almost ready.                     │
│                                                              │
│           Where should we send access?                       │
│                                                              │
│     ┌─────────────────────────────────────┐                 │
│     │  your@email.com                      │                 │
│     └─────────────────────────────────────┘                 │
│                                                              │
│     ┌─────────────────────────────────────┐                 │
│     │          SEE MY RESULTS              │                 │
│     └─────────────────────────────────────┘                 │
│                                                              │
│     No spam. No motivational quotes.                        │
│     Just access when it's ready.                            │
│                                                              │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

**Design Notes**:
- Copy is PRISM voice (direct, no fluff)
- No privacy checkbox clutter
- Single input, single CTA

---

### 23-28. Results & Conversion

**Purpose**: Convert to paid user
**Emotional States**: Visualizing → Belonging → Ready to buy

**Profile Screen**:

```
┌─────────────────────────────────────────────────────────────┐
│                                                              │
│              Your Mind, Refracted                           │
│                                                              │
│                                                              │
│     You're not overthinking.                                │
│     You're thinking at a frequency                          │
│     most can't hear.                                        │
│                                                              │
│     You edit yourself not because you're wrong,             │
│     but because you've learned the world                    │
│     isn't ready.                                            │
│                                                              │
│     The exhaustion you feel isn't weakness.                 │
│     It's the cost of constant translation.                  │
│                                                              │
│                                                              │
│     ┌─────────────────────────────────────┐                 │
│     │            CONTINUE                  │                 │
│     └─────────────────────────────────────┘                 │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

**Design Notes**:
- Typography-driven (no charts or graphics)
- Feels like reading, not analyzing
- Affirming but not soft

---

## Component Library

### 1. Quiz Badge

```
┌─────────────────────────────────────────┐
│  3-MINUTE QUIZ                          │
└─────────────────────────────────────────┘

Specs:
- Background: transparent or very subtle
- Border: 1px var(--prism-muted)
- Text: var(--prism-muted), uppercase, letter-spacing: 0.05em
- Font-size: 12px
- Border-radius: 2px (sharp, not pill)
- Padding: 4px 12px
```

### 2. Frequency Wave Progress Indicator

Instead of a standard progress bar, PRISM uses a frequency wave:

```
[~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~]
  (wave amplitude responds to progress)

Specs:
- SVG-based animated wave
- Color: var(--prism-electric-blue)
- Height: 8px
- Wave amplitude increases with progress
- "Stabilizes" at 100%
- Subtle glow effect on filled portion
```

### 3. Option Card (Quiz Answer)

```
┌─────────────────────────────────────────┐
│  Option text here                       │
└─────────────────────────────────────────┘

Specs:
- Background: var(--prism-elevated) or transparent
- Border: 1px var(--prism-border)
- Border-radius: 0-4px (sharp)
- Padding: 16px 20px
- Hover: border var(--prism-electric-blue)
- Selected: border var(--prism-electric-blue), 
            background var(--prism-blue-subtle)
- Text: var(--prism-white)
- Transition: 300ms ease-in-out
```

### 4. CTA Button

```
┌─────────────────────────────────────────┐
│            CONTINUE                      │
└─────────────────────────────────────────┘

Specs:
- Background: linear-gradient(135deg, var(--prism-electric-blue), var(--prism-cyan))
- Text: var(--prism-white), uppercase, font-weight: 600
- Border-radius: 4-8px
- Padding: 16px 32px
- Box-shadow: 0 4px 24px var(--prism-glow)
- Hover: transform translateY(-2px), increased glow
- Active: transform translateY(0)
```

### 5. Back Button

```
[←]

Specs:
- Text only, no background
- Color: var(--prism-muted)
- Hover: var(--prism-white)
- Size: 24px
- Position: top-left, fixed
```

### 6. Input Field (The Void)

```
┌─────────────────────────────────────────┐
│  Just talk...                           │
└─────────────────────────────────────────┘

Specs:
- Background: transparent
- Border: none or 1px var(--prism-border) bottom only
- Text: var(--prism-white), font-family: monospace
- Placeholder: var(--prism-muted)
- Focus: border-color var(--prism-electric-blue)
- Cursor: blinking, var(--prism-white)
```

### 7. AI Response Container

```
┌─────────────────────────────────────────┐
│                                         │
│  AI-generated insight text here         │
│  in clean sans-serif typography         │
│                                         │
└─────────────────────────────────────────┘

Specs:
- Border: 1px var(--prism-border)
- Border-left: 2px var(--prism-electric-blue) (optional accent)
- Background: var(--prism-surface)
- Padding: 24px
- Optional: very subtle prism dispersion glow on edges
- Text: var(--prism-white), font-family: sans-serif
- Animation: fade-in, 500ms ease-in-out
```

### 8. Trust Badges

```
✓ Free    🔒 Private    🕐 3 min

Specs:
- Horizontal row, centered
- Text: var(--prism-muted), 12px
- Icon: same color as text
- Gap: 24px
- No backgrounds, no borders
```

---

## Animation & Motion

### PRISM Timing System

```css
/* Duration scale - slower than typical */
--timing-fast: 200ms;     /* Micro-interactions */
--timing-default: 300ms;  /* Standard transitions */
--timing-slow: 500ms;     /* Page transitions */
--timing-pause: 800ms;    /* Deliberate pauses */

/* Easing - smooth and deliberate */
--ease-prism: cubic-bezier(0.4, 0, 0.2, 1);
--ease-fade: cubic-bezier(0.0, 0, 0.2, 1);
```

### Animation Patterns

#### 1. Page Transitions
```
- Fade in: 500ms ease-in-out
- Slide up: 20px travel, 500ms ease-in-out
- Staggered children: 50ms delay between elements
```

#### 2. Frequency Wave
```
- Continuous subtle animation
- Responds to screen changes with brief "surge"
- Settles back to baseline over 500ms
```

#### 3. AI Response Reveal
```
1. Brief pause (800ms) - "thinking"
2. Container fades in (300ms)
3. Text appears with typing effect or staggered lines
4. Optional: subtle prism dispersion at edges
```

#### 4. Option Selection
```
- Border color transition: 200ms
- Background fade: 200ms
- Scale: none (keep it still)
```

### What to Avoid

- ❌ Bouncing animations
- ❌ Springing effects
- ❌ Quick snappy feedback
- ❌ Playful motion
- ❌ Parallax scrolling
- ❌ Excessive movement

---

## Conversion Psychology

### PRISM's Approach: Problem Surfacing

Unlike typical "aspirational" funnels that show happy outcomes, PRISM uses **problem surfacing**—helping users recognize and acknowledge their pain before offering relief.

### The Psychological Sequence

```
1. IDENTIFICATION
   "Before you speak, do you edit yourself?"
   → User thinks: "Yes, that's me"

2. QUANTIFICATION
   "How often do you feel exhausted from explaining yourself?"
   → User admits frequency

3. VALIDATION
   "78% of deep thinkers report chronic misunderstanding"
   → User feels less alone

4. AMPLIFICATION
   "This pattern affects 15% of the population. 
    Without intervention, it typically intensifies."
   → User feels urgency

5. ROCK BOTTOM
   "When was the last time you felt fully understood?"
   → User confronts the depth

6. RELIEF (Mirror Moment)
   AI reflects back understanding
   → User experiences what they're missing

7. DESIRE
   "That was one thought. Imagine doing this every day."
   → User wants more

8. COMMITMENT
   Email capture → Paywall → Purchase
```

### Key Psychology Techniques

| Technique | PRISM Application |
|-----------|-------------------|
| Social Proof | User count, authority quotes (not testimonials) |
| Scarcity | Limited access, not fake timers |
| Commitment | Small questions → deeper questions |
| Reciprocity | Mirror moment gives value first |
| Loss Aversion | "Without intervention, it intensifies" |
| Identity | "You're not overthinking. You're thinking at a frequency most can't hear." |

### Copy Principles

- **Direct**, not soft: "You're not pretending. You're surviving."
- **Knowing**, not cheerful: "We see you."
- **Confrontational**, not gentle: "Discover why you feel exhausting to be around"
- **Specific**, not vague: "78%", "15%", "2,500,000+"

---

## App Structure

### Home Screen

```
┌─────────────────────────────────────────────────────────────┐
│                                                              │
│                                                              │
│                                                              │
│                                                              │
│                        [   ]                                │
│                     Just talk.                              │
│                                                              │
│                                                              │
│                                                              │
│                                                              │
│                                                              │
└─────────────────────────────────────────────────────────────┘

- Almost empty
- Input field or microphone button
- One subtle prompt
- That's it
```

### Vault (History)

- Accessed via icon or gesture
- List of past entries, searchable
- Organized by AI into themes or time if the user wants
- Still minimal—no busy timeline

### Mirror (Insights)

- Shows patterns over time
- Typography-driven, not chart-driven
- Feels like reading, not analyzing

### Settings

- Extremely minimal
- Voice/text preference, notification time, AI name, export data

---

## Mobile Implementation

### Critical Mobile Rules

```
1. TOUCH TARGETS
   - Minimum 44x44px for all interactive elements
   - Space between targets: at least 8px

2. FONT SIZES
   - Body text: minimum 14px
   - Input fields: minimum 16px (prevents iOS zoom)
   - Legal text: minimum 12px

3. SAFE AREAS
   - Account for notch and home indicator
   - Padding at bottom for gesture navigation

4. PERFORMANCE
   - Animations use transform/opacity only
   - Lazy load below-fold content
   - Target <3s load on 3G

5. GESTURES
   - Swipe back for navigation
   - No hover-dependent interactions
```

### Responsive Breakpoints

```css
/* Mobile first */
/* Base: 0-639px */

@media (min-width: 640px) {
  /* Tablet: 640px-1023px */
}

@media (min-width: 1024px) {
  /* Desktop: 1024px+ */
}
```

---

## Implementation Checklist

### Landing Page

```
□ True black background
□ Badge is subtle (not prominent)
□ Headline is confrontational
□ Gender cards are minimal (no photos)
□ Trust badges in muted gray
□ No progress indicator
□ Slow, staggered animations
```

### Quiz Questions

```
□ Frequency wave progress (not standard bar)
□ Back button available
□ Auto-advance on single-select (300-500ms)
□ Continue button on multi-select
□ Sharp border-radius (0-4px)
□ High contrast text
□ Slow transitions (300-500ms)
```

### Mirror Moment

```
□ Raw input in monospace, boxed
□ Brief "thinking" pause before reveal
□ AI insight in sans-serif
□ Subtle prism glow effect
□ Typography contrast visible
□ "I want more of this" CTA
```

### Email Capture

```
□ PRISM voice copy (direct, no fluff)
□ Single input field
□ No privacy checkbox clutter
□ Monospace placeholder text
```

### Paywall

```
□ No countdown timer (unless real)
□ Typography-driven value props
□ Guarantee prominent
□ Trust signals subtle
□ Single recommended plan
```

### Performance

```
□ True black (#000000) background
□ Images minimal or none
□ Fonts: 2 max (mono + sans)
□ Animations on transform/opacity only
□ <3s load on 3G
□ Lighthouse >90
```

### Accessibility

```
□ Contrast ratio ≥4.5:1 (easy with black/white)
□ Focus states visible
□ Keyboard navigable
□ Touch targets ≥44px
□ Reduced motion support
```

---

## Reference Points

### For Mood

- Writing in a private journal at 2 AM
- A conversation with someone who finally gets you
- The quiet after everyone else has gone to sleep

### For Interface

- Linear (dark, minimal, premium)
- Raycast (command-line elegance)
- Arc browser (typographic, opinionated)
- Apple Notes in dark mode (emptiness as invitation)

### For Visuals

- Light refraction, prism dispersion—but subtle
- Glowing edges, not glowing surfaces
- Editorial typography

---

## Summary

Prism should feel like the only space in the user's life where they don't have to translate themselves. Dark, quiet, intense, private. A void that listens. A mirror that understands.

**The design doesn't try to be friendly. It tries to be worthy of their unfiltered mind.**

---

*Version 2.0 - Updated with funnel structure, component specifications, and implementation guidelines*
*Based on PRISM brand essence + Universal Funnel Design System patterns*

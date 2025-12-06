# PRISM Project - Quick Start

> **Read time: 3 minutes**  
> Everything you need to build for PRISM without losing the soul.

---

## 🎯 What is PRISM?

**PRISM** is an iOS app and web funnel for people who feel exhausted by constantly translating themselves for others.

- **Users** dump raw, unfiltered thoughts (voice or text)
- **PRISM** helps them clarify, decide, and communicate

**Tagline:** *"Your mind. Finally unfiltered."*

---

## 🔮 The Core Metaphor

```
USER = Light (raw, intense, too much for most people)
         ↓
      PRISM (the app)
         ↓
OUTPUT = Refracted light (something others can see and understand)
```

This metaphor drives EVERYTHING in the design.

---

## 📖 Read First (Required)

| Priority | Document | What You'll Learn |
|----------|----------|-------------------|
| 1 | `docs/brand/PRISM_DESIGN_BRIEF.md` | Full design system, rationale, funnel structure |
| 2 | `docs/brand/PRISM_DEV_GUIDE.md` | CSS vars, Tailwind classes, implementation |
| 3 | `docs/brand/PRISM_COMPONENTS.md` | React component examples |
| 4 | This file | Quick reference |

---

## ⚡ Non-Negotiables

### DO ✅

| Rule | Implementation |
|------|----------------|
| True black backgrounds | `#000000` always |
| Monospace for user input | JetBrains Mono, SF Mono |
| Sans-serif for AI output | Inter, SF Pro |
| Slow animations | 300-500ms, ease-in-out |
| Emptiness is the feature | Generous whitespace, single focus |
| Electric blue accent | `#0066FF` used sparingly |
| Sharp corners | 0-4px border radius |

### DON'T ❌

| Never | Why |
|-------|-----|
| Warm colors (orange, coral, pink) | Feels like wellness/therapy |
| Chat bubbles | This is NOT a chatbot |
| Gamification (streaks, badges) | Too playful |
| Bouncy animations | Too friendly |
| Busy dashboards | Against "emptiness" principle |
| Soft, rounded UI | Too friendly |
| Nature imagery | Wrong aesthetic |

---

## 🎨 Color Quick Reference

```css
/* Backgrounds - The Void */
--prism-black: #000000;        /* Primary surface */
--prism-surface: #050508;      /* Subtle elevation */
--prism-elevated: #0a0a0f;     /* Cards, containers */

/* Text - The Light */
--prism-white: #ffffff;        /* Headlines, emphasis */
--prism-secondary: #888888;    /* Body, descriptions */
--prism-muted: #666666;        /* Hints, timestamps */

/* Accent - The Refraction */
--prism-electric-blue: #0066ff; /* Primary accent */
--prism-cyan: #00d4ff;          /* Light variant */
```

---

## 🔤 Typography Quick Reference

```css
/* User Input = Raw, unfiltered */
font-family: 'JetBrains Mono', 'SF Mono', monospace;

/* AI Output & UI = Refined, processed */
font-family: 'Inter', 'SF Pro', system-ui, sans-serif;
```

**The contrast between these IS the product story: chaos in, clarity out.**

---

## 🎬 Animation Quick Reference

```css
/* Timing - Always slow and deliberate */
--timing-fast: 200ms;     /* Micro-interactions */
--timing-default: 300ms;  /* Standard transitions */
--timing-slow: 500ms;     /* Page transitions */
--timing-pause: 800ms;    /* AI thinking pause */

/* Easing - Smooth, never bouncy */
--ease-prism: cubic-bezier(0.4, 0, 0.2, 1);
```

---

## 🧠 Voice & Copy

When writing copy for PRISM:

| Be This | Not This |
|---------|----------|
| Direct | Soft |
| Knowing | Cheerful |
| Confrontational | Gentle |
| Specific ("78%") | Vague ("many") |

**Example good copy:**
- "You're not pretending. You're surviving."
- "Discover why you feel exhausting to be around"
- "The exhaustion isn't weakness—it's the cost of performing"

**Example bad copy:**
- "Let's work together on your journey!" ❌
- "You've got this! 💪" ❌
- "Take care of yourself today" ❌

---

## 🔍 Quick Validation Checklist

Before shipping anything, ask:

- [ ] Does this feel like a void that listens?
- [ ] Is the background true black (`#000000`)?
- [ ] Is user input in monospace, AI output in sans-serif?
- [ ] Are animations slow and deliberate (300-500ms)?
- [ ] Is there enough emptiness (no clutter)?
- [ ] Does the accent blue appear only where essential?
- [ ] Would this feel "premium and intense" not "friendly and soft"?

---

## 🎯 Target User Reminder

**Who we're building for:**
- Feel exhausted from editing themselves in every conversation
- Think faster and more chaotically than those around them
- Feel lonely despite having people in their life
- Want a space where they don't have to perform

**They're not looking for a friend. They're looking for a witness.**

---

## 📁 Project Structure

```
/prism-web/
├── .cursorrules              # Auto-context for AI assistants
├── README.md                 # Project overview
├── QUICK_START.md            # This file
│
├── docs/
│   ├── brand/                # PRISM-specific docs
│   │   ├── PRISM_DESIGN_BRIEF.md    # The "why" - full design system
│   │   ├── PRISM_DEV_GUIDE.md       # The "how" - implementation
│   │   ├── PRISM_COMPONENTS.md      # React examples
│   │   └── design-tokens.json       # Machine-readable tokens
│   │
│   ├── patterns/             # Universal templates (reusable)
│   │   ├── PRODUCT_BRIEF_PLAYBOOK.md    # Analyze any product
│   │   ├── UNIVERSAL_FUNNEL_DESIGN_SYSTEM.md
│   │   └── UNIVERSAL_FUNNEL_PLAYBOOK.md
│   │
│   └── research/             # Competitor analysis
│       ├── copymind/
│       ├── coursiv/
│       └── liven/
│
├── src/                      # Source code
│   ├── app/
│   ├── components/
│   ├── hooks/
│   ├── lib/
│   └── types/
│
└── public/                   # Static assets
```

---

## 🚀 Getting Started

1. **Read** `PRISM_DESIGN_BRIEF.md` (20 min)
2. **Reference** `design-tokens.json` for exact values
3. **Keep this file** open as a quick reference
4. **Validate** against the checklist above

---

*When in doubt, remember: dark, quiet, intense, private. A void that listens. A mirror that understands.*


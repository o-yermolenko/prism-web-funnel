# PRISM Web Funnel

> *"Your mind. Finally unfiltered."*

A web funnel for PRISM - an AI tool for intense minds who feel exhausted translating themselves for others.

---

## Quick Start

1. **Read** `QUICK_START.md` for 3-minute onboarding
2. **Reference** `docs/brand/PRISM_DESIGN_BRIEF.md` for the full design system
3. **Run** the development server (see below)

---

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Deployment**: Vercel

---

## Project Structure

```
/prism-web/
│
├── .cursorrules              # AI context (auto-loaded by Cursor)
├── README.md                 # This file
├── QUICK_START.md            # 3-minute developer onboarding
│
├── docs/
│   ├── brand/                # PRISM-specific documentation
│   │   ├── PRISM_DESIGN_BRIEF.md    # Full design system & rationale
│   │   ├── PRISM_DEV_GUIDE.md       # Implementation cheatsheet
│   │   ├── PRISM_COMPONENTS.md      # React component examples
│   │   └── design-tokens.json        # Machine-readable tokens
│   │
│   ├── patterns/             # Universal templates (reusable)
│   │   ├── PRODUCT_BRIEF_PLAYBOOK.md     # How to analyze any product
│   │   ├── UNIVERSAL_FUNNEL_DESIGN_SYSTEM.md
│   │   └── UNIVERSAL_FUNNEL_PLAYBOOK.md
│   │
│   └── research/             # Competitor analysis
│       ├── copymind/
│       ├── coursiv/
│       └── liven/
│
├── src/
│   ├── app/                  # Next.js app router pages
│   │   ├── [step]/           # Dynamic funnel steps
│   │   ├── globals.css       # Global styles
│   │   ├── layout.tsx        # Root layout
│   │   └── page.tsx          # Landing page
│   │
│   ├── components/           # UI components
│   │   ├── screens/          # Full-page screen components
│   │   ├── DecryptedText.tsx
│   │   ├── FrequencyWave.tsx
│   │   ├── FunnelLayout.tsx
│   │   └── ProgressLine.tsx
│   │
│   ├── hooks/                # Custom React hooks
│   ├── lib/                  # Utilities & store
│   └── types/                # TypeScript definitions
│
├── public/                   # Static assets
│
└── [config files]            # package.json, tailwind.config.ts, etc.
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view the funnel.

---

## Design System

PRISM has a distinct aesthetic: **dark, quiet, intense, private.**

| Principle | Implementation |
|-----------|----------------|
| True black backgrounds | `#000000` always |
| Monospace for user input | JetBrains Mono |
| Sans-serif for AI output | Inter |
| Slow animations | 300-500ms |
| Emptiness is the feature | Generous whitespace |

See `docs/brand/PRISM_DESIGN_BRIEF.md` for the complete design system.

---

## Key Documentation

| Document | Purpose |
|----------|---------|
| `QUICK_START.md` | 3-minute onboarding |
| `docs/brand/PRISM_DESIGN_BRIEF.md` | Full design system & rationale |
| `docs/brand/PRISM_DEV_GUIDE.md` | CSS vars, Tailwind classes, code snippets |
| `docs/brand/PRISM_COMPONENTS.md` | React component examples |
| `docs/patterns/` | Universal templates (reusable for any product) |
| `docs/research/` | Competitor analysis |

---

## License

Proprietary - All rights reserved

---

*The design doesn't try to be friendly. It tries to be worthy of their unfiltered mind.*

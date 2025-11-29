# The Prism

A modern web funnel application for lead generation and conversion optimization.

## Overview

The Prism is a web funnel platform designed to guide visitors through a strategic conversion journey, capturing leads and optimizing user experience at every step.

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Context / Zustand
- **Forms**: React Hook Form
- **Analytics**: Custom event tracking
- **Deployment**: Vercel / Custom hosting

## Project Structure

```
├── public/              # Static assets
├── src/
│   ├── app/            # Next.js app router pages
│   ├── components/     # Reusable UI components
│   ├── lib/           # Utility functions and helpers
│   ├── hooks/         # Custom React hooks
│   ├── types/         # TypeScript type definitions
│   └── styles/        # Global styles
├── config/            # Configuration files
└── docs/             # Documentation
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the funnel in your browser.

## Features

- 🎯 Multi-step funnel flows
- 📊 Built-in analytics tracking
- 🎨 Customizable design system
- 📱 Fully responsive
- ⚡ Optimized performance
- 🔒 Data validation and security
- 🧪 A/B testing ready

## Funnel Structure

1. **Landing Page** - Initial engagement
2. **Lead Capture** - Information collection
3. **Value Proposition** - Product/service showcase
4. **Social Proof** - Testimonials and trust building
5. **Call to Action** - Final conversion step
6. **Thank You** - Confirmation and next steps

## Environment Variables

Create a `.env.local` file in the root directory:

```env
# API Configuration
NEXT_PUBLIC_API_URL=
NEXT_PUBLIC_ANALYTICS_ID=

# Email Configuration
EMAIL_API_KEY=
EMAIL_FROM=

# Database (if needed)
DATABASE_URL=
```

## Contributing

This is a private project. Contact the project owner for contribution guidelines.

## License

Proprietary - All rights reserved

---

**Created**: November 2025
**Last Updated**: November 2025


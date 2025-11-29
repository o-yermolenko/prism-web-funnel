# PRISM Design System Reference

Developer guide for implementing the PRISM visual language.

---

## Quick Start

The PRISM design system is configured in:
- `globals.css` - CSS variables, custom utilities, component styles
- `tailwind.config.ts` - Tailwind theme extensions

All PRISM tokens are available as both CSS variables and Tailwind utilities.

---

## Colors

### Core Palette

```tsx
// Background (always)
className="bg-prism-black"

// Text (primary)
className="text-prism-white"

// Accent (sparingly)
className="text-prism-electric-blue"

// Muted text (timestamps, secondary info)
className="text-prism-muted"
className="text-prism-muted-light"
```

### CSS Variables

```css
var(--prism-black)           /* #000000 */
var(--prism-white)           /* #ffffff */
var(--prism-electric-blue)   /* #0066ff */
var(--prism-muted)           /* #666666 */
var(--prism-muted-light)     /* #888888 */
```

### Dispersion Colors

Use sparingly for prism refraction effects:

```tsx
className="text-prism-red"
className="text-prism-orange"
className="text-prism-yellow"
className="text-prism-green"
className="text-prism-cyan"
className="text-prism-violet"
```

---

## Typography

### Font Families

**Raw Input** - Monospace for unfiltered user thoughts:

```tsx
className="font-raw"
// or
className="text-raw"
```

**Refined Output** - Sans-serif for AI-processed responses:

```tsx
className="font-refined"
// or
className="text-refined"
```

**Display** - For headlines:

```tsx
className="text-display"
```

### Usage Pattern

```tsx
// User typing their thoughts
<textarea className="font-raw text-2xl">
  what's on your mind right now...
</textarea>

// AI response
<div className="font-refined text-lg">
  It sounds like you're feeling...
</div>

// Headline
<h1 className="text-display text-6xl">
  Your mind. Finally unfiltered.
</h1>
```

---

## Spacing

PRISM uses generous, intentional spacing:

```tsx
// Maximum space - for the void
className="p-void"        // 8rem padding
className="space-y-void"  // 8rem vertical spacing

// Breathing room
className="p-breath"      // 4rem padding
className="space-y-breath"

// Thoughtful pause
className="p-pause"       // 2rem padding

// Standard gap
className="gap-gap"       // 1rem gap
```

### CSS Variables

```css
var(--space-void)    /* 8rem */
var(--space-breath)  /* 4rem */
var(--space-pause)   /* 2rem */
var(--space-gap)     /* 1rem */
```

---

## Animations

### Built-in Animations

All animations are slow and deliberate (300-500ms):

```tsx
// Fade in gently
className="animate-fade-in"

// Fade out
className="animate-fade-out"

// AI response appearing
className="animate-slide-up"

// Recording state pulse
className="animate-pulse-slow"

// Frequency wave (progress indicator)
className="animate-wave"

// Prism dispersion effect
className="animate-dispersion"

// Cursor blink
className="animate-blink"
```

### Custom Transitions

```tsx
// PRISM timing with easing
className="transition-prism duration-default"

// Slower transition
className="transition-slow"

// Manual control
style={{ 
  transitionDuration: 'var(--timing-slow)',
  transitionTimingFunction: 'var(--ease-prism)'
}}
```

### Timing Values

```css
var(--timing-slow)     /* 500ms */
var(--timing-medium)   /* 400ms */
var(--timing-default)  /* 300ms */
var(--timing-pause)    /* 800ms */
```

---

## Components

### Input Fields

**The Void** - Large, minimal text input:

```tsx
<textarea 
  className="input-void"
  placeholder="Just talk."
/>
```

**Custom input with PRISM style:**

```tsx
<input
  className="reset-input font-raw text-2xl bg-transparent text-prism-white placeholder:text-prism-muted"
  placeholder="What's on your mind?"
/>
```

### Buttons

**Primary CTA:**

```tsx
<button className="btn-primary">
  Get Started
</button>
```

**Secondary:**

```tsx
<button className="btn-secondary">
  Learn More
</button>
```

**Text only:**

```tsx
<button className="btn-text">
  Skip
</button>
```

**Custom Tailwind buttons:**

```tsx
// Primary
<button className="bg-prism-white text-prism-black px-8 py-4 hover:bg-prism-electric-blue hover:text-prism-white transition-prism">
  Continue
</button>

// Secondary
<button className="border border-prism-muted text-prism-white px-8 py-4 hover:border-prism-white transition-prism">
  Back
</button>
```

### Effects

**Prism Glow:**

```tsx
// Subtle electric blue aura
className="glow-prism"

// Using Tailwind
className="shadow-prism"
```

**Dispersion Glow:**

```tsx
// Rainbow edge effect (very subtle)
className="glow-dispersion"
```

---

## Layout Patterns

### The Void

Maximum emptiness - center content in vast black space:

```tsx
<div className="void">
  <div className="max-w-2xl">
    {/* Content */}
  </div>
</div>
```

### Generous Whitespace

```tsx
<section className="min-h-screen bg-prism-black flex items-center justify-center p-breath">
  <div className="space-y-pause">
    {/* Stacked content with thoughtful spacing */}
  </div>
</section>
```

---

## Design Patterns

### User Input vs AI Response

Visual contrast tells the story - raw in, refined out:

```tsx
{/* User's raw thought */}
<div className="font-raw text-prism-white">
  i don't know why but i just feel really stuck lately
  like i know what i should do but i can't make myself do it
</div>

{/* AI's refined understanding */}
<div className="font-refined text-prism-muted-light animate-slide-up">
  It sounds like you're experiencing a disconnect between 
  clarity and action - you understand the path, but something 
  is blocking execution.
</div>
```

### Progress Indicator

Frequency wave instead of standard bar:

```tsx
<div className="flex gap-1 h-8 items-end">
  {[...Array(20)].map((_, i) => (
    <div 
      key={i}
      className="w-1 bg-prism-electric-blue animate-wave"
      style={{ 
        animationDelay: `${i * 50}ms`,
        height: '100%' 
      }}
    />
  ))}
</div>
```

### Voice Recording State

Subtle pulse, not loud waveform:

```tsx
<button className="relative">
  <div className="w-16 h-16 rounded-full bg-prism-electric-blue animate-pulse-slow" />
  <span className="text-prism-muted text-sm">Recording...</span>
</button>
```

---

## Utility Classes

### Reset Browser Defaults

```tsx
// Button reset
className="reset-button"

// Input reset
className="reset-input"
```

### Borders

```tsx
// High contrast
className="border-sharp"

// Subtle
className="border-muted"
```

### Text Utilities

```tsx
// Muted secondary text
className="text-muted"

// Balanced text wrapping
className="text-balance"
```

---

## Common Patterns

### Landing Page Hero

```tsx
<section className="void">
  <div className="max-w-4xl text-center space-y-breath">
    <h1 className="text-display text-7xl text-prism-white animate-fade-in">
      Your mind. Finally unfiltered.
    </h1>
    <p className="font-refined text-2xl text-prism-muted-light animate-fade-in">
      A space where you don't have to translate yourself.
    </p>
    <button className="btn-primary animate-fade-in">
      Start Now
    </button>
  </div>
</section>
```

### Onboarding Question

```tsx
<div className="min-h-screen bg-prism-black flex items-center justify-center p-breath">
  <div className="max-w-2xl w-full space-y-pause">
    {/* Question */}
    <h2 className="text-display text-4xl text-prism-white text-balance">
      How often do you feel exhausted after social interactions?
    </h2>
    
    {/* Answers */}
    <div className="space-y-4">
      <button className="btn-secondary w-full text-left">
        Almost always
      </button>
      <button className="btn-secondary w-full text-left">
        Sometimes
      </button>
      <button className="btn-secondary w-full text-left">
        Rarely
      </button>
    </div>
    
    {/* Progress wave */}
    <div className="flex gap-1 h-6 items-end justify-center">
      {[...Array(7)].map((_, i) => (
        <div 
          key={i}
          className="w-1 bg-prism-electric-blue"
          style={{ 
            height: i < 3 ? '100%' : '30%',
            opacity: i < 3 ? 1 : 0.3
          }}
        />
      ))}
    </div>
  </div>
</div>
```

### Text Input Screen

```tsx
<div className="void">
  <div className="max-w-3xl w-full">
    <textarea
      className="input-void h-64"
      placeholder="What's on your mind right now?"
      autoFocus
    />
    
    <div className="flex justify-between items-center mt-pause">
      <button className="btn-text">
        Clear
      </button>
      <button className="btn-primary">
        Continue
      </button>
    </div>
  </div>
</div>
```

---

## Don'ts

❌ No warm colors (greens, pinks, oranges)  
❌ No soft, rounded corners  
❌ No bouncy animations  
❌ No busy layouts  
❌ No chart-heavy visualizations  
❌ No gamification elements  
❌ No chat bubbles  

## Do's

✅ Use generous whitespace  
✅ Keep animations slow (300-500ms)  
✅ High contrast everywhere  
✅ Monospace for raw input  
✅ Sans-serif for refined output  
✅ Electric blue sparingly  
✅ Let the void breathe  

---

## Testing Checklist

When implementing a screen, verify:

- [ ] Background is true black (#000000)
- [ ] Text is white or muted gray only
- [ ] Typography uses `font-raw` or `font-refined` appropriately
- [ ] Spacing feels generous (use breath/void/pause)
- [ ] Animations are slow and deliberate
- [ ] No bright/warm colors except electric blue
- [ ] Layout feels empty, not cluttered
- [ ] User input visually distinct from AI output

---

## Resources

- **Design Brief:** `PRISM_DESIGN_BRIEF.md`
- **CSS Variables:** `src/app/globals.css`
- **Tailwind Config:** `tailwind.config.ts`


# PRISM - Design Brief

---

## Project Overview

Prism is an iOS app and web funnel for people who feel exhausted by constantly translating themselves for others. The product lets users dump raw, unfiltered thoughts - voice or text - and the AI helps them clarify, decide, and communicate.

The design must feel like a private space for intense minds. Not therapy. Not productivity. Not social. A quiet void where the user can finally be unfiltered - and be understood.

---

## Brand Essence

*"Your mind. Finally unfiltered."*

The user is the light - raw, intense, too much for most people to look at directly. Prism is the interface that refracts that light into something others can see and understand.

---

## Target User

People who:

- Feel exhausted from editing themselves in every conversation
- Think faster and more chaotically than those around them
- Feel lonely despite having people in their life
- Suspect they're different - maybe deeper, maybe too intense
- Want a space where they don't have to perform

They're not looking for a friend. They're looking for a witness.

---

## Design Principles

### 1. Emptiness is the feature.

The app should feel almost empty. No dashboards. No clutter. The void is the invitation - space for the user to fill with their thoughts.

### 2. Dark means safe.

True black backgrounds. This is a private space, protected from the bright, loud outside world. The darkness says: no one is watching. You can be yourself here.

### 3. Contrast tells the story.

Raw input looks raw. Translated output looks refined. The visual difference between what the user puts in and what the AI gives back should be immediately clear.

### 4. Slow and deliberate.

No snappy animations. No bouncing notifications. Everything moves with intention. The pacing says: there's no rush here. Take your time.

### 5. Intensity without aggression.

The aesthetic is sharp, technical, premium - but not cold. The user should feel like they've entered something powerful, not something hostile.

---

## Color Palette

| Role | Color | Notes |
|------|-------|-------|
| Background | #000000 (true black) | Primary surface everywhere |
| Primary text | #FFFFFF (white) | High contrast, sharp |
| Accent | Electric blue (#0066FF or similar) | Used sparingly for key moments |
| Secondary accent | Prism dispersion effect | Subtle rainbow/light refraction for transitions, AI responses |
| Muted text | #666666 or #888888 | For timestamps, secondary info |

**Avoid:** warm colors, pastels, gradients that feel soft or "wellness." No greens, no pinks, no oranges.

---

## Typography

Two typefaces, used with intention:

### User input: Monospace

- Examples: SF Mono, JetBrains Mono, IBM Plex Mono
- This is the user's raw voice - unformatted, unpolished, straight from the brain
- Feels like typing into a terminal, like code, like something direct

### AI responses: Sharp sans-serif

- Examples: Inter, SF Pro, Söhne
- Clean, elegant, structured
- Feels like the raw input has been processed and clarified

**The contrast between these two typefaces *is* the product story: chaos in, clarity out.**

---

## UI Elements

### Input field

- Large, generous space
- Minimal border or none - just the blinking cursor on black
- Placeholder text in muted gray: "Just talk." or "What's on your mind?"

### Voice recording

- Subtle pulse or glow - not a loud waveform
- The user should feel like they're speaking into a calm void, not performing for a visualizer

### Progress indicator (onboarding)

- Not a standard progress bar
- A thin "frequency wave" that shifts and stabilizes as the user moves through questions
- Reactive to input if possible - feels alive, not decorative
- Positioned subtly - edge of screen, not center stage

### AI responses

- Appear with a subtle fade or ease-in
- Optional: very faint prism dispersion glow at the edge of the response container
- Typography shifts to sans-serif - visually distinct from user input

### Buttons

- Minimal, text-based where possible
- Primary CTA: white text on black, or black text on white for emphasis
- No rounded, friendly buttons - keep edges sharper

---

## Motion and Animation

- All transitions: ease-in-out, slow (300-500ms)
- No bouncing, no springing, no playfulness
- When AI responds: brief pause (like it's thinking), then gentle fade-in
- Prism dispersion effects: subtle, ambient, never distracting
- The app should feel like it breathes slowly

---

## App Structure

### Home screen

- Almost empty
- Input field or microphone button
- One subtle prompt
- That's it

### Vault (history)

- Accessed via icon or gesture
- List of past entries, searchable
- Organized by AI into themes or time if the user wants
- Still minimal - no busy timeline

### Mirror (insights)

- Shows patterns over time
- Typography-driven, not chart-driven
- Feels like reading, not analyzing

### Settings

- Extremely minimal
- Voice/text preference, notification time, AI name, export data

---

## Web Funnel

Should feel like a preview of the app - same aesthetic, same pacing.

### Landing page

- True black background
- Headline centered, generous whitespace
- Subtle ambient animation (slow gradient shift, soft pulse)
- Single CTA, no navbar clutter

### Onboarding quiz

- One question per screen
- Large typography
- Simple button answers, no dropdowns
- Progress wave at bottom, very subtle
- Pacing feels slow, intentional

### Mirror moment

- Let users try a mini experience before downloading
- Text input → AI gives one insight
- Proves the value, creates desire

---

## What to Avoid

- Soft, rounded, "friendly" UI
- Wellness aesthetics (gradients, nature imagery, warm colors)
- Chat bubbles - this is not a chatbot
- Gamification (streaks, badges, points)
- Busy dashboards or data visualizations
- Anything that feels like it's trying to be liked

---

## Reference Points

### For mood:

- Writing in a private journal at 2 AM
- A conversation with someone who finally gets you
- The quiet after everyone else has gone to sleep

### For interface:

- Linear (dark, minimal, premium)
- Raycast (command-line elegance)
- Arc browser (typographic, opinionated)
- Apple Notes in dark mode (emptiness as invitation)

### For visuals:

- Light refraction, prism dispersion - but subtle
- Glowing edges, not glowing surfaces
- Editorial typography

---

## Design Thoughts & Refinements

### Deep black (#000000) background

✅ True black feels more absolute than dark gray - it says "this is a void for you to fill." It also makes any accent color pop harder. And on OLED screens, it feels premium.

### High contrast with white

✅ Sharp, clean, confident. It avoids the soft, therapeutic vibe. This isn't a wellness app - it's a tool for intensity.

### Electric blue / prism dispersion

✅ This ties directly to the brand metaphor - the user is the light, the app is the prism. A subtle dispersion effect (rainbow edge, light refraction) can be beautiful without being cheesy. Used sparingly, it signals: something is happening here. Your input is being transformed.

### Typography Strategy

**User input: Monospace** - reinforces "this is unfiltered, unedited, straight from your brain"

**AI responses: Sharp sans-serif** - signals "this has been processed, clarified, made elegant"

That contrast itself tells the story: raw in, refined out.

### The Frequency Wave Progress Bar

Considerations:

- It needs to feel responsive, not decorative. If the wave reacts to what they're typing or saying, it feels alive. If it's just ambient animation, it's just noise.
- "Stabilizing" as they answer is a nice metaphor - chaos becoming clarity. But make sure it doesn't feel like the app is *judging* them (e.g., "you're not stable yet").
- Keep it subtle. A full-screen waveform could distract from the content. A thin, elegant pulse at the edge of the screen might be enough.

### Overall Vibe

This aesthetic leans toward:

- Techy
- Intense
- Slightly edgy
- Premium

It's closer to Linear, Raycast, or a high-end developer tool than to a journaling app. That's a choice - and it could work well for the target user who sees themselves as *different*, *fast*, *technical-minded*.

**Balance consideration:** Keep the visual intensity for the funnel and onboarding (where it creates differentiation and intrigue), but soften slightly inside the app itself (where the user needs to feel safe dumping vulnerable thoughts).

---

## Summary

Prism should feel like the only space in the user's life where they don't have to translate themselves. Dark, quiet, intense, private. A void that listens. A mirror that understands.

The design doesn't try to be friendly. It tries to be worthy of their unfiltered mind.


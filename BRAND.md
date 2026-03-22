# Owl Dispatch — Brand Guidelines

These are the ground truth design decisions. Every change to the site MUST be consistent with these rules. If a rule needs to change, update this file FIRST, then update the site.

## Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--bg-primary` | `#0a0a0f` | Page background, inputs |
| `--bg-secondary` | `#12121a` | Alternating section backgrounds |
| `--bg-card` | `#1a1a2e` | Cards, elevated surfaces |
| `--text-primary` | `#f0f0f5` | Headlines, body text |
| `--text-secondary` | `#a0a0b5` | Subtitles, descriptions, muted text |
| `--accent` | `#d4a843` | CTAs, highlights, brand gold |
| `--accent-hover` | `#e6be5a` | Hover state for accent |
| `--accent-dim` | `#b8922e` | Subtle accent usage |
| `--border` | `#2a2a3e` | Card borders, dividers |

**Rule:** Never introduce new colors without adding them here first.

## Typography

- **Font:** Inter (loaded via `next/font/google`)
- **Hero headline:** `text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight`
- **Section headlines:** `text-3xl md:text-4xl font-bold` (pricing can go to `md:text-5xl`)
- **Eyebrow labels:** `text-sm font-semibold text-[var(--accent)] uppercase tracking-widest`
- **Body text:** `text-sm` or `text-base` with `leading-relaxed`
- **Subtitles:** `text-lg md:text-xl text-[var(--text-secondary)]`

## Logo

- **Current:** Text-only wordmark — "Owl" in accent gold, "Dispatch" in white
- **Font treatment:** `text-2xl font-extrabold tracking-tight` (navbar), `text-lg` (footer)
- **No icon/symbol until we have a professionally designed one.** No emojis, no placeholder SVGs.

## Icons

- **Source:** Heroicons (outline style, 1.5 stroke width)
- **Container:** `w-12 h-12 rounded-lg bg-[var(--accent)]/10` with icon at `w-6 h-6`
- **No emojis anywhere on the site.** Ever.

## Visual Texture

- **Dot grid:** `radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)` at `24px 24px` — used on `bg-secondary` sections
- **Gradient dividers:** `h-px bg-gradient-to-r from-transparent via-[var(--accent)]/20 to-transparent` between major sections
- **Glow orbs:** `bg-[var(--accent)]/5 blur-[120px]` — used sparingly behind hero and pricing
- **CTA glow:** `shadow-[0_0_20px_rgba(212,168,67,0.2)]` on primary buttons

## Spacing

- **Hero:** `pt-32 pb-28`
- **Major sections:** `py-28` for high-importance (HowItWorks, Pricing, CTA), `py-20` for others
- **Between section header and subtitle:** `mb-6`
- **Between subtitle and content:** `mb-16`

## Tone of Voice

- Professional but direct. No corporate jargon.
- Speak to towing company owners — they're busy, practical people who value straight talk.
- No hype, no fake metrics, no claims we can't back up.
- "AI that works the night shift so your people don't have to" — this is the core positioning.

## CTA Language

- **Primary CTA:** "Get in Touch" — used everywhere, consistently
- **Hero CTA:** Phone number as primary action: "Call (540) 645-0805"
- **Never use:** "Get Started", "Sign Up", "Free Trial", "Start Now", "Schedule a Demo" (we don't have a demo yet)
- This is a **business card**, not a sales funnel. The CTA is always a conversation, never a self-serve signup or demo booking.

## Trust Signals

- **Phone number** on the site: (540) 645-0805
- **Location:** Virginia, USA (in footer)
- **No fake metrics.** No "99.9% uptime" or "<3 second answer time" until we have real data.
- **Honest about stage:** "Currently onboarding founding customers" is better than silence

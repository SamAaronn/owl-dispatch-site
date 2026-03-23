# Owl Dispatch — Brand Guidelines

These are the ground truth design decisions. Every change to the site MUST be consistent with these rules. If a rule needs to change, update this file FIRST, then update the site.

## Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--bg-primary` | `#0a0a0f` | Page background, inputs |
| `--bg-secondary` | `#0f0f17` | Alternating section backgrounds |
| `--bg-card` | `#161622` | Cards, elevated surfaces |
| `--bg-elevated` | `#1c1c2e` | Higher elevation surfaces |
| `--text-primary` | `#f0f0f5` | Headlines, body text |
| `--text-secondary` | `rgba(240,240,245,0.6)` | Subtitles, descriptions, muted text |
| `--text-tertiary` | `rgba(240,240,245,0.35)` | Minimal contrast, captions |
| `--accent` | `#d4a843` | CTAs, highlights, brand gold |
| `--accent-hover` | `#e6be5a` | Hover state for accent |
| `--accent-dim` | `#b8922e` | Subtle accent usage |
| `--accent-glow` | `rgba(212,168,67,0.12)` | Semi-transparent glow |
| `--border` | `rgba(255,255,255,0.06)` | Card borders, dividers |
| `--border-hover` | `rgba(255,255,255,0.12)` | Interactive border states |

**Rule:** Never introduce new colors without adding them here first.

## Typography

- **Font:** Outfit (loaded via `next/font/google`) — geometric sans-serif with character
- **Hero headline:** `text-5xl md:text-7xl lg:text-8xl font-extrabold` with tight letter-spacing
- **Section headlines:** `text-3xl md:text-5xl font-bold`
- **Eyebrow labels:** `text-xs font-semibold text-[var(--accent)] uppercase tracking-[0.2em]`
- **Body text:** `text-sm` or `text-base` with `leading-relaxed`, weight 400
- **Subtitles:** `text-lg md:text-xl text-[var(--text-secondary)]` weight 400
- **Data/numbers:** `font-variant-numeric: tabular-nums`

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

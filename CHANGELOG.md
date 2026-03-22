# Changelog

All changes to the Owl Dispatch website are logged here with rationale.

## v4 — 2026-03-22 — Scroll Animations & Business Card CTAs

**Driven by:** Sam's feedback — needs movement, color, and business-card framing (no demo scheduling)

### Added
- Framer Motion scroll-triggered animations on all sections (fade-in-up, staggered card reveals)
- Hero elements cascade on page load (badge → headline → subtitle → buttons)
- Aurora-style gradient blurs in hero (deep blue `#1a3a5c` + purple `#2d1b4e` + gold)
- Color accent blobs behind Features and Pricing sections
- `FadeIn`, `StaggerContainer`, `StaggerItem` animation components
- Phone icon next to phone number in CTA section
- Subtle hover lift on primary CTA buttons (`hover:translate-y-[-1px]`)

### Changed
- All CTAs changed from "Schedule a Demo" → "Get in Touch" — this is a business card, not a sales funnel
- Hero primary CTA is now phone number: "Call (540) 645-0805" (direct `tel:` link)
- CTA section heading: "Stop Losing Overnight Calls" → "Let's Talk"
- CTA subtitle: removed demo language, replaced with "Curious how AI dispatch could work for your operation?"
- CTA form: company name no longer required (lowering friction)
- Form confirmation text simplified: "We'll get back to you within 24 hours"
- Contact form card upgraded to glass-card effect

## v3 — 2026-03-22 — Premium Visual Polish

**Driven by:** Design research agent studying Linear, Vercel, Stripe, Retell, Cal.com

### Added
- Grain texture SVG overlay at 3% opacity (biggest single "premium" signal)
- Glass-card effects (`backdrop-filter: blur(12px) saturate(125%)`) on feature cards, problem section, pricing card
- Cards lift on hover (`translateY(-2px)` + shadow increase)
- Custom selection color (amber/gold)
- `--text-tertiary` and `--accent-glow` CSS variables
- `--border-hover` variable for interactive states

### Changed
- Body text color: `#f0f0f5` → `rgba(255,255,255,0.7)` (reduces eye strain, premium convention)
- Headlines: added `-0.02em` letter-spacing globally, `-0.025em` on h1
- Headline line-heights tightened: h1 `1.05`, h2 `1.1`
- Added `text-wrap: balance` on all headings
- Border variables switched to `rgba(255,255,255,0.08)` for subtlety
- Removed duplicate font-family from body (now handled by `next/font` variable)

## v2 — 2026-03-22 — Taste Audit Fixes

**Driven by:** Sam's review + automated design audit

### Removed
- Fake trust metrics from hero (99.9% uptime, <3 sec answer time) — we don't have data yet
- "14-day free trial" and "cancel anytime" claims — real setup costs make free trials nonsensical
- "Get Started" CTA buttons — wrong tone for a $1k/month B2B service
- Google Fonts `<link>` tag — replaced with `next/font` for better performance
- Emoji owl logo — replaced with text-only wordmark
- All emojis everywhere — replaced with Heroicons SVGs

### Added
- SVG icon library (`Icons.tsx`) using Heroicons outline style
- Scroll-aware navbar — shrinks and adds shadow on scroll
- Section eyebrow labels (Process, Capabilities, Investment, Questions)
- Dot grid background texture on alternating sections
- Gradient dividers between major sections
- Ambient glow orb behind pricing section
- Pricing comparison anchor — shows "$1,200+/mo for a call center" struck through
- "$2,400+/year savings" callout on pricing card
- Phone number in CTA section and footer: (540) 645-0805
- "Virginia, USA" in footer
- CTA button glow effect
- Animated FAQ accordion (grid-based height transition)
- Animated mobile menu (max-height transition)
- `aria-expanded` on FAQ buttons
- OpenGraph metadata
- `BRAND.md` — design system ground truths

### Changed
- All CTA buttons standardized to "Schedule a Demo"
- Hero padding increased (`pb-20` → `pb-28`)
- HowItWorks and Pricing sections increased to `py-28`
- HowItWorks step numbers opacity `15%` → `25%`, size `6xl` → `7xl`
- Feature card icons enlarged (`w-10/h-10` → `w-12/h-12`)
- Feature cards: added gold top border accent + hover gradient
- Font loading via `next/font/google` (Inter) instead of external `<link>`

## v1 — 2026-03-22 — Initial Build

- Dark theme landing page with amber/gold accents
- Sections: Navbar, Hero, Problem, HowItWorks, Features, Pricing, FAQ, CTA, Footer
- Next.js 16 + Tailwind CSS 4 + static export
- Deployed to Vercel at owl-dispatch-site.vercel.app

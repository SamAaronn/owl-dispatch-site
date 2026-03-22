# Changelog

All changes to the Owl Dispatch website are logged here with rationale.

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

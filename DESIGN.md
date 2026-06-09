# Design

## Visual Thesis

Boardroom editorial restraint: deep navy authority, precise honey-gold accents, warm off-white breathing room, and founder-led credibility.

## Color System

Use OKLCH custom properties. Primary brand presence comes from navy surfaces and gold accents, not decorative gradients.

```css
--color-navy-950: oklch(0.18 0.045 260);
--color-navy-900: oklch(0.23 0.055 258);
--color-gold-600: oklch(0.66 0.145 88);
--color-gold-500: oklch(0.72 0.155 91);
--color-bg: oklch(0.97 0.012 88);
--color-surface: oklch(1 0 0);
--color-ink: oklch(0.20 0.025 255);
--color-muted: oklch(0.43 0.025 250);
```

## Typography

Cabinet Grotesk for display and headings. Satoshi for body text and interface labels. Use strong scale contrast, balanced headings, and body line lengths capped around 70ch.

## Layout

One-page executive showcase with a full-width hero, spacious editorial sections, restrained cards only where they clarify repeated offerings, and strong responsive stacking on mobile.

## Components

Sticky header, logo placeholder, theme toggle, mobile navigation, hero proof rail, capability marquee, founder credibility block, service matrix, track record timeline, sector list, engagement model cards, Netlify contact form, and structured footer.

## Motion

Motion stays subtle: hero entrance, slow capability marquee, restrained scroll reveals, hover affordances, and instant or static alternatives for reduced-motion users.

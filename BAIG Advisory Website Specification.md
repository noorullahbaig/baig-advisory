# BAIG Advisory Website Specification

## Purpose

This document reflects the current BAIG Advisory website as implemented in the Astro project in this repository. It replaces earlier planning-only notes and should now be treated as the working source of truth for structure, messaging, interaction behavior, assets, and deployment expectations.

The website exists to present BAIG Advisory as a premium executive advisory firm led by Jawad Baig and to earn a first serious conversation from senior decision-makers.

## Current Build Context

- Framework: Astro
- Output mode: static build
- Build command: `npm run build`
- Publish directory: `dist`
- Main source page: `src/pages/index.astro`
- Success page: `src/pages/success.astro`
- Site behavior script: `src/scripts/site.js`
- Global styling: `src/styles/global.css`
- Public assets: `public/assets`
- Contact backend: Cloudflare Pages Function at `functions/api/contact.js`, backed by Resend
- Domain registrar / DNS context: GoDaddy may be used for domain ownership while Cloudflare Pages is used for hosting and functions

## Product Positioning

BAIG Advisory is positioned as a senior executive advisory and consulting firm, not a freelance portfolio, not a generic agency, and not a resume site.

The central thesis is:

`Practitioner-level insight, not theory.`

The trust anchor is Jawad Baig’s executive operating background. The site must make a senior viewer feel that the guidance is grounded in actual accountability across strategy, technology, finance, governance, and transformation.

## Audience

Primary audiences:

- CEOs
- CFOs
- CIOs
- Board members
- Founders
- Senior transformation leaders
- Enterprise decision-makers in North America, Europe, and the GCC

The tone should assume a time-constrained senior viewer who wants clarity, credibility, and restraint.

## Brand and Voice

Brand:

- BAIG Advisory
- Founder & Principal Advisor: Jawad Baig

Voice characteristics:

- Executive
- Direct
- Mature
- Strategic
- Calm
- Premium
- Outcome-oriented

Avoid:

- Startup-style hype
- Loud agency language
- Generic consulting filler
- Unsupported claims
- Invented case studies, testimonials, awards, or client logos

## Current Site Architecture

The current site is a one-page executive advisory website plus a separate success page for contact form completion.

### Pages

1. Homepage: `/`
2. Success page: `/success/`

### Homepage Sections

1. Sticky header with:
   - brand lockup
   - primary navigation
   - primary CTA: `Start a Conversation`
   - single-button mobile menu toggle
   - full-screen mobile menu overlay

2. Hero section:
   - kicker: `BAIG Advisory`
   - headline: `Strategy for leaders navigating complex change.`
   - supporting copy about transformation agendas, governance, and operating performance
   - primary and secondary CTAs
   - three-part advisory priorities panel:
     - `Shape the agenda`
     - `Strengthen governance`
     - `Improve performance`

3. About / founder section:
   - founder-led positioning
   - Jawad Baig photo
   - executive credibility bullets

4. Advisory focus section:
   - AI Governance & ISO/IEC 42001 Readiness
   - Strategy & Operating Performance
   - Digital Transformation & IT Leadership
   - Strategic Partnerships & Executive Support

5. When to engage section:
   - execution stalling after strategy is set
   - transformation consuming capital without enough control
   - risk and governance needing structure before commitment
   - leadership capacity as the bottleneck

6. Engagement model section:
   - Retained Advisory
   - Scoped Engagement
   - Interim / Fractional Executive Support

7. Contact section:
   - location and coverage context
   - LinkedIn link
   - response time
   - Cloudflare-backed inquiry form

8. Footer:
   - brand lockup
   - advisory focus links
   - firm links
   - contact links

## Approved Business Content Reflected in the Site

The current site uses these core positioning points:

- 20+ years of senior executive leadership
- Siemens experience
- VP & CIO background
- CFO background
- Head of Audit & Compliance background
- Motorola and Deloitte roots
- business strategy
- digital transformation
- governance and compliance
- AI strategy and ISO/IEC 42001 context
- strategic alliances and partnerships
- North American, European, and GCC markets

These points are presented as firm and founder credibility, not as inflated sales copy.

## Design System and Visual Direction

Visual thesis:

`Boardroom editorial restraint`

The implemented look is built around:

- deep navy authority
- warm gold accents
- warm off-white light surfaces
- founder-led editorial composition
- restrained motion
- strong typography hierarchy

### Typography

- Display: Cabinet Grotesk
- Body/UI: Satoshi

### Theme Support

The current site ships a single refined light theme with deep navy sections, warm gold accents, and warm off-white surfaces. There is no runtime light/dark theme toggle in the current implementation.

### Mobile Navigation

The current mobile navigation uses a full-screen overlay opened by a single toggle button in the sticky header. The button swaps between hamburger and close SVG states via inline SVG markup and CSS transitions.

### Brand Assets Currently in Use

- `public/assets/baig-advisory-icon.svg`
- `public/assets/baig-advisory-logo.svg`
- `public/assets/jawad-baig-cropped.png` is referenced in the founder section

Other image and PNG assets may exist in `public/assets`, but the SVG logo/icon files above are the active brand assets used by the site.

## Contact Form Implementation

The contact form is implemented as a real Cloudflare Pages Function backed by Resend, not a fake front-end success state.

### Current Fields

- First Name
- Last Name
- Work Email
- Company / Organization
- Role / Title
- Area of Interest
- Message

### Area of Interest Options

- AI Governance & ISO/IEC 42001 Readiness
- Strategy & Operating Performance
- Digital Transformation & IT Leadership
- Strategic Partnerships & Executive Support
- Interim / Fractional Executive Support
- Other

### Cloudflare Form Configuration

The homepage form includes:

- `method="POST"`
- `action="/api/contact"`
- `data-success-url="/success/"`
- honeypot field via `bot-field`
- client-side submission through `fetch` in `src/scripts/site.js`
- Pages Function handler at `functions/api/contact.js`

### Contact Flow

1. Visitor fills the inquiry form.
2. The browser posts the form to `/api/contact`.
3. Cloudflare Pages Functions validates the payload, ignores honeypot spam, and sends the inquiry through Resend.
4. On success, the user is redirected to `/success/`.
5. On failure, the user sees an inline error message.

### Current Messaging

Success page:

- Heading: `Inquiry received.`
- Body: `Thank you for reaching out. BAIG Advisory will review the context and respond with an appropriate next step.`

Inline failure:

- `The inquiry could not be sent. Please try again.`

Local preview notice:

- `Form delivery is unavailable in this local preview. Use Cloudflare Pages Functions preview to test submissions.`

### Submission Tracking

With the current configuration, submissions are sent by Resend to the recipient configured through the Cloudflare Pages environment variable `CONTACT_TO_EMAIL`.

## Accessibility and UX Requirements

The implemented site should continue to preserve:

- semantic heading structure
- skip link
- keyboard-accessible navigation
- visible focus states
- mobile menu accessibility
- reduced motion support
- explicit form labels
- readable contrast

## Motion and Interaction

Current motion approach:

- hero entrance animation
- capability marquee
- scroll reveal transitions
- button and card hover response
- reduced-motion fallback

Motion should remain restrained and premium, not playful or exaggerated.

## Technical Notes

### Scripts

`src/scripts/site.js` currently handles:

- mobile menu open/close behavior
- active section tracking for header navigation
- reveal-on-scroll animation
- Cloudflare contact form submission enhancement

### Styles

`src/styles/global.css` currently defines:

- color tokens
- typography and layout
- all section styles
- form styles
- mobile menu overlay and icon transitions
- responsive breakpoints

### Known UI Refinements Already Applied

- Contact success copy was revised to remove awkward third-person brand phrasing.
- The `Area of Interest` select field was corrected to use the dark form treatment instead of a bright white browser-native appearance.
- The mobile menu now uses a full-screen overlay with animated inline SVG toggle states instead of a side panel with a separate close button.

## Deployment Context

The project is intended to deploy from GitHub to Cloudflare Pages.

Current repo context:

- GitHub repository exists and is private
- Cloudflare Pages should be configured with:
  - Build command: `npm run build`
  - Publish directory: `dist`
  - Functions directory: `functions`

Domain context:

- GoDaddy may be used as registrar and DNS owner
- Cloudflare Pages is the expected hosting and serverless platform

## What This Document Replaces

This document supersedes earlier planning assumptions that no longer match the live build, including:

- older raw HTML prototype assumptions
- fake front-end-only contact form behavior
- outdated success-page wording
- dark/light theme toggle assumptions

## Ongoing Change Rule

When the implemented site changes materially, this file should be updated to reflect:

- actual section structure
- actual assets in use
- actual form behavior
- actual deployment assumptions
- actual approved business messaging

It should describe the site as built, not the site as originally imagined.

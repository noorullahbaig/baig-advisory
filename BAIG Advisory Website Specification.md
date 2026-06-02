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
- Hosting target: Netlify
- Domain registrar / DNS context: GoDaddy may be used for domain ownership while Netlify is used for hosting

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
- Enterprise decision-makers in the US, GCC, and European markets

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
   - theme toggle
   - primary CTA: `Engage Us`
   - mobile menu

2. Hero section:
   - kicker: `Senior Executive Advisory`
   - headline: `Strategy that moves the needle.`
   - supporting copy about 20+ years of senior executive experience
   - primary and secondary CTAs
   - proof rail with credibility stats

3. Capability marquee:
   - looping list of advisory capabilities

4. About / founder section:
   - founder-led positioning
   - Jawad Baig photo
   - executive credibility bullets

5. Credibility section:
   - short scan-friendly metrics

6. Quote section:
   - founder quote emphasizing lived executive experience

7. Services section:
   - Business Strategy & Operations
   - Digital Transformation & IT Leadership
   - AI Strategy & Governance
   - Governance, Risk & Compliance
   - Strategic Alliances & Partnerships
   - Interim Executive & Fractional CXO

8. Executive track record section:
   - BAIG Advisory
   - Siemens leadership roles
   - earlier career roles

9. Sector experience section:
   - Industrial Technology
   - Financial Services & Fintech
   - Energy & Oil & Gas
   - Technology & Consulting

10. Engagement model section:
   - Retained Advisory
   - Project Engagement
   - Fractional Executive

11. Contact section:
   - location and coverage context
   - LinkedIn link
   - response time
   - Netlify-backed inquiry form

12. Footer:
   - brand lockup
   - service links
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
- US, GCC, and European markets

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

The site supports both light and dark themes using `data-theme` on the root element and a persisted `baig-theme` local storage value.

### Theme Toggle Icons

The current dark/light mode toggle uses SVG assets extracted from:

- `/Users/noorullah/Downloads/BAIG-Bold-Refined-Icons.html`

Implemented assets:

- `public/assets/theme-icon-light.svg`
- `public/assets/theme-icon-dark.svg`

These are used by the toggle button in CSS and replace the previous CSS-drawn icon approach.

### Brand Assets Currently in Use

- `public/assets/baig-advisory-icon.svg`
- `public/assets/baig-advisory-logo.svg`
- `public/assets/jawad-baig-photo.jpeg` is referenced via public asset output

Other image and PNG assets may exist in `public/assets`, but the SVG logo/icon files above are the active brand assets used by the site.

## Contact Form Implementation

The contact form is implemented as a real Netlify form, not a fake front-end success state.

### Current Fields

- First Name
- Last Name
- Email Address
- Company / Organization
- Area of Interest
- Message

### Area of Interest Options

- Business Strategy & Operations
- Digital Transformation & IT
- Governance, Risk & Compliance
- Strategic Alliances & Partnerships
- Fractional / Interim Executive
- AI Strategy & Governance
- Other

### Netlify Form Configuration

The homepage form includes:

- `method="POST"`
- `action="/success/"`
- `data-netlify="true"`
- hidden `form-name`
- honeypot field via `netlify-honeypot="bot-field"`

Form name:

- `baig-advisory-inquiry`

### Contact Flow

1. Visitor fills the inquiry form.
2. On local preview, the site blocks fake delivery and shows a local-only warning.
3. On deployed Netlify, the form submits via POST.
4. On success, the user is redirected to `/success/`.
5. On failure, the user sees an inline error message.

### Current Messaging

Success page:

- Heading: `Inquiry received.`
- Body: `Thank you for reaching out. We will review your inquiry and respond within 24–48 hours.`

Inline failure:

- `Your inquiry could not be sent. Please try again.`

Local preview notice:

- `Form delivery cannot be verified in local preview. Test a submission after deployment.`

### Submission Tracking

With the current configuration, submissions are received in Netlify Forms under the project’s Forms tab, using the `baig-advisory-inquiry` form name.

Optional operational follow-up:

- enable Netlify email notifications for form submissions
- review verified and spam submissions in Netlify

## Accessibility and UX Requirements

The implemented site should continue to preserve:

- semantic heading structure
- skip link
- keyboard-accessible navigation
- visible focus states
- accessible theme toggle labeling
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

- theme toggle persistence
- mobile menu open/close behavior
- anchor scroll offset behavior
- reveal-on-scroll animation
- Netlify contact form submission enhancement

### Styles

`src/styles/global.css` currently defines:

- color tokens
- theme tokens
- typography and layout
- all section styles
- form styles
- theme toggle icon styling
- responsive breakpoints

### Known UI Refinements Already Applied

- Contact success copy was revised to remove awkward third-person brand phrasing.
- The `Area of Interest` select field was corrected to use the dark form treatment instead of a bright white browser-native appearance.
- Theme toggle now uses the refined SVG assets from Downloads rather than a CSS-constructed symbol.

## Deployment Context

The project is intended to deploy from GitHub to Netlify.

Current repo context:

- GitHub repository exists and is private
- Netlify should be configured with:
  - Build command: `npm run build`
  - Publish directory: `dist`

Domain context:

- GoDaddy may be used as registrar and DNS owner
- Netlify is the expected hosting platform

## What This Document Replaces

This document supersedes earlier planning assumptions that no longer match the live build, including:

- older raw HTML prototype assumptions
- fake front-end-only contact form behavior
- outdated success-page wording
- CSS-generated theme toggle icon assumption

## Ongoing Change Rule

When the implemented site changes materially, this file should be updated to reflect:

- actual section structure
- actual assets in use
- actual form behavior
- actual deployment assumptions
- actual approved business messaging

It should describe the site as built, not the site as originally imagined.

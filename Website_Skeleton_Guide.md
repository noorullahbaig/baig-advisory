# BAIG Advisory Homepage Revamp Guide — v4 Agent-Ready

## 0. How to Use This Guide

This guide is written for an AI coding agent working inside the BAIG Advisory website repository.

The agent should use this document as the implementation standard for revising the homepage structure, content hierarchy, and section copy. The goal is to reduce repetition, preserve factual accuracy, elevate AI Governance & ISO/IEC 42001 professionally, and make the homepage work as a concise executive advisory landing page.

This guide is not permission to invent new claims. It is a structural and copy-direction guide built around the current website as the source of truth.

---

# 1. Project Objective

Revise the BAIG Advisory homepage so it functions as a focused executive advisory landing page.

The homepage should:

1. establish the advisory offer quickly
2. make Jawad Baig’s credibility clear without turning the site into a resume
3. explain advisory focus areas without becoming a long service catalog
4. highlight AI Governance & ISO/IEC 42001 Readiness as a priority advisory focus
5. explain engagement models without changing their meaning from the current site
6. guide qualified senior visitors toward contact

The homepage should not:

- repeat the same credibility points across many sections
- use fake metrics, testimonials, case studies, or outcomes
- overstate or alter Jawad Baig’s background
- make ISO/IEC 42001 sound like a quick certification package
- feel like a generic consulting brochure
- feel like a personal profile page
- feel like a startup SaaS landing page

---

# 2. Source of Truth Lock

The current BAIG Advisory website is the source of truth for factual claims.

## Verified credibility and positioning claims allowed

Use only claims already present on the current website, including:

- BAIG Advisory provides senior executive advisory and consulting.
- Advisory areas include business strategy, digital transformation, governance, operational excellence, strategic partnerships, risk/compliance, commercial operations, executive leadership, AI strategy, and AI governance.
- BAIG Advisory serves or references North America, Europe, and the GCC.
- Jawad Baig is Founder & Principal Advisor.
- Jawad Baig is a former VP & CIO at Siemens.
- Jawad Baig has 20+ years of senior executive leadership / Siemens experience.
- Jawad Baig has CFO and Head of Audit & Compliance leadership experience.
- The site currently references expertise in ISO/IEC 42001 AI Governance and Management Systems.
- The site currently references responsible AI adoption, AI management systems, AI readiness, ISO/IEC 42001 frameworks, board advisory, and practical implementation framing.
- Current engagement model meanings include:
  - retained advisory / ongoing strategic advisory
  - project or scoped engagement with defined deliverables
  - fractional or interim executive support during transitions or capability gaps

## Do not invent

Do not add:

- new job titles
- new companies
- client names
- logos
- case studies
- revenue impact
- project numbers
- success rates
- testimonials
- awards
- certification guarantees
- claims that ISO/IEC 42001 certification will be achieved
- claims that BAIG Advisory has served specific named clients unless already present in the repo/source content

## Allowed copy interpretation

The guide may refine language for clarity and positioning, but meaning must remain grounded in existing content.

Example:

Allowed:
- `AI Governance & ISO/IEC 42001 Readiness`

Reason:
The current site references ISO/IEC 42001 AI Governance and Management Systems, AI readiness, and ISO/IEC 42001 frameworks.

Not allowed:
- `Guaranteed ISO/IEC 42001 certification in 30 days`

Reason:
This is not present in the source of truth and would be an unverifiable sales claim.

---

# 3. What “Hero Visual” Means

A hero visual is the non-text visual element that appears in the opening section of the page.

It does not mean a generated illustration or decorative image by default.

In this guide, the preferred hero visual is a coded right-side framework panel that supports the headline. It should be built with HTML/CSS using text, lines, subtle borders, and restrained motion.

Preferred label for implementation:

`Hero framework panel`

Do not use the phrase “hero visual” in code comments if it causes confusion. Use:

- `hero-framework`
- `hero-framework-panel`
- `governance-framework-panel`

The framework panel should not introduce new factual claims. It is a conceptual support element for the positioning.

Preferred framework text:

```text
Strategic Intent
Governance Architecture
Accountable Execution
```

Optional small label:

```text
AI Governance & ISO/IEC 42001 Readiness
```

This panel exists to visually support the idea:

```text
Where strategy becomes accountable execution.
```

If the panel feels decorative, crowded, or visually weak, remove it and use a cleaner text-led hero instead.

---

# 4. Challenged Decision Matrix

## 4.1 Homepage model

| Option | Viability | Reason | Decision |
|---|---:|---|---|
| Full consulting brochure | Low | Too long and repetitive for senior visitors | Reject |
| Founder resume site | Low | Over-centers biography and weakens firm positioning | Reject |
| Standard corporate homepage | Medium | Safe but risks generic structure | Not preferred |
| Executive briefing landing page | High | Matches the goal: quick clarity, credibility, and contact | Use |

Final decision:

Use an executive briefing landing page.

---

## 4.2 Header navigation

| Option | Viability | Reason | Decision |
|---|---:|---|---|
| About · Services · Experience · Sectors · Contact | Medium | Current structure, but too broad and generic | Replace |
| Profile · Advisory Focus · Engagements · Contact | Medium | “Profile” may feel like a personal CV | Reject |
| About · Advisory Focus · Engagements · Contact | High | Clear, concise, conventional, agent-friendly | Use |
| About · Advisory Focus · AI Governance · Engagements · Contact | Medium | Highlights flagship service but adds nav clutter | Reject |

Final decision:

Use:

- `About`
- `Advisory Focus`
- `Engagements`
- `Contact`

Header CTA:

- `Start a Conversation`

---

## 4.3 Primary CTA wording

| Option | Viability | Reason | Decision |
|---|---:|---|---|
| Engage Us | Medium | Professional but stiff | Replace |
| Schedule Executive Consultation | Medium | Professional but too transactional if no scheduler exists | Not primary |
| See If We’re a Fit | Medium | Human but slightly casual | Not primary |
| Start a Conversation | High | Clear, professional, low-friction | Use |

Final decision:

Use `Start a Conversation`.

---

## 4.4 Hero positioning line

| Option | Viability | Reason | Decision |
|---|---:|---|---|
| Founder-led executive advisory | Medium-low | Meaningful internally, but can sound agency/personal-brand-like | Do not use as hero opener |
| Executive Advisory | Medium-high | Clean but too generic | Acceptable fallback |
| Senior Executive Advisory | Medium-high | Clear but generic | Acceptable fallback |
| Strategy, Governance & AI Advisory | High | Specific, senior, supports flagship AI/ISO priority | Use |

Final decision:

Use:

```text
Strategy, Governance & AI Advisory
```

Reason:

It better reflects the intended advisory focus without over-personalizing the opening line.

---

## 4.5 Hero headline

| Option | Viability | Reason | Decision |
|---|---:|---|---|
| Strategy that moves the needle. | Low | Generic and overused | Reject |
| Executive advisory for strategy, transformation, and governance. | Medium | Clear but too category-like | Reject as final |
| Senior judgment when execution risk is high. | Medium-high | Serious but slightly abstract | Not final |
| Where strategy becomes accountable execution. | High | Specific, concise, and aligned with strategy/governance/execution | Use |

Final decision:

Use:

```text
Where strategy becomes accountable execution.
```

---

## 4.6 Hero proof

| Option | Viability | Reason | Decision |
|---|---:|---|---|
| Large stat grid | Low | Repeats proof and clutters first screen | Reject |
| No credibility in hero | Low | Delays trust | Reject |
| Separate proof strip | Medium | Scannable but can become another module | Use only if needed |
| One compact credibility sentence | High | Balances trust and restraint | Use |

Final decision:

Use one compact credibility sentence in the hero.

---

## 4.7 Founder portrait placement

| Option | Viability | Reason | Decision |
|---|---:|---|---|
| Portrait in hero | Low-medium | Current treatment can feel like LinkedIn/profile-card design | Reject by default |
| No portrait on homepage | Low | Loses founder-led trust | Reject |
| Portrait in About section | High | Best context for founder credibility | Use |
| Portrait in Advisory Focus | Low | Misplaced | Reject |

Final decision:

Use the portrait in the About / Founder Profile section.

Exception:

The portrait may return to the hero only if it is professionally art-directed into the hero system and does not look like a profile card.

---

## 4.8 ISO/IEC 42001 treatment

| Option | Viability | Reason | Decision |
|---|---:|---|---|
| Hide ISO until lower page | Low | Underplays expected flagship priority | Reject |
| Put ISO in main headline | Low | Makes homepage too narrow and compliance-product-like | Reject |
| Repeat ISO in every section | Low | Creates repetition and weakens professionalism | Reject |
| Feature ISO as one advisory lane only | Medium-high | Professional but may underplay flagship priority | Use, but not enough alone |
| Hierarchical treatment | High | Visible without becoming repetitive or salesy | Use |

Final decision:

Use hierarchical treatment:

1. optional small hero callout
2. featured Advisory Focus lane
3. one When To Engage scenario
4. Scoped Engagement example
5. Contact form option

---

## 4.9 Advisory Focus structure

| Option | Viability | Reason | Decision |
|---|---:|---|---|
| Four equal lanes | Medium | Balanced, but underplays flagship AI/ISO service | Revise |
| Six service cards | Low | Too catalog-like | Reject |
| AI-only focus | Low | Too narrow; loses broader advisory credibility | Reject |
| One featured AI/ISO lane + three supporting lanes | High | Highlights flagship while preserving breadth | Use |

Final decision:

Use one featured lane plus three supporting lanes.

---

## 4.10 Engagement models

The guide must preserve the current meaning of engagement models.

| Option | Viability | Reason | Decision |
|---|---:|---|---|
| Retained Advisory · Project Engagement · Fractional Executive | High | Closest to current site | Source-truth baseline |
| Retained Advisory · Scoped Engagement · Fractional Executive | High | Cleaner wording, same meaning | Acceptable |
| Retained Advisory · Scoped Engagement · Interim / Fractional Executive Support | High | Preserves meaning and sounds more senior | Use |
| Replace with new model names | Low | Risks corrupting source of truth | Reject |

Final decision:

Use:

1. `Retained Advisory`
2. `Scoped Engagement`
3. `Interim / Fractional Executive Support`

Preserve the original meanings from the current website.

Do not invent new engagement structures.

---

## 4.11 Contact heading

| Option | Viability | Reason | Decision |
|---|---:|---|---|
| Contact Us | Medium | Generic | Reject |
| Let’s discuss what you’re building. | Medium-low | Too startup-like for this context | Replace |
| Start a serious advisory conversation. | Medium | Clear but slightly self-conscious | Not final |
| Start an advisory conversation. | High | Clean, serious, natural | Use |

Final decision:

Use:

```text
Start an advisory conversation.
```

---

## 4.12 Motion

| Option | Viability | Reason | Decision |
|---|---:|---|---|
| Heavy animation | Low | Wrong tone for senior advisory | Reject |
| Marquee | Low | Filler-like and repetitive | Reject |
| Animated counters | Low | Startup/SaaS feel | Reject |
| No motion | Medium | Safe but can feel static | Acceptable fallback |
| Subtle purposeful motion | High | Premium if restrained | Use |

Final decision:

Use subtle purposeful motion only.

---

# 5. Final Homepage Structure

The revised homepage should use this structure only:

1. Header
2. Hero
3. About / Founder Profile
4. Advisory Focus
5. When To Engage
6. Engagement Models
7. Contact

Remove or consolidate these current sections:

- capability marquee
- standalone credibility metrics section
- founder quote section
- full sector list
- long executive chronology unless compressed into About
- duplicated proof/stat modules
- hero portrait/profile card

---

# 6. Section Specifications

## 6.1 Header

### Required elements

- BAIG Advisory logo/brand mark
- navigation:
  - About
  - Advisory Focus
  - Engagements
  - Contact
- primary CTA:
  - Start a Conversation

### Requirements

- Keep header compact.
- Do not include unnecessary controls that compete with the CTA.
- Remove or de-emphasize the theme toggle if it visually competes with the contact path.
- Do not add extra nav items unless absolutely necessary.

---

## 6.2 Hero

### Section job

Establish the offer and the first trust signal within the opening viewport.

### Required copy

Positioning line:

```text
Strategy, Governance & AI Advisory
```

Headline:

```text
Where strategy becomes accountable execution.
```

Supporting copy:

```text
BAIG Advisory helps leadership teams clarify direction, strengthen governance, and move complex initiatives forward across transformation, operational performance, strategic partnerships, and AI governance.
```

Credibility sentence:

```text
Led by Jawad Baig, former VP & CIO at Siemens, the firm brings 20+ years of executive experience across technology, finance, audit, compliance, and enterprise transformation.
```

Optional callout:

```text
Featured focus: AI Governance & ISO/IEC 42001 Readiness
```

CTA buttons:

- `Start a Conversation`
- `Explore Advisory Focus`

### Hero framework panel

A right-side framework panel may be used if it improves clarity.

Panel text:

```text
Strategic Intent
Governance Architecture
Accountable Execution
```

Optional small label:

```text
AI Governance & ISO/IEC 42001 Readiness
```

### Do not include

- portrait/profile card
- stat grid
- marquee
- long service list
- animated counters
- fake metrics
- rotating headlines

### Layout requirement

The full hero must fit within the initial desktop viewport.

If the hero becomes too tall, reduce copy, spacing, or right-side visual complexity before adding scroll depth.

---

## 6.3 About / Founder Profile

### Section job

Make Jawad Baig the trust anchor and explain why his background matters.

### Recommended heading

```text
Executive experience behind the advisory.
```

### Required content

Use a founder portrait here.

Use a short paragraph based on current site facts:

```text
BAIG Advisory is led by Jawad Baig, Founder & Principal Advisor, with more than two decades of senior executive experience across strategy, technology, finance, governance, audit, compliance, and transformation.
```

Use four credibility bullets:

- Former VP & CIO at Siemens
- 20+ years in senior executive leadership
- CFO and Head of Audit & Compliance leadership experience
- Advisory perspective across North American, European, and GCC markets

### Optional source-truth bullet

If space allows, include:

- Expertise in ISO/IEC 42001 AI Governance and Management Systems

### Do not include

- long chronological resume
- quote section
- repeated hero sentence
- fake client outcomes
- excessive biography

---

## 6.4 Advisory Focus

### Section job

Explain what BAIG Advisory helps with and highlight AI Governance & ISO/IEC 42001 as a priority focus.

### Required structure

Use one featured lane plus three supporting lanes.

### Featured lane

Title:

```text
AI Governance & ISO/IEC 42001 Readiness
```

Copy:

```text
Support for leadership teams preparing for responsible AI adoption through governance structures, accountability models, policy alignment, risk controls, AI management system readiness, and ISO/IEC 42001 alignment.
```

### Supporting lane 1

Title:

```text
Strategy & Operating Performance
```

Copy direction:

- strategic planning
- operating model clarity
- KPI discipline
- performance improvement

### Supporting lane 2

Title:

```text
Digital Transformation & IT Leadership
```

Copy direction:

- CIO-level advisory
- enterprise technology strategy
- modernization
- enterprise IT governance
- transformation oversight

### Supporting lane 3

Title:

```text
Strategic Partnerships & Executive Support
```

Copy direction:

- alliances
- commercial partnerships
- executive decision support
- interim or fractional executive support where needed

### Do not include

- six-card catalog
- redundant tags under every card unless they genuinely improve scan clarity
- repeated ISO wording in every card
- unverifiable service claims

---

## 6.5 When To Engage

### Section job

Help qualified visitors recognize whether BAIG Advisory fits their situation.

### Required scenarios

Use four or five of the following:

- Strategy is clear, but execution is stalled.
- AI adoption needs governance, accountability, or ISO/IEC 42001 readiness.
- Technology, finance, governance, or operating-model decisions need alignment.
- A partnership, market move, or strategic transition needs structure.
- Interim or fractional executive support is needed during a capability gap.

### Requirements

- Keep scenarios short.
- Do not turn this section into another service list.
- Do not use generic sector language.

---

## 6.6 Engagement Models

### Section job

Explain how BAIG Advisory works with clients while preserving current site meaning.

### Required models

1. Retained Advisory
2. Scoped Engagement
3. Interim / Fractional Executive Support

### Retained Advisory

Meaning to preserve:

Ongoing strategic advisory relationship with defined scope and recurring touchpoints.

Copy direction:

```text
Ongoing senior guidance for boards, owners, CEOs, and leadership teams navigating strategic, operational, governance, or transformation decisions.
```

### Scoped Engagement

Meaning to preserve:

A defined engagement with clear scope, deliverables, milestones, and accountability.

Copy direction:

```text
A defined advisory engagement for a specific strategy, transformation, governance, AI readiness, or operating-performance need, with clear objectives and decision points.
```

### Interim / Fractional Executive Support

Meaning to preserve:

Embedded or part-time executive support during transitions, growth phases, transformation, or capability gaps.

Copy direction:

```text
Interim or part-time executive support during transition, transformation, or capability gaps where experienced leadership is needed without a full-time appointment.
```

### Do not do

- Do not create new engagement models.
- Do not remove the retained/project/fractional logic from the current site.
- Do not invent pricing.
- Do not over-detail process bullets.

---

## 6.7 Contact

### Section job

Convert interest into an advisory inquiry.

### Heading

```text
Start an advisory conversation.
```

### Supporting copy

```text
Share the strategic decision, transformation, governance challenge, AI readiness priority, or leadership need you are working through. BAIG Advisory will review the context and respond with an appropriate next step.
```

### Form fields

- First Name
- Last Name
- Work Email
- Company / Organization
- Role / Title optional
- Area of Interest
- Message

### Area of Interest options

- AI Governance & ISO/IEC 42001 Readiness
- Strategy & Operating Performance
- Digital Transformation & IT Leadership
- Strategic Partnerships & Executive Support
- Interim / Fractional Executive Support
- Other

---

# 7. Repetition Control Rules

Use each credibility idea only where it belongs.

## Hero

Use only one compact credibility sentence.

## About

Use founder portrait and proof bullets.

## Advisory Focus

Explain services and flagship AI/ISO priority.

## When To Engage

Describe situations, not services.

## Engagements

Explain how the firm works with clients.

## Contact

Ask for inquiry.

Do not repeat Siemens, 20+ years, C-suite functions, ISO, and markets in every section.

Allowed repetition:

- `AI Governance & ISO/IEC 42001 Readiness` may appear in Hero callout, Advisory Focus, When To Engage, Engagement Models, and Contact option because it is a flagship priority.

Controlled repetition rule:

When ISO appears multiple times, each mention must have a distinct job:
- hero: awareness
- advisory focus: explanation
- when to engage: relevance
- engagement model: how it may be delivered
- contact: inquiry routing

---

# 8. Design and Motion Rules

## Visual tone

Use:

- deep navy
- disciplined gold accents
- restrained typography
- generous spacing
- editorial layout
- premium but quiet interaction

Avoid:

- ornamental decoration
- overly bright gradients
- loud animations
- startup-style dashboard visuals
- generic stock imagery
- cluttered card grids

## Motion

Allowed:

- subtle fade/rise on hero text
- subtle reveal of framework panel
- restrained hover states
- low-motion section entrance effects

Avoid:

- marquees
- animated counters
- looping background motion
- heavy parallax
- rotating text
- floating icons

---

# 9. Agent Implementation Checklist

Before editing:

- Inspect current homepage components.
- Identify current Header, Hero, About, Services, Experience, Sectors, Engagement, and Contact sections.
- Preserve source-truth content.
- Do not invent new facts.

During editing:

- Rename Services section to Advisory Focus.
- Consolidate About, credibility, quote, and track record content into About / Founder Profile.
- Remove capability marquee.
- Remove standalone credibility metrics section.
- Remove standalone quote section.
- Remove standalone sector list unless required by stakeholder.
- Preserve the meaning of existing engagement models.

After editing:

- Run local build if available.
- Check desktop hero fits opening viewport.
- Check mobile stacking.
- Check CTA anchors.
- Check contact form options.
- Check dark/light behavior if theme remains.
- Check that ISO/IEC 42001 is visible but not spammed.
- Check that no fake claims were added.
- Check that the page can be scanned in 60–90 seconds.

---

# 10. Final Page Blueprint

```text
HEADER
Logo
About | Advisory Focus | Engagements | Contact
[Start a Conversation]

HERO
Strategy, Governance & AI Advisory
Where strategy becomes accountable execution.

BAIG Advisory helps leadership teams clarify direction, strengthen governance, and move complex initiatives forward across transformation, operational performance, strategic partnerships, and AI governance.

Led by Jawad Baig, former VP & CIO at Siemens, the firm brings 20+ years of executive experience across technology, finance, audit, compliance, and enterprise transformation.

Featured focus: AI Governance & ISO/IEC 42001 Readiness

[Start a Conversation] [Explore Advisory Focus]

Optional right-side framework:
Strategic Intent
Governance Architecture
Accountable Execution

ABOUT / FOUNDER PROFILE
Executive experience behind the advisory.
Portrait
Short founder paragraph
4 credibility bullets

ADVISORY FOCUS
Featured:
AI Governance & ISO/IEC 42001 Readiness

Supporting:
Strategy & Operating Performance
Digital Transformation & IT Leadership
Strategic Partnerships & Executive Support

WHEN TO ENGAGE
4–5 executive situation statements

ENGAGEMENTS
Retained Advisory
Scoped Engagement
Interim / Fractional Executive Support

CONTACT
Start an advisory conversation.
Form with routed area-of-interest options
```

---

# 11. Final Success Criteria

The implementation is successful if:

- the hero is specific and not generic
- the hero fits the opening viewport
- Jawad Baig’s credibility is clear without the page becoming a resume
- AI Governance & ISO/IEC 42001 Readiness is clearly visible as a priority focus
- the engagement models preserve the current site’s meaning
- the page has no unnecessary credibility repetition
- the page can be scanned quickly
- the contact path is obvious
- all claims remain grounded in the current website source of truth

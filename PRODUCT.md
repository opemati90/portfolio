# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Existing codebase: hand-written static HTML and CSS with no build step or package manager. One `index.html` plus 17 standalone pages under `projects/`, shared stylesheets in `assets/` (`a11y.css`, `print.css`), assets committed alongside. Deployed on Vercel (project `portfolio`) at the custom domain opeyemiajimati.com.

## Users

Primary: two audiences the site must serve equally on the same pages.

- Hiring managers and design leads evaluating Opeyemi for senior product design roles, skimming an application before deciding on a first call.
- Founders and prospective clients judging whether he can ship product design work for them.

Both arrive from a link (application, LinkedIn, outreach) rather than search, and both decide fast.

## Product Purpose

A personal portfolio that converts a link click into a conversation. Success is a reply: an interview, a call, or an inbound project. It has to establish seniority and credibility within the first viewport, then reward the visitor who goes deeper into a case study.

## Positioning

Three claims a peer product designer could not truthfully copy:

- **Regulated and complex-workflow depth.** Real work in climate (ex-SBTi), compliance, and fintech, domains most product designers cannot speak to with specifics.
- **0-to-1 founder-operator.** Runs his own products end to end rather than contributing to someone else's roadmap.
- **Research and competitive rigor.** Visible research artifacts, competitive audits, and evidence, not just polished synthesis.

## Operating Context

Visitors land from an application or a shared link, often on mobile, often between other candidates' portfolios. Pages are also exported to PDF through a Chrome-based print pipeline, so the print stylesheet is part of how the work is delivered, not an afterthought.

## Capabilities and Constraints

- Static site, no framework, no build step, no dependencies. Keep it that way.
- 17 case study pages exist: Anstoss, Attestloop, Bitchain, Climate Compass, Target Validation Platform, ComplianceBox, Admin Dashboard, Enterprise Design System, EduApp, Fivo AI, Martly CRM, Outbound, Pay4Me, PayWise, Raridex, Renuir, Sportipb.
- The print/PDF pipeline (`assets/print.css` + Chrome export) must keep working.
- Custom domain, canonical URLs, JSON-LD `Person`/`WebSite` schema, sitemap, robots, and OG images must stay intact.
- Existing visual system is documented authority: light `#F7F8F9` ground, ink `#14161A`, accent `#1E3AC4`, Newsreader serif / Inter sans / JetBrains Mono, 14px radius, spring easing.

## Brand Commitments

Name: Opeyemi Ajimati. Title used throughout: Senior Product Designer. LinkedIn is the only linked social profile. Accent `#1E3AC4` carries through favicon, mask icon, and theme color.

## Evidence on Hand

Real screenshots and artifacts from shipped work live in `assets/` (Renuir, Anstoss, Attestloop, ComplianceLayer, EduApp, Bitchain, PayWise, and others), plus a recommendations section quoting people he has worked with. **Nothing beyond this may be invented.** No fabricated testimonials, metrics, clients, logos, or case study outcomes, ever.

## Product Principles

1. Credibility in the first viewport. Seniority is established before the visitor scrolls.
2. Real work only. Every claim, number, quote, and screenshot traces to something that actually happened.
3. Depth is the differentiator. Show the research and the reasoning, not only the finished surface.
4. Serve the skimmer and the reader on the same page, without making either one work for it.
5. No generic AI-assistant writing or layout. The voice and the composition must read as a specific person's, not a template's.

## Accessibility & Inclusion

`assets/a11y.css` exists and is loaded. Light and dark `theme-color` are both declared. No further product-specific standard has been established.

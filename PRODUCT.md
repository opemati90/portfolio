# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Hand-written static HTML and CSS, no build step, no package manager, no dependencies. One `index.html` plus 13 standalone pages under `projects/`. Shared files in `assets/`: `system.css` (type, tokens, radii, loaded last on every page), `a11y.css`, `print.css`, `toc.js`, and self-hosted `fonts/`. Images are committed alongside. Deployed on Vercel (project `portfolio`, scope `opeyemis-projects-96be8e2b`) at opeyemiajimati.com.

## Users

Primary: two audiences the site must serve equally on the same pages.

- **Product hiring managers, recruiters and heads of product** evaluating Opeyemi for Product Manager and Product Owner roles, skimming an application before deciding on a first call. Many will screen against an ATS or a checklist first, so title, scale and certifications must be findable without reading prose.
- **Founders and prospective clients** judging whether he can own a product end to end for them.

Both arrive from a link (application, LinkedIn, outreach) rather than search, and both decide fast. The first pass is a skim; the second is a read. Neither can be made to work for it.

## Product Purpose

A personal portfolio that converts a link click into a conversation. Success is a reply: an interview, a call, or an inbound project. It has to establish scope and credibility within the first viewport, then reward the visitor who goes deeper into a case study.

## Positioning

Three claims a peer product manager could not truthfully copy:

- **Regulated, data-heavy workflow depth.** Real product ownership in climate (ex-SBTi), compliance and fintech, domains most product managers cannot speak to with specifics.
- **Delivery at real scale.** Discovery and requirements across three engineering squads on a two-week Scrum cycle, with outcomes measured in production analytics rather than in a deck.
- **A product-design background that shows up in the work.** Requirements that survive contact with engineering, flows testable before they are built, and prototypes taken to functional builds with AI-assisted development.

## Operating Context

Visitors land from an application or a shared link, often on mobile, often between other candidates' portfolios. Pages are also exported to PDF through a Chrome-based print pipeline, so the print stylesheet is part of how the work is delivered, not an afterthought. A recruiter on a corporate network may be behind a filter that blocks `*.vercel.app`, which is why the custom domain exists and must stay primary.

## Capabilities and Constraints

- Static site, no framework, no build step, no dependencies. Keep it that way.
- **13 case study pages exist**: Anstoss, Attestloop, Climate Compass, Target Validation Platform, ComplianceBox, Enterprise Design System, EduApp, Fivo AI, Outbound, Pay4Me Finance, PayWise, Raridex, Renuir. Three are featured, one is labelled a product experiment, the rest are archive.
- The print/PDF pipeline (`assets/print.css` plus Chrome export) must keep working, and its footer carries the current title.
- Custom domain, canonical URLs, JSON-LD `Person`/`WebSite` schema, sitemap, robots and OG images must stay intact. **`jobTitle` must match across all 14 pages**, not just the home page.
- Fonts are self-hosted. The site makes no third-party font request, and must not acquire one.
- The visual system is documented in `DESIGN.md`, which is authority for type, colour, spacing and the standing rules. Current: ground `#F7F8F9`, ink `#101418`, accent `#1E3AC4`, IBM Plex Sans and IBM Plex Mono, 10px radius.

## Brand Commitments

Name: Opeyemi Ajimati. **Title used throughout: Product Manager and Product Owner**, with the senior product design background stated as context rather than as the headline. No location appears anywhere on the site; the work is open across Europe. LinkedIn is the only linked social profile. Accent `#1E3AC4` carries through the wordmark, favicon, mask icon and theme colour, as a flat fill, never a gradient.

## Evidence on Hand

Real screenshots and artifacts from shipped work live in `assets/` (Renuir, Anstoss, Attestloop, ComplianceLayer, EduApp, PayWise, Outbound, SBTi and others), plus a recommendations section quoting people he has worked with.

**Nothing beyond this may be invented.** No fabricated testimonials, metrics, clients, logos, or case study outcomes, ever. Two rules follow from that and have both been learned the hard way:

- **Process evidence cannot be manufactured.** If a real artifact does not exist, state the decision once in prose or leave it out. Generating process-shaped components to fill a structural gap reads as machine-made and was reverted once already (`b34ddd6`).
- **Quotes are contiguous verbatim spans.** A recommendation may be cut at a sentence boundary to shorten it. Sentences may not be recombined, and words may not be changed to make a cut work.

## Product Principles

1. Scope and credibility in the first viewport. A reader knows the role, the scale and the domain before scrolling.
2. Real work only. Every claim, number, quote and screenshot traces to something that actually happened, and every figure carries its source in the same visual unit.
3. Depth is the differentiator. Show the discovery, the trade-offs and the decisions that did not survive delivery, not only the finished surface.
4. Serve the skimmer and the reader on the same page, without making either one work for it.
5. No generic AI-assistant writing or layout. The voice and the composition must read as a specific person's, not a template's. This extends to the typeface: faces that every generated interface converges on are avoided on purpose.

## Accessibility & Inclusion

`assets/a11y.css` is loaded on every page and owns focus visibility, the skip link and touch target sizing. Light and dark `theme-color` are both declared.

Standards that apply: text contrast meets WCAG AA on all three surfaces (`#F7F8F9`, `#EDEFF2`, `#E3E7EC`), control boundaries meet 1.4.11 at 3:1 via `--control-bd`, the heading outline is unbroken with `h3` as the subsection level, and the case study contents block is built from real anchors so it is keyboard reachable.

## Known Debt

- Ten archive case studies show design roles in their role blocks. That is accurate history, since those projects were design work, but a reader arriving from a product-management home page meets it without context.
- Eleven unreferenced images remain in `assets/` (roughly 2.1MB), several of them left over from four case studies that no longer exist: `martly.jpg`, `sportipb-full.jpg`, `dashboard.jpg`, and orphans from Anstoss, Climate Compass, EduApp, Outbound and Renuir.

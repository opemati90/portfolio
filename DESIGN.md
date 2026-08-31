# Design

<!-- impeccable:design-schema 1 -->

## Visual world

An editorial paper world. Off-white ground, near-black ink, hairline rules, and a single blue accent used sparingly. Composition is left-aligned and asymmetric throughout; nothing on the site is centered. Depth comes from hairlines and soft elevation on hover, never from filled panels or glows. A film-grain SVG turbulence overlay sits over the page at `0.028` opacity, which is what keeps the flat ground from reading as a blank canvas.

The register is a printed monograph, not a SaaS marketing page. Where a category default would add a card, a gradient, or a centered CTA block, this world uses a rule and a change of type.

## Typography

Three faces, each with one job:

- **Newsreader** (serif) — display voice. Headlines, case-study titles, section statements, and the emphasized `<em>` inside them, which is set italic in the accent blue. Optical sizing is set per size via `font-variation-settings:"opsz"`, up to 94px on the home hero. Carries the identity.
- **Inter** (sans) — body and UI, 10 to 18px. About three-quarters of the visible text.
- **JetBrains Mono** — small uppercase labels only, 11 to 12px, letterspaced. Category labels, metric labels, footer headings, table-style keys.

**Inter is a deliberate, confirmed choice, not a default.** Detectors flag it as a saturated typeface, and that flag is understood and declined here: the identity is carried by Newsreader at display sizes and by the mono labels, while Inter does quiet supporting work at 10-18px where its legibility is the point. Alternatives (IBM Plex Sans, Instrument Sans, Archivo) were evaluated and rejected in favour of the incumbent. Do not re-raise this or swap the body face without the owner asking.

Display headings use tight tracking, `-0.025em` to `-0.03em`. Body measure runs 41 to 71ch depending on column.

## Color

Home page and case studies use two parallel token vocabularies for the same palette. This seam is known.

| Role | Home (`index.html`) | Case studies |
|---|---|---|
| Ground | `--bg:#F7F8F9` | `--bg:#F7F8F9` |
| Raised surface | `--paper:#EDEFF2` / `--paper-2:#E3E7EC` | `--sf:#EDEFF2` / `--sf2:#E3E7EC` |
| Ink | `--ink:#14161A` | `--tx:#14161A` |
| Secondary / tertiary ink | `--ink-2:#4B535C` / `--ink-3:#606872` | `--tx2:#4B535C` / `--tx3:#606872` |
| Rules | `--line:#DEE2E8` / `--line-2:#C4CBD4` | `--bd:#DEE2E8` / `--bd2:#C4CBD4` |
| Accent | `--accent:#1E3AC4` | `--ac:#1E3AC4` |

Semantic colors appear only on case-study finding callouts: `#B02A37` critical, `#2F6F4F` success, ink for informational. They tint the callout's label, never a border slab.

## Spacing and rhythm

29 distinct px values on a deliberate 2px-refined scale (6, 10, 14, 18, 22, 26 alongside the 4px steps). Sections run `104px 0` with a hairline between them. Containers: `1120px` on the home page, `760px` for case-study prose with `1040px` for full-bleed imagery. Radii: `14px` cards, `8-12px` inner elements, `20px` on the contact block.

## Motion

One spring, `cubic-bezier(0.22,1,0.36,1)`, and one ease, `cubic-bezier(0.4,0,0.2,1)`, across four durations (`0.18s` / `0.36s` / `0.6s` / `0.7s`). Content reveals once on scroll via IntersectionObserver on `.rv`. Hover moves are small: a 3px card lift, a 10px row translate, a widening gap on link arrows. Transforms and opacity only, never layout properties.

## Standing rules

- **Nothing is centered.** The page has one spine and everything aligns to it.
- **No colored side-slab borders.** A callout gets a 1px full border and carries meaning in its label color. A border-left above 1px is the tell this site specifically avoids.
- **No gradient fills or accent glows** as decoration. Elevation is offset-and-blur only.
- **Every number carries its source** in the same visual unit, following the pattern in `compliance.html`. A figure without a source becomes a sentence, not a stat tile.
- **Headings name, they do not summarize.** "Proving the item is yours", not "The solution, delivered".
- **Real work only.** No invented testimonials, metrics, clients, or outcomes. See PRODUCT.md.
- **Heading outline stays unbroken** — no level skips; `h3` is the subsection level in case studies.
- **Images ship with intrinsic width/height** and lazy loading below the fold.

## Known debt

- Two token vocabularies for one palette (`--ink` vs `--tx`), reconciled only by fallback chains in `assets/a11y.css`.
- `design-system.html` shows no production UI, constrained by NDA. The button consolidation is now shown as an authored in-page artifact (the audit wall redrawn without client branding, plus the four replacement variants and their states); the remaining sections still rely on prose.
- The Experience section lists three roles with no scope detail.

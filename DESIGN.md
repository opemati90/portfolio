# Design

<!-- impeccable:design-schema 1 -->

## Visual world

A plain professional product site. Off-white ground, near-black ink, hairline rules, and a single blue accent used once per page. Composition is left-aligned throughout; nothing is centered. Depth comes from hairlines and soft elevation on hover, never from filled panels or glows.

The audience is product hiring managers and recruiters, who skim before they read. Every choice is subordinate to that: the page has to be legible in a ten-second scan and still hold up in a ten-minute read. Where a category default would add a card, a gradient, or a centered CTA block, this world uses a rule and a change of type.

**The register changed on 2026-09-21.** It was previously an editorial monograph, built on a serif display face and a film-grain overlay. That read as a creative-studio signal, which works against a product-management application, and the serif-plus-Inter pairing is the most recognisable AI-generated-portfolio combination in circulation. Both are gone.

**Why Plex and not Geist or Inter.** The first pass of this revamp used Geist, and that was wrong for the same reason Inter was wrong. Both are faces that generated interfaces converge on, Geist especially so as the default of the current tooling wave. Plex was drawn for IBM as a corporate face, which is the register this site wants, and it carries no such signal. A face that reads as enterprise software is an asset here, not a liability, because the case studies are enterprise software.

## Typography

**One family, self-hosted.** IBM Plex Sans for everything, IBM Plex Mono for small labels. The files live in `assets/fonts/` and are declared in `assets/system.css`. There is no Google Fonts request and no third-party font dependency anywhere on the site.

- **IBM Plex Sans** carries display and body. Headlines at `600`, tracking `-0.025em` on the home hero and `-0.021em` on section headings. Plex has a smaller x-height than the geometric grotesks and does not take very tight tracking, so it is set looser than a Geist or Inter setting would be. Body at `400`, 14 to 17px. The home hero tops out at 55px, well below the 94px the previous serif ran at, because a sans at that scale shouts where a serif reads as a masthead.
- **IBM Plex Mono** is used only for small uppercase labels at 10.5 to 11px, letterspaced `0.07em`: section labels, tag chips, role-block keys, date columns. It is never used for body text, and no longer for metric captions, which were outweighing the figures they described.
- **Numbers** are set with `font-variant-numeric: tabular-nums` wherever they appear as data, so columns of figures align.
- **Label font size is 10.5px everywhere.** The page stylesheets carried 9px and 10px values that survived the first pass of this system, because it set family and tracking but never size.

**Emphasis is colour, not italic.** `<em>` inside a headline renders as accent blue at the same weight. Plex has real italics, so this is a choice rather than a limitation: the previous system set the emphasised words in a serif italic, which is the most copied display move on the web right now. The accent word appears **once per page**, in the hero. Section headings are plain ink; the previous system put an accent word in every one, which turned emphasis into a pattern.

`assets/system.css` is loaded last on all 14 pages, after each page's inline `<style>`, and owns typography, tokens and radii for the whole site. Retuning the site is a one-file job.

## Color

Home page and case studies use two parallel token vocabularies for the same palette. This seam is known.

| Role | Home (`index.html`) | Case studies |
|---|---|---|
| Ground | `--bg:#F7F8F9` | `--bg:#F7F8F9` |
| Raised surface | `--paper:#EDEFF2` / `--paper-2:#E3E7EC` | `--sf:#EDEFF2` / `--sf2:#E3E7EC` |
| Ink | `--ink:#101418` | `--tx:#101418` |
| Secondary / tertiary ink | `--ink-2:#474F59` / `--ink-3:#5F6771` | `--tx2:#474F59` / `--tx3:#5F6771` |
| Rules | `--line:#E2E6EB` / `--line-2:#C7CDD5` | `--bd:#E2E6EB` / `--bd2:#C7CDD5` |
| Accent | `--accent:#1E3AC4` | `--ac:#1E3AC4` |
| Control boundary | `--control-bd:#7C838D` | same |

`--control-bd` exists because `--line-2` is 1.51:1 against the ground. That is correct for a decorative rule and fails WCAG 1.4.11, which asks 3:1 for the boundary of a control, so buttons take the darker token and everything else keeps the hairline.

Semantic colors appear only on case-study finding callouts: `#B02A37` critical, `#2F6F4F` success, ink for informational. They tint the callout's label, never a border slab.

## Spacing and rhythm

29 distinct px values on a deliberate 2px-refined scale (6, 10, 14, 18, 22, 26 alongside the 4px steps). Sections run `104px 0` with a hairline between them. Containers: `1120px` on the home page, `760px` for case-study prose with `1040px` for full-bleed imagery. Radii: one scale only, `10px` on cards and `6px` on inner elements. The previous three-value system (14 / 8-12 / 20) is retired.

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

## Scannability

Twelve of the thirteen case studies carry a **Contents** block, built at runtime by `assets/toc.js` from the headings already on the page. `design-system.html` is the exception: it has no labelled sections to build one from.

The current section is marked by the last heading scrolled past, not by whichever heading happens to be inside a band near the top of the viewport. The band approach looks right until a section is taller than the band, at which point nothing is marked at all, which is most of the reading time. It is progressive enhancement: with JavaScript off the page is unchanged minus that block.

It exists because the research on product-management portfolios agrees on one point. The first pass over a case study is a skim, and a reader who cannot see the shape of the page in one glance leaves before reaching the outcomes.

The home page hero carries a four-row facts column for the same reason: the first question on a product application is scope, not narrative.

## Known debt

- Two token vocabularies for one palette (`--ink` vs `--tx`). Both are now defined together in `assets/system.css`, so they cannot drift, but the seam is still there.
- `design-system.html` shows no production UI, constrained by NDA. The button consolidation is now shown as an authored in-page artifact (the audit wall redrawn without client branding, plus the four replacement variants and their states); the remaining sections still rely on prose.
- The Experience section lists five roles with no scope detail.
- Ten archive case studies still show design roles in their role blocks. That is accurate history, those projects were design work, but a reader arriving from a product-management home page meets it without context.
- `assets/system.css` leans on `!important` to beat the pages' inline styles. That is the cost of not rewriting 14 inline stylesheets; the alternative was 14 places to keep in sync.

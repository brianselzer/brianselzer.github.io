# BrianSelzer.com Design System v0.2 (WEB-001, V4)
Authoritative file for implementation. Tokens live in `home.css` `:root`. Type and color remain **provisional until Brian approves**. See the type comparison sheet for the open decision.

## 1. Navigation (LOCKED)
Work | Advisory | Playable Systems | Signals | Lab | Let's Talk
- Home = the Brian Selzer logo (mark + wordmark). No "Home" link.
- Let's Talk is the persistent primary CTA, a filled cyan button, always visible, including on mobile beside the menu button. Destination: contact.html.
- Signals = insights.html until a rename. Lab = index.html#lab until lab.html exists.
- Current page gets `aria-current="page"` and full-white link.

## 2. Page identities (one language, five personalities)
| Page | Personality | Dominant surface | Lead visual | Key layout |
|---|---|---|---|---|
| Home | Studio reel | Dark hero, light work, dark Lab, cyan close | Portrait + plane stack, then project imagery | Asymmetric portfolio, mixed aspect ratios |
| Work | World-class portfolio | Light | Real project imagery only, full bleed | Large single-project rows, no card grid |
| Advisory | Executive credibility | Alternating dark/light | Typography and numbered rows, plane stack | Sticky-title split rows, 3 numbered columns, no cards |
| Playable Systems | Methodology made visible | Dark | Spatial plane diagrams, interactive examples | Diagram-led, annotated |
| Signals | Premium publication | Light, long measure | Editorial typography, cover art per issue | Masthead, featured essay, index list |
| Lab | Experiments | Dark | Prototype footage or concept art | Every item carries a maturity label |
Shared across all: plane-stack geometry, orange node = a person in the loop, mono labels, dark-to-light rhythm, same nav/footer/buttons.

## 3. Color tokens
ink #080B12, ink-2 #0E1420, bone #F2F0E9, signal #00C9DE (signal-ink #006F7D on light), energy #FF674D, play #C5F000 (live status only).

## 4. Type (provisional, `<html data-type="A|B|C">`)
A Modern editorial (default recommendation): Inter Tight 600 + Instrument Serif italic accent + IBM Plex Mono labels. B: Big Shoulders 800 caps + Space Grotesk. C: Fraunces + Inter Tight. All SIL OFL, self-hosted in /fonts, about 106 to 115 KB each. Scale: h1 clamp(52px,9.2vw,132px); page h1 clamp(40px,6.6vw,96px); section h2 clamp(40px,6vw,84px); body 17px; labels 12px mono caps.

## 5. Layout
Max width 1320, gutter clamp(20px,4.2vw,56px), 12-column grid (minmax(0,1fr)), spacing 8/16/24/40/64/104. Breakpoints 980 (single column, mobile menu), 420 (tight). Sections alternate dark and light; never two same-surface sections adjacent except Lab after dark footer-free work.
Image ratios: hero portrait 4:5 (1:1 mobile), portfolio feature 4:3, portfolio tall 4:5, portfolio wide 21:9, About 1:1.

## 6. Portfolio rules (replaces cards)
Image first, caption below: label (project, role, status), headline, one factual line, link. No borders or boxes around captions. Three compositions on Home: wide-left feature, tall-right offset, full-width banner. If no approved image exists the slot shows a designed typographic or plane treatment; it never shows a stock or unrelated image. `?review` (or `html.review`) reveals dashed orange "Asset needed" notes. These never ship in public view.

## 7. Buttons and states
Primary cyan, secondary line on dark, ink on light and cyan. 48px min height, 2px focus ring, hover lightens. One primary action per section.

## 8. Motion and accessibility
Hero plane parallax on fine pointers only, off under prefers-reduced-motion, static SVG fallback. Skip link, focus-visible, aria-expanded on menu, alt text, no horizontal scroll at 320.

## 9. Claims lock
Experience spanning (never "Trusted by"). Marvel: more than 25 mobile titles, P&L visibility. Ogmento: an early venture-backed AR company, no Apple acquisition claim. Olympics x Roblox: partner role through EverGame Media. Halo metrics held until verified.

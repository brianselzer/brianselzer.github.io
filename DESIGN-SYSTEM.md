# BrianSelzer.com Design System v0.1 (WEB-001, PROVISIONAL)
Status: type and color are **provisional** until Brian approves. Tokens live in `home.css` `:root`.

**Color**: ink #080B12, ink-2 #0E1420, bone #F2F0E9, signal #00C9DE (signal-ink #006F7D for text on bone), energy #FF674D (a person in the loop), play #C5F000 (live status only).
**Type** (self-hosted woff2, `/fonts`): System A default = Inter Tight 600 display + Instrument Serif italic accent + IBM Plex Mono labels. B = Space Grotesk. C = Fraunces. Switch with `<html data-type="A|B|C">`. All OFL.
**Scale**: h1 clamp(52px,9.2vw,132px) / section h2 clamp(40px,6vw,84px) / card h3 28-42px / body 17px / label 12px mono caps.
**Grid**: max 1320px, gutter clamp(20px,4.2vw,56px). Desktop 12-col feel (7/5 work grid); under 980px single column.
**Spacing**: 8, 16, 24, 40, 64, 104.
**Breakpoints**: 980px (layout collapse, mobile nav), 420px (tight).
**Buttons**: sig (primary), line (secondary on dark), ink / oink (on light/cyan). Min height 48px. Focus ring 2px signal.
**Cards**: three variants only: stat-led (Marvel), text + plane art (Ogmento, Olympics). Status tag top right: Shipped / Partner. Lab uses maturity labels: Live partner development / Prototype / Concept only.
**Motion**: hero plane stack parallax, fine pointer only, disabled under prefers-reduced-motion. Static SVG is the fallback.
**Accessibility**: skip link, focus-visible, aria on nav toggle, alt text, no horizontal scroll at 320.

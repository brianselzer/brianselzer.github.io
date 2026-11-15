# BrianSelzer.com Design System v0.5 (WEB-001) | Status: PROPOSED, local branch only
Approved by Marshall (pending Brian): type system A provisional, 1280px container, 12/8/4 grid, local refactor. Not deployed, not merged to main.
Files: `tokens.css` (fonts, color, type, spacing, type systems A/B/C) and `home.css` (base + components). Review mode: add `?review` to any URL to reveal asset-requirement notes (never visible by default).

## 1. Navigation (LOCKED)
Work | Advisory | Playable Systems | Signals | Lab | Let's Talk. Logo = Home. Let's Talk is the persistent primary CTA, visible on mobile. Signals = insights.html, Lab = index.html#lab until those pages exist.

## 2. Components and variants
| ID | Class | Variants | Notes |
|---|---|---|---|
| C1 Editorial hero | `c-hero--portrait`, `c-hero--type` | + `image-full` (planned for Work case pages) | Mobile: headline, CTAs, then square-cropped image |
| C2 Featured case | `c-cases` > `c-case` | `--hero` (overlay headline + summary row, Work), `--compact` (secondary projects, Work), `--feature` (facts layout), `--wide`, `--tall`, `--banner` (Home) | See sections 3 and 10 |
| C3 Split narrative | `c-split` + `c-rows`, `c-about` | sticky-title rows, image-left | Title above content on mobile |
| C4 Content grid | `c-lanes`, `c-lab` + `c-lab__item` + `c-status`, `c-proof` | three-up; index-list and case-grid planned | Never a swipe-only strip on mobile |
| C5 Framework | `c-framework` + `__item` + `__num` | numbered-columns; plane-diagram planned | Stacks to rows on mobile |
| C6 Conversion | `c-cta` | two-path (Home), single-cta + quiet link (Advisory) | Always the last section |
Shell: `nav`, footer, `btn` (`--sig`, `--line`, `--ink`, `--oink`), `label`, `wrap`, surfaces `surf-dark` / `surf-light`.

### Variant policy (controlled but extensible)
A page may only use documented components and variants. A new variant is added by a short entry here (name, purpose, mobile behavior) and is allowed when content needs it. Documented exceptions: cinematic or interactive content may use full-bleed sections, custom aspect ratios and custom motion, provided they still use tokens for color, type, spacing and buttons, keep a keyboard and reduced-motion path, and pass the QA gates below.

## 3. Art-directed images (no forced 4:3)
Every case declares its own crops with custom properties: `--ar-d` and `--ar-m` (aspect ratio, desktop and mobile) and `--pos-d` and `--pos-m` (focus point). Defaults: wide 4:3 / 4:3, tall 4:5 / 4:3, banner 21:9 / 4:3, feature 16:9 / 4:5. Cinematic images use 16:9 desktop and 4:5 or 1:1 mobile with a re-cropped file via `<picture><source media="(max-width:767px)" srcset="x-m.jpg">`. Portrait projects stay portrait on mobile. Infographics are never cropped: use `object-fit:contain` on a tinted panel. Focus must be on the subject, never a center crop by default. The Marvel feature component (component-featured-case.html, noindex) is the reference implementation.

## 4. Tokens
Container 1280, gutter clamp(20px,4.2vw,56px). Breakpoints (applied): mobile under 768 (4-col, single column), tablet 768 to 1023 (8-col; three-up grids stay three-up, hero and cases stack), desktop 1024+ (12-col). The mobile menu applies below 1024. Spacing 8/16/24/40/64/104. Color: ink #080B12, ink-2 #0E1420, bone #F2F0E9, signal #00C9DE (signal-ink #006F7D for text on light), energy #FF674D, play #C5F000. Banned as text on light: signal (1.8:1) and tertiary grey (2.3:1). Type A: Inter Tight (headlines and body) + Instrument Serif italic accent + IBM Plex Mono labels; B and C stay switchable via `data-type`. Serif accent rule: at most one accent word per section and no more than two per page. Motion: parallax only on fine pointers, off under reduced motion. Performance budget: fonts under 120 KB, hero image under 130 KB, LCP under 2.5 s, CLS under 0.1.

## 5. Content and conversion layer
**Every page answers:** who it is for, what value Brian brings, what evidence supports it, what to do next.
**Case study proof model.** Each case shows: project, Brian's actual role, what was created, verified outcome, route to more. A verified outcome is one of: a sourced metric, a named release or platform, an award, or a partner-approved statement. If none is verified the row is hidden publicly (`data-missing`) and flagged in review mode. Never invent, round up or imply metrics. Attribution follows the claims lock (section 7).
**Advisory lead generation.** Path: hero (who and why) > When to call me (self-qualify) > Three ways in > How companies hire me (A Playable Opportunity Map, B fractional or embedded leadership, C production and partnership leadership) > Experience spanning (evidence) > Let's Talk. Contact collects inquiry type (hiring a leader / project / advisory), company, scope, timeline. Qualified conversation = a decision-maker at a company with a defined role, project or problem. Quiet tertiary path: free Participation Quotient assessment.
**CTA hierarchy.** 1) Let's Talk (nav, always). 2) One primary action per section. 3) Secondary text or line button. 4) Quiet link (PQ, LinkedIn). Home hero: Explore Selected Work, then Work With Brian.
**Analytics events (data-event, pushed to dataLayer; needs an analytics ID to record):** nav_lets_talk_click, hero_primary_click, hero_secondary_click, engage_contact_click, work_marvel_click, work_ogmento_click, work_olympics_click, work_all_click, contact_hire_click, contact_project_click, contact_book_click, contact_linkedin_click, advisory_hero_lets_talk, advisory_hero_ps, advisory_method_click, advisory_close_lets_talk, advisory_pq_click. Naming target: `{page}_{area}_{action}`. Business measures (set targets with Brian): qualified conversations per month, Let's Talk click-through, contact submissions by inquiry type, booked calls, source of each conversation.

## 6. QA gates
**Technical:** no horizontal overflow at 320, 390, 768, 1024, 1440, 1920 and 200% zoom; keyboard order and visible focus; reduced-motion render; contrast rule; font-blocked fallback; links and metadata; Lighthouse performance and accessibility 90 or higher; contact path works.
**Visual (reviewed by a person at 1440 and 390 for every major page):** composition has one clear focal point per screen; hierarchy reads in three seconds; whitespace is deliberate and consistent with the spacing scale; type rhythm is varied (not a wall of identical heavy headings) and the serif accent is not overused; image treatment shows authentic work with the intended crop; the first portfolio image conveys caliber without needing to read; mobile scroll has a deliberate sequence, no dead zones longer than one screen, CTA reachable; emotional impact: would a studio head or CMO feel they are looking at a serious practice.

## 7. Claims lock
Experience spanning (never "Trusted by"). Marvel: led licensed mobile operations with P&L visibility, more than 25 mobile titles. Ogmento: an early venture-backed AR company, no Apple acquisition claim. Olympics x Roblox: partner role through EverGame Media. Halo metrics held until verified. Status labels: Shipped, Live partner development, Prototype, Concept only.

## 8. Release plan
**V1 (launch):** Home, Advisory, Work and contact complete, accurate and visually consistent; remaining pages keep simpler layouts but share nav, type and core styling; legacy claims on work.html corrected. Analytics follows immediately if the ID is not ready. **V1.1:** richer case media, animated diagrams, interactive Lab, deeper Signals, enhanced motion.

## 9. Retain / refactor / remove (status)
Done: tokens extracted, V3 card and unused rules removed, components renamed, parallax bug fixed (script now keys off `data-parallax`). Pixel regression: identical at 320, 390, 768, 1024, 1440, 1920 on Home and Advisory before the intentional 1280 change. Remaining: inline styles to variants, 768 and 1024 breakpoint scheme, shared plane SVG include, legacy styles.css once other pages migrate.

## 10. Work page rules (v0.4)
**Page rhythm:** dark page header, one `--hero` case, a pair of `--compact` cases (second offset down), a dark "what this work qualifies me to lead" split that routes to Advisory, a conversion section. One hero case per page; every other project uses `--compact`.
**Case hierarchy:** project identity (label), compelling headline, concise scope, explicit role, evidence, "qualifies me to lead", case route. Headlines state significance, never only a job title ("Building a mobile business around iconic IP", not "Running Marvel's licensed mobile business"). Qualification lines describe the kind of engagement the work qualifies Brian to lead, without claims.
**Case story (disclosure, "Read the case"):** Context, Challenge, My role, What was built, Evidence, Relevance today. Evidence row is hidden publicly until a verified source is supplied (`data-missing`), and flagged in review mode. The disclosure is a native `details` element: keyboard operable, no dead link.
**Mobile:** hero case media is 4:3 with the headline overlaid, so identity and reason to explore are visible in the first screen of the case; compact media 3:2. Art-direct real images with `--ar-m`, `--pos-m` and a `picture` source.
**Held:** Halo x 7-Eleven (role, metrics and asset unverified). Apple wording on Ogmento held until Brian confirms.

## 11. QA findings (this pass)
Verified: no horizontal overflow on Home, Advisory, Work and the component preview at 320, 360, 390, 480, 600, 720 (200% zoom of 1440), 768, 820, 900, 1000, 1023, 1024, 1100, 1200, 1440, 1920. Keyboard: every focusable element on Home, Advisory and Work has a visible focus ring at 1440 and 390; Enter opens the case disclosure and the mobile menu (aria-expanded updates). Reduced motion: hero parallax does not run. Home and Advisory were pixel-identical across the refactor before the intentional 1280 container change.
Open: Lighthouse, real-image crop checks (no approved images yet), 400% zoom text wrapping review by eye, contact delivery, live HTTPS, review-mode note overlaps overlay text on the smallest phones (review-only).
Legacy claims: work.html was replaced with the new Work page. No page now says Apple acquired Ogmento, "sustainable" or "25+ AAA". The old Halo case is not published until verified. The legacy styles.css remains for contact, assessment, playablesystems and insights until they migrate.


## 12. V1 page set (v0.5)
All eight pages use the same shell, tokens and six components. No page loads the old stylesheet (styles.css and app.js removed).

| Page | Identity | Main components |
|---|---|---|
| index.html | Personal hero, work, engagement lanes, point of view, Lab teaser, About, two-path close | C1 portrait hero, C2 wide/tall/banner, C4 lanes + lab, C6 |
| work.html | One dominant case, two compact cases, qualification section | C2 hero + compact, C3 split, C6 |
| advisory.html | Commercial landing: when to call, three ways in, how companies hire me | C1 type hero, C3, C5, C6 |
| playablesystems.html | Method: layered diagram (interactive highlight), eight conditions, why it matters, where it applies | C1 type hero, diagram figure (`c-dia`), `c-eight`, C3, C6 |
| insights.html (Signals) | Editorial publication shell: themes, speaking topics, Substack subscribe | C1 type hero, `c-proof`, C3, C6 |
| lab.html | Maturity-labelled prototypes with legend (`c-legend`) | C1 type hero, `c-lab--page`, C6 |
| contact.html | Three prefilled mailto paths, call booking, LinkedIn, quiet PQ link | `pghead`, C3 rows |
| assessment.html | Short PQ landing that sends to pq.brianselzer.com | C1 type hero, `c-proof`, C6 |

Rules added: placeholder media carries the public label "Illustration, not project imagery". Unsupported press logos and essay lists stay off public pages until sourced. `c-note[data-missing]` shows only in `?review`.

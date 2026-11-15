# BrianSelzer.com Design System v0.3 (WEB-001) | Status: PROPOSED, local branch only
Approved by Marshall (pending Brian): type system A provisional, 1280px container, 12/8/4 grid, local refactor. Not deployed, not merged to main.
Files: `tokens.css` (fonts, color, type, spacing, type systems A/B/C) and `home.css` (base + components). Review mode: add `?review` to any URL to reveal asset-requirement notes (never visible by default).

## 1. Navigation (LOCKED)
Work | Advisory | Playable Systems | Signals | Lab | Let's Talk. Logo = Home. Let's Talk is the persistent primary CTA, visible on mobile. Signals = insights.html, Lab = index.html#lab until those pages exist.

## 2. Components and variants
| ID | Class | Variants | Notes |
|---|---|---|---|
| C1 Editorial hero | `c-hero--portrait`, `c-hero--type` | + `image-full` (planned for Work case pages) | Mobile: headline, CTAs, then square-cropped image |
| C2 Featured case | `c-cases` > `c-case` | `--wide`, `--tall`, `--banner`, `--feature` (hero case) | See section 3 |
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
Container 1280 (applied), gutter clamp(20px,4.2vw,56px), grid 12 col (breakpoint scheme 8/4 col: single-column collapse is at 980 today; the 768 and 1024 steps are scheduled for the propagation pass). Spacing 8/16/24/40/64/104. Color: ink #080B12, ink-2 #0E1420, bone #F2F0E9, signal #00C9DE (signal-ink #006F7D for text on light), energy #FF674D, play #C5F000. Banned as text on light: signal (1.8:1) and tertiary grey (2.3:1). Type A: Inter Tight (headlines and body) + Instrument Serif italic accent + IBM Plex Mono labels; B and C stay switchable via `data-type`. Serif accent rule: at most one accent word per section and no more than two per page. Motion: parallax only on fine pointers, off under reduced motion. Performance budget: fonts under 120 KB, hero image under 130 KB, LCP under 2.5 s, CLS under 0.1.

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

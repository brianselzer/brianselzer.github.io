# WEB-001 launch gate, 2026-11-14

Branch v4-production, V1 staging build. Not pushed, merged or deployed.

## Git
- Branch v4-production, 8 commits ahead of main (abe0bfe) before this gate, plus 2 gate commits = 10 at HEAD, 0 behind. One of them (4fedf7f) is the V3 homepage that v4 branched from. The earlier "10" in my last report was wrong at the time (it was 8); 10 is correct now.
- Legacy tag legacy-main-2026-11-14 points at abe0bfe. The tag is local only. abe0bfe is also on origin/main, so the old site stays recoverable from GitHub.
- Portable backup: legacy-main-abe0bfe-complete-2026-11-14.zip (26 files, all HTML, CSS, JS, logos and photos) and brianselzer-all-refs-2026-11-14.bundle (every branch and tag).

## QA (local server, headless Chromium)
- axe-core WCAG 2.1 AA: 0 violations on all 8 pages at 1440 and 390.
- Horizontal overflow: none at 1440 and 390 (16 widths tested earlier).
- Lighthouse, Home / Work / Advisory: performance 98-100, accessibility 100 after fixes, best practices 100, SEO 100. Mobile LCP 2.4 s on Home.
- Fixes this pass: footer link tap targets, Work heading order. Pixel diff against the previous build is identical on Work.
- Not tested: real device, 400% zoom by eye, live HTTPS, redirects, mail delivery, Calendly.

## Go / no-go: NO-GO for public launch, GO for staging review
Genuine blockers
1. No staging URL others can open. GitHub is not linked to this session. Needs a push of v4-production.
2. Work page has no real project imagery. Marvel, Ogmento and Olympics x Roblox show labeled placeholders. See ASSET-MANIFEST.md.
3. Credits Brian must confirm: Marvel title wording, Ogmento "Co-founder and President", Olympics x Roblox credit and contracting entity, "25 years".
4. Contact route: Calendly link and brian@brianselzer.com delivery are unverified. All CTAs land on contact.html, which relies on mailto.
5. Signals has no real posts. Needs two or three titles with links.

Can wait for V1.1
- Halo case, Louvre, Claire's and Neurable cases, Foxhoven testimonial (needs Brad's approval), press strip, Playable Systems interactive polish, speaking page, analytics ID.

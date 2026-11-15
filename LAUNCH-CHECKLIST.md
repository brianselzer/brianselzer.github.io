# V1 Launch Checklist (WEB-001)

Status key: Done, Open (Brian), Open (Claude).

## Acceptance criteria from the V1 directive
1. Better than live: Done in build, side-by-side review by Brian pending.
2. Complete buyer path (Home, Work, Advisory, Let's Talk) without dead ends: Done. All internal links and anchors verified on 8 pages.
3. Visual credibility (three strong project images plus approved portrait): Open (Brian). Labeled illustrations are in place until assets 1 to 5 arrive.
4. Mobile quality at 390: Done. Overflow test clean at 16 widths, 320 to 1920, on all 8 pages.
5. Trust (no unsupported claims, fake imagery, broken links): Done for what is in the build. Open items below.
6. Conversion: Done for the route (mailto with three prefilled paths, Calendly link). Open: measurement. A mailto click is not a confirmed lead.

## Launch blockers (genuinely block going live)
- Open (Brian): approve the portrait, or supply a better one.
- Open (Brian): the four project images in the asset manifest, or approve launching with labeled illustrations.
- Open (Brian): confirm Ogmento wording (no Apple acquisition claim in the build) and Olympics x Roblox wording with EverGame Media.
- Open (Brian): authorize the branch push for staging review. Nothing is merged or deployed.
- Open (Brian): confirm Calendly link works (cannot be checked from here) and that brian@brianselzer.com is monitored.
- Open (Claude, after push): HTTPS and custom-domain check on staging, Lighthouse run, 400% zoom check.

## Safe to improve after launch
- Marvel, Ogmento, Olympics evidence rows and second images
- Real Signals post list, speaking page
- Analytics ID (events are already pushed to dataLayer)
- Lab visual identity, Playable Systems interactive examples
- Social preview image can ship as a plain portrait card first

## Items to confirm because they changed in this pass
- Hero line "25 years in games"
- "How companies hire me" A/B/C copy and Playable Opportunity Map deliverables and price positioning
- Participation Quotient is labeled "Shipped" in the Lab. Confirm pq.brianselzer.com is live and which page it serves (a check from here returned the main site description)
- Hero Network labeled "Concept only" on the Lab. Confirm the current status
- Removed from Signals pending verification: press logos (Forbes, Wired, WSJ and others) and four essay titles with reading times
- Removed from the PQ page: "Marvel and Microsoft" line

## Content preservation (added after the audit)
- Done: legacy site frozen. Git tag `legacy-main-2026-11-14` on `main` (abe0bfe), immutable copy in `_archive/legacy-2026-11-14/` (HTML, CSS, JS, extracted text), same content in the Drive Canon folder.
- Done: migration matrix with 12 flagged conflicts (CONTENT-MIGRATION-MATRIX.md).
- Open (Brian): decide the conflicts C1 to C12.
- Open (Brian): approve or drop the Foxhoven testimonial and the press strip.
- Open (Brian): two or three real Signals posts with links.
- Review mode (`?review`) now also shows held content: Halo case, testimonial, Signals candidates.

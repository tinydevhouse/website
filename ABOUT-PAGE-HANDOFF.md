# Handoff: Rewriting the About page

## The task
Rewrite the copy for the **About page** of Tiny Dev House so it genuinely sounds like Sabrina.
A first draft exists (see "Current state" below) but **she dislikes it** — her words: *"super
specific and a little weird."* The structure/plumbing is fine; the **writing needs another pass.**

## Where the copy actually lives
The About page template is `src/pages/about.astro`, but it contains **no prose** — it pulls
everything from the `about` object in **`astro-theme-config.ts`** (around lines 106–170).

The template only renders these fields:
- `statementTitle` → tagline shown under the `<h1>` (wired up in this session)
- `lead` → first bio paragraph
- `statement` → second bio paragraph
- `principles` → list of `{ title, body }`
- `interests` → list of strings

NOT rendered (dormant in config, ignore unless you wire them in): `name`, `role`, `location`,
`focus`, `headline`, `statementLabel`, `career`, `careerLabel`, `careerHeading`,
`interestsLabel`, `interestsHeading`.

Social/footer links come from the `social` object in the same file
(`github`, `linkedin`, `mastodon`, `devto`, `email` are rendered in the About footer).

## Who Sabrina is (use this to write the copy)
- **Brazilian, living in Gothenburg, Sweden.** Portuguese native, fluent English, beginner Swedish.
- **AI/ML engineer** (computer vision, LLM agents, GraphRAG, predictive models) at Knightec Group.
  Worked the full ML lifecycle: sole dev at a startup, academic research (MBARI), and consulting.
- **Studied design before data science** — this still shapes how she builds tools people want to use.
- Got into programming in the **Geocities era**, hand-building table-layout sites for friends.
- **Tiny Dev House is her solo studio** — just her, built in the margins, often after her toddler sleeps.

## The identity she most wants the page to convey (NEW, important)
She wants to portray being a **parent who builds real, serious software with purpose.** The usual
indie/tech archetypes online are tech bros or 20-something girls — almost no one shows what it's
like to slog away on ambitious software *with a toddler*. She draws real energy from knowing
exactly what she wants to build and watching the results take shape. **Make this a spine of the
page, not a cute footnote.** (Earlier draft demoted it to a quirky one-liner — that was the miss.)

## Values & positioning (confirmed via interview)
- Builds **niche, opinionated software with great UX** — tools you don't just use, you fall for.
  Her model is how she loves **Logseq**. Goal: a few things so good their users become devotees.
- Loves tools that are **"a little bit extra, in a good way"**: PowerToys, ShareX, Ueli, Vivaldi, Logseq.
- **Local-first, privacy-first, you own your data, "you're not the product."**
- The enemy/foil: **lock-in, subscriptions, surveillance** (the extractive cloud model). NOT "bloat"
  or "soulless software" — she did not pick those.
- **Explicitly NOT chasing a tech-bro-millionaire exit.** A nice income would be fine; that's not the point.
- Software should be **opinionated, full of personality, and never apologetic. Built with heart.**
- Her drive = **principle + craft + play** (the "personal itch" is just how projects start).
- Personal color (use sparingly + grounded, NOT a twee laundry list): fantasy/sci-fi, video games,
  pixel art, roller derby on quad skates, biking, the ocean, coffee snob, reading **Nordic noir**
  (fun tension: a Brazilian who loves Nordic noir).

## Voice rules
- First person is fine, but **don't stack "I... I... I..."** — vary sentence structure, sometimes
  let the work be the subject.
- **Not apologetic.** (Killed an earlier "if it's useful to you too, even better" line.)
- **Not twee / not hyper-specific.** This is exactly what she disliked in the last draft
  (e.g. "the ocean with a coconut in hand", "sun on the skin, the smell of rain" read weird).
  Keep personal details real and grounded, in service of the bigger story.
- Reference voice that DOES work: her blog post `src/content/blog/photo-gallery.md` and project
  page `src/content/projects/photo-gallery.md` — warm, first-person, concrete, a little wry.
  (Do NOT use `src/content/projects/hemnet-extension.md` as a voice reference — it's an unwritten stub.)

## Current state (the draft she rejected — rewrite the prose, keep the plumbing)
In `astro-theme-config.ts`:
- `statementTitle`: `'Small software, built with heart.'`  ← she chose this tagline; probably keep it.
- `lead`: `'Niche, opinionated desktop software with genuinely great UX — the kind of tool you don't
  just use, you fall for, the way some of us fell for Logseq.'`
- `statement`: `"It's just me — a Brazilian transplanted to Gothenburg, running a studio of one. I
  work as an AI/ML engineer (computer vision, LLM agents, the usual suspects), but I got here the
  long way round: a design degree first, and before that a teenage obsession with the early personal
  web. ... No lock-in, no subscription renting you back your own files ... Opinionated, full of
  personality, no apologies."`
- `principles`: Built with heart / Local first, always / You're not the product / Yours to keep.
- `interests`: a 7-item list that got too quirky — **this is the part she most disliked, rework it.**

Template/style changes made this session (probably fine to keep):
- `src/pages/about.astro`: renders `statementTitle` as `<p class="about-tagline">` under the h1;
  reordered footer links to GitHub · LinkedIn · Mastodon · DEV · Email.
- `src/styles/pages/about.css`: added a `.about-tagline` rule.

Social config now set: `email: sabrinafp35@gmail.com`, `linkedin:
https://www.linkedin.com/in/sabrinafpereira/`, `github: https://github.com/sf-pear` (changed from
the `tinydevhouse` org — confirm which she wants site-wide). Phone number intentionally NOT added
(privacy).

## Open questions
1. How prominently to foreground the **parent-builder** identity, and exactly how to phrase it.
2. GitHub link: personal `sf-pear` vs the `tinydevhouse` org (it's a site-wide social link).
3. Whether to also align the home page voice (`SITE_DESCRIPTION` in `src/consts.ts` / the site
   config `description`) so it matches the About page.

## How to preview
It's an Astro site. `pnpm install` then `pnpm dev` and open the `/about` route.

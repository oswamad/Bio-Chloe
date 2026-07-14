# Chloe's Personal Website — Project Plan

A polished, responsive single-page personal website for Chloe, built with **SvelteKit** and deployed to **GitHub Pages** via a static adapter.

---

## Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | **SvelteKit** | Chloe's primary web stack; excellent DX, small bundle |
| Styling | **CSS custom properties + scoped Svelte styles** | No extra build layer; full design control |
| Type checking | **TypeScript** | Safer, better IDE support |
| Static hosting | `@sveltejs/adapter-static` | Required for GitHub Pages |
| CI/CD | **GitHub Actions** (`gh-pages` branch) | Auto-deploy on push to `main` |
| Fonts | **Google Fonts** (Playfair Display, Inter, Space Mono) | Matches the three typographic personalities |
| Icons | **Lucide Svelte** | Lightweight, tree-shakeable |

---

## Color Palette (CSS variables)

```css
/* Dark foundation */
--color-void:    #09090D;
--color-charcoal:#15131A;
--color-plum:    #211724;
--color-wine:    #541D35;
--color-burg:    #702A49;

/* Trans-flag highlights */
--color-blue:    #5BCEFA;
--color-pink:    #F5A9B8;
--color-white:   #FFFFFF;

/* Accents */
--color-lavender:#C9B8D8;
--color-silver:  #A8A8B3;
--color-cream:   #F0E6D3;
```

---

## Typography

```
--font-serif:  'Playfair Display', Georgia, serif       → headings, emotional statements
--font-sans:   'Inter', system-ui, sans-serif           → body text, navigation
--font-mono:   'Space Mono', monospace                  → labels, tech metadata, coordinates
```

---

## Project Structure

```
chloe-site/
├── .github/
│   └── workflows/
│       └── deploy.yml            ← GitHub Actions deploy to gh-pages
├── src/
│   ├── app.html                  ← HTML shell, SEO meta, Open Graph
│   ├── app.css                   ← Global reset, fonts, custom properties
│   ├── routes/
│   │   └── +page.svelte          ← Single page — imports all sections
│   └── lib/
│       ├── content/
│       │   └── data.ts           ← All copy / labels / links (easy to edit)
│       └── components/
│           ├── Navigation.svelte ← Sticky nav, smooth scroll, active state
│           ├── CustomCursor.svelte
│           ├── Waveform.svelte   ← SVG/canvas animated waveform motif
│           ├── Hero.svelte
│           ├── About.svelte
│           ├── TwoSides.svelte   ← Interactive engineer ↔ girl split
│           ├── Engineering.svelte← Circuit-card skill grid
│           ├── Voice.svelte      ← Waveform + identity section
│           ├── VRChat.svelte
│           ├── Music.svelte
│           ├── Details.svelte    ← Constellation of small facts
│           └── Contact.svelte
├── static/
│   ├── .nojekyll                 ← Tells GitHub Pages to skip Jekyll
│   └── favicon.svg               ← Heart + waveform + signal mark
├── package.json
├── svelte.config.js
├── vite.config.ts
└── tsconfig.json
```

---

## Page Sections (in order)

| # | Component | Visual Concept |
|---|---|---|
| 1 | **Hero** | Dark full-height, portrait silhouette, soft trans-glow, animated waveform, tag labels |
| 2 | **About** | Intimate two-column: editorial copy + decorative circuit-vine aside |
| 3 | **Two Sides** | Interactive flip/reveal — Engineer left, Girl right, glowing divider |
| 4 | **Engineering** | Motherboard-grid cards, animated signal paths on hover |
| 5 | **Voice** | Full-width waveform SVG background, reflective copy, freq lines |
| 6 | **VRChat** | Slightly more digital/neon, avatar silhouette, tracking stats |
| 7 | **Music** | Editorial layout, artist tags, "girl in red raised me emotionally" pull-quote |
| 8 | **Details** | Constellation dot grid with hover tooltips revealing personal facts |
| 9 | **Contact** | Dark closing card, teasing closing line, social icon links |

---

## Animations (calm, restrained)

- Breathing glow on hero avatar border (`@keyframes breathe`)
- Waveform path drawn on scroll entry (`stroke-dashoffset` animation)
- Circuit paths illuminate on nav hover
- Particles: tiny floating dust/stars via CSS + JS
- Section fade-in on intersection observer (`prefers-reduced-motion` respected)
- Custom cursor: soft pink/blue glow dot
- Hover on tech cards: signal-path highlight
- Parallax on hero background (mild, `transform: translateY`)

---

## GitHub Pages Deployment

1. `adapter-static` generates output to `build/`
2. `.nojekyll` in `static/` ensures GitHub Pages serves it as-is
3. GitHub Actions workflow (`deploy.yml`):
   - Trigger: push to `main`
   - Steps: `npm ci` → `npm run build` → deploy `build/` to `gh-pages` branch
4. In repo Settings → Pages → Source: `gh-pages` branch, `/ (root)`

---

## Accessibility Checklist

- [ ] All images have `alt` text
- [ ] Color contrast ≥ 4.5:1 for body text
- [ ] `prefers-reduced-motion` media query disables all animations
- [ ] Keyboard navigation works for all interactive elements
- [ ] Semantic HTML (`<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`)
- [ ] `lang="en"` on `<html>`
- [ ] Focus-visible styles

---

## Content to Customize Later

All user-facing text lives in `src/lib/content/data.ts`.  
To update copy, skills, links, or music tastes — edit only that file.

---

## Build & Run Commands

```bash
npm install           # install dependencies
npm run dev           # local dev server → http://localhost:5173
npm run build         # static build → build/
npm run preview       # preview the build locally
```

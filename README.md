# Chloe — Personal Website

A polished, responsive personal website built with **SvelteKit** and deployed to **GitHub Pages**.

## Tech Stack

- **SvelteKit** + TypeScript
- `@sveltejs/adapter-static` for GitHub Pages
- Google Fonts: Playfair Display · Inter · Space Mono
- Pure CSS custom properties (no extra CSS framework)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build       # outputs to build/
npm run preview     # preview the static build
```

## Deploy

Push to `main`. GitHub Actions automatically builds and deploys to the `gh-pages` branch.

**First-time setup:**
1. Go to repository **Settings → Pages**
2. Set **Source** to `GitHub Actions`
3. Push to `main` — the workflow will handle the rest

## Customizing Content

All user-facing text, links, skills, and data live in one file:

```
src/lib/content/data.ts
```

Update that file to change copy without touching component code.

## Project Structure

```
src/
├── app.html              ← HTML shell & SEO meta
├── app.css               ← Global styles, CSS tokens
├── routes/
│   └── +page.svelte      ← Single page, imports all sections
└── lib/
    ├── content/data.ts   ← All content (edit here)
    └── components/
        ├── CustomCursor.svelte
        ├── Navigation.svelte
        ├── Waveform.svelte
        ├── Hero.svelte
        ├── About.svelte
        ├── TwoSides.svelte
        ├── Engineering.svelte
        ├── Voice.svelte
        ├── VRChat.svelte
        ├── Music.svelte
        ├── Details.svelte
        └── Contact.svelte
static/
├── .nojekyll             ← Required for GitHub Pages
└── favicon.svg           ← Heart + waveform + signal icon
```

## Adding a Portrait

Replace the SVG placeholder in `Hero.svelte` with:

```svelte
<img src="/portrait.jpg" alt="Chloe" class="portrait-img" />
```

And place `portrait.jpg` in the `static/` folder.

## Updating Social Links

Edit `contact.links` in `src/lib/content/data.ts`.

## Notes

- `prefers-reduced-motion` is respected: all animations disable when the OS setting is active.
- The custom cursor only appears on pointer devices (hidden on touch).
- The constellation section shows a fallback list on mobile.

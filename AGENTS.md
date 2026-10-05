# Horizon Properties — Premium Real Estate Website

## Overview
A static multi-page luxury real-estate website built with vanilla HTML, CSS, and JavaScript.
No build step, no framework, no package manager required.

## Running the Project
```bash
docker compose -f docker-compose.base44.yml up -d
```
The site is served by nginx on port 3000. Files are bind-mounted read-only, so edits
appear immediately — call `reload_preview` after changes since there is no live-reload server.

## Architecture
- **Pages:** `index.html` (homepage), `properties.html` (archive), `property-single.html` (detail),
  `about.html`, `contact.html`, `blog.html`
- **CSS:** `asset/css/variables.css` (design tokens), `style.css` (base + components + sections),
  `pages.css` (internal page styles), `reset.css` (Eric Meyer reset)
- **JS:** `asset/js/main.js` (header scroll, mega menu, mobile menu, carousels, sliders,
  filter tabs, scroll reveal, animated counters, gallery, smooth scroll)
- **Images:** Served from Unsplash CDN URLs (no local image assets needed for the new design)
- **Fonts:** Manrope via Google Fonts CDN

## Design System
- Navy `#083F73`, Gold `#CDA75E`, White, Soft bg `#F6F8FA`
- Manrope font, 300–800 weights
- CSS custom properties in `variables.css` — all spacing, colors, radii, shadows defined there
- Responsive breakpoints: 1200px, 1024px, 768px, 480px

## Key Notes
- nginx runs as `user root` to avoid permission issues with the bind-mounted source directory
- Clean URLs supported via nginx `try_files` (e.g. `/properties` → `properties.html`)
- The `nginx.conf` is mounted as the main nginx config (not conf.d)

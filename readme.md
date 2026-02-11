# Umbra VibeWorks

Umbra VibeWorks is a minimalist light-mode product lab journal: a clean surface to post updates/logs, track what is currently being built, and archive completed projects.

The UI is intentionally restrained (Apple-style): centered document layout, generous negative space, crisp typography (Geist headings + Inter body), subtle lift interactions, and gentle scroll reveal.

## Sections (on the page)
- Highlights
- Recent logs (latest entries)
- Contact

## Pages
- [index.html](index.html) — landing page / showcase.
- [logs.html](logs.html) — full log index.

## Publish (GitHub Pages)
1. Push this folder to a GitHub repository.
2. In GitHub: Settings → Pages.
3. Source: “Deploy from a branch”.
4. Select branch `main` and folder `/ (root)`.
5. The site serves [index.html](index.html) at the root and [logs.html](logs.html) as the log index.

## Notes
- This is a static site (no React build step), designed to work cleanly on GitHub Pages.
- Logs currently show “Work in progress” until you start publishing entries.
- Past/completed projects currently show “None yet.”
- To update content, edit [index.html](index.html) and [logs.html](logs.html) and replace the placeholder entries.
- Brand asset: [UMBRA-logo.png](UMBRA-logo.png) is used in the header.
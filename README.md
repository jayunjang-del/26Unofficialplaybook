# 2026 UNOFFICIAL PLAYBOOK: Nex Summer Internship

Interactive web edition of the 2026 NEX Summer Internship playbook.

## GitHub Pages

This repository includes an automatic GitHub Pages deployment workflow.

1. Upload the full contents of this folder to the repository's `main` branch.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Open the repository's **Actions** tab and wait for **Deploy GitHub Pages** to finish.

After that, every push to `main` automatically rebuilds and publishes the website.

If GitHub Pages displays this README instead of the interactive book, the Pages source is still set to **Deploy from a branch**. Change it to **GitHub Actions**.

## Run locally

Requirements: Node.js 22.13 or newer.

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Main files

- `app/page.tsx` — page order, click/drag controls, special cut pages, tracing-paper overlay
- `app/globals.css` — layout, binding, page-turn animation and visual effects
- `public/pages/` — all page artwork
- `.github/workflows/deploy-pages.yml` — automatic GitHub Pages deployment

Do not commit `node_modules`, `.next`, `out`, or environment files.

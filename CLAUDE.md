# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-file Spanish-language sales landing page (`Index.html`) for a digital guide about ADHD and emotional sensitivity (Sensibilidad al Rechazo / Rejection Sensitive Dysphoria). The target audience is Spanish-speaking adults with ADHD and parents of children with ADHD.

## Running locally

Open `Index.html` directly in a browser — no build step, no server required. For live-reload during editing, any static file server works (e.g., `npx serve .` or VS Code Live Server).

## Architecture

Everything lives in one file: HTML structure, all CSS (inside `<style>`), and JavaScript (inline `<script>` at the bottom). No frameworks, no bundler, no dependencies except Google Fonts loaded via CDN.

**CSS design tokens** are defined as custom properties in `:root` — use these variables (`--sage`, `--peach`, `--lavender`, `--sky`, `--cream`, etc.) rather than raw hex values when adding new styles.

**Page sections** flow top to bottom:
- `.hero` — full-viewport dark green gradient opener
- `.pain-intro` / `.pain-section` — problem identification (pain cards grid)
- `.mirror-section` — reframe (dark green, "you're not broken")
- `.solution-section` — product intro (book mockup + text, 2-col grid)
- `.benefits-section` — numbered benefit rows
- `.testimonials` — 3-card testimonial grid
- `.faq-section` — accordion FAQ
- `.final-cta` — purchase section (anchor `#comprar`)
- `.sticky-bar` — fixed bottom bar, appears after 600px scroll

**JavaScript** (no external libraries) handles three behaviors:
- `IntersectionObserver` triggers `.reveal` → `.visible` fade-in animations on scroll
- Scroll listener shows/hides the sticky bar past 600px
- `toggleFaq()` accordion: closes all items, opens the clicked one

**Fonts**: Playfair Display (headings, serif) and DM Sans (body, sans-serif) from Google Fonts.

## Key conventions

- All copy is in Spanish — keep new content in Spanish.
- The CTA button color is peach (`--peach` / `--peach-light`); structural/trust elements use sage green (`--sage`).
- Add `.reveal` to any new card or row that should animate in on scroll — the IntersectionObserver picks it up automatically.
- The buy link currently points to `href="#"` in the final CTA — replace with the actual payment URL when ready.

# IRONPULSE GYM - GSAP Website

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-Structure-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5 badge" />
  <img src="https://img.shields.io/badge/CSS3-Styling-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3 badge" />
  <img src="https://img.shields.io/badge/JavaScript-Interactions-F7DF1E?style=for-the-badge&logo=javascript&logoColor=111" alt="JavaScript badge" />
  <img src="https://img.shields.io/badge/GSAP-Animations-88CE02?style=for-the-badge" alt="GSAP badge" />
</p>

<p align="center">
  A cinematic, neon-styled gym landing page built with <strong>HTML + CSS + JavaScript + GSAP</strong>.<br/>
  Designed for smooth scroll storytelling, pinned sections, and premium visual polish.
</p>

---

## Overview

**IRONPULSE GYM** is a single-page website concept focused on:
- high-impact hero presentation
- scroll-driven section transitions
- animated cards and pricing blocks
- responsive mobile navigation
- polished micro-interactions

It uses CDN-delivered GSAP plugins and Lucide icons, so setup is simple and dependency-free.

---

## Features

- Animated loading screen and hero reveal timeline
- ScrollTrigger-powered pinned storytelling sections (`section1` to `section10`)
- Flowing content zones for Programs, Membership, and Contact
- Global motif animation and custom snap behavior for pinned sections
- Smooth scroll navigation and back-to-top control
- Mobile menu with lock-scroll behavior
- Interactive UI states (form success, button feedback, CTA placeholders)
- Responsive layout for desktop, tablet, and mobile
- Reduced-motion accessibility support

---

## Tech Stack

- **HTML5**
- **CSS3** (custom properties, responsive media queries)
- **Vanilla JavaScript (ES6)**
- **GSAP 3**
  - `ScrollTrigger`
  - `ScrollToPlugin`
- **Lucide Icons**
- **Google Fonts** (`Sora`, `Inter`, `IBM Plex Mono`)

---

## Project Structure

```text
GYM-GSAP-WEBSITE-/
|- index.html
|- styles.css
|- script.js
|- images/
   |- img_gym_floor.jpg
   |- img_athlete_focus.jpg
   |- img_athlete_stronger.jpg
   |- img_athlete_faster.jpg
   |- img_athlete_better.jpg
   |- img_athlete_power.jpg
   |- img_athlete_energy.jpg
   |- img_athlete_victory.jpg
   |- img_athlete_join.jpg
   |- img_program_strength.jpg
   |- img_program_cardio.jpg
   \- img_program_recovery.jpg
```

---

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/<your-username>/GYM-GSAP-WEBSITE-.git
```

2. Open the project folder:

```bash
cd GYM-GSAP-WEBSITE-
```

3. Run locally:
- Open `index.html` directly in your browser, or
- Use VS Code Live Server for best development experience.

---

## Customization

- Edit brand text and content in `index.html`
- Tune theme colors and spacing using CSS variables in `styles.css`
- Adjust timing, pin distances, and reveal effects in `script.js`
- Replace assets in `images/` with your own photography

---

## Deployment

This is a static site and can be deployed instantly on:
- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages

---

## Notes

- Contact form currently uses front-end success feedback only (no backend integration).
- Program details, booking flow, and some footer links are demo placeholders.

---

## License

This project is available under the **MIT License**.
You can add a `LICENSE` file if you want to open-source it formally.

---

## Author

Built by **IRONPULSE creator**.

If you want, I can also generate a matching `LICENSE` and `CONTRIBUTING.md` next.
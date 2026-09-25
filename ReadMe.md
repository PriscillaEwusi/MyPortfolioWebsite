# Priscilla Ewusi — Portfolio Website

This is a personal portfolio site built for the DTEN Full Stack Web Development
internship Task. Built with plain HTML, CSS, and JavaScript — no
framework or build step required.

## Tech stack

- HTML5, CSS3 (custom properties, CSS Grid/Flexbox), vanilla JavaScript
- Fonts: Space Grotesk, Inter, JetBrains Mono (Google Fonts)
- Contact form powered by [FormSubmit](https://formsubmit.co) — no backend required

## Running locally

No build tools needed. Either:

1. Open `index.html` directly in a browser, or
2. Serve it locally for the best experience with relative paths:
   ```bash
   python3 -m http.server 8000
   # then visit http://localhost:8000
   ```
## Accessibility notes

- Skip-to-content link for keyboard users
- Visible focus states on all interactive elements
- Respects `prefers-reduced-motion` (disables the terminal animation)
- Semantic landmarks (`header`, `main`, `section`, `footer`) and labelled nav

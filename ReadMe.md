## Priscilla Ewusi | Cloud & DevOps Portfolio

This is a personal portfolio site built for the DTEN Full Stack Web Development
A responsive, accessible personal portfolio website for a Cloud & DevOps Engineer, built with plain HTML, CSS and JavaScript (no frameworks) 

Live site:[](https://priscillaportfolio-xi.vercel.app/)

Author: Priscilla Ewusi

## Features
Four main sections: About, Projects, Skills and Contact
Animated terminal in the hero that types out a deployment session (git push, terraform apply, kubectl rollout). It starts when scrolled into view and runs once
Project cards with technology tags
Skills grouped by area with a Code, Build, Test, Deploy, Monitor pipeline graphic
Working contact form that sends messages to my email without a backend
Fully responsive: hamburger menu on small screens, fluid layouts with CSS Grid and Flexbox
Accessible: skip link, semantic landmarks, labelled form fields, visible focus styles, ARIA live regions and reduced-motion support

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

## Responsive Breakpoints
Width	Change
- 900 px	Hero and project grids collapse to a single column
- 800 px	About and contact sections stack
- 760 px	Navigation switches to the hamburger menu
- 700 px	Pipeline graphic stacks vertically

## Deployment

The site is static and can be hosted on GitHub Pages, Netlify or Vercel with no build command and no output directory. Deploy from the repository root.

## Acknowledgements
- Contact form powered by FormSubmit
- Fonts from Google Fonts
- Built during the DTEN Full Stack Web Development internship

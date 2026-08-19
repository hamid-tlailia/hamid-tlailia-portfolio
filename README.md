# Hamid Tlailia Portfolio

This is a redesigned Create React App portfolio for **Hamid Tlailia**, a full-stack developer. The portfolio is now a focused, responsive single-page experience that presents the hero message, selected work, services, profile, and contact options in a clear conversion-oriented flow.

## Improvements included

The interface replaces the former repeated glassmorphism treatment with a calmer navy, aqua, and warm-orange visual system. It uses a responsive navigation menu, accessible focus states, reduced-motion support, a keyboard-accessible featured-project selector, improved metadata, and clearer project and service copy. The contact form no longer exposes client-side email-service credentials. Instead, it prepares an email to the existing portfolio address in the visitor’s email application, while direct email, WhatsApp, GitHub, and LinkedIn links remain available.

## Run locally

Install dependencies and start the development server:

```bash
npm ci
npm start
```

The portfolio will be available at `http://localhost:3000`.

## Create a deployable build

```bash
npm run build
```

Deploy the generated `build/` folder to any static hosting provider. The app currently uses external preview images for three legacy projects, so those images require the original GitHub Pages URLs to remain reachable.

## Customize content

Edit `src/App.js` to change project details, service offerings, social links, and contact information. Visual tokens and responsive layout rules are contained in `src/App.css`.

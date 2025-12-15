# Adeline Foundation Website (React)

## Overview
A bilingual (Indonesian/English) React website for Adeline Foundation, a Catholic non-profit focused on children's education and community health.

## Tech Stack
- React 18 with Vite
- React Router for navigation
- Context API for i18n translations
- CSS modules for styling

## Project Structure
```
/react-app/
  /public/imgs/         - Image assets
  /src/
    /components/        - Header, Footer
    /context/           - LanguageContext for i18n
    /i18n/              - Translation strings (id/en)
    /pages/             - Page components (Home, About, Programs, Gallery, Contact, Donate, Privacy)
    App.jsx             - Main app with routing
    main.jsx            - Entry point with providers
  vite.config.js        - Vite config (port 5000, allowedHosts)
/staging/               - Original static HTML files (archived)
```

## Running the Project
- Development: `cd react-app && npm run dev` (port 5000)
- Build: `npm run build --prefix react-app`

## Deployment
- Static site deployment
- Build command creates production files in `react-app/dist`

## Features
- 7 pages: Home, About, Programs, Gallery, Contact, Donate, Privacy
- Bilingual content (Indonesian/English) with toggle
- Language preference saved to localStorage
- Responsive design (mobile, tablet, desktop)
- Smooth animations and hover effects

## Recent Changes
- December 2025: Converted from static HTML/CSS/JS to React with Vite

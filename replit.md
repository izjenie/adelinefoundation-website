# Adeline Foundation Website

## Overview
A bilingual (Indonesian/English) static website for Adeline Foundation, a Catholic non-profit focused on children's education and community health.

## Tech Stack
- HTML5, CSS3, Vanilla JavaScript
- No build step required
- Python HTTP server for development

## Project Structure
```
/staging/           - Main website content
  /css/styles.css   - Stylesheet
  /js/script.js     - Main JavaScript
  /js/translations.js - i18n translations
  /imgs/            - Image assets
  *.html            - Page files (index, about, programs, gallery, contact, donate, privacy)
/server.py          - Development server (Python)
/index.html         - Maintenance page (not used)
```

## Running the Project
- Development: `python server.py` (serves on port 5000)
- The server serves files from the `/staging/` directory

## Deployment
- Configured as a static site deployment
- Public directory: `staging`

## Features
- Responsive design (mobile, tablet, desktop)
- Bilingual content (Indonesian/English) with instant toggle
- Language preference saved to localStorage
- Smooth animations and interactions

## Recent Changes
- December 2025: Initial Replit setup with Python HTTP server

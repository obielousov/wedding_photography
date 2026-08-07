# Wedding Photography — Tessa Morgan

A fully responsive multi-page website for a wedding photographer, created as a frontend portfolio project. The website features an elegant editorial design, a services section, a portfolio gallery, client testimonials, a blog, and a fully responsive experience across all devices.

🌐 Live Demo: https://obielousov.github.io/wedding_photography/

## Features

- **Multi-page layout** — 9 pages covering the full photographer flow (home, about, services, portfolio, portfolio details, blog, blog details, contact, 404)
- **Hero section** — welcome section with a background image
- **Services** — Wedding, Portrait, and Engagement packages
- **Testimonials slider** — Swiper carousel with client reviews
- **Animated counters** — photographer statistics (years of experience, photos taken, weddings, awards)
- **Portfolio** — project grid and photo galleries with Swiper sliders on detail pages
- **Blog** — article listing and detail pages
- **FAQ accordions** — custom-styled spollers on the Services page
- **Contact form** — inquiry form on the Contact page
- **SEO & Social** — per-page titles, descriptions, keywords, canonical, Open Graph and Twitter Card metadata
- **Accessibility** — semantic HTML and ARIA attributes

## Tech Stack

- **HTML5** — semantic markup, 9 pages
- **SCSS** — BEM, modular architecture compiled into CSS
- **Vanilla JavaScript** — framework-free ES Modules
- **Vite** — optimized production build
- **PostHTML** — HTML templating (templates, includes, conditional blocks)
- **Swiper** — testimonials and gallery sliders
- **Assets** — self-hosted fonts (Cormorant Garamond & Playfair Display SC), SVG icons, WebP images

## Project Structure

```
.
├── index.html            # home page (hero, services, testimonials)
├── about.html            # about the photographer
├── services.html         # services, process & FAQ
├── portfolio.html        # portfolio gallery
├── portfoliodetail.html  # portfolio photo details
├── blog.html             # blog listing
├── blogdetail.html       # blog article
├── contact.html          # contact form
├── errorpage.html        # 404 page
├── css/                  # compiled CSS
├── js/                   # site interactions
└── assets/               # images, fonts & icons
```

## Run Locally

Clone the repository:

```bash
git clone https://github.com/obielousov/wedding_photography.git
```

Open `index.html` in any modern browser.

No installation or build process is required.

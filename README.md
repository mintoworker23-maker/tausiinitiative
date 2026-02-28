# Tausi Initiative Website

Frontend for the Tausi Initiative public site.

## Overview
This project is a React + Vite application for Tausi Initiative with:

- Homepage with hero, impact stats, blog highlights, and founder section
- About page with story, impact, committee, and partner slider
- Projects page
- Volunteer registration form
- Contact form
- Blog page connected to Hashnode
- Responsive navigation with desktop mega-dropdown

## Tech Stack

- React 18
- Vite 6
- Tailwind CSS
- Framer Motion
- React Router
- Lottie (for animations)

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Create a `.env` file in the project root (same level as `package.json`):

```env
VITE_API_URL=https://your-backend-url.com
VITE_HASHNODE_PUBLICATION_HOST=your-publication.hashnode.dev
```

Notes:
- `VITE_API_URL` is used by login/signup, volunteer, contact, and backend ping.
- `VITE_HASHNODE_PUBLICATION_HOST` is used by the blog page.
- Do not include `https://` in `VITE_HASHNODE_PUBLICATION_HOST`.

### 3. Run locally

```bash
npm run dev
```

Open the local Vite URL shown in terminal (usually `http://localhost:5173`).

## Available Scripts

- `npm run dev` - start dev server
- `npm run build` - production build
- `npm run preview` - preview production build locally
- `npm run lint` - run ESLint

## Main Routes

- `/` - Home
- `/about` - About
- `/projects` - Projects
- `/volunteer` - Volunteer
- `/contact` - Contact
- `/blog` - Blog (Hashnode-powered)
- `/auth-success` - Auth callback success page

## Hashnode Integration

Blog data is fetched from Hashnode GraphQL API (`https://gql.hashnode.com`) in:

- `src/Components/Blog.jsx`

If fetching fails or publication host is not configured, fallback demo posts are displayed.

## Project Structure (key files)

- `src/App.jsx` - app routes and hash-scroll handling
- `src/Components/Navigation.jsx` - top nav + mega-dropdown
- `src/Components/HomePage.jsx` - homepage content sections
- `src/Components/About.jsx` - about, committee, partners
- `src/Components/Projects.jsx` - projects content
- `src/Components/Volunteer.jsx` - volunteer form
- `src/Components/Contact.jsx` - contact form
- `src/Components/Blog.jsx` - Hashnode blog page
- `src/Components/footer.jsx` - footer

## Deployment

Build command:

```bash
npm run build
```

Deploy the generated `dist/` folder to your hosting provider (Netlify, Vercel, etc.).
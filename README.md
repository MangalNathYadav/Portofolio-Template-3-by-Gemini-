# Portfolio Website for Mangal Nath

This is a fully responsive, animated personal portfolio website for Mangal Nath, showcasing skills in Full-Stack Development and Cybersecurity.

Built with Vite, React, Tailwind CSS, and Framer Motion.

## Features

- **Modern UI/UX:** Clean, professional design with smooth animations and micro-interactions.
- **Responsive Design:** Adapts to all screen sizes (desktop, tablet, mobile).
- **Dark/Light Theme:** Toggleable theme preference stored in `localStorage`.
- **Accessibility (A11y):** Semantic HTML, ARIA attributes, and keyboard navigation.
- **SEO Friendly:** Meta tags and Open Graph configured for search engine visibility.
- **Performance:** Lazy loading for components and optimized assets.
- **Custom Cursor:** Optional animated custom cursor.

## Sections

- **Hero:** Engaging introduction with a typewriter effect.
- **About Me:** Detailed bio, profile picture, contact info, and social links.
- **Skills:** Categorized skills with animated progress indicators.
- **Projects Showcase:** Grid of project cards with descriptions, tech stacks, and links.
- **Timeline/Journey:** Vertical scroll-animated timeline of key experiences.
- **Contact Form:** Functional contact form (requires Formspree endpoint configuration).
- **Footer:** Copyright, social links, and theme toggle.

## Tech Stack

- **Frontend:** React, Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** React Icons
- **Typewriter Effect:** React Type Animation

## Project Structure

```
/public
  vite.svg
/src
  /assets
    react.svg
  /components
    About.jsx
    Contact.jsx
    CustomCursor.jsx
    Footer.jsx
    Hero.jsx
    Navbar.jsx
    Projects.jsx
    Skills.jsx
    ThemeToggle.jsx
    Timeline.jsx
  App.css
  App.jsx
  index.css
  main.jsx
index.html
package.json
README.md
tailwind.config.js
postcss.config.js
vite.config.js
```

## Getting Started

### Prerequisites

- Node.js (v18.x or later recommended)
- npm (or yarn/pnpm)

### Installation

1. Clone the repository (or download the source code):

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Running Locally

To start the development server:

```bash
npm run dev
```

This will typically open the site at `http://localhost:5173`.

### Building for Production

To create an optimized production build:

```bash
npm run build
```

The production files will be located in the `dist/` directory.

## Deployment

This Vite + React application is ready for deployment on various platforms like Netlify, Vercel, or GitHub Pages.

### Important: Configure Formspree Endpoint

For the contact form to work, you need to replace the placeholder Formspree endpoint ID in `src/components/Contact.jsx`.

1. Go to [Formspree.io](https://formspree.io/) and create a new form.
2. Copy your unique form ID from the endpoint URL (e.g., `https://formspree.io/f/YOUR_UNIQUE_ID`).
3. Open `src/components/Contact.jsx` and replace `YOUR_FORMSPREE_ENDPOINT_ID` in the `action` attribute of the `<form>` tag with your actual ID.

   ```jsx
   // src/components/Contact.jsx
   <form 
     action="https://formspree.io/f/YOUR_ACTUAL_ID_HERE" 
     method="POST"
     // ...
   >
   ```

### General Deployment Steps (Example: Netlify)

1. **Push your code to a Git repository** (e.g., GitHub, GitLab, Bitbucket).
2. **Connect your Git repository to Netlify.**
3. **Configure build settings (usually auto-detected for Vite):**
   - **Build command:** `npm run build` (or `vite build`)
   - **Publish directory:** `dist`
4. **Deploy!**

For **GitHub Pages**, you might need to configure the `base` path in `vite.config.js` if you are deploying to a subdirectory (e.g., `https://<username>.github.io/<repository-name>/`).

```js
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import postcss from './postcss.config.js';

export default defineConfig({
  // plugins: [react()], // If deploying to GitHub Pages under a subpath, uncomment and set base
  // base: '/<repository-name>/', 
  plugins: [react()],
  css: {
    postcss,
  },
});
```

Remember to replace `<repository-name>` with your actual GitHub repository name.

## License

This project was created for Mangal Nath. Please inquire if you wish to adapt or use significant portions of this code.

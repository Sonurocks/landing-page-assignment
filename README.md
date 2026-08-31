# MUREC - Premium Real Estate Landing Page

A modern, highly-optimized, and fully responsive frontend redesign of the Murec website, taking design and UX inspiration from the premium aesthetic of Timeless.club.

## 🚀 Live Demo
**[https://murec-app-one.vercel.app/](https://murec-app-one.vercel.app/)**

## 🎨 Design Philosophy & Approach
This project was built to convey a sense of **luxury, legacy, and trust**. 
- **Typography:** Meticulously paired elegant Serif fonts (Playfair Display) for headings to convey heritage, with clean Sans-Serif fonts (Outfit/System) for high legibility in body text.
- **Animations:** Implemented fluid, scroll-linked animations using Framer Motion to create a cinematic, engaging browsing experience without overwhelming the user.
- **Smart Navigation:** Built a scroll-aware navbar that hides when reading downwards (maximizing screen real estate) and instantly reappears when scrolling up.

## ⚡ Performance & Optimization
- **Next/Image:** All static assets are served using Next.js `<Image>` component for automatic WebP conversion, lazy loading, and exact aspect-ratio mapping to prevent Cumulative Layout Shift (CLS).
- **Video Backgrounds:** Optimized looping background videos for the Hero section with proper `playsInline` and `muted` attributes for immediate cross-browser autoplay.
- **Component Reusability:** Abstracted UI elements (like the pill-shaped `<Button />` component) to maintain a DRY, scalable, and highly maintainable codebase.

## 📱 Responsive Design
The UI is built with a mobile-first approach using Tailwind CSS. It smoothly transitions from a stacked mobile layout to a sophisticated multi-column grid on desktops, ensuring perfect usability across all device breakpoints.

## 🛠 Tech Stack
- **Framework:** Next.js (React)
- **Styling:** Tailwind CSS (v4)
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Language:** TypeScript

## ⚙️ Local Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd murec-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or yarn install / pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

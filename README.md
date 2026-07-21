# High-Impact Personal Portfolio

A psychology-driven, premium portfolio website designed to impress HR recruiters, founders, and CTOs.

## Features

- ⚡ Lightning-fast loading (<2s first impression)
- 🎨 Premium dark theme with accent colors
- ✨ Smooth animations with Framer Motion
- 📱 Fully responsive and mobile-first
- ♿ Accessibility compliant
- 🚀 SEO optimized
- 🎯 Psychology-driven design for maximum impact

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Language:** TypeScript

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

1. Update personal information in `app/config/data.ts`
   - Replace all placeholder text with your actual information
   - Add your real projects, skills, and achievements
   - Update contact information and social links

2. Add your resume PDF:
   - Place your resume PDF file at `public/resume.pdf`
   - The resume download button will automatically link to it

3. Customize colors in `tailwind.config.ts`:
   - Modify the `primary` and `accent` color values to match your brand

4. Update meta tags in `app/layout.tsx`:
   - Update title, description, and Open Graph tags for SEO

## Deployment

This project is ready to deploy on Vercel, Netlify, or any platform supporting Next.js.

```bash
npm run build
```
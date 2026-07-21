# Portfolio Customization Guide

This guide will help you customize your portfolio with your personal information and style.

## Quick Start

1. **Update Personal Information** (`app/config/data.ts`)
   - Replace `Your Name` with your actual name
   - Update the headline and subheadline to reflect your unique value proposition
   - Fill in your email, LinkedIn, GitHub, and location
   - Update the resume path if different

2. **Add Your Resume**
   - Place your resume PDF at `public/resume.pdf`
   - The download button will automatically work

3. **Customize Content**
   - Update all stats in the Authority Signals section
   - Rewrite the About section with your actual story
   - Replace skills with your actual technologies and reasons
   - Add your real projects (minimum 3 recommended)
   - Update testimonials or remove if you don't have any yet
   - Customize achievements section

4. **Branding**
   - Update colors in `tailwind.config.ts` (primary and accent colors)
   - Modify `app/layout.tsx` for SEO meta tags
   - Update site title and description

## Content Writing Tips

### Headline (Hero Section)
- Focus on impact, not role: "I build systems that scale" vs "I'm a developer"
- Be specific and confident
- Avoid generic phrases like "passionate developer"

### About Story
- Follow the problem → struggle → solution → growth structure
- Focus on your thinking process
- Show how you learn and adapt
- Keep paragraphs short and impactful

### Projects
- Each project should have:
  - Clear problem statement
  - Your unique approach
  - Real outcomes with metrics
  - What makes it different
- Use real numbers and results
- Show production impact, not just features

### Skills
- Group by purpose, not technology
- Explain WHY you use each tool
- Focus on real-world usage patterns

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically on every push

### Netlify
1. Push to GitHub
2. Connect repository in Netlify
3. Build command: `npm run build`
4. Publish directory: `.next`

## Performance Optimization

The site is already optimized for performance, but you can:
- Compress images before adding them
- Use Next.js Image component for any photos
- Consider adding a CDN for static assets

## Accessibility Checklist

- ✅ Semantic HTML
- ✅ ARIA labels on interactive elements
- ✅ Keyboard navigation support
- ✅ Skip to main content link
- ✅ Color contrast ratios
- ✅ Screen reader friendly

## SEO Optimization

- Update meta tags in `app/layout.tsx`
- Add Open Graph images
- Consider adding a sitemap.xml
- Add structured data (JSON-LD) if needed

## Need Help?

All components are modular and well-documented. Check individual component files for specific customization options.
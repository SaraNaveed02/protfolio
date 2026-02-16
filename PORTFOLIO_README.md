# Premium Animated Portfolio Website

A modern, highly animated personal portfolio website built with Next.js, React, TypeScript, Tailwind CSS, and Framer Motion. Features smooth interactions, cinematic animations, and premium design patterns.

## 🎨 Features

### 1. **Hero Section**
- Full-screen animated hero with gradient background
- Letter-by-letter text reveal animation
- Floating particle background with interactive connections
- CTA buttons with magnetic hover effects
- Smooth scroll indicator animation

### 2. **About Section**
- Animated image reveal on scroll
- Staggered text animations
- Learning journey timeline with year markers
- Hover effects on content cards
- Responsive grid layout

### 3. **Skills Section**
- Categorized skills (Frontend, Backend, Tools, Design)
- Animated skill cards with hover glow effects
- Progress bars with scroll-triggered animations
- Staggered appearance animations
- Summary section with gradient background

### 4. **Projects Section**
- 3D tilt effect on hover
- Image zoom animations
- Animated overlay with project details
- Category filtering with smooth transitions
- Links to live demo and GitHub repository
- Responsive grid layout

### 5. **Experience & Education**
- Vertical timeline layout
- Alternating left/right cards on desktop
- Achievement bullet points with checkmarks
- Scroll-triggered animations
- Mobile-responsive timeline
- Separate styling for education section

### 6. **Testimonials Section**
- Auto-scrolling carousel
- Smooth fade transitions between testimonials
- Manual navigation with dots and arrows
- Responsive carousel design
- 5-second auto-rotation

### 7. **Contact Section**
- Animated form with floating labels
- Form field focus animations
- Loading state with spinner
- Success animation after submit
- Contact information section
- Responsive design

### 8. **Footer**
- Social icon links with hover animations
- Quick navigation links
- Back-to-top smooth scroll button
- Responsive grid layout
- Brand information

## 🚀 Tech Stack

- **Framework**: Next.js 16+ (App Router)
- **UI Library**: React 18+
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion (primary)
- **Advanced Animations**: GSAP
- **Smooth Scrolling**: Lenis
- **Development**: TypeScript, ESLint

## 📦 Installation

1. **Clone or Download the Project**
```bash
cd my-portfolio
```

2. **Install Dependencies**
```bash
npm install
```

3. **Start Development Server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the portfolio.

## 🛠️ Configuration

### Customize Your Information

Edit the following files to personalize your portfolio:

1. **[src/data/portfolio.ts](src/data/portfolio.ts)**
   - Update projects array with your projects
   - Add your skills with proficiency levels
   - Update experience and education
   - Add testimonials
   - Modify categories

2. **[src/components/sections/Hero.tsx](src/components/sections/Hero.tsx)**
   - Change the name and role
   - Update the subtitle
   - Customize the CTA buttons

3. **[src/app/layout.tsx](src/app/layout.tsx)**
   - Update metadata (title, description)
   - Add your domain

4. **[src/components/sections/Footer.tsx](src/components/sections/Footer.tsx)**
   - Update social links
   - Change footer text
   - Add your social handles

5. **[src/components/sections/Contact.tsx](src/components/sections/Contact.tsx)**
   - Update contact email
   - Add your phone number
   - Change location

## 🎯 Animation Features

### Implemented Animations

- **Text Reveal**: Letter-by-letter animation in hero section
- **Stagger Container**: Orchestrates animations across multiple elements
- **Scroll Animations**: Elements animate as they enter viewport
- **Hover Effects**: Magnetic button effect, glow effects
- **Page Transitions**: Smooth fade transitions between elements
- **3D Transforms**: Tilt effect on project cards
- **Particle System**: Interactive background particles
- **Carousel**: Auto-rotating testimonials with smooth transitions

### Animation Utilities

All animations are defined in [src/utils/animations.ts](src/utils/animations.ts) using Framer Motion variants for easy reuse and customization.

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1920px and above)
- Laptop (1024px - 1920px)
- Tablet (768px - 1024px)
- Mobile (320px - 768px)

## ♿ Accessibility

- Semantic HTML structure
- Proper ARIA labels
- Focus indicators for keyboard navigation
- Color contrast compliance
- Reduced motion support

## 📊 Performance

- Optimized for Core Web Vitals
- Image optimization
- CSS-in-JS optimization
- Code splitting
- Server-side rendering

### Performance Tips

1. Optimize images in `/public/images/`
2. Use next/image for image components
3. Lazy load components where applicable
4. Monitor bundle size with `npm run build -- --analyze`

## 🚀 Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Click Deploy
4. Vercel will automatically build and deploy

### Manual Deployment

```bash
npm run build
npm run start
```

## 📋 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── common/             # Reusable components
│   │   ├── Button.tsx      # CTA button with animation
│   │   ├── MagneticCursor.tsx
│   │   ├── ParticleField.tsx
│   │   └── ScrollIndicator.tsx
│   └── sections/           # Page sections
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Skills.tsx
│       ├── Projects.tsx
│       ├── Experience.tsx
│       ├── Testimonials.tsx
│       ├── Contact.tsx
│       └── Footer.tsx
├── hooks/
│   └── useScrollAnimation.ts  # Custom scroll hook
├── utils/
│   └── animations.ts       # Animation variants
├── data/
│   └── portfolio.ts        # Portfolio data
└── types/
    └── index.ts            # TypeScript types
```

## 🎨 Customization

### Colors

Edit the CSS variables in [src/app/globals.css](src/app/globals.css):

```css
:root {
  --primary: #a855f7;
  --accent: #ec4899;
}
```

### Animation Speed

Modify the `duration` values in animation variants in [src/utils/animations.ts](src/utils/animations.ts).

### Component Styling

All components use Tailwind CSS classes for easy customization.

## 🐛 Troubleshooting

### Build Errors

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules
npm install

# Run dev server
npm run dev
```

### Port Already in Use

```bash
# Use different port
npm run dev -- -p 3001
```

## 📝 License

This project is open source and available under the MIT License.

## 🙋 Support

For issues or questions:
1. Check the code comments
2. Review Framer Motion documentation
3. Check Next.js documentation
4. Review the component implementation

## 🎓 Learning Resources

- [Framer Motion Docs](https://www.framer.com/motion/)
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)
- [React Docs](https://react.dev)

## ✨ Tips for Best Results

1. **Optimize Images**: Use WebP format for faster loading
2. **SEO**: Keep metadata and descriptions updated
3. **Performance**: Monitor with Lighthouse
4. **Analytics**: Add Google Analytics or Vercel Analytics
5. **Testing**: Test on different browsers and devices

---

**Happy Coding!** 🚀

Built with ❤️ using Next.js & Framer Motion

# Portfolio Configuration Guide

This guide will help you customize the portfolio with your own information and branding.

## Quick Start Customization

### 1. Update Your Portfolio Data

Open `src/data/portfolio.ts` and update the following arrays:

#### Projects
```typescript
export const projects: Project[] = [
  {
    id: 1,
    title: "Your Project Title",
    description: "Brief description of the project",
    image: "/images/project-1.jpg",
    category: "Full Stack",
    tags: ["React", "Node.js", "MongoDB"],
    link: "https://your-project-demo.com",
    github: "https://github.com/yourname/project",
  },
  // Add more projects...
];
```

#### Skills
```typescript
export const skills: Skill[] = [
  { id: 1, name: "React", level: 95, category: "Frontend" },
  // Update with your skills and proficiency levels (0-100)
];
```

#### Experience
```typescript
export const experience: Experience[] = [
  {
    id: 1,
    title: "Your Job Title",
    company: "Company Name",
    duration: "2020 - Present",
    description: "What you did at this company",
    achievements: [
      "Achievement 1",
      "Achievement 2",
      "Achievement 3",
    ],
  },
  // Add more experiences...
];
```

#### Education
```typescript
export const education: Education[] = [
  {
    id: 1,
    degree: "Bachelor's in Computer Science",
    school: "University Name",
    year: "2020",
    description: "Graduated with honors",
  },
  // Add more education...
];
```

#### Testimonials
```typescript
export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Client Name",
    role: "CEO",
    company: "Company Name",
    message: "Amazing developer who delivered on time!",
  },
  // Add more testimonials...
];
```

### 2. Update Hero Section

Edit `src/components/sections/Hero.tsx`:

```typescript
const name = "Your Name";  // Change this
const title = "Your Title";  // e.g., "Full Stack Developer"
const subtitle = "Your subtitle...";  // e.g., "Specializing in React and Node.js"
```

### 3. Update About Section

Edit `src/components/sections/About.tsx`:

- Update the bio text
- Update the timeline items
- Add/remove stats as needed
- Replace the image placeholder with your actual image

### 4. Update Contact Information

Edit `src/components/sections/Contact.tsx`:

```typescript
// Update these in the contact info section
email: "your-email@example.com",
phone: "+1 (234) 567-890",
location: "Your City, Your Country",
```

### 5. Update Footer

Edit `src/components/sections/Footer.tsx`:

```typescript
const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/yourname",
    icon: "github",
  },
  // Update all social links with your profiles
];

const quickLinks = [
  { name: "Home", href: "#home" },
  // Update as needed
];
```

### 6. Update Metadata

Edit `src/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Your Name - Your Title",
  description: "Your portfolio description...",
  keywords: "your, keywords, here",
};
```

## Style Customization

### Colors

Edit `src/app/globals.css`:

```css
:root {
  --primary: #a855f7;      /* Purple */
  --primary-dark: #7c3aed;
  --accent: #ec4899;       /* Pink */
}
```

### Dark Mode

The portfolio is set to dark mode by default. To change the overall background:

```css
body {
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
}
```

### Fonts

Update in `src/app/layout.tsx`:

```typescript
import { YourFont } from "next/font/google";

const yourFont = YourFont({
  variable: "--font-your-font",
  subsets: ["latin"],
});
```

## Animation Customization

### Animation Speed

Edit `src/utils/animations.ts`:

```typescript
export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" } // Change duration here
  },
};
```

### Particle Density

Edit `src/components/common/ParticleField.tsx`:

```typescript
const particleCount = 50;  // Increase for more particles, decrease for fewer
```

## Images

### Add Your Images

1. Create images for your projects
2. Place them in `public/images/`
3. Update references in `src/data/portfolio.ts`

Recommended image dimensions:
- Project images: 800x600px
- Profile image: 400x400px

### Using Next Image Component

For better performance, use Next.js Image:

```typescript
import Image from "next/image";

<Image
  src="/images/profile.jpg"
  alt="Profile"
  width={400}
  height={400}
/>
```

## SEO Optimization

1. **Update Meta Tags** in `src/app/layout.tsx`
2. **Add Open Graph Tags**
3. **Optimize Images** with Next.js Image
4. **Use Semantic HTML**
5. **Add JSON-LD Schema** (optional)

## Performance Optimization

### Code Splitting

Components are automatically code-split by Next.js.

### Image Optimization

```typescript
import Image from "next/image";

<Image
  src="/image.jpg"
  alt="description"
  width={800}
  height={600}
  priority // for above-the-fold images
/>
```

### CSS Optimization

- Tailwind CSS automatically purges unused styles
- Use CSS variables for theming

## Deployment Checklist

- [ ] Update all personal information
- [ ] Replace placeholder images
- [ ] Test all links
- [ ] Check mobile responsiveness
- [ ] Update social links
- [ ] Test form submission
- [ ] Check SEO meta tags
- [ ] Test animations on different browsers
- [ ] Optimize images
- [ ] Check Core Web Vitals

## Environment Variables

Create `.env.local` for environment variables:

```env
NEXT_PUBLIC_SITE_URL=https://yoursite.com
```

## Form Submission

The contact form currently shows a success message. To actually send emails, integrate with:

- **Nodemailer**: For server-side email
- **SendGrid**: Third-party email service
- **Resend**: Modern email API
- **Formspree**: No-code form backend

## Analytics

Add Google Analytics or Vercel Analytics to track visitors.

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## Troubleshooting

### Portfolio not loading

```bash
npm install
npm run dev
```

### Images not showing

- Check file paths in `src/data/portfolio.ts`
- Ensure images are in `public/images/`
- Clear Next.js cache: `rm -rf .next`

### Animations not smooth

- Check browser hardware acceleration is enabled
- Test on different browsers
- Reduce particle count for lower-end devices

---

Need help? Check the code comments in each component!

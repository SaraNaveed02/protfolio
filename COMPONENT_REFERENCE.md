# Component Reference Guide

Complete reference for all components, their features, and animation properties.

## 🎨 Common Components

### Button.tsx
**Purpose**: Reusable CTA button with magnetic hover effect

**Props**:
```typescript
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  href?: string;
  external?: boolean;
}
```

**Features**:
- Magnetic hover effect
- Three style variants
- Three size options
- Link support
- Smooth transitions

**Usage**:
```tsx
<Button variant="primary" size="lg">
  Click Me
</Button>
```

### MagneticCursor.tsx
**Purpose**: Creates magnetic cursor effect on hover

**Features**:
- Follows mouse movement
- Spring-based animation
- Smooth deceleration
- Customizable distance

**Usage**:
```tsx
<MagneticCursor>
  <Button>Magnetic Button</Button>
</MagneticCursor>
```

### ParticleField.tsx
**Purpose**: Animated background particles

**Features**:
- 50 floating particles
- Connection lines between nearby particles
- Responsive to window size
- Hardware accelerated
- Customizable particle count

**Customization**:
```typescript
const particleCount = 50;  // Change particle density
```

### ScrollIndicator.tsx
**Purpose**: Animated scroll-down indicator

**Features**:
- Bouncing arrow animation
- Text label
- Positioned at bottom of viewport
- Auto-hides on scroll

**Usage**:
```tsx
<ScrollIndicator />
```

## 📄 Section Components

### Hero.tsx
**Purpose**: Full-screen hero section with animations

**Features**:
- Letter-by-letter text reveal
- Particle background
- Animated CTA buttons
- Scroll indicator
- Decorative gradient animations
- Dark gradient background

**Customizable Variables**:
```typescript
const name = "John Doe";
const title = "Frontend Developer";
const subtitle = "Your subtitle here";
```

**Animations**:
- Text reveal: 0.05s per letter
- Button animation: Spring physics
- Decorative elements: 8-10s loop

### About.tsx
**Purpose**: About me section with timeline

**Features**:
- Image reveal animation
- Bio text with stagger
- Learning timeline
- Key statistics
- Scroll-triggered animations

**Content Items**:
- Profile image placeholder
- Bio paragraphs
- Timeline entries (6 by default)
- Statistics cards

**Animations**:
- Image fade-in on scroll
- Staggered text animations
- Timeline items slide from left/right
- Hover effects on cards

### Skills.tsx
**Purpose**: Showcase skills by category

**Features**:
- Skills grouped by category
- Progress bars animated on scroll
- Hover glow effects
- Skill level 0-100
- Four categories built-in

**Skills Structure**:
```typescript
{
  id: number;
  name: string;
  level: number;        // 0-100
  category: string;     // Frontend, Backend, Tools, Design
}
```

**Animations**:
- Progress bars animate to level value
- Cards hover up on mouse over
- Staggered card appearance

### Projects.tsx
**Purpose**: Interactive project showcase

**Features**:
- 3D tilt effect on hover
- Image zoom animation
- Animated overlay with details
- Category filtering
- Project tags and links
- Responsive grid

**Project Structure**:
```typescript
{
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  link?: string;
  github?: string;
}
```

**Animations**:
- 3D tilt on mouse move
- Image zoom: scale 1 → 1.1
- Overlay fade in on hover
- Category button transitions
- Tag animations on hover

### Experience.tsx
**Purpose**: Timeline of work experience and education

**Features**:
- Vertical timeline layout
- Alternating left/right cards
- Achievement bullet points
- Mobile responsive
- Separate education section
- Colored timeline dots

**Experience Items**:
- Work experience with achievements
- Education with degree info
- Timeline dots (purple for work, pink for education)

**Animations**:
- Cards slide from sides on scroll
- Timeline dots scale on hover
- Bullet points fade in with stagger
- Left/right alternation

### Testimonials.tsx
**Purpose**: Auto-rotating testimonial carousel

**Features**:
- 5-second auto-rotation
- Manual navigation with dots and arrows
- Smooth fade transitions
- Responsive design
- AnimatePresence mode for transitions

**Testimonial Structure**:
```typescript
{
  id: number;
  name: string;
  role: string;
  company: string;
  message: string;
  image?: string;
}
```

**Animations**:
- Fade transitions between testimonials
- Quote text fades in
- Author info slides up
- Navigation dots animate on click

### Contact.tsx
**Purpose**: Contact form with animations

**Features**:
- Animated form inputs
- Floating labels on focus
- Loading state with spinner
- Success animation
- Contact information section
- Form validation

**Form Fields**:
- Name (required)
- Email (required)
- Subject (required)
- Message (required)

**Animations**:
- Input focus animations
- Loading spinner
- Success state with checkmark
- Form field stagger

### Footer.tsx
**Purpose**: Site footer with social links

**Features**:
- Social icon animations
- Quick navigation links
- Back-to-top button
- Brand information
- Contact details
- Responsive layout

**Social Links**:
- GitHub
- LinkedIn
- Twitter
- Email

**Animations**:
- Icon hover effects (scale, rotate, color)
- Back-to-top button animation
- Link hover transitions

## 🎬 Animation Utilities

### animations.ts
Central animation definitions using Framer Motion Variants.

**Available Animations**:

1. **fadeInUp**
   - Fades in while sliding up
   - Duration: 0.6s
   - Easing: easeOut

2. **fadeInDown**
   - Fades in while sliding down
   - Duration: 0.6s

3. **fadeInLeft**
   - Fades in while sliding from left
   - Duration: 0.6s

4. **fadeInRight**
   - Fades in while sliding from right
   - Duration: 0.6s

5. **scaleIn**
   - Fades in while scaling up
   - Duration: 0.5s

6. **staggerContainer**
   - Orchestrates child animations
   - Stagger delay: 0.1s
   - Initial delay: 0.2s

7. **staggerItem**
   - Child item animation
   - Works with staggerContainer

8. **magneticButton**
   - Spring-based hover effect
   - Stiffness: 400
   - Damping: 10

## 🎯 Custom Hooks

### useScrollAnimation.ts

**Hook**: `useScrollAnimation()`
```typescript
const { ref, scrollYProgress } = useScrollAnimation();
```
Returns scroll progress and ref for element.

**Hook**: `useParallax(offset)`
```typescript
const { ref, y } = useParallax(50);
```
Creates parallax motion effect with configurable offset.

**Hook**: `useFadeInOnScroll()`
```typescript
const { ref, opacity } = useFadeInOnScroll();
```
Element fades in as it comes into view.

## 🗂️ Data Types

All TypeScript types defined in `src/types/index.ts`:

```typescript
interface Project { ... }
interface Skill { ... }
interface Experience { ... }
interface Education { ... }
interface Testimonial { ... }
```

## 🎨 Style Customization

### Colors (globals.css)
```css
:root {
  --primary: #a855f7;      /* Purple */
  --primary-dark: #7c3aed;
  --accent: #ec4899;       /* Pink */
}
```

### Available Gradient Classes
- `bg-linear-to-r` - Left to right
- `bg-linear-to-b` - Top to bottom
- `bg-linear-to-br` - Diagonal
- `bg-linear-to-t` - Bottom to top

## 📊 Animation Parameters

### Common Animation Durations
- Text reveal: 0.5s
- Section fade: 0.6s
- Scroll animations: varies
- Hover effects: 0.3s

### Easing Functions
- `easeOut` - Smooth deceleration
- `easeInOut` - Smooth both ends
- Spring physics - stiffness, damping

## 🔧 Component Extension

To create new animated components:

1. Import animation variants:
```typescript
import { fadeInUp, staggerContainer } from "@/utils/animations";
```

2. Use with motion components:
```typescript
<motion.div variants={fadeInUp}>
  Content
</motion.div>
```

3. Combine with custom animations:
```typescript
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

## 📱 Responsive Breakpoints

Tailwind breakpoints used:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

Example usage:
```tsx
<div className="text-lg md:text-2xl lg:text-4xl">
  Responsive text
</div>
```

---

For detailed component source code, see the files in `src/components/`.

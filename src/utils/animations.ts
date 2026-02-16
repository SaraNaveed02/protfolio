import { Variants } from "framer-motion";

// Animation variants for Framer Motion
// Reusable motion components and animation patterns

// export const fadeInUp: Variants = {
//   initial: { opacity: 0, y: 40 },
//   animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
//   exit: { opacity: 0, y: 40 },
// };

export const fadeInDown: Variants = {
  initial: { opacity: 0, y: -40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { opacity: 0, y: -40 },
};

export const fadeInLeft: Variants = {
  initial: { opacity: 0, x: -40 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { opacity: 0, x: -40 },
};

export const fadeInRight: Variants = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { opacity: 0, x: 40 },
};

export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, scale: 0.9 },
};

export const rotateInLeft: Variants = {
  initial: { opacity: 0, rotate: -10, x: -40 },
  animate: { opacity: 1, rotate: 0, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};


// Floating animation for particles/shapes
export const floatingAnimation = (duration = 4, distance = 20) => ({
  animate: {
    y: [0, distance, -distance, 0],
    transition: {
      duration,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
});

// Glow animation for interactive elements
export const glowAnimation = {
  hover: {
    boxShadow: "0 0 30px rgba(168, 85, 247, 0.6)",
    transition: { duration: 0.3 },
  },
};

// Magnetic button effect
export const magneticButton: Variants = {
  rest: { x: 0, y: 0 },
  hover: {
    x: 0,
    y: 0,
    transition: { type: "spring", stiffness: 400, damping: 10 },
  },
};

// Text reveal animation for hero section
export const textReveal: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

// Page transition
export const pageVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

// Scroll-based transform calculation
export const getScrollTransform = (
  scrollYProgress: any,
  inputRange: number[],
  outputRange: number[]
) => {
  return scrollYProgress.get
    ? scrollYProgress.get() * (outputRange[1] - outputRange[0]) + outputRange[0]
    : 0;
};

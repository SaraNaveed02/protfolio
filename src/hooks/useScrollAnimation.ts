import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * Custom hook for scroll-based animations
 * Returns scroll progress and transform values for animations
 */
export const useScrollAnimation = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return { ref, scrollYProgress };
};

/**
 * Custom hook for parallax effect
 * Creates a parallax motion effect based on scroll
 */
export const useParallax = (offset = 50) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

  return { ref, y };
};

/**
 * Custom hook for fade-in on scroll
 * Element fades in as it comes into view
 */
export const useFadeInOnScroll = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.1"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return { ref, opacity };
};

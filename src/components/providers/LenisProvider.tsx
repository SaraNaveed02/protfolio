"use client";

import { ReactNode, useEffect, useRef } from "react";
import Lenis from "lenis";

/**
 * Lenis Smooth Scroll Provider
 * Wraps the entire app to provide smooth scrolling
 * Features:
 * - Smooth scroll animations
 * - Better scroll performance
 * - Cross-browser compatibility
 */
export const LenisProvider = ({ children }: { children: ReactNode }) => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: false,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};

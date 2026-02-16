"use client";

import {
  Hero,
  About,
  Skills,
  Projects,
  Experience,
  Testimonials,
  Contact,
  Footer,
} from "@/components/sections";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Main Page Component
 * Orchestrates all portfolio sections with smooth transitions
 * Features:
 * - Full-screen hero section
 * - Animated sections on scroll
 * - Page transitions with AnimatePresence
 * - Optimized performance
 */
export default function Home() {
  return (
    <AnimatePresence mode="wait">
      <motion.main
        key="main"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full bg-gray-900"
      >
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Skills Section */}
        <Skills />

        {/* Projects Section */}
        <Projects />

        {/* Experience & Education */}
        <Experience />

        {/* Testimonials */}
        <Testimonials />

        {/* Contact Section */}
        <Contact />

        {/* Footer */}
        <Footer />
      </motion.main>
    </AnimatePresence>
  );
}

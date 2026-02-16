"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { staggerContainer, staggerItem } from "@/utils/animations";
import { testimonials } from "@/data/portfolio";

/**
 * Testimonials Section Component
 * Features:
 * - Auto-scrolling carousel
 * - Smooth fade transitions
 * - Manual navigation
 * - Responsive design
 */
export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-rotate testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const next = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="relative w-full  md:px-8 bg-gray-900"
    style={{padding:20,marginBottom:50}}>
      <div className="max-w-full mx-auto">
        {/* Section Title */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <motion.h2
            variants={staggerItem}
            className="text-5xl md:text-6xl font-bold text-white mb-4"
          >
            What Others Say
          </motion.h2>
          <motion.div
            variants={staggerItem}
            // className="w-24 h-1 bg-linear-to-r from-white to-gray-400 mx-auto "
          />
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative h-80 md:h-64 overflow-hidden flex flex-col justify-center items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: direction * 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <TestimonialCard testimonial={testimonials[currentIndex]} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <motion.div
          className="flex justify-center gap-3 mt-12"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              variants={staggerItem}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 h-2 bg-white"
                  : "w-2 h-2 bg-gray-600 hover:bg-gray-500"
              }`}
              style={{ borderRadius: "2px" }}
            />
          ))}
        </motion.div>

        {/* Navigation Arrows - Hidden on mobile */}
        <div className="hidden md:flex absolute top-1/2 left-0 right-0 justify-between px-4 pointer-events-none">
          <motion.button
            onClick={prev}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="pointer-events-auto p-3 rounded-full bg-white/20 hover:bg-white/40 border border-white/50 text-white transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </motion.button>

          <motion.button
            onClick={next}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="pointer-events-auto p-3 rounded-full bg-white/20 hover:bg-white/40 border border-white/50 text-white transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

interface TestimonialCardProps {
  testimonial: (typeof testimonials)[0];
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center h-full p-8"
    >
      {/* Quote */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-xl  md:text-2xl text-center text-gray-200 mb-8 italic max-w-3xl  leading-relaxed"
    >
        "{testimonial.message}"
      </motion.p>

      {/* Author Info */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-center"
      >
        <h4 className="text-lg font-bold text-white mb-1" >
          {testimonial.name}
        </h4>
        <p className="text-sm text-white">
          {testimonial.role} at {testimonial.company}
        </p>
      </motion.div>
    </motion.div>
  );
};

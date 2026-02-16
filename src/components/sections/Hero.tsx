"use client";

import { motion } from "framer-motion";
import { textReveal, staggerContainer, fadeInUp } from "@/utils/animations";
import { Button } from "@/components/common/Button";
import { ScrollIndicator } from "@/components/common/ScrollIndicator";
import { ParticleField } from "@/components/common/ParticleField";
import { MagneticCursor } from "@/components/common/MagneticCursor";

/**
 * Hero Section Component
 * Full-screen hero with:
 * - Animated text reveal (letter by letter)
 * - Floating particles background
 * - CTA buttons with magnetic effect
 * - Scroll indicator
 */
export const Hero = () => {
  const name = "Sara Naveed";
  const title = "Frontend Developer";
  const subtitle =
    "Crafting beautiful, performant web experiences with modern technologies";

  const nameLetters = name.split("");
  const titleLetters = title.split("");

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-linear-to-b from-black via-black to-gray-900">
      {/* Particle background */}
      <ParticleField />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-gray-900/20 via-transparent to-gray-900/20 pointer-events-none" />

      {/* Content */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="relative z-10 text-center px-4 max-w-4xl"
      >
        {/* Name - Letter by letter reveal */}
        <motion.div
          className="mb-8"
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.05,
              },
            },
          }}
        >
          <motion.h1 className="t  text-6xl md:text-7xl lg:text-8xl
  font-bold
  leading-[1.1]
  bg-clip-text text-transparent
  bg-linear-to-r from-white via-gray-300 to-white
  mb-4">
            {nameLetters.map((letter, index) => (
              <motion.span
                key={index}
                custom={index}
                className="inline-block"
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: index * 0.05,
                    duration: 0.5,
                    ease: "easeOut",
                  },
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.h1>
        </motion.div>

        {/* Role - Letter by letter reveal */}
        <motion.div
          className="mb-8 h-12"
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.03,
                delay: nameLetters.length * 0.05,
              },
            },
          }}
        >
          <motion.p className="text-3xl md:text-4xl font-light text-gray-300">
            {titleLetters.map((letter, index) => (
              <motion.span
                key={index}
                custom={index}
                className="inline-block"
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: (nameLetters.length + index) * 0.05,
                    duration: 0.5,
                    ease: "easeOut",
                  },
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.p>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={fadeInUp}
          className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed"
        >
          {subtitle}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={staggerContainer}
          className="h-20 flex flex-col sm:flex-row gap-6  justify-center items-center"
        >
          <motion.div
            variants={{
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
            }}
          >
            <MagneticCursor>
              <Button
                size="lg"
                variant="primary"
                className="w-30 h-10 text-sm"
              >
                View My Work
              </Button>
            </MagneticCursor>
          </motion.div>

          <motion.div
            variants={{
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
            }}
          >
            <MagneticCursor>
             <Button
  size="lg"
  variant="outline"
  className="w-30 h-10 text-sm"
>
  Get In Touch
</Button>

            </MagneticCursor>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <ScrollIndicator />

      {/* Decorative elements */}
      <motion.div
        className="absolute top-1/4 -left-48 w-96 h-96 bg-gray-700/10 rounded-full blur-3xl  pointer-events-none"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 -right-48 w-96 h-96 bg-gray-600/10 rounded-full blur-3xl pointer-events-none"
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </section>
  );
};

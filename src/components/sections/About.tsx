"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/utils/animations";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import blackman from "../../../public/images/black-man.jpg";

export const About = () => {
  const socialLinks = [
    { icon: <FaInstagram />, href: "https://www.instagram.com/sara_naveed_3/" },
    { icon: <FaLinkedinIn />, href: "https://www.linkedin.com/in/sara-naveed-2102a42b6/?skipRedirect=true" },
  ];

  return (
    <section
      className="relative w-full min-h-screen py-16 md:py-24 px-6 bg-gradient-to-t from-gray-900 via-gray-800 to-gray-900 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-64 md:w-125 h-64 md:h-125 bg-purple-500/5 blur-[80px] md:blur-[120px] -z-10" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Left Column: Image Area */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative group order-2 lg:order-1"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10">
              <img
                src={blackman.src}
                alt="Sara Naveed"
                className="w-full h-full object-cover grayscale contrast-125 transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay for aesthetic */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent" />
            </div>
          </motion.div>

          {/* Right Column: Content Area */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="lg:col-span-7 flex flex-col justify-center order-1 lg:order-2"
          >
            <motion.h2
              variants={staggerItem}
              className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter mb-4 text-white/90"
            >
              ABOUT ME
            </motion.h2>

            <motion.div variants={staggerItem} className="flex flex-col mb-6 md:mb-8">
              <span className="text-pink-500 font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-4">
                FRONTEND DEVELOPER
              </span>
              <div className="h-[2px] w-16 md:w-20 bg-pink-500/50" />
            </motion.div>

            <motion.div variants={staggerItem} className="space-y-4 md:space-y-6 max-w-xl text-gray-300">
              <p className="text-base md:text-lg leading-relaxed">
                I’m a passionate Frontend Developer with a strong focus on building responsive, user-friendly web applications. I specialize in HTML, CSS, JavaScript, TypeScript, React, Next.js, and Tailwind CSS.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                I enjoy turning complex problems into simple, intuitive designs and continuously learning modern technologies to enhance web experiences.
              </p>
            </motion.div>

            {/* Social Icons */}
            <motion.div variants={staggerItem} className="flex gap-6 mt-8 md:mt-10">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-gray-400 hover:text-pink-500 transition-all duration-300 transform hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
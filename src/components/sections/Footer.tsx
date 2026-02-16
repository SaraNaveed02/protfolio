"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/utils/animations";
// React Icons Imports
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { FiArrowUp } from "react-icons/fi";

export const Footer = () => {
  const socialLinks = [
    { name: "GitHub", url: "https://github.com/SaraNaveed02", icon: "github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/sara-naveed-2102a42b6/", icon: "linkedin" },
    { name: "Email", url: "mailto:saranaveed306@gmail.com", icon: "email" },
  ];

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative w-full bg-gray-900 border-t border-gray-800 overflow-hidden" style={{margin:10,padding:10}}>
      {/* Background Glow */}
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-purple-700/10 rounded-full blur-3xl pointer-events-none -z-10"
        animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Brand */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-2"
            style={{padding:10
            }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              Sara Naveed
            </h3>
            <p className="text-gray-400 font-medium">Frontend Developer & Creative Dev</p>
            <p className="text-gray-500 text-sm mt-1">
              Crafting beautiful web experiences
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:text-left flex flex-col md:items-start"
            style={{padding:10
            }}
          >
            <h4 className="text-white font-semibold mb-6">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((link, i) => (
                <SocialIcon key={i} link={link} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm order-2 md:order-1">
            © {new Date().getFullYear()} Sara Naveed. All rights reserved.
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-2 rounded-full bg-linaer-to-r from-purple-600 to-pink-600 text-white font-medium hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-300 order-1 md:order-2"
          >
            Back to Top
            <FiArrowUp className="w-4 h-4" />
          </motion.button>

          <p className="text-gray-500 text-sm order-3">
            Crafted with <span className="text-red-500">❤</span> using Next.js
          </p>
        </div>
      </div>
    </footer>
  );
};

interface SocialIconProps {
  link: { name: string; url: string; icon: string };
}

const SocialIcon = ({ link }: SocialIconProps) => {
  // Mapping icons to React Icons components
  const getIcon = () => {
    switch (link.icon) {
      case "github": return <FaGithub className="w-5 h-5" />;
      case "linkedin": return <FaLinkedinIn className="w-5 h-5" />;
      case "email": return <HiMail className="w-6 h-6" />; // Mail looks better slightly larger
      default: return null;
    }
  };

  return (
    <motion.a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      title={link.name}
      whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.15)", color: "#fff" }}
      whileTap={{ scale: 0.9 }}
      className="w-11 h-11 rounded-xl bg-white/5 text-gray-400 transition-all duration-300 flex items-center justify-center border border-white/10"
    >
      {getIcon()}
    </motion.a>
  );
};
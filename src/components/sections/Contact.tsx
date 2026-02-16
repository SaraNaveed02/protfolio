"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { staggerContainer, staggerItem } from "@/utils/animations";

/**
 * Contact Section Component 
 * Re-structured to match the uploaded layout while keeping your dark theme colors.
 */
export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "UserName",
    email: "UserEmail@gmail.com",
    subject: "I want you to hire me quickly",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitted(true);
    setIsLoading(false);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="relative w-full py-20 px-4 md:px-8 bg-gray-800 overflow-hidden">
      {/* Background Accent (Kept dark, but mimicking the split visual) */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gray-900/40 -z-10" />

      <div className="max-w-full mx-auto" style={{margin:20}}>
        {/* Section Title */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <motion.h2 variants={staggerItem} className="text-4xl md:text-5xl font-bold text-white mb-4" style={{margin:20}}>
            Get In Touch
          </motion.h2>
          <motion.p variants={staggerItem} className="text-gray-300 text-sm max-w-full  mx-auto leading-relaxed" style={{margin:10}} >
            We'll create high-quality linkable content and build at least 40 high-authority links to each
            asset, paving the way for you to grow your rankings, improve brand.
          </motion.p>
        </motion.div>

        {/* Main Card Container */}
        <div className="flex flex-col md:flex-row rounded-[32px] overflow-hidden bg-gray-700/30 border border-gray-700/50 backdrop-blur shadow-2xl" style={{padding:20}}>
          
          {/* Left Sidebar (Using your Teal logic but styled like the image) */}
          <div className="md:w-1/3 p-10 text-white relative">
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
          

            <div className="space-y-8 text-sm">
              <div className="flex items-center gap-4">
                <span className="opacity-70">📞</span>
                <div>
                  <p>+92071222800</p>
                  <p>+92071222800</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="opacity-70">✉️</span>
                <p>sranaveed306@gmail.com</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="opacity-70">📍</span>
                <p>Pakistan, Karachi</p>
              </div>
            </div>

            {/* Decorative Circle from the image */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/20 rounded-full blur-2xl" />
          </div>

          {/* Right Form Side */}
          <div className="md:w-2/3 p-8 md:p-12 bg-white/5 " style={{padding:20}}>
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border-b border-gray-600 focus-within:border-teal-500 transition-colors pb-2">
                  <label className="block text-[10px] uppercase tracking-widest text-teal-400 font-bold mb-1">Your Name</label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-transparent w-full outline-none text-white text-sm"
                  />
                </div>
                <div className="border-b border-gray-600 focus-within:border-teal-500 transition-colors pb-2">
                  <label className="block text-[10px] uppercase tracking-widest text-teal-400 font-bold mb-1">Your Email</label>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-transparent w-full outline-none text-white text-sm"
                  />
                </div>
              </div>

              <div className="border-b border-gray-600 focus-within:border-teal-500 transition-colors pb-2">
                <label className="block text-[10px] uppercase tracking-widest text-teal-400 font-bold mb-1">Your Subject</label>
                <input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-transparent w-full outline-none text-white text-sm"
                />
              </div>

              <div className="border-b border-gray-600 focus-within:border-teal-500 transition-colors pb-2 relative">
                <label className="block text-[10px] uppercase tracking-widest text-teal-400 font-bold mb-1">Message</label>
                <div className="flex items-center">
                  <input
                    placeholder="Write here your message"
                    className="bg-transparent w-full outline-none text-gray-400 text-sm py-2"
                  />
                  <span className="text-yellow-400">👆</span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gray-900 text-white w-auto h-10 rounded-lg font-bold text-sm shadow-lg shadow-teal-900/20"style={{padding:10}}
              >
                {isLoading ? "Sending..." : isSubmitted ? "Message Sent!" : "Send Message"}
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
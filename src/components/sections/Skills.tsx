"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { staggerContainer, staggerItem } from "@/utils/animations";
import { skills } from "@/data/portfolio";

export const Skills = () => {
  const ref = useRef(null);

  // Group skills by category
  const skillsByCategory = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    },
    {} as Record<string, typeof skills>,
  );

  const categories = Object.keys(skillsByCategory);

  return (
    <section
      className="relative w-full py-20 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-900 overflow-hidden"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Title */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 md:mb-16"
        >
          <motion.h2
            variants={staggerItem}
            className="text-4xl md:text-6xl font-bold text-white mb-4 text-left"
          >
            Skills & Expertise
          </motion.h2>
          <motion.div
            variants={staggerItem}
            className="w-20 md:w-24 h-1 bg-gradient-to-r from-white to-gray-400"
          />
        </motion.div>

        {/* Skills by Category */}
        <div className="space-y-12 md:space-y-16">
          {categories.map((category) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-6 md:mb-8 flex items-center gap-3">
                <span className="w-6 md:w-8 h-0.5 bg-purple-400" />
                {category}
              </h3>

              {/* Skills Grid */}
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10"
              >
                {skillsByCategory[category].map((skill, index) => (
                  <motion.div
                    key={skill.id}
                    variants={staggerItem}
                    className="group"
                  >
                    {/* Skill Card */}
                    <motion.div
                      className="relative p-5 md:p-6 rounded-xl bg-gray-700/30 border border-gray-600/50 overflow-hidden"
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Content */}
                      <div className="relative z-10">
                        <div className="flex justify-between items-center mb-4">
                          <h4 className="text-white font-semibold text-base md:text-lg">
                            {skill.name}
                          </h4>
                          <span className="text-white font-bold text-sm md:text-base">
                            {skill.level}%
                          </span>
                        </div>

                        {/* Progress Bar Container */}
                        <div className="w-full h-2 bg-gray-600/50 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-purple-400 to-pink-400"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: index * 0.05 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>

                      {/* Hover border effect */}
                      <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-purple-500/30 transition-all duration-300" />
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 md:mt-24 p-6 md:p-8 rounded-xl bg-gradient-to-r from-gray-700/20 to-gray-600/20 border border-white/10 mx-auto"
        >
          <p className="text-gray-300 text-center text-sm md:text-lg max-w-3xl mx-auto leading-relaxed">
            I'm always learning and expanding my skillset. Whether it's
            exploring new frameworks, diving into emerging technologies, or
            mastering best practices, I'm committed to continuous growth and
            delivering cutting-edge solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
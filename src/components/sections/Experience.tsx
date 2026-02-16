"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/utils/animations";
import { experience, education } from "@/data/portfolio";

export const Experience = () => {
  return (
    <section className="relative w-full py-20 px-6 md:px-8 bg-gray-900">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <motion.h2
            variants={staggerItem}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Experience & Education
          </motion.h2>
          <motion.div
            variants={staggerItem}
            className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500"
          />
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line - Mobile: Left | Desktop: Center */}
          <div className="absolute left-2 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-700 md:-translate-x-1/2" />

          {/* Experience Section */}
          <div className="space-y-12">
            {experience.map((item, index) => (
              <TimelineItem
                key={item.id}
                item={item}
                index={index}
                isEducation={false}
              />
            ))}

            {/* Education Title inside Timeline */}
            <div className="relative py-8">
               <div className="absolute left-0 md:left-1/2 -translate-x-1/2  hidden md:block" style={{paddingBottom:10}}>
                  <div className="bg-gray-900 px-4 py-1 border border-gray-700 rounded-full text-white font-bold">
                    EDUCATION
                  </div>
               </div>
               <h3 className="md:hidden text-2xl font-bold text-white pl-8">Education</h3>
            </div>

            {education.map((item, index) => (
              <TimelineItem
                key={item.id}
                item={item}
                index={index + experience.length}
                isEducation={true}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({ item, index, isEducation }: any) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`relative flex items-center justify-between md:justify-normal w-full mb-8 ${
        isEven ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Dot */}
      <div className="absolute left-2 md:left-1/2 w-4 h-4 rounded-full bg-purple-500 border-4 border-gray-900 z-10 -translate-x-1/2" />

      {/* Content Card */}
      <div className="ml-10 md:ml-0 md:w-[45%]">
        <motion.div
          whileHover={{ y: -5 }}
          className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 shadow-xl"
        >
          <span className="text-purple-400 text-xs font-bold tracking-widest uppercase">
             {isEducation ? (item as any).year : (item as any).duration}
          </span>
          <h3 className="text-xl font-bold text-white mt-1">
            {isEducation ? (item as any).degree : (item as any).title}
          </h3>
          <p className="text-gray-400 font-medium mb-3">
            {isEducation ? (item as any).school : (item as any).company}
          </p>
          
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            {item.description}
          </p>

          {/* Achievements (only if experience) */}
          {!isEducation && item.achievements && (
            <ul className="space-y-2">
              {item.achievements.map((ach: string, i: number) => (
                <li key={i} className="text-gray-400 text-xs flex gap-2">
                  <span className="text-purple-500">▹</span>
                  {ach}
                </li>
              ))}
            </ul>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};
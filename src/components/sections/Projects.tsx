"use client";

import { motion } from "framer-motion";
import type { Transition } from "framer-motion";
import { useRef, useState } from "react";
import { staggerContainer, staggerItem } from "@/utils/animations";
import { projects, categories } from "@/data/portfolio";
// Agar aap Next.js use kar rahe hain toh ise uncomment karein:
// import Image from "next/image"; 

const spring: Transition = {
  type: "spring",
  damping: 10,
  stiffness: 100,
};

export const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section className="relative w-full py-20 px-4 md:px-8 bg-gray-900" style={{marginBottom:20,padding:10}}>
      <div className="max-w-7xl mx-auto">
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
            className="text-5xl md:text-6xl font-bold text-white mb-4"
          >
            Featured Projects
          </motion.h2>
          <motion.div
            variants={staggerItem}
            className="w-24 h-1 bg-gradient-to-r from-white to-gray-400"
          />
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-white text-black shadow-lg shadow-white/20"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isHovered={hoveredId === project.id}
              onHover={setHoveredId}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// --- IS SECTION KO DHYAN SE DEKHEIN ---
const ProjectCard = ({ project, index, isHovered, onHover }: any) => {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    setTilt({ x: (e.clientY - centerY) * 0.1, y: (e.clientX - centerX) * -0.1 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { setTilt({ x: 0, y: 0 }); onHover(null); }}
      onMouseEnter={() => onHover(project.id)}
      animate={{ rotateX: tilt.x, rotateY: tilt.y }}
      className="group relative w-80 h-80 rounded-2xl overflow-hidden cursor-pointer bg-gray-800 border border-gray-700"
      style={{ perspective: "1000px",padding:20 }}
      
    >
      {/* IMAGE YAHAN HAI */}
      <motion.div 
        className="absolute inset-0 w-80 h-full"
        animate={{ scale: isHovered ? 1.1 : 1 }}
        transition={{ duration: 0.6 }}
      >
        <img 
          src={project.image} 
          alt={project.title}
          className="w-80 h-full object-cover"

          onError={(e) => {
            // Agar image load na ho toh fallback dikhayega
            (e.target as HTMLImageElement).src = "https://via.placeholder.com/400x600?text=No+Image";
          }}
        />
      </motion.div>

      {/* Dark Overlay taaki text nazar aaye */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent z-10" />

      {/* Text Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end z-20"           style={{padding:10}}
      >
        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-sm text-gray-300 mb-4 line-clamp-2">{project.description}</p>
        
        <div className="flex gap-3">
          <a href={project.link}  target="_blank" className="text-xs font-bold bg-white text-black rounded-lg hover:bg-gray-200 transition-colors" style={{padding:8,marginTop:5}}>View Live</a>
          <a href={project.github} target="_blank" className="text-xs font-bold  border border-white text-white rounded-lg hover:bg-white/10 transition-colors" style={{padding:8,marginTop:5}}>GitHub</a>
        </div>
      </div>
    </motion.div>
  );
};
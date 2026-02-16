import { motion } from "framer-motion";

/**
 * Animated scroll indicator component
 * Shows a smooth bouncing arrow that indicates scroll
 */
export const ScrollIndicator = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center absolute bottom-8 left-1/2 transform -translate-x-1/2"
      animate={{ y: [0, 12, 0] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    >
      <div className="text-xs text-gray-400 mb-2 uppercase tracking-wider font-semibold">
        Scroll
      </div>
      <svg
        className="w-5 h-5 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        />
      </svg>
    </motion.div>
  );
};

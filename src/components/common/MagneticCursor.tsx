import { motion } from "framer-motion";
import { useState, useRef, ReactNode } from "react";

interface MagneticCursorProps {
  children: ReactNode;
  className?: string;
}

/**
 * Component that creates a magnetic cursor effect on hover
 * The child element follows the cursor with a smooth delay
 */
export const MagneticCursor = ({ children, className = "" }: MagneticCursorProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const elementRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!elementRef.current) return;

    const rect = elementRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const x = event.clientX - centerX;
    const y = event.clientY - centerY;

    // Limit the attraction distance
    const maxDistance = 30;
    const distance = Math.sqrt(x * x + y * y);
    const scale = Math.min(distance / maxDistance, 1);

    setMousePosition({
      x: x * scale * 0.2,
      y: y * scale * 0.2,
    });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={elementRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: mousePosition.x, y: mousePosition.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

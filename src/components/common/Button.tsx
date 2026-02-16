import { motion } from "framer-motion";
import { magneticButton } from "@/utils/animations";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  href?: string;
  external?: boolean;
}

export const Button = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  href,
  external = false,
}: ButtonProps) => {
  // Size classes
  const sizeClasses = {
    sm: "px-8 py-4 text-sm",
    md: "px-12 py-5 text-base",
    lg: "px-14 py-6 text-lg",
  };

  // Variant classes
  const variantClasses = {
    primary:
      "bg-gradient-to-r from-white to-gray-200 text-black hover:shadow-lg hover:shadow-white/50",
    secondary:
      "bg-gradient-to-r from-gray-700 to-gray-900 text-white hover:shadow-lg hover:shadow-gray-500/50",
    outline:
      "border border-white text-white hover:bg-white/10 hover:border-white",
  };

  const Component = href ? "a" : "button";

  const buttonClass = `
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    font-semibold rounded-lg
    transition-all duration-300 ease-out
    cursor-pointer
    ${className}
  `;

  return (
    <motion.div
      variants={magneticButton}
      initial="rest"
      whileHover="hover"
      whileTap={{ scale: 0.95 }}
    >
      <Component
        onClick={onClick}
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={buttonClass}
      >
        {children}
      </Component>
    </motion.div>
  );
};

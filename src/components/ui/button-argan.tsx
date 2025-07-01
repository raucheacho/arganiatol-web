import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "gold" | "transparent" | "light";
  size?: "sm" | "md" | "lg" | "full";
  children: React.ReactNode;
  className?: string;
}

const baseStyles =
  "relative group focus:outline-none cursor-pointer inline-flex items-center justify-center font-medium text-sm";

const variants = {
  light: "bg-[#FFF6DA] text-black",
  default: "bg-black text-white",
  gold: "bg-[#E5BC38] text-black",
  transparent: "bg-transparent text-black",
};

const sizes = {
  sm: "w-24 h-9",
  md: "w-36 h-11",
  lg: "w-48 h-12",
  full: "w-full h-11",
};

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = "gold",
  size = "md",
  ...props
}) => {
  return (
    <button {...props} className={cn(baseStyles, sizes[size], className)}>
      {/* Background */}
      <span
        className={cn(
          "absolute inset-0 transition-transform duration-300 group-hover:translate-x-[2%] group-hover:translate-y-[5%]",
          variants[variant]
        )}
      />
      {/* Border */}
      <span className="absolute inset-0 border border-black translate-x-[-2%] translate-y-[-14%] md:translate-x-[-2%] md:translate-y-[-12%] z-0" />
      {/* Content */}
      <span className="absolute inset-0 flex items-center justify-center z-10">
        {children}
      </span>
    </button>
  );
};

export default Button;

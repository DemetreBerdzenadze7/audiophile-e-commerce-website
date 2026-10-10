import type { ReactNode } from "react";

type Variant = "primary" | "dark" | "outline";

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}

const variants: Record<Variant, string> = {
  primary: "bg-orange text-white hover:bg-orange-light",
  dark: "bg-black text-white hover:bg-gray-dark",
  outline: "border border-black text-black hover:bg-black hover:text-white",
};

const Button = ({ children, variant = "primary", className = "" }: ButtonProps) => {
  return (
    <button
      type="button"
      className={`w-40 h-12 text-subtitle font-bold uppercase cursor-pointer transition-colors ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;

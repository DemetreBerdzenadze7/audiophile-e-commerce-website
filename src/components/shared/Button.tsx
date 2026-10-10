import type { ReactNode } from "react";
import { Link } from "react-router";

type Variant = "primary" | "dark" | "outline";

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  to?: string;
  onClick?: () => void;
  fullWidth?: boolean;
}

const variants: Record<Variant, string> = {
  primary: "bg-orange text-white hover:bg-orange-light",
  dark: "bg-black text-white hover:bg-gray-dark",
  outline: "border border-black text-black hover:bg-black hover:text-white",
};

const Button = ({
  children,
  variant = "primary",
  className = "",
  onClick,
  to,
  fullWidth = false,
}: ButtonProps) => {
  const classes = `flex items-center justify-center ${fullWidth ? "w-full" : "w-40"} h-12 text-subtitle font-bold uppercase transition-colors ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

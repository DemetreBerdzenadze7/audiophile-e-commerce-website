import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className = "" }: ContainerProps) => {
  return (
    <div className={`w-full max-w-content mx-auto px-6 md:px-10 lg:px-0 ${className}`}>
      {children}
    </div>
  );
};

export default Container;

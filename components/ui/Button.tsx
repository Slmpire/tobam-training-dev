import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "dark" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export default function Button({
  children,
  variant = "dark",
  size = "md",
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const base = "inline-flex items-center justify-center font-semibold font-nunito-sans transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded";

  const variants = {
    dark: "bg-primary text-white hover:bg-primary-darkest active:scale-95",
    outline: "border border-primary text-primary hover:bg-primary hover:text-white active:scale-95",
  };

  const sizes = {
    sm: "px-4 h-10 text-sm",
    md: "px-6 h-12 text-base",
    lg: "px-8 h-14 text-lg",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
}
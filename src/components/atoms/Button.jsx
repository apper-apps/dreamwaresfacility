import React, { forwardRef } from "react";
import { cn } from "@/utils/cn";

const Button = forwardRef(({ 
  children, 
  variant = "primary", 
  size = "default", 
  className = "",
  disabled = false,
  ...props 
}, ref) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-gradient-to-r from-primary to-accent text-white shadow-lg hover:shadow-xl transform hover:scale-105 focus:ring-primary",
    secondary: "bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white focus:ring-primary",
    outline: "border-2 border-gray-300 text-gray-700 hover:border-primary hover:text-primary focus:ring-primary",
    ghost: "text-gray-700 hover:bg-gray-100 focus:ring-gray-300"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    default: "px-8 py-3 text-base",
    lg: "px-10 py-4 text-lg"
  };

  return (
    <button
      ref={ref}
      disabled={disabled}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
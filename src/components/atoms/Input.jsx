import React, { forwardRef } from "react";
import { cn } from "@/utils/cn";

const Input = forwardRef(({ 
  className = "",
  type = "text",
  label,
  error,
  required = false,
  ...props 
}, ref) => {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-semibold text-secondary">
          {label}
          {required && <span className="text-error ml-1">*</span>}
        </label>
      )}
<input
        ref={ref}
        type={type}
        className={cn(
          "w-full px-4 py-3 sm:py-4 border-2 border-gray-300 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors duration-200 outline-none bg-white text-base sm:text-sm min-h-[44px]",
          error && "border-error focus:border-error focus:ring-error/20",
          className
        )}
        {...props}
      />
      {error && (
        <p className="text-sm text-error font-medium">{error}</p>
      )}
    </div>
  );
});

Input.displayName = "Input";

export default Input;
import React from "react";
import { NavLink } from "react-router-dom";
import { cn } from "@/utils/cn";

const NavigationItem = ({ item, className = "", onClick }) => {
  return (
    <NavLink
      to={item.href}
      onClick={onClick}
      className={({ isActive }) =>
        cn(
          "text-secondary hover:text-primary transition-colors duration-200 font-medium relative py-2",
          isActive && "text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-primary after:to-accent",
          className
        )
      }
    >
      {item.label}
    </NavLink>
  );
};

export default NavigationItem;
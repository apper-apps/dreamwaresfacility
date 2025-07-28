import React from "react";
import ApperIcon from "@/components/ApperIcon";

const Empty = ({ 
  title = "No items found", 
  description = "Get started by adding your first item", 
  actionLabel = "Get Started",
  onAction,
  icon = "Package",
  className = "" 
}) => {
  return (
    <div className={`text-center py-20 ${className}`}>
      <div className="max-w-md mx-auto">
        <div className="bg-surface rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
          <ApperIcon name={icon} size={40} className="text-gray-400" />
        </div>
        <h3 className="text-2xl font-bold text-secondary mb-4">{title}</h3>
        <p className="text-gray-600 mb-8">{description}</p>
        {onAction && (
          <button
            onClick={onAction}
            className="btn-primary inline-flex items-center gap-2"
          >
            <ApperIcon name="Plus" size={20} />
            {actionLabel}
          </button>
        )}
      </div>
    </div>
  );
};

export default Empty;
import React from "react";
import ApperIcon from "@/components/ApperIcon";

const Error = ({ message = "Something went wrong", onRetry, className = "" }) => {
  return (
    <div className={`text-center py-20 ${className}`}>
      <div className="max-w-md mx-auto">
        <div className="bg-error/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
          <ApperIcon name="AlertTriangle" size={40} className="text-error" />
        </div>
        <h3 className="text-2xl font-bold text-secondary mb-4">Oops! Something went wrong</h3>
        <p className="text-gray-600 mb-8">{message}</p>
        {onRetry && (
          <button
            onClick={onRetry}
            className="btn-primary inline-flex items-center gap-2"
          >
            <ApperIcon name="RefreshCw" size={20} />
            Try Again
          </button>
        )}
      </div>
    </div>
  );
};

export default Error;
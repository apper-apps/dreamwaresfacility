import React from "react";

const Loading = ({ className = "" }) => {
  return (
    <div className={`animate-pulse ${className}`}>
      {/* Hero Section Skeleton */}
      <div className="bg-gradient-to-br from-primary to-accent relative overflow-hidden">
        <div className="section-container py-24">
          <div className="text-center space-y-6">
            <div className="h-16 bg-white/20 rounded-lg mx-auto max-w-4xl"></div>
            <div className="h-6 bg-white/20 rounded mx-auto max-w-2xl"></div>
            <div className="h-6 bg-white/20 rounded mx-auto max-w-xl"></div>
            <div className="h-12 bg-white/20 rounded-lg mx-auto w-48 mt-8"></div>
          </div>
        </div>
      </div>

      {/* Services Section Skeleton */}
      <div className="py-20 bg-surface">
        <div className="section-container">
          <div className="text-center mb-16">
            <div className="h-12 bg-gray-200 rounded mx-auto max-w-md mb-4"></div>
            <div className="h-6 bg-gray-200 rounded mx-auto max-w-2xl"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-white p-8 rounded-xl shadow-md">
                <div className="w-16 h-16 bg-gray-200 rounded-lg mb-6"></div>
                <div className="h-6 bg-gray-200 rounded mb-4"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  <div className="h-4 bg-gray-200 rounded w-4/6"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section Skeleton */}
      <div className="py-16 bg-white">
        <div className="section-container">
          <div className="grid md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="text-center">
                <div className="h-16 bg-gray-200 rounded mb-4"></div>
                <div className="h-6 bg-gray-200 rounded mx-auto max-w-24"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
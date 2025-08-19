"use client";

import React from "react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      {/* Spinning DevSpark Logo or Initial */}
      <div className="w-20 h-20 mb-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

      {/* Optional Text */}
      <p className="text-lg font-semibold text-gray-700 animate-pulse">
        Loading DevSpark...
      </p>
    </div>
  );
}

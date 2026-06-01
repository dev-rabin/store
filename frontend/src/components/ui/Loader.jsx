import React from "react";

const Loader = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex flex-col items-center gap-4">
        <div className="w-14 h-14 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>

        <p className="text-gray-600 font-medium">Loading Cart...</p>
      </div>
    </div>
  );
};

export default Loader;

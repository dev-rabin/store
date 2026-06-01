import React from "react";

const Loader = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default Loader;

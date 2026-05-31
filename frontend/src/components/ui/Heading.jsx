import React from "react";

const Heading = ({ title }) => {
  return (
    <div className="flex items-center gap-3 mb-3">
      <div className="w-4 h-8 bg-red-500 rounded"></div>
      <span className="text-red-500 font-semibold">{title}</span>
    </div>
  );
};

export default Heading;

import React from "react";
import { useNavigate } from "react-router-dom";

const ViewAllBtn = ({ url }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(url)}
      className="bg-red-500 hover:bg-red-600 transition-all duration-300 text-white px-6 py-1.5 rounded-lg"
    >
      View All Products
    </button>
  );
};

export default ViewAllBtn;

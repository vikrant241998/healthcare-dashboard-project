import React from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f172a] !px-4">
      <div className="text-center text-white">
        <h1 className="text-[120px] font-extrabold leading-none text-blue-500 drop-shadow-md">
          404
        </h1>
        <h2 className="text-3xl sm:text-4xl font-bold !mt-4">
          Oops! Page Not Found
        </h2>
        <p className="text-lg text-gray-300 !mt-2 max-w-md mx-auto">
          The page you're looking for doesn’t exist or has been moved.
        </p>

        <button
          onClick={() => navigate("/")}
          className="!mt-6 !px-6 !py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg transition"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;

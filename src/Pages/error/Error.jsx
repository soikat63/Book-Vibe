import React from "react";
import { Link } from "react-router";

const Error = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#4F39F6] to-[#9514FA] px-6">
      <div className="text-center text-white max-w-xl">
        {/* Error Code */}
        <h1 className="text-[120px] font-extrabold leading-none tracking-tight">
          404
        </h1>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mt-4">
          Oops! Page not found
        </h2>

        {/* Description */}
        <p className="mt-4 text-gray-200 text-lg">
          The page you are looking for doesn’t exist or has been moved. Let’s
          get you back on track.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="inline-block mt-8 px-6 py-3 bg-white text-[#4F39F6] font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
        >
          Go Back Home
        </Link>

        
      </div>
    </div>
  );
};

export default Error;

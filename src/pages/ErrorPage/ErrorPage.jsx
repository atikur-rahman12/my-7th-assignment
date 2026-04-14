import React from "react";
import { FiAlertTriangle } from "react-icons/fi";

import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-lineare-to-br from-slate-950 via-slate-900 to-slate-950 px-4">
      <div className="text-center bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl rounded-3xl p-10 max-w-md w-full">
        <div className="flex justify-center mb-6">
          <div className="p-5 rounded-full bg-red-500/10 animate-pulse">
            <FiAlertTriangle size={50} className="text-red-400" />
          </div>
        </div>

        <h1 className="text-7xl font-extrabold text-[#244D3F] tracking-widest">
          404
        </h1>

        <h2 className="text-2xl font-semibold text-[#244D3F] mt-2">
          Page Not Found
        </h2>

        <p className="text-gray-400 mt-4 text-sm leading-relaxed">
          The page you are looking for doesn’t exist or has been moved. Please
          check the URL or go back to homepage.
        </p>

        <div className="mt-8">
          <Link
            to="/"
            className="inline-block px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition-all text-white font-medium shadow-lg hover:scale-105"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;

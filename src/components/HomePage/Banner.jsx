import React from "react";
import { FaPlus } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="hero bg-base-200">
      <div className="mt-20">
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold">
              Friends to keep close in your life
            </h1>
            <p className="py-6">
              Your personal shelf of meaningful connections. Browse, tend, <br /> and
               nurture the relationships that matter most.
            </p>
            <button className="btn bg-[#244D3F] text-white font-semibold">
              {" "}
              <FaPlus /> Add a Friend
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

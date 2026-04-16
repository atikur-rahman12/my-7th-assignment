import React from "react";
import Chart from "../../components/States/Chart";

const States = () => {
  return (
    <div className="bg-base-200">
      <div className="p-15 container mx-auto">
        <h1 className="text-4xl text-[#1F2937] font-bold mb-4">
          Friendship Analytics
        </h1>
        <div className="bg-base-100 p-5 shadow-lg">
          <h2 className="text-xl font-medium text-[#244D3F]">
            By Interaction Type
          </h2>

          <div>
            <Chart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default States;

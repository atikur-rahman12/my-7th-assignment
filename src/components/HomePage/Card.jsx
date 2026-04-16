import React from "react";

const Card = () => {
  return (
    <div className="bg-base-200">
      <div className="p-15 container mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="card py-10 bg-base-100 card-lg shadow-sm">
          <div className="card-body flex justify-center items-center text-center h-full ">
            <h2 className="text-3xl font-bold">10</h2>
            <p className="text-gray-500 text-lg">Total Friends</p>
          </div>
        </div>
        <div className="card py-10 bg-base-100 card-lg shadow-sm">
          <div className="card-body flex justify-center items-center text-center h-full ">
            <h2 className="text-3xl font-bold">3</h2>
            <p className="text-gray-500 text-lg">On Track</p>
          </div>
        </div>
        <div className="card py-10 bg-base-100 card-lg shadow-sm">
          <div className="card-body flex justify-center items-center text-center h-full ">
            <h2 className="text-3xl font-bold">6</h2>
            <p className="text-gray-500 text-lg">Need Attention</p>
          </div>
        </div>
        <div className="card py-10 bg-base-100 card-lg shadow-sm">
          <div className="card-body flex justify-center items-center text-center h-full ">
            <h2 className="text-3xl font-bold">12</h2>
            <p className="text-gray-500 text-lg">Interactions This Month</p>
          </div>
        </div>
      </div>
      <hr className="container mx-auto border-t-2 border-gray-300" />
    </div>
  );
};

export default Card;

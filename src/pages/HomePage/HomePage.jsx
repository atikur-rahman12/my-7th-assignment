import React, { Suspense } from "react";
import Banner from "../../components/HomePage/Banner";
import Card from "../../components/HomePage/Card";
import AllFriends from "../../components/HomePage/AllFriends";

const Home = () => {
  return (
    <div>
      <Banner />
      <Card />
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        }
      >
        <AllFriends />
      </Suspense>
    </div>
  );
};

export default Home;

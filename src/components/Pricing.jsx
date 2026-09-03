import React from "react";
import PriceCard from "../layouts/PriceCard";

const Pricing = () => {
  return (
    <div className=" bg-gradient-to-r from-[#000000]  to-[#3533cd] text-white pt-32 pb-8">
      <div className="px-4 sm:container">
        <h1 className=" font-bold text-5xl text-center">Our Pricing Plans</h1>

        <p className=" text-center font-semibold py-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
          explicabo?
        </p>

        <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <PriceCard price="30" plan="Basic" />
          <PriceCard price="50" plan="Premium" />
          <PriceCard price="70" plan="Standard" />
        </div>
      </div>
    </div>
  );
};

export default Pricing;

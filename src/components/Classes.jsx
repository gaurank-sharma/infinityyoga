import React from "react";
import img from "../assets/img/classes.jpg";

const Classes = () => {
  return (
    <div className=" bg-gradient-to-r from-[#000000]  to-[#3533cd] text-white pt-10">
      <div className="container flex flex-col-reverse md:flex-row justify-center md:gap-40">
        {/* content section  */}
        <div className=" w-full md:w-2/4 space-y-10 pt-12 lg:pt-24">
          <h1 className="text-4xl lg:text-5xl font-bold">
            How we conduct our classes
          </h1>
          <p className="text-base lg:text-xl font-semibold">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed nam
            ipsam beatae nostrum ad facilis quasi earum dolores eaque optio
            nobis, cum ipsum et aut quisquam quia laudantium libero tempora.
          </p>
          <p className="text-xs lg:text-base">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
            nemo deleniti asperiores laboriosam fuga ut quam alias maiores?
            Perspiciatis iure deserunt quidem voluptas obcaecati unde reiciendis
            doloremque, aliquam explicabo, commodi nesciunt consequuntur labore.
            Labore aliquam quis quisquam dolor laboriosam delectus.
          </p>
        </div>

        {/* img section  */}
        <div className="w-full md:w-2/4 lg:w-1/4">
          <img className=" rounded-lg" src={img} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Classes;

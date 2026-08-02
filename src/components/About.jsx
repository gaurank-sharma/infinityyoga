import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-r from-[#000000] to-[#3533cd] text-white px-4 py-10 md:px-12">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center md:justify-between md:gap-20">
        {/* Text section */}
        <div className="w-full md:w-1/2 space-y-6 md:pr-8 mt-8 md:mt-0">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center md:text-left">
            About Us
          </h1>
          <p className="text-base sm:text-lg font-semibold italic text-center md:text-left">
            Infinity Yoga - Yoga without limits
          </p>
          <p className="text-sm sm:text-base font-medium text-center md:text-left">
            At Infinity Yoga, we believe that yoga is more than just a physical
            practice – it's a way of life. Whether you're looking to improve
            your flexibility, reduce stress, heal emotionally, or just find a
            moment of peace, yoga is the answer to everything.
          </p>
          <p className="text-sm sm:text-base font-semibold text-center md:text-left">
            We welcome all levels – from beginners taking their first breath on
            the mat to advanced yogis deepening their practice. Our sessions
            combine traditional wisdom with modern science, offering a holistic
            approach that nurtures the body, mind, and soul. Join us and
            experience how yoga can truly be for everything – anytime,
            anywhere, for everyone.
          </p>

          <div className="flex justify-center md:justify-start pt-4">
{/*             <button
              className="border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition"
              onClick={() => navigate("/explore")}
            >
              Explore More
            </button> */}
          </div>
        </div>

        {/* Image section */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            className="rounded-lg w-full max-w-xs sm:max-w-sm md:max-w-md object-cover"
            src="/about_us.jpg"
            alt="Infinity Yoga"
          />
        </div>
      </div>
    </div>
  );
};

export default About;

import React from 'react';
import { GiLotus, GiMeditation, GiAlarmClock, GiTeacher } from 'react-icons/gi';
import { FaRegSmile, FaMapMarkedAlt } from 'react-icons/fa';

const YogaBenefits = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-12 lg:px-24">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <h3 className="text-blue-950 font-semibold text-sm md:text-lg uppercase tracking-widest">Discover Wellness</h3>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">Why Choose 1-on-1 Yoga Sessions?</h2>
        <p className="mt-4 text-gray-600">
          Unlock your full potential with sessions that align with your body, energy, and lifestyle.
        </p>
      </div>

      {/* Content */}
      <div className="mt-16 flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
        {/* Left Benefits */}
        <div className="flex flex-col gap-8 max-w-sm">
          <BenefitCard
            icon={<GiLotus className="text-blue-950 text-2xl" />}
            title="Deeper Mind-Body Connection"
            desc="Learn mindful movements that sync your breath and body with intention."
          />
          <BenefitCard
            icon={<GiTeacher className="text-blue-950 text-2xl" />}
            title="Experienced Guides"
            desc="Work with seasoned yoga coaches focused on your growth and wellbeing."
          />
          <BenefitCard
            icon={<GiAlarmClock className="text-blue-950 text-2xl" />}
            title="Flexible Scheduling"
            desc="Pick session times that suit your energy levels and daily rhythm."
          />
        </div>

        {/* Center Image */}
        <img
          src="/yoga_home.png" // Replace with your actual image path
          alt="Yoga Pose"
          className="w-72 md:w-96 object-contain"
        />

        {/* Right Benefits */}
        <div className="flex flex-col gap-8 max-w-sm">
          <BenefitCard
            icon={<GiMeditation className="text-blue-950 text-2xl" />}
            title="Stress Relief & Clarity"
            desc="Experience calm and improved focus with every guided breath."
          />
          <BenefitCard
            icon={<FaRegSmile className="text-blue-950 text-2xl" />}
            title="Boosted Confidence"
            desc="Build strength and resilience that shines both on and off the mat."
          />
          <BenefitCard
            icon={<FaMapMarkedAlt className="text-blue-950 text-2xl" />}
            title="Anywhere Access"
            desc="Practice from home, park, or studio — your wellness, your choice."
          />
        </div>
      </div>
    </section>
  );
};

const BenefitCard = ({ icon, title, desc }) => (
  <div className="flex items-start gap-4">
    <div className="mt-1">{icon}</div>
    <div>
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="text-gray-600">{desc}</p>
    </div>
  </div>
);

export default YogaBenefits;

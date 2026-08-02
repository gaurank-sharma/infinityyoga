import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  {
    image: "/yoga-teacher-training.jpg",
    heading: "Corporate Yoga Service",
    tagline: "Relaxed Minds, Productive Teams",
    description:
      "Boost workplace wellness with guided yoga sessions, reducing stress and improving productivity. Suitable for all employees."
  },
  {
    image: "/meditation.jpg",
    heading: "Meditation",
    tagline: "Find Your Inner Calm, Anytime",
    description:
      "Guided meditation sessions to reduce stress, enhance focus, and cultivate inner peace for a balanced life."
  },
  {
    image: "/online.jpg",
    heading: "Online Yoga Classes",
    tagline: "Yoga Anytime, Anywhere",
    description:
      "Practice yoga anytime, anywhere with expert-led virtual classes. Improve flexibility, strength, and mindfulness at your pace."
  },
  {
    image: "/open.jpg",
    heading: "Open Yoga",
    tagline: "Explore. Breathe. Transform.",
    description:
      "Explore various yoga styles and techniques to improve physical and mental well-being, open to all experience levels."
  }
];


export default function ImageSlider() {
  const [current, setCurrent] = useState(0);

  // Auto-play effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-[60vh] md:h-[95vh] overflow-hidden shadow-lg mt-10">
      <AnimatePresence>
        <motion.img
          key={images[current].image}
          src={images[current].image}
          alt="Slide"
          loading="lazy"
          initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
          animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
          exit={{ clipPath: "inset(0% 0% 0% 100%)" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Overlay Text */}
      <div className="absolute w-full h-full bg-blue-900 opacity-45" />
       {/* Text Content */}
       <div className="absolute top-[20%] left-[3%] md:top-[12%] md:left-[5%] text-white p-4 w-[290px] md:w-[600px] text-left">
        <h2 className="text-2xl md:text-4xl font-bold">{images[current].heading}</h2>
        <h3 className="text-lg md:text-2xl italic mt-1">{images[current].tagline}</h3>
        <p className="text-sm md:text-lg mt-2">{images[current].description}</p>
        <button className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded">
          Book Demo
        </button>
      </div>
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="hidden md:block absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="hidden md:block absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full"
      >
        ▶
      </button>
    </div>
  );
}
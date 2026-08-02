import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

// Testimonials data
const testimonials = [
  {
    name: "Sumit",
    age: 22,
    feedback:
      "Yoga helped me manage my anxiety and improved my focus during college. I feel mentally refreshed every day.",
    rating: 5,
    image: "/images/sumit.jpg", // Replace with actual path
    youtube: ""
  },
  {
    name: "Himanshu",
    age: 23,
    feedback:
      "Practicing yoga daily cured my back pain and boosted my energy levels. Great for young professionals!",
    rating: 4.5,
    image: "/images/himanshu.jpg",
    youtube: "https://youtu.be/himanshu-yoga-review"
  },
  {
    name: "Niranjan",
    age: 48,
    feedback:
      "I was facing joint pain and stiffness. Yoga gave me my mobility back—absolutely life-changing.",
    rating: 4,
    image: "/images/niranjan.jpg",
    youtube: "https://youtu.be/niranjan-yoga-review"
  },
  {
    name: "Amar Singh",
    age: 70,
    feedback:
      "Yoga gave me strength and calmness. At 70, I feel healthier than ever. My sleep has improved too!",
    rating: 5,
    image: "/images/amar.jpg",
    youtube: "https://youtu.be/amar-yoga-review"
  },
  {
    name: "Lachho Devi",
    age: 65,
    feedback:
      "From knee pain to glowing health, yoga transformed my daily life. Highly recommend it to every elder.",
    rating: 4.5,
    image: "/images/lachho.jpg",
    youtube: "https://youtu.be/lachho-yoga-review"
  },
];

// Function to render stars
const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) stars.push(<FaStar key={i} className="text-yellow-400" />);
    else if (i - 0.5 === rating) stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
    else stars.push(<FaRegStar key={i} className="text-yellow-400" />);
  }
  return stars;
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Autoplay every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        (prev + (isMobile ? 1 : 3)) % testimonials.length
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [isMobile]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - (isMobile ? 1 : 3) + testimonials.length) % testimonials.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + (isMobile ? 1 : 3)) % testimonials.length
    );
  };

  const visibleTestimonials = isMobile
    ? [testimonials[currentIndex]]
    : testimonials.slice(currentIndex, currentIndex + 3).concat(
        currentIndex + 3 > testimonials.length
          ? testimonials.slice(0, (currentIndex + 3) % testimonials.length)
          : []
      );

  return (
    <section id="testimonials" className="bg-gray-50 py-16 overflow-hidden">
      <div className="container mx-auto text-center text-blue-950">
        <h4 className="text-3xl md:text-6xl font-bold mb-4">Testimonials</h4>
        <h2 className="text-xl md:text-3xl font-semibold mb-6">Yoga Changed Their Lives</h2>

        <div className="relative flex flex-wrap justify-center gap-6 mt-6">
          <AnimatePresence initial={false}>
            {visibleTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-r from-[#000000] to-[#3533cd] text-white p-6 rounded-xl shadow-lg w-80 relative"
              >
{/*                 <div className="flex justify-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-white"
                  />
                </div> */}
                <p className="italic text-base">"{testimonial.feedback}"</p>
                <h4 className="font-semibold mt-4">{testimonial.name}, Age {testimonial.age}</h4>
                <div className="flex justify-center mt-2">{renderStars(testimonial.rating)}</div>
                {/* <a
                  href={testimonial.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-sm bg-white text-blue-900 font-semibold px-4 py-2 rounded hover:bg-gray-200"
                >
                  Watch YouTube Review
                </a> */}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-4 mt-10">
          <button
            onClick={handlePrev}
            className="p-3 bg-blue-950 text-white rounded-full shadow-md"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={handleNext}
            className="p-3 bg-blue-950 text-white rounded-full shadow-md"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const categories = [
  { key: "corporate", label: "Corporate Sessions" },
  { key: "studio", label: "Studio Classes" },
  { key: "mass-event", label: "Group Events" },
  { key: "outdoor-event", label: "Outdoor Sessions" },
  { key: "home-practice", label: "Home Practice" },
];

const galleryImages = [
  { src: "/corporate-yoga/corporate-yoga-1.png", category: "corporate", alt: "Corporate yoga session 1" },
  { src: "/corporate-yoga/corporate-yoga-2.png", category: "corporate", alt: "Corporate yoga session 2" },
  { src: "/corporate-yoga/corporate-yoga-3.png", category: "corporate", alt: "Corporate yoga session 3" },

  { src: "/yoga-images/studio-1.png", category: "studio", alt: "Studio yoga class 1" },
  { src: "/yoga-images/studio-2.png", category: "studio", alt: "Studio yoga class 2" },
  { src: "/yoga-images/studio-3.png", category: "studio", alt: "Studio yoga class 3" },

  { src: "/yoga-images/mass-event-1.png", category: "mass-event", alt: "Group yoga event 1" },
  { src: "/yoga-images/mass-event-2.png", category: "mass-event", alt: "Group yoga event 2" },
  { src: "/yoga-images/mass-event-3.png", category: "mass-event", alt: "Group yoga event 3" },

  { src: "/yoga-images/outdoor-event-1.png", category: "outdoor-event", alt: "Outdoor yoga session 1" },
  { src: "/yoga-images/outdoor-event-2.png", category: "outdoor-event", alt: "Outdoor yoga session 2" },
  { src: "/yoga-images/outdoor-event-3.png", category: "outdoor-event", alt: "Outdoor yoga session 3" },
  { src: "/yoga-images/outdoor-event-4.png", category: "outdoor-event", alt: "Outdoor yoga session 4" },

  { src: "/yoga-images/home-practice-1.png", category: "home-practice", alt: "Home yoga practice 1" },
  { src: "/yoga-images/home-practice-2.png", category: "home-practice", alt: "Home yoga practice 2" },
  { src: "/yoga-images/home-practice-3.png", category: "home-practice", alt: "Home yoga practice 3" },
  { src: "/yoga-images/home-practice-4.png", category: "home-practice", alt: "Home yoga practice 4" },
  { src: "/yoga-images/home-practice-5.png", category: "home-practice", alt: "Home yoga practice 5" },
  { src: "/yoga-images/home-practice-6.png", category: "home-practice", alt: "Home yoga practice 6" },
  { src: "/yoga-images/home-practice-7.png", category: "home-practice", alt: "Home yoga practice 7" },
];

const GallerySlider = ({ label, images, onSelect }) => {
  const scrollRef = useRef(null);
  const [fitsWithoutScroll, setFitsWithoutScroll] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const checkFit = () => {
      setFitsWithoutScroll(el.scrollWidth <= el.clientWidth + 1);
    };

    checkFit();
    const observer = new ResizeObserver(checkFit);
    observer.observe(el);
    return () => observer.disconnect();
  }, [images]);

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.85), behavior: "smooth" });
  };

  return (
    <div>
      <h3 className="text-lg md:text-2xl font-bold mb-4 text-left md:text-center">
        {label}
      </h3>
      <div className="relative group/slider">
        {!fitsWithoutScroll && (
          <>
            <button
              onClick={() => scroll(-1)}
              aria-label="Scroll left"
              className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-10 items-center justify-center w-9 h-9 rounded-full bg-blue-950 text-white shadow-md opacity-0 group-hover/slider:opacity-100 transition-opacity"
            >
              <FaChevronLeft size={14} />
            </button>
            <button
              onClick={() => scroll(1)}
              aria-label="Scroll right"
              className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-10 items-center justify-center w-9 h-9 rounded-full bg-blue-950 text-white shadow-md opacity-0 group-hover/slider:opacity-100 transition-opacity"
            >
              <FaChevronRight size={14} />
            </button>
          </>
        )}

        <div
          ref={scrollRef}
          className={`flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden ${
            fitsWithoutScroll ? "justify-center" : "justify-start"
          }`}
        >
          {images.map((image) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="flex-shrink-0 w-64 sm:w-72 snap-start overflow-hidden rounded-xl shadow-lg cursor-pointer group"
              onClick={() => onSelect(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const visibleCategories =
    activeCategory === "all"
      ? categories
      : categories.filter((cat) => cat.key === activeCategory);

  return (
    <section id="gallery" className="bg-white py-16">
      <div className="container mx-auto text-center text-blue-950 px-4">
        <h4 className="text-3xl md:text-6xl font-bold mb-4">Gallery</h4>
        <h2 className="text-xl md:text-3xl font-semibold mb-8">
          Moments From Our Yoga Sessions
        </h2>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
              activeCategory === "all"
                ? "bg-blue-950 text-white"
                : "bg-gray-100 text-blue-950 hover:bg-gray-200"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                activeCategory === cat.key
                  ? "bg-blue-950 text-white"
                  : "bg-gray-100 text-blue-950 hover:bg-gray-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="space-y-10">
          {visibleCategories.map((cat) => {
            const images = galleryImages.filter((img) => img.category === cat.key);
            if (images.length === 0) return null;
            return (
              <GallerySlider
                key={cat.key}
                label={cat.label}
                images={images}
                onSelect={setSelectedImage}
              />
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white text-2xl"
              onClick={() => setSelectedImage(null)}
            >
              <FaTimes />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage}
              alt="Yoga session"
              className="max-h-[85vh] max-w-full rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;

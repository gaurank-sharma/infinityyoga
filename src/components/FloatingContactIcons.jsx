import React from "react";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const FloatingContactIcons = React.memo(({ phoneNumber, email }) => {
  const formattedPhoneNumber = phoneNumber.replace(/[^\d+]/g, "");
  const whatsappUrl = `https://wa.me/${formattedPhoneNumber}`;

  return (
    <>
      <div className="fixed top-2/3 right-1 md:right-3 flex flex-col space-y-3 items-center transform -translate-y-1/2 z-10">
        {/* Phone Icon */}
        <a
          href={`tel:${phoneNumber}`}
          className="bg-blue-900 text-white rounded-full p-4 shadow-lg hover:bg-blue-950 transition duration-200 flex items-center justify-center w-12 h-12 md:w-13 md:h-13"
          title="Call Us"
        >
          <FaPhoneAlt className="text-xl md:text-2xl" />
        </a>

        {/* Email Icon */}
        <a
          href={`mailto:info@infinityyoga.in?subject=Inquiry from Website Visitor&body=Namaste,%0D%0A%0D%0AI am reaching out regarding your Yoga healing services. Please guide me on how to get started.%0D%0A%0D%0AThank you,%0D%0A[Your Name]`}
          className="bg-gray-700 text-white rounded-full p-4 shadow-lg hover:bg-gray-800 transition duration-200 flex items-center justify-center w-12 h-12 md:w-13 md:h-13"
          title="Email Us"
        >
          <FaEnvelope className="text-xl md:text-2xl" />
        </a>

        {/* WhatsApp Icon */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 text-white rounded-full p-4 shadow-lg hover:bg-green-700 transition duration-200 flex items-center justify-center w-12 h-12 md:w-13 md:h-13"
          title="Chat on WhatsApp"
        >
          <FaWhatsapp className="text-xl md:text-2xl" />
        </a>
      </div>
    </>
  );
});

export default FloatingContactIcons;

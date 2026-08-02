import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Sessions = () => {
  const navigate = useNavigate();
  const [selectedSession, setSelectedSession] = useState(null);
  const [showDrawer, setShowDrawer] = useState(false);

  const yogaSessions = [
    {
      id: 1,
      title: "Standard Yoga Session",
      image: "/standard.png",
      rating: 4.4,
      reviews: 587,
      benefits: [
        "Improves body flexibility",
        "Aids restful sleep",
        "Reduces body tiredness",
        "Enhances focus",
        "Strengthens immunity"
      ],
      phone: "+919310284204",
      whatsapp: "+919310284204",
      callIcon: "/icons/call.svg",
      chatIcon: "/icons/chat.svg",
      description: "Perfect for beginners looking to build a strong foundation in yoga. Focuses on breath, posture, and relaxation."
    },
    {
      id: 2,
      title: "Advanced Yoga Session",
      image: "/advance_yoga.avif",
      rating: 4.5,
      reviews: 480,
      benefits: [
        "Sharpens body control",
        "Cleanses body toxins",
        "Pushes flexibility",
        "Builds core strength",
        "Deepens meditation"
      ],
      phone: "+919310284204",
      whatsapp: "+919310284204",
      callIcon: "/icons/call.svg",
      chatIcon: "/icons/chat.svg",
      description: "Designed for seasoned practitioners, this session focuses on challenging postures, core strength, and deep meditative states."
    },
    {
      id: 3,
      title: "Yoga for Weight Loss",
      image: "/w_loss.png",
      rating: 4.5,
      reviews: 480,
      benefits: [
        "Boosts natural metabolism",
        "Burns fat effectively",
        "Improves digestion",
        "Increases energy levels",
        "Tones muscles"
      ],
      phone: "+919310284204",
      whatsapp: "+919310284204",
      callIcon: "/icons/call.svg",
      chatIcon: "/icons/chat.svg",
      description: "Helps reduce weight naturally with posture-based calorie burn, breath control and improved metabolism."
    },
    {
      id: 4,
      title: "Prenatal Yoga",
      image: "/p_asana.jpg",
      rating: 4.5,
      reviews: 480,
      benefits: [
        "Promotes healthy pregnancy",
        "Improves posture",
        "Reduces lower back pain",
        "Supports emotional balance",
        "Prepares body for labor"
      ],
      phone: "+919310284204",
      whatsapp: "+919310284204",
      callIcon: "/icons/call.svg",
      chatIcon: "/icons/chat.svg",
      description: "Gentle yoga designed for expecting mothers to support physical and mental well-being during pregnancy."
    },
    {
      id: 5,
      title: "Regular Meditation Classes",
      image: "/meditation.webp",
      rating: 4.5,
      reviews: 480,
      benefits: [
        "Reduces stress and anxiety",
        "Enhances emotional health",
        "Improves attention span",
        "Boosts self-awareness",
        "Promotes mindfulness"
      ],
      phone: "+919310284204",
      whatsapp: "+919310284204",
      callIcon: "/icons/call.svg",
      chatIcon: "/icons/chat.svg",
      description: "A powerful daily practice to calm the mind, reduce stress, and improve mental clarity."
    },
    {
      id: 6,
      title: "Yoga for Neck & Back Pain Relief",
      image: "/b_pain.webp",
      rating: 4.5,
      reviews: 480,
      benefits: [
        "Relieves chronic back pain",
        "Reduces muscle tension",
        "Strengthens spine muscles",
        "Improves posture",
        "Promotes spinal flexibility"
      ],
      phone: "+919310284204",
      whatsapp: "+919310284204",
      callIcon: "/icons/call.svg",
      chatIcon: "/icons/chat.svg",
      description: "Focuses on gentle movements and stretches that ease pain and improve spinal alignment."
    },
    {
      id: 7,
      title: "Yoga to Cure Diabetes",
      image: "/Diabetes.png",
      rating: 4.5,
      reviews: 480,
      benefits: [
        "Balances blood sugar levels",
        "Stimulates pancreas function",
        "Improves insulin sensitivity",
        "Boosts metabolism",
        "Reduces stress-induced sugar spikes"
      ],
      phone: "+919310284204",
      whatsapp: "+919310284204",
      callIcon: "/icons/call.svg",
      chatIcon: "/icons/chat.svg",
      description: "Uses scientifically proven asanas to support diabetic management and improve pancreas health."
    },
    {
      id: 8,
      title: "Yoga for Gastric Problems",
      image: "/gastic.png",
      rating: 4.5,
      reviews: 480,
      benefits: [
        "Reduces bloating",
        "Improves digestion",
        "Stimulates bowel movements",
        "Detoxifies internal organs",
        "Soothes gut inflammation"
      ],
      phone: "+919310284204",
      whatsapp: "+919310284204",
      callIcon: "/icons/call.svg",
      chatIcon: "/icons/chat.svg",
      description: "Combats indigestion and acidity through breathwork and digestive-focused asanas."
    },
    {
      id: 9,
      title: "Yoga for Thyroid Management",
      image: "/thyroid.png",
      rating: 4.5,
      reviews: 480,
      benefits: [
        "Regulates hormone levels",
        "Improves thyroid function",
        "Boosts metabolism",
        "Reduces fatigue",
        "Supports endocrine health"
      ],
      phone: "+919310284204",
      whatsapp: "+919310284204",
      callIcon: "/icons/call.svg",
      chatIcon: "/icons/chat.svg",
      description: "Balances thyroid hormones naturally with targeted poses and breathing practices."
    },
    {
      id: 10,
      title: "Yoga for Digestive Disorders",
      image: "/digestive.jpg",
      rating: 4.5,
      reviews: 480,
      benefits: [
        "Relieves constipation",
        "Improves gut health",
        "Balances gut flora",
        "Increases nutrient absorption",
        "Reduces acidity"
      ],
      phone: "+919310284204",
      whatsapp: "+919310284204",
      callIcon: "/icons/call.svg",
      chatIcon: "/icons/chat.svg",
      description: "Aids healthy digestion by activating abdominal muscles and reducing toxins."
    },
    {
      id: 11,
      title: "Yoga for PCOS/ PCOD",
      image: "/pcod.png",
      rating: 4.5,
      reviews: 480,
      benefits: [
        "Balances hormones",
        "Reduces stress levels",
        "Improves ovulation",
        "Helps weight management",
        "Boosts reproductive health"
      ],
      phone: "+919310284204",
      whatsapp: "+919310284204",
      callIcon: "/icons/call.svg",
      chatIcon: "/icons/chat.svg",
      description: "Addresses hormonal imbalances and improves menstrual health through yoga therapy."
    },
    {
      id: 12,
      title: "Yoga for Stress and Anxiety",
      image: "/stress.webp",
      rating: 4.5,
      reviews: 480,
      benefits: [
        "Calms the nervous system",
        "Reduces cortisol levels",
        "Promotes better sleep",
        "Increases mindfulness",
        "Boosts serotonin production"
      ],
      phone: "+919310284204",
      whatsapp: "+919310284204",
      callIcon: "/icons/call.svg",
      chatIcon: "/icons/chat.svg",
      description: "A mix of breathing, movement and stillness to ease anxiety and promote mental peace."
    },
    {
      id: 13,
      title: "Yoga for Hypertension",
      image: "/hypertension.png",
      rating: 4.5,
      reviews: 480,
      benefits: [
        "Lowers blood pressure",
        "Improves heart function",
        "Enhances blood circulation",
        "Reduces stress",
        "Strengthens heart muscles"
      ],
      phone: "+919310284204",
      whatsapp: "+919310284204",
      callIcon: "/icons/call.svg",
      chatIcon: "/icons/chat.svg",
      description: "Soothing asanas and breathwork aimed at reducing high blood pressure naturally."
    },
    {
      id: 14,
      title: "Yoga for Cancer Management",
      image: "/cancer.png",
      rating: 4.5,
      reviews: 480,
      benefits: [
        "Reduces treatment side effects",
        "Improves energy levels",
        "Promotes emotional balance",
        "Enhances immunity",
        "Supports mental well-being"
      ],
      phone: "+919310284204",
      whatsapp: "+919310284204",
      callIcon: "/icons/call.svg",
      chatIcon: "/icons/chat.svg",
      description: "Gentle yoga and meditation sessions tailored for recovery, healing and support during cancer treatment."
    }
  ];

  return (
    <div className="relative p-6">
    <h1 className="text-2xl md:text-6xl font-extrabold text-center text-blue-950 mt-5 pt-10 mb-5">Yoga Classes at Your Doors</h1>
    <div className="flex flex-wrap gap-6 justify-center">
  {yogaSessions.map((session) => (
    <div
      key={session.id}
      className="bg-white rounded-xl shadow-md p-4 w-[320px] flex flex-col justify-between"
    >
      <img
        src={session.image}
        alt={session.title}
        className="rounded-lg h-48 w-full object-fit"
      />

      <div className="mt-3 flex-grow">
        <p className="text-xs bg-green-500 text-white inline px-2 py-1 rounded">
          Offline
        </p>
        <p className="text-sm mt-1">⭐ {session.rating} ({session.reviews})</p>

        <h2 className="text-lg font-bold mt-2">{session.title}</h2>

        <div className="text-sm mt-1">
          <p><b>Languages:</b> Hindi, English</p>
          <p><b>Available For:</b> Individual, Couple, Groups, Corporate</p>
          <p><b>Monthly Plans:</b> 12 | 16 | 20 | 24 Sessions</p>
        </div>

        <div className="flex flex-wrap gap-1 mt-2 text-xs">
          {session.benefits.map((b, idx) => (
            <span
              key={idx}
              className="bg-gray-200 rounded px-2 py-1"
            >
              {b}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4 space-y-2">
        {/* <button
          className="bg-blue-950 text-white rounded py-2 w-full"
          onClick={() => {
            setSelectedSession(session);
            setShowDrawer(true);
          }}
        >
          More Details
        </button> */}

        <div className="flex gap-2">
          <a
            href={`tel:${session.phone}`}
            className="bg-green-500 text-white rounded py-2 w-1/2 flex items-center justify-center gap-2"
          >
            <FiPhone /> Call Now
          </a>
          <a
            href={`https://wa.me/${session.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="bg-green-600 text-white rounded py-2 w-1/2 flex items-center justify-center gap-2"
          >
            <FaWhatsapp /> Chat Now
          </a>
        </div>

        <button 
          onClick={() => {
            setSelectedSession(session);
            navigate("/yogaform", { state: { sessionTitle: session.title } });
           
          }}
          className="bg-blue-950 text-white rounded py-2 w-full">
            Book Now
          </button>
      </div>
    </div>
  ))}
</div>


      {/* Drawer */}
      {showDrawer && selectedSession && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 right-0 w-[400px] h-full bg-white shadow-lg z-50 p-6 overflow-y-auto"
        >
          <button
            onClick={() => setShowDrawer(false)}
            className="text-right text-gray-700 font-bold mb-4"
          >
            Close
          </button>
          <h2 className="text-2xl font-bold mb-4">{selectedSession.title}</h2>
          <img
            src={selectedSession.image}
            className="rounded-lg mb-3 w-full h-56 object-cover"
            alt="session"
          />
          <p className="text-sm text-gray-700">{selectedSession.description}</p>
        </motion.div>
      )}
    </div>
  );
};

export default Sessions;

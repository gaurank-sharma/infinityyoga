import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// --- Animation Timings (in seconds) ---
const DRAW_DURATION = 3;
const FILL_DELAY = 2.5;
const FILL_DURATION = 1.5;
const PHRASE_FADE_IN = 0.5;
const PHRASE_FADE_OUT = 4.0;
const CURTAIN_DELAY = 5.0;
const NAVIGATE_DELAY = 6.0;

const LogoLoader = () => {
  const navigate = useNavigate();
  const [showPhrase, setShowPhrase] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [showCurtain, setShowCurtain] = useState(false);

  useEffect(() => {
    // Orchestrate the animation sequence
    setTimeout(() => setShowLogo(true), 0);
    setTimeout(() => setShowPhrase(true), PHRASE_FADE_IN * 1000);
    setTimeout(() => setShowPhrase(false), PHRASE_FADE_OUT * 1000);
    setTimeout(() => setShowCurtain(true), CURTAIN_DELAY * 1000);
    setTimeout(() => {
      navigate("/"); // Navigate to your home page
    }, NAVIGATE_DELAY * 1000);
  }, [navigate]);

  // Animation variants for the SVG paths
  // This will be applied to ALL 5 paths from your SVG
  const pathAnimation = {
    hidden: {
      pathLength: 0,
      fill: "rgba(0, 0, 0, 0)", // Start transparent
      stroke: "rgba(100, 100, 100, 1)", // Start with a grey drawing line
    },
    visible: {
      pathLength: 1,
      // We animate the fill to the gradient defined in <defs>
      fill: [
        "rgba(0, 0, 0, 0)",
        "rgba(0, 0, 0, 0)",
        "url(#logoGradient)", // Fill with the gradient
      ],
      // We animate the stroke to be transparent as the fill comes in
      stroke: [
        "rgba(100, 100, 100, 1)",
        "rgba(100, 100, 100, 1)",
        "rgba(100, 100, 100, 0)", // Fade out
      ],
      transition: {
        pathLength: { duration: DRAW_DURATION, ease: "easeInOut" },
        fill: { delay: FILL_DELAY, duration: FILL_DURATION, ease: "easeIn" },
        stroke: { delay: FILL_DELAY, duration: FILL_DURATION, ease: "easeIn" },
      },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white relative overflow-hidden">
      {/* Logo SVG Animation
        This uses your exact viewBox, paths, and transform.
      */}
      <motion.div initial="hidden" animate={showLogo ? "visible" : "hidden"}>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="250" // You can adjust the size
          height="221" // Adjusted to maintain aspect ratio (691/609)
          viewBox="0 0 691.000000 609.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* 1. Define the Gradient (colors from your PNG) */}
          <defs>
            <linearGradient
              id="logoGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#C451F0" />
              <stop offset="100%" stopColor="#303EF2" />
            </linearGradient>
          </defs>

          {/* 2. Your 5 Paths inside the transformed <g> group
            Each path gets the same animation.
          */}
          <motion.g
            transform="translate(0.000000,609.000000) scale(0.100000,-0.100000)"
            // NOTE: We set fill/stroke here to be controlled by variants
            fill="transparent"
            stroke="transparent"
          >
            <motion.path
              d="M3484 5772 c-6 -4 -14 -25 -17 -47 -10 -68 -36 -177 -57 -243 -20 -61 -46 -118 -162 -347 -30 -60 -62 -126 -71 -145 -8 -19 -24 -55 -34 -80 -85 -192 -113 -393 -105 -748 2 -93 4 -105 25 -125 13 -12 119 -116 235 -231 116 -114 215 -207 221 -205 5 2 70 63 143 134 74 72 155 149 180 172 26 24 52 52 58 63 19 35 32 341 20 471 -6 64 -15 132 -20 151 -6 18 -10 50 -10 70 0 20 -4 39 -8 42 -5 3 -15 30 -22 61 -15 64 -30 72 -30 16 0 -22 -5 -43 -11 -47 -7 -4 -10 6 -7 32 2 24 -1 38 -8 37 -19 -3 -11 30 8 35 12 3 17 10 14 19 -3 8 -6 21 -6 29 0 8 -4 14 -10 14 -5 0 -10 -8 -10 -17 0 -35 -27 11 -51 87 -13 41 -29 84 -36 95 -7 11 -13 40 -13 66 0 29 -6 51 -15 59 -8 7 -15 21 -15 32 0 10 -7 21 -15 24 -8 4 -15 14 -15 23 0 21 -34 93 -41 87 -3 -3 -6 6 -7 20 -2 32 -11 46 -23 39 -5 -4 -6 8 -3 27 4 23 3 29 -4 19 -7 -10 -12 -3 -17 28 -4 22 -11 44 -16 47 -6 3 -7 28 -3 61 4 37 3 54 -4 49 -15 -9 -22 18 -15 58 3 21 1 42 -6 49 -6 8 -8 17 -4 20 9 9 1 9 -13 -1z m29 -364 c86 -207 174 -474 209 -628 20 -91 23 -132 23 -305 0 -208 -10 -286 -47 -375 -50 -117 -108 -106 -108 20 0 40 10 68 52 149 59 113 70 182 47 280 -30 129 -105 201 -207 201 -50 0 -101 -27 -144 -76 -28 -32 -58 -142 -58 -213 0 -84 12 -124 60 -211 35 -60 40 -78 40 -130 0 -69 -12 -100 -39 -100 -68 0 -129 276 -116 525 7 134 12 170 46 315 24 98 106 350 120 365 5 5 9 15 9 23 0 7 9 32 19 55 10 23 26 59 34 80 16 37 49 51 60 25z m344 -735 c-3 -10 -5 -4 -5 12 0 17 2 24 5 18 2 -7 2 -21 0 -30z"
              variants={pathAnimation}
              strokeWidth="30" // Needs to be thick because it's scaled down by 0.1
            />
            <motion.path
              d="M3710 5110 c0 -22 16 -43 28 -39 7 3 3 14 -8 29 -13 17 -20 20 -20 10z"
              variants={pathAnimation}
              strokeWidth="30"
            />
            <motion.path
              d="M3757 5034 c-8 -8 2 -55 14 -68 5 -6 9 0 8 15 -1 32 -13 62 -22 53z"
              variants={pathAnimation}
              strokeWidth="30"
            />
            <motion.path
              d="M1780 4454 c-38 -5 -144 -28 -200 -42 -46 -12 -178 -66 -243 -98 -219 -111 -458 -360 -569 -594 -30 -64 -56 -137 -98 -285 -5 -16 -14 -84 -19 -150 -20 -214 28 -460 121 -633 169 -314 413 -538 703 -645 139 -52 206 -62 400 -62 162 1 190 4 283 28 220 57 445 175 667 350 50 40 97 79 105 88 9 9 36 33 60 53 66 54 380 367 380 379 0 16 -263 278 -277 275 -6 -2 -67 -57 -135 -124 -275 -270 -547 -453 -778 -523 -92 -27 -238 -45 -319 -38 -193 16 -350 86 -484 216 -103 99 -149 175 -199 329 -19 57 -22 88 -21 212 0 129 4 154 27 225 71 213 232 393 416 465 100 39 134 48 220 58 231 27 519 -68 770 -252 171 -126 303 -248 764 -706 567 -563 528 -525 616 -600 35 -30 71 -61 78 -67 114 -106 404 -281 542 -326 189 -63 319 -82 502 -74 268 12 500 98 718 266 111 85 266 264 327 380 7 13 24 44 38 70 35 66 72 168 102 285 22 86 26 124 27 251 0 87 -5 175 -12 210 -54 253 -134 418 -252 519 -161 139 -312 206 -543 241 -118 18 -376 -4 -470 -40 -20 -8 -52 -14 -70 -14 -17 1 -24 3 -14 6 9 2 17 8 17 13 0 4 12 10 28 13 79 16 132 34 125 41 -4 5 -3 6 3 3 6 -3 33 5 61 18 31 14 55 19 60 14 8 -8 110 4 120 15 2 2 -26 4 -63 5 -46 0 -73 6 -83 16 -14 13 -9 15 44 16 l60 0 -35 13 c-25 8 -42 9 -59 2 -19 -8 -26 -7 -37 9 -15 21 -19 39 -6 31 5 -3 9 1 9 9 0 11 -13 15 -46 16 -37 1 -41 2 -21 8 30 9 60 8 78 -3 7 -4 11 -4 10 1 -4 12 5 15 25 7 18 -6 35 1 25 11 -3 3 -22 7 -43 8 -50 4 -54 18 -13 42 l33 20 -115 3 c-76 2 -146 -3 -205 -14 -49 -9 -105 -19 -122 -21 -18 -3 -33 -9 -33 -13 0 -4 -18 -10 -39 -13 -22 -3 -54 -12 -72 -21 -18 -9 -37 -16 -42 -16 -17 0 -188 -89 -282 -147 -92 -57 -227 -153 -256 -182 -9 -9 -33 -29 -53 -45 -85 -67 -438 -406 -434 -417 6 -14 272 -289 280 -289 4 0 74 67 155 148 160 161 213 207 337 294 244 172 497 267 709 268 121 0 315 -57 394 -116 17 -13 36 -24 41 -24 4 0 42 -34 83 -75 79 -79 147 -184 178 -277 43 -127 46 -143 45 -273 -1 -110 -5 -143 -27 -211 -37 -117 -71 -183 -131 -254 -183 -216 -430 -316 -693 -280 -181 24 -351 92 -543 218 -208 136 -307 226 -940 862 -212 212 -410 409 -440 436 -155 140 -341 277 -455 334 -28 14 -52 28 -55 31 -7 9 -216 86 -270 99 -25 6 -62 16 -83 21 -42 11 -330 20 -387 13z"
              variants={pathAnimation}
              strokeWidth="30"
            />
            <motion.path
              d="M3300 2651 c-69 -70 -167 -166 -219 -212 -51 -46 -99 -89 -105 -94 -33 -31 -163 -132 -251 -195 -102 -73 -317 -187 -400 -211 -67 -20 -74 -33 -39 -70 38 -40 81 -66 140 -85 40 -13 111 -17 399 -19 400 -3 473 -12 533 -68 42 -38 57 -83 93 -264 6 -35 15 -63 19 -63 12 0 29 99 41 241 13 148 10 172 -22 212 -18 24 -27 27 -85 27 -36 0 -86 5 -112 10 -26 6 -67 15 -92 20 -95 19 -226 51 -245 59 -11 5 -46 17 -77 26 -32 9 -58 23 -58 30 0 7 19 20 43 30 23 9 116 50 207 90 203 89 275 115 324 115 62 0 89 -21 124 -95 39 -83 47 -158 46 -430 0 -256 -1 -263 -42 -505 -82 -491 -78 -811 14 -1018 39 -89 85 -130 56 -50 -23 64 -20 227 7 383 28 158 106 471 197 785 109 380 168 636 195 853 l12 97 -44 38 c-106 90 -243 217 -375 350 -78 78 -146 142 -151 141 -4 0 -64 -58 -133 -128z"
              variants={pathAnimation}
              strokeWidth="30"
            />
          </motion.g>
        </motion.svg>
      </motion.div>

      {/* Animated Phrase */}
      <div className="flex gap-4 mt-4 absolute bottom-24">
        {["Harmony.", "Balance.", "Serenity."].map((word, index) => (
          <motion.div
            key={index}
            className="text-xl md:text-3xl font-body text-gray-700"
            initial={{ opacity: 0, y: 10 }}
            animate={showPhrase ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{
              delay: showPhrase ? PHRASE_FADE_IN + index * 0.4 : 0,
              duration: 0.5,
            }}
          >
            {word}
          </motion.div>
        ))}
      </div>

      {/* Curtain Transition Effect */}
      {showCurtain && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 1.0, ease: [0.6, 0.01, -0.05, 0.9] }}
          className="fixed top-0 left-0 w-full h-full bg-white z-50"
        />
      )}
    </div>
  );
};

export default LogoLoader;

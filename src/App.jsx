// import React, { useEffect, useState }from "react";
// import { Routes, Route, useLocation } from "react-router-dom";
// import Navbar from "./components/Navbar";

// import Footer from "./components/Footer";
// import Preloader from "./components/loading";

// import FloatingContactIcons from "./components/FloatingContactIcons";

// import Home from "./pages/Home";
// import Sessions from "./components/Offline_Sessions";
// import Online from "./components/Online_Session";
// import YogaBookingForm from "./components/YogaBookingForm";



// const App = () => {
//   const businessPhoneNumber = "+919310284204";

//   const location = useLocation();
//    const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const preloaderShown = sessionStorage.getItem("preloaderShown");

//     if (!preloaderShown) {
//       setLoading(true);
//       setTimeout(() => {
//         setLoading(false);
//         sessionStorage.setItem("preloaderShown", "true");
//       }, 6000);
//     }
//   }, []);

//   if (loading) {
//     return <Preloader />; // Show Preloader only on first visit
//   }
//     }
//   }, []);

//   if (loading) {
//     return <Preloader />; // Show Preloader only on first visit
//   }
//   return (
//  <div>
//     <Navbar />
//       <Routes>
//       <Route path="/" element={<Home/>} />
//       <Route path="/yoga-at-home" element={<Sessions/>} />
//       <Route path="/online-yoga" element={<Online/>} />
//       <Route path="/yogaform" element={<YogaBookingForm />} />
//       </Routes>

//       <FloatingContactIcons phoneNumber={businessPhoneNumber} />
//       <Footer />
//     </div>
//   );
// };

// export default App;




import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingContactIcons from "./components/FloatingContactIcons";
import Home from "./pages/Home";
import Sessions from "./components/Offline_Sessions";
import Online from "./components/Online_Session";
import YogaBookingForm from "./components/YogaBookingForm";

const App = () => {
  const businessPhoneNumber = "+919310284204";

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/yoga-at-home" element={<Sessions />} />
        <Route path="/online-yoga" element={<Online />} />
        <Route path="/yogaform" element={<YogaBookingForm />} />
      </Routes>
      <FloatingContactIcons phoneNumber={businessPhoneNumber} />
      <Footer />
    </div>
  );
};

export default App;

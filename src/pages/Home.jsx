import React from "react";
import HeroWithForm from "../components/form";
import Services from "../components/Services";
import Packages from "../components/packages";
import About from "../components/About";
import YogaBenefits from "../components/YogaBenefits";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import YogaHero from "../components/yogahero";


const Home = () => {
    return (
<>
<div className="relative pb-40"> {/* Add padding to push Services down */}
<HeroWithForm />
</div>
<div className="pt-20 md:pt-5">
  <Services />
</div>
<Packages/>
<About/>
<YogaBenefits/>
{/* <Classes /> */}
{/* <Teachers /> */}
{/* <PricingSection /> */}
<Gallery />
<Testimonials />
<YogaHero />

</>
    );

};

export default Home;
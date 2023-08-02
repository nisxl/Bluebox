import React from "react";
import Body from "../components/Body";
import ScrollAnimation from "../components/ScrollAnimation";
import Step from "../components/Step";
import Footer from "../components/Footer";
import ParallaxTest from "../components/Parallax";
import Services from "../components/Services";
import Packages from "../components/Packages";

function HomePage() {
  return (
    <div>
      <Body />
      {/* <ParallaxTest /> */}
      <ScrollAnimation />
      <Services />
      <Step />
      <Packages />
      <Footer />
    </div>
  );
}

export default HomePage;

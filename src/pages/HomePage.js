import React from "react";
import Body from "../components/Body";
import ScrollAnimation from "../components/ScrollAnimation";
import Step from "../components/Step";
import Footer from "../components/Footer";
import ParallaxTest from "../components/Parallax";
function HomePage() {
  return (
    <div>
      <Body />
      {/* <ParallaxTest /> */}
      <ScrollAnimation />
      <Step />
      <Footer />
    </div>
  );
}

export default HomePage;

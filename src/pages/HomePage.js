import React from "react";
import Body from "../components/Body";
import ScrollAnimation from "../components/ScrollAnimation";
import Step from "../components/Step";
import Footer from "../components/Footer";
import ParallaxTest from "../components/Parallax";
import Services from "../components/Services";
import Packages from "../components/Packages";
import Head from "../components/Head";
import ContactPage from "./ContactPage";
import { Element } from "react-scroll";
function HomePage() {
  return (
    <div className="">
      <div className="sticky top-0 z-10">
        <Head />
      </div>
      <Body />
      {/* <ParallaxTest /> */}
      <ScrollAnimation />

      <Element className="services">
        <Services />
      </Element>

      <Element className="ourWorks">
        <Step />
      </Element>

      <Element className="packages">
        <Packages />
      </Element>

      <Element className="contactUs">
        <ContactPage />
      </Element>
      <Footer />
    </div>
  );
}

export default HomePage;

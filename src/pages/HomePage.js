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
import Clients from "../components/Clients";
import AboutUs from "../components/AboutUs";
function HomePage() {
  const sponsors = [
    { name: "Sponsor 1", logoUrl: "../images/lollipop.jpg" },
    { name: "Sponsor 2", logoUrl: "../images/lollipop.jpg" },
    { name: "Sponsor 3", logoUrl: "../images/lollipop.jpg" },
    { name: "Sponsor 4", logoUrl: "../images/lollipop.jpg" },
    { name: "Sponsor 5", logoUrl: "../images/lollipop.jpg" },
    { name: "Sponsor 6", logoUrl: "../images/lollipop.jpg" },
    { name: "Sponsor 7", logoUrl: "../images/lollipop.jpg" },
    { name: "Sponsor 8", logoUrl: "../images/lollipop.jpg" },
    // Add more sponsors as needed
  ];
  return (
    <div className="bg-white">
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

      <Element className="clients">
        <Clients sponsors={sponsors} />
      </Element>

      <Element className="aboutUs">
        <AboutUs />
      </Element>

      <Footer />
    </div>
  );
}

export default HomePage;

import React from "react";
import Body from "../components/Body";
import Step from "../components/Step";
import Footer from "../components/Footer";
import Services from "../components/Services";
import Packages from "../components/Packages";
import Head from "../components/Head";
import ContactPage from "./ContactPage";
import { Element } from "react-scroll";
import Clients from "../components/Clients";
import AboutUs from "../components/AboutUs";
function HomePage() {
  return (
    <div className="bg-white">
      <div className="sticky top-0 z-10 hidden sm:inline">
        <Head />
      </div>
      <Element className="landing">
        <Body />
      </Element>

      <Element className="aboutUs">
        <AboutUs />
      </Element>
      <Element className="services">
        <Services />
      </Element>

      <Element className="ourWorks">
        <Step />
      </Element>

      <Element className="clients">
        <Clients />
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

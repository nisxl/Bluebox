import React, { useEffect, useRef } from "react";

import { Link as SLink } from "react-scroll";
import { motion, useInView, useAnimation } from "framer-motion";

function Head() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.8, delay: 0.45 }}
      className="bg-slate-50 flex justify-between 
          items-center h-[64px] px-6"
    >
      <div className="w-10 h-10 cursor-pointer">
        <SLink
          activeClass="SActive"
          to="landing"
          spy={true}
          smooth={true}
          offset={-70} // Adjust this offset based on your layout
          duration={0}
        >
          <img src="../images/logo.png" />
        </SLink>
      </div>
      <div className="flex items-center flex-wrap pr-10 gap-8">
        <SLink
          activeClass="SActive"
          to="aboutUs"
          spy={true}
          smooth={true}
          offset={-70} // Adjust this offset based on your layout
          duration={0}
        >
          <div className="cursor-pointer">About Us</div>
        </SLink>
        <SLink
          activeClass="SActive"
          to="services"
          spy={true}
          smooth={true}
          offset={-70} // Adjust this offset based on your layout
          duration={0}
        >
          <div className="cursor-pointer">Services</div>
        </SLink>

        <SLink
          activeClass="SActive"
          to="ourWorks"
          spy={true}
          smooth={true}
          offset={-70} // Adjust this offset based on your layout
          duration={0}
        >
          <div className="cursor-pointer">Our Works</div>
        </SLink>

        <SLink
          activeClass="SActive"
          to="clients"
          spy={true}
          smooth={true}
          offset={-70} // Adjust this offset based on your layout
          duration={0}
        >
          <div className="cursor-pointer">Clients</div>
        </SLink>

        <SLink
          activeClass="SActive"
          to="careers"
          spy={true}
          smooth={true}
          offset={-70} // Adjust this offset based on your layout
          duration={0}
        >
          <div className="cursor-pointer">Careers</div>
        </SLink>

        <SLink
          activeClass="SActive"
          to="packages"
          spy={true}
          smooth={true}
          offset={-70} // Adjust this offset based on your layout
          duration={0}
        >
          <div className="cursor-pointer">Packages</div>
        </SLink>

        <SLink
          activeClass="SActive"
          to="contactUs"
          spy={true}
          smooth={true}
          offset={-70} // Adjust this offset based on your layout
          duration={0}
        >
          <div className="cursor-pointer">Contact Us</div>
        </SLink>

        <div className="cursor-pointer">
          <ion-icon name="accessibility-outline"></ion-icon>
        </div>
        <div className="cursor-pointer">
          <ion-icon name="airplane-outline"></ion-icon>
        </div>
      </div>
    </motion.div>
  );
}

export default Head;

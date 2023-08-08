import React from "react";
import { Link as SLink } from "react-scroll";

function Head() {
  return (
    <div
      className="bg-slate-50 flex justify-between 
          items-center h-[64px]"
    >
      <div>BLUEBOX</div>
      <div className="flex items-center pr-10 gap-8">
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
    </div>
  );
}

export default Head;

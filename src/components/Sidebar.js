import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { Link as SLink } from "react-scroll";
function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const [isHovered, setIsHovered] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  console.log(isHovered);
  return (
    <div>
      <Transition show={isOpen}>
        <div className="bg-[#001529] h-screen shadow">
          <button
            className="absolute top-4 right-4 text-gray-600"
            onClick={toggleSidebar}
          >
            <ion-icon name="close-outline"></ion-icon>
            {/* Add your close button or icon here */}
          </button>
          <div className="p-4 text-white">
            <h2>Sidebar Content</h2>
            <div className="flex flex-col items-center flex-wrap pr-10 gap-8">
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
            {/* You can add more JSX elements or components here */}
          </div>
        </div>
      </Transition>
    </div>
  );
}

export default Sidebar;

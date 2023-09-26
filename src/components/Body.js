import React, { useState, useRef, useEffect } from "react";
import { IonIcon } from "@ionic/react";
import { menu } from "ionicons/icons";
import { Transition } from "@headlessui/react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Link as SLink } from "react-scroll";

function Body() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const [isOpen, setIsOpen] = useState(false);

  const [isHovered, setIsHovered] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  console.log(isHovered);
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <div className="">
      <div className="relative">
        <div
          className={`h-fit text-[#eeeee4] ${
            isOpen ? "filter blur-sm" : ""
          } pt-10`}
          style={{
            backgroundImage: isHovered
              ? "url(../images/lollipop.jpg)"
              : "url(../images/matrin.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            // transition: "background-image 0.3s ease-in-out",
          }}
        >
          <div className="flex flex-col md:max-w-5xl mx-auto py-60">
            <header className="body-font">
              <IonIcon
                icon={menu}
                className="text-3xl cursor-pointer text-gray-800 md:hidden"
                onClick={toggleSidebar}
              />
            </header>
            <section className="md:max-w-xl">
              <motion.div
                ref={ref}
                variants={{
                  hidden: { opacity: 0, y: 100 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 1.1, delay: 0 }}
                className="text-5xl  font-semibold mb-4"
              >
                <span
                  className="font-bold text-5xl  hover:bg-slate-700 px-2 rounded-md"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  Create
                </span>{" "}
                a unique, professional identity for your business
              </motion.div>
              <motion.div
                ref={ref}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 1.1, delay: 0 }}
                className="font-normal text-[18px]"
              >
                Boost your digital presence and make your brand more visible
                with Bluebox. Kickstart your brand with social media designs, 3D
                creatives, website creation, and engaging TikTok videos.
              </motion.div>
            </section>
            <motion.div
              ref={ref}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 1.1, delay: 0 }}
            >
              <SLink
                activeClass="SActive"
                to="contactUs"
                spy={true}
                smooth={true}
                offset={-70} // Adjust this offset based on your layout
                duration={0}
              >
                <button className="mx-auto mt-[100px] text[1.125em] font-bold text-white bg-[#292e34] border-0 py-3 px-12 focus:outline-none hover:bg-[#353c44] transition-all duration-300 ease-in-out rounded-full text-lg">
                  Start Free Trial
                </button>
              </SLink>
            </motion.div>
          </div>
        </div>

        {isOpen && (
          <div
            className="fixed top-0 left-0 w-screen h-screen bg-black opacity-40"
            onClick={toggleSidebar}
          ></div>
        )}

        <Transition show={isOpen}>
          <div className="fixed top-0 z-10 right-0 w-[280px] bg-[#001529] h-screen shadow">
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
    </div>
  );
}

export default Body;

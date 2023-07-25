import React, { useState } from "react";
import { IonIcon } from "@ionic/react";
import Testimonials from "./Testimonials";
import { menu, close } from "ionicons/icons";
import { Transition } from "@headlessui/react";
import { motion, useScroll } from "framer-motion";
import { Link } from "react-router-dom";
function Body() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <div className="relative">
        {/* #eeeee4 #f9e299 */}
        <div
          className={`h-fit bg-gradient-to-r from-[#0057FF] to-[#AA00FF] text-[#eeeee4]${
            isOpen ? "filter blur-sm" : ""
          }`}
        >
          <div className="flex flex-col md:max-w-5xl mx-auto py-20">
            <header className="body-font">
              <div className="flex justify-between pb-[120px] flex-col md:flex-row items-center">
                <div className="text-[3em] md:text-[2em] font-bold font-sans ">
                  <span className="text-white mr-[0.25em]">BLUE</span>
                  BOX
                </div>
                <nav className="md:ml-auto flex flex-col gap-1 md:flex-row flex-wrap items-center text-[14px] font-bold md:justify-center">
                  <div className=" hover:bg-cyan-400 transition-all duration-300 ease-in-out px-[1.733em] py-[5px] rounded-2xl cursor-pointer">
                    Tools
                  </div>
                  <Link to={"/contact"}>
                    <div className="hover:bg-cyan-400 transition-all duration-300 ease-in-out px-[1.733em] py-[5px] rounded-2xl  cursor-pointer">
                      Contact
                    </div>
                  </Link>
                  <div className="hover:bg-cyan-400 transition-all duration-300 ease-in-out px-[1.733em] py-[5px] rounded-2xl  cursor-pointer">
                    Support
                  </div>
                  <div className="bg-cyan-400 transition-all duration-300 ease-in-out px-[1.733em] py-[5px] rounded-2xl  cursor-pointer">
                    Login
                  </div>
                </nav>
                <IonIcon
                  icon={menu}
                  className="text-3xl cursor-pointer text-gray-800 md:hidden"
                  onClick={toggleSidebar}
                />
              </div>
            </header>
            <section className="md:max-w-xl">
              <div className="text-4xl font-semibold mb-4">
                Create a unique, professional logo for your business
              </div>
              <div className="font-normal text-[18px]">
                Kickstart your brand with business card designs, social media
                graphics, app icons, letter heads and more
              </div>
            </section>
            <div>
              <button className="mx-auto mt-[100px] text[1.125em] font-bold text-white bg-[#292e34] border-0 py-3 px-12 focus:outline-none hover:bg-[#353c44] transition-all duration-300 ease-in-out rounded-full text-lg">
                Create My Logo
              </button>
            </div>
          </div>
        </div>
        {isOpen && (
          <div
            className="fixed top-0 left-0 w-screen h-screen bg-black opacity-40"
            onClick={toggleSidebar}
          ></div>
        )}
        <div className="w-full bg-gradient-to-r from-[#efeeec] to-cyan-500 mb-36">
          <Testimonials />
        </div>
        <section className="flex flex-wrap justify-center gap-32">
          {/* mx-28 */}
          <div className="flex flex-col">
            {/* <div className="flex flex-shrink-0 flex-col w-full h-"> */}
            <img
              src="../images/shark.png"
              className="w-[412px] h-[412px] cover md:ml-[158px]"
            />
            <img
              src="../images/green.png"
              className="w-[158px] h-[158px] hidden md:block"
            />
          </div>
          <div className="w-[500px]">
            <h1 className="text-[32px] font-bold ">
              <span>Build a beautiful brand</span> <br />
              <span>on time and on budget</span>
            </h1>

            <div className="bg-[#cbdef2] h-4 w-full mt-[-20px]">&nbsp;</div>

            <p className="text-[#656562]">
              Kickstart your business with thousands of ready-to-use design
              assets.
            </p>
            <div className="flex justify-between mr-8">
              <div className="flex flex-col">
                <span>Logo design files</span>
                <span>Social profile icons</span>
                <span>Letterhead templates</span>
                <span>Logo design files</span>
              </div>
              <div className="flex flex-col">
                <span>Social media designs</span>
                <span>Presentation templates</span>
                <span>Brand guide</span>
                <span>Logo design files</span>
              </div>
            </div>
            <button className="flex items-center mt-[100px] text-[12px] font-bold bg-[#cbdef2] border-0 py-[0.5em] px-[2em] focus:outline-none hover:bg-[#b7d1ed] transition-all duration-300 ease-in-out rounded-full text-lg">
              <ion-icon name="log-out-outline"></ion-icon>
              <span>See example assets</span>
            </button>
          </div>
        </section>
        <section className="flex flex-wrap justify-center gap-32 mt-24">
          <div className="w-[390px]">
            <h1 className="text-[32px] font-bold">
              The only logo maker with free customization
            </h1>
            <div className="bg-[#c4e3cc] h-4 w-full mt-[-20px]">&nbsp;</div>
            We’ll personally help you customize your logo with the purchase of
            any package.
          </div>
          <img
            src="../images/camera.png"
            className="h-[400px] object-contain"
          ></img>
        </section>
        <section className="bg-[#a0acdc] text-white flex flex-col gap-8 items-center">
          <h1 className="text-[32px] font-bold flex flex-col">
            <span className="mt-20">Instantly customize and export </span>
            <span className="text-[16px] font-medium">
              Right in your browser, no designer or software needed
            </span>
          </h1>

          <img src="../images/gril.png" className="w-[400px] h-[400px]" />
        </section>
        <Transition show={isOpen}>
          <div className="fixed top-0 right-0 w-[280px] bg-[#001529] h-screen shadow">
            <button
              className="absolute top-4 right-4 text-gray-600"
              onClick={toggleSidebar}
            >
              <IonIcon icon={close} className="text-3xl cursor-pointer" />
            </button>
            {/* Sidebar content goes here */}
          </div>
        </Transition>
      </div>
    </div>
  );
}

export default Body;

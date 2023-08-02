import React, { useRef } from "react";
import { Link } from "react-router-dom";
import ReactToPrint from "react-to-print";
function ContactPage() {
  const componentRef = useRef(null);
  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <ReactToPrint
          trigger={() => {
            return <button>Print the table</button>;
          }}
          content={() => componentRef.current} // Use componentRef.current
          documentTitle="new document"
          pageStyle="print"
        />

        <div className="flex flex-col text-center w-full mb-12">
          <div>
            <h1 className="hover-underline-animation sm:text-5xl text-3xl font-black title-font mb-4 text-gray-900">
              CONNECT WITH US
            </h1>
          </div>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify.
          </p>
        </div>
        <div className="flex justify-between gap-6 flex-wrap md:flex-nowrap">
          <div className="flex flex-col gap-2 ">
            <div>
              <h2 className="sm:text-4xl text-2xl font-bold">Get in touch</h2>
              <p>
                We would love to hear from you <br /> Send us a message and get
                a call back
              </p>
            </div>

            <div className="flex flex-col">
              <div className="flex gap-2 items-center">
                <ion-icon name="call"></ion-icon>
                <span>Phone</span>
              </div>

              <span>+977 9818176503</span>
            </div>

            <div className="flex flex-col">
              <div className="flex gap-2 items-center">
                <ion-icon name="location"></ion-icon>
                <span>Address</span>
              </div>
              <a
                href="https://goo.gl/maps/6XYnG1CV2hhk6M258"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Kupondole Heights, Lalitpur, Nepal</span>
              </a>
            </div>

            <div className="flex flex-col">
              <div className="flex gap-2 items-center">
                <ion-icon name="mail"></ion-icon>
                <span>Email</span>
              </div>

              <span>info.bllueboxco@gmail.com</span>
            </div>
          </div>
          <form
            className=""
            method="POST"
            action="https://formspree.io/f/xpzgwnzk"
          >
            <div ref={componentRef} className="lg:w-[40vw] md:w-2/3">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <label
                    for="username"
                    className="leading-7 text-sm text-gray-600"
                  >
                    User Name
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="username"
                    autoComplete="off"
                    required
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="p-2 w-1/2">
                  <label
                    for="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="Email"
                    placeholder="Email"
                    autoComplete="off"
                    required
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="p-2 w-full">
                  <label
                    for="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    autoComplete="off"
                    required
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
                <div className="p-2 w-full">
                  <button
                    type="submit"
                    className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  >
                    Button
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="bg-black text-white flex flex-col">
        <div className="self-center text-9xl font-extrabold m-4 ">Bluebox</div>

        <div className="flex mx-20 border-t-2 border-[#4a4a4a] pt-10">
          <div className="flex flex-1 gap-2">
            <ion-icon name="logo-facebook"></ion-icon>
            <ion-icon name="logo-instagram"></ion-icon>
            <ion-icon name="logo-linkedin"></ion-icon>
          </div>
          <div className="flex flex-1 gap-3 justify-self-center">
            <Link className="no-underline text-inherit" to={"/"}>
              <span>About</span>
            </Link>
            <Link className="no-underline text-inherit" to={"/contact"}>
              <span>Contact</span>
            </Link>
            <span>Case Studies</span>
            <span>Blog</span>
          </div>
          <div className="  text-[12px] ">
            Proudly created in Nepal. <br />
            All Right Reserved, All Wrong Reversed.
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;

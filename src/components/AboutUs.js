import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import sponsorList from "../data/Sponsors";
import { motion, useInView, useAnimation } from "framer-motion";

function AboutUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <div className="flex justify-center flex-col p-2 md:p-10 md:flex-row ">
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1.2, delay: 0.1 }}
        className="w-full md:w-[70%] flex flex-col items-center justify-center text-center p-10"
      >
        <h1 className="hover-underline-animation font-bold text-4xl md:text-7xl flex mb-4">
          {" "}
          Design, Create and Grow
        </h1>
        <div className="flex flex-col gap-2 text-center font-montserrat text-[14px] md:text-[16px] font-semibold">
          <span>
            Welcome to Bluebox - Where Creativity Meets Brilliance! At Bluebox,
            we're more than a marketing agency; we're your partners in growth.
            We ideate, curate, and tell unique brand stories to engage with our
            client’s intended audience. From social media strategy and content
            creation to community management and paid advertising, we're here to
            elevate your brand's presence and foster genuine connections in the
            digital landscape. Join us in shaping conversations, one post at a
            time.
          </span>

          <span className="">
            Whether you're a startup looking to establish your online footprint
            or an established brand aiming to stay relevant, Bluebox is here to
            guide you on your journey. Let's collaborate to turn your digital
            presence into a compelling narrative that resonates with your
            audience and drives real, meaningful results.
          </span>
        </div>
      </motion.div>

      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, x: 100 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1.2, delay: 0.1 }}
        className="w-full md:w-[30%] h-[50%]"
      >
        <Swiper
          autoplay={{
            delay: 2500,
          }}
          loop={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={`../images/3d1.png`} alt="3d1" className="bg-contain " />
          </SwiperSlide>

          <SwiperSlide>
            <img src={`../images/3d2.png`} alt="3d2" className="bg-contain " />
          </SwiperSlide>

          <SwiperSlide>
            <img src={`../images/3d3.png`} alt="3d3" className="bg-contain " />
          </SwiperSlide>
        </Swiper>
      </motion.div>
    </div>
  );
}

export default AboutUs;

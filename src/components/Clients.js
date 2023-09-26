import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, useInView, useAnimation } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";

import "../swiper.css";
import sponsorList from "../data/Sponsors";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Clients() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <div className="flex flex-col gap-4 my-10">
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.8, delay: 0.45 }}
        className="self-center font-bold text-4xl hover-underline-animation relative"
      >
        Our Trusted Clients
      </motion.div>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, x: -75 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.75, delay: 0.4 }}
        className="h-40"
      >
        <Swiper
          slidesPerView={4}
          spaceBetween={35}
          autoplay={{
            delay: 2500,
            // disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {sponsorList.map((sponsor) => (
            <SwiperSlide key={sponsor.id}>
              <img
                src={`../images/Sponsors/${sponsor.name}`}
                alt={sponsor.alt}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
}

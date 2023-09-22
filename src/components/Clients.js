import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "../swiper.css";

import sponsorList from "../data/Sponsors";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Clients() {
  return (
    <div className="flex flex-col gap-4 my-10">
      <div className="self-center font-bold text-4xl hover-underline-animation">
        Our Trusted Clients
      </div>
      <div className="h-40">
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
      </div>
    </div>
  );
}

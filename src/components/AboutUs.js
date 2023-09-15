import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import sponsorList from "../data/Sponsors";

function AboutUs() {
  return (
    <div className="flex flex-col p-10 sm:flex-row font-montserrat">
      <div className="w-[70%] flex flex-col items-center justify-center text-center">
        <h1 className="font-bold text-7xl flex mb-4">
          {" "}
          Design, Create and Grow
        </h1>
        <div className="text-center font-semibold text-[#030b0c]">
          Welcome to Bluebox - Where Creativity Meets Brilliance! At Bluebox,
          we're more than a marketing agency; we're your partners in growth. We
          ideate, curate, and tell unique brand stories to engage with our
          client’s intended audience. From social media strategy and content
          creation to community management and paid advertising, we're here to
          elevate your brand's presence and foster genuine connections in the
          digital landscape. Join us in shaping conversations, one post at a
          time.
          <br />
          Whether you're a startup looking to establish your online footprint or
          an established brand aiming to stay relevant, Bluebox is here to guide
          you on your journey. Let's collaborate to turn your digital presence
          into a compelling narrative that resonates with your audience and
          drives real, meaningful results.
        </div>
      </div>

      <div className="w-[30%]">
        <Swiper
          // slidesPerView={4}
          // spaceBetween={35}
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

export default AboutUs;

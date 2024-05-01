import React from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Home() {
  return (
    <div>
      <div className="home-back-img"></div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={6}
        loop={true}
        speed={2000}
        // autoplay={{
        //   disableOnInteraction: false,
        //   stopOnLastSlide: false,
        //   reverseDirection: false,
        //   waitForTransition: false,
        // }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <img
            src="https://cdnwp.dealerk.com/8c54192f/uploads/sites/513/2023/04/peugeot-logo-0-1.png"
            alt=""
            className="bg-gray-800 opacity-70 logo-size"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://car-logos.b-cdn.net/wp-content/uploads/2023/03/renault-logo-2021-present-scaled.webp"
            alt=""
            className="bg-gray-600 logo-size opacity-70"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://lezebre.lu/images/detailed/17/30203-Fiat-Logo.png"
            alt=""
            className="bg-gray-800 opacity-70 logo-size"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://logoeps.com/wp-content/uploads/2013/06/volkswagen-eps-vector-logo.png"
            alt=""
            className="bg-gray-600 logo-size opacity-70"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://lezebre.lu/images/detailed/19/Suzuki_Logo_3.png"
            alt=""
            className="bg-gray-800 opacity-70 logo-size"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://car-logos.b-cdn.net/wp-content/uploads/2023/03/renault-logo-2021-present-scaled.webp"
            alt=""
            className="bg-gray-600 logo-size opacity-70"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdnwp.dealerk.com/8c54192f/uploads/sites/513/2023/04/peugeot-logo-0-1.png"
            alt=""
            className="bg-gray-800 opacity-70 logo-size"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://car-logos.b-cdn.net/wp-content/uploads/2023/03/renault-logo-2021-present-scaled.webp"
            alt=""
            className="bg-gray-600 logo-size opacity-70"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdnwp.dealerk.com/8c54192f/uploads/sites/513/2023/04/peugeot-logo-0-1.png"
            alt=""
            className="bg-gray-800 opacity-70 logo-size"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://car-logos.b-cdn.net/wp-content/uploads/2023/03/renault-logo-2021-present-scaled.webp"
            alt=""
            className="bg-gray-600 logo-size opacity-70"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Home;

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
import { FaCartPlus } from "react-icons/fa6";
import { TbBrandCashapp } from "react-icons/tb";
import { FaQuestion } from "react-icons/fa";

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
        autoplay={{
          disableOnInteraction: false,
          stopOnLastSlide: false,
          reverseDirection: false,
          waitForTransition: false,
        }}
      >
        <SwiperSlide>
          <img
            src="https://cdnwp.dealerk.com/8c54192f/uploads/sites/513/2023/04/peugeot-logo-0-1.png"
            alt=""
            className="bg-gray-800 opacity-70 logo-size p-10"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://car-logos.b-cdn.net/wp-content/uploads/2023/03/renault-logo-2021-present-scaled.webp"
            alt=""
            className="bg-gray-600 logo-size opacity-70 p-10"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://lezebre.lu/images/detailed/17/30203-Fiat-Logo.png"
            alt=""
            className="bg-gray-800 opacity-70 logo-size p-10"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://logoeps.com/wp-content/uploads/2013/06/volkswagen-eps-vector-logo.png"
            alt=""
            className="bg-gray-600 logo-size opacity-70 p-10"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://lezebre.lu/images/detailed/19/Suzuki_Logo_3.png"
            alt=""
            className="bg-gray-800 opacity-70 logo-size p-12"
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
      <div className="services text-center pt-20 bg-gray-900">
        <h2 className="text-5xl font-bold">Bienvenido a nombre</h2>
        <p className="text-xl mt-2 font-bold">¿Que estas buscando?</p>
        <div className="grid grid-cols-12 mt-5">
          <div className="col-span-12 md:col-span-4  flex flex-col items-center mx-5 p-10 justify-self-center">
            <div className="icon p-4 rounded-2xl border border-solid border-white hover:bg-orange-400 bg-orange-400 lg:bg-transparent">
              <FaCartPlus size="70px" />
            </div>
            <h4 className="text-lg font-bold mt-2">Compra tu vehiculo</h4>
            <p className="mt-2">
              Navega a traves de nuestros productos disponibles o solicita el
              producto que desees.
            </p>
          </div>
          <div className="col-span-12 md:col-span-4  flex flex-col items-center mx-5 p-10 justify-self-center">
            <div className="icon p-4 rounded-2xl border border-solid border-white hover:bg-green-600 bg-green-600 lg:bg-transparent">
              <TbBrandCashapp size="70px" />
            </div>
            <h4 className="text-lg font-bold mt-2">Vende tu vehiculo</h4>
            <p className="mt-2">
              Obtén efectivo rápido vendiendo tu vehículo con nosotros. Proceso
              fácil y sin complicaciones.
            </p>
          </div>
          <div className="col-span-12 md:col-span-4  flex flex-col items-center p-10 mx-5 justify-self-center">
            <div className="icon p-4 rounded-2xl border border-solid border-white hover:bg-blue-700 bg-blue-700 lg:bg-transparent">
              <FaQuestion size="70px" />
            </div>
            <h4 className="text-lg font-bold mt-2">Contactanos</h4>
            <p className="mt-2">
              ¿Tienes preguntas o necesitas ayuda? ¡Estamos aquí para ayudarte!
              Ponte en contacto con nosotros hoy mismo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

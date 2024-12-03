import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import allYachts from "../data/yachtsData";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// import ItemYacht from "./ItemYacht";

const ListYacht = () => {
  return (
    <>
      <Swiper
        className="max-w-[1280px]"
        modules={[Navigation]}
        // spaceBetween={50}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          768: {
            // spaceBetween: 16,
            slidesPerView: 2,
          },
          1280: {
            slidesPerView: 3,
            // spaceBetween: 32,
          },
        }}
      >
        {allYachts.map((yacht, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="bg-[--dark-blue-2] p-[18px] pb-6 rounded-3xl mb-6 md:mb-8 w-[335px] h-[469px] md:w-[344px] md:h-[508px] xl:w-[354px]">
              <img
                src={yacht.imageYacht.mobileSrc}
                srcSet={`${yacht.imageYacht.mobileSrc} 500w, ${yacht.imageYacht.desktopSrc} 1000w`}
                alt={yacht.nameYacht}
                className="rounded-3xl mb-6 md:mb-8 w-[299px] h-[250px] md:h-[268px] xl:w-[322px] object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="flex justify-between mb-6 md:mb-8 items-center">
                <h3 className="text-base font-bold w-[177px] uppercase truncate overflow-hidden text-ellipsis whitespace-nowrap">
                  {yacht.nameYacht}
                </h3>
                <span className="text-xs font-light tracking-[0.36px] whitespace-nowrap">
                  LUXURY YAHTS
                </span>
              </div>
              <table className="text-sm">
                <tbody>
                  {yacht.length && (
                    <tr>
                      <td className="w-[70px]">LENGTH</td>
                      <td className="pl-8">{yacht.length}</td>
                    </tr>
                  )}
                  {yacht.builder && (
                    <tr>
                      <td>BUILDER</td>
                      <td className="pl-8">{yacht.builder}</td>
                    </tr>
                  )}
                  {yacht.shipyard && (
                    <tr>
                      <td>SHIPYARD</td>
                      <td className="pl-8">{yacht.shipyard}</td>
                    </tr>
                  )}
                  {yacht.built && (
                    <tr>
                      <td>BUILT</td>
                      <td className="pl-8">{yacht.built}</td>
                    </tr>
                  )}
                  {yacht.guests && (
                    <tr>
                      <td>GUESTS</td>
                      <td className="pl-8">{yacht.guests}</td>
                    </tr>
                  )}
                  {yacht.price && (
                    <tr>
                      <td>PRICE</td>
                      <td className="pl-8">{yacht.price}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </SwiperSlide>
        ))}

        <div className="flex justify-center gap-[14px] ">
          <div className="swiper-button-prev border border-white rounded-[60px] px-[16px] py-[8px]">
            <FaArrowLeft />
          </div>
          <div className="swiper-button-next border border-white rounded-[60px] px-[16px] py-[8px]">
            <FaArrowRight />
          </div>
        </div>
      </Swiper>
    </>
  );
};

export default ListYacht;

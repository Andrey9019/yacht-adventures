import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { useTranslation } from "react-i18next";

import allYachts from "../data/yachtsData";

import { motion } from "framer-motion";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ListYacht = () => {
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  return (
    <section id="Yachts" className="container">
      <Swiper
        modules={[Navigation]}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1280: {
            slidesPerView: 3,
          },
        }}
      >
        {allYachts.map((yacht, index) => {
          const translation =
            yacht.translations[i18n.language] || yacht.translations.en;

          return (
            <SwiperSlide key={index} className="!flex justify-center pt-7">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="bg-[--dark-blue-2] p-[18px] pb-6 rounded-3xl mb-6 md:mb-8 w-[335px] h-[469px] md:w-[344px] md:h-[508px] xl:w-[354px]"
              >
                <img
                  src={yacht.imageYacht.mobileSrc}
                  srcSet={`${yacht.imageYacht.mobileSrc} 500w, ${yacht.imageYacht.desktopSrc} 1000w`}
                  alt={translation.nameYacht}
                  className="rounded-3xl mb-6 md:mb-8 w-[299px] h-[250px] md:h-[268px] xl:w-[322px] object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="flex items-center justify-between mb-6 md:mb-8">
                  <h3 className="text-base font-bold w-[177px] uppercase truncate overflow-hidden text-ellipsis whitespace-nowrap">
                    {translation.nameYacht}
                  </h3>
                  <span className="text-xs font-light tracking-[0.36px] whitespace-nowrap">
                    LUXURY YAHTS
                  </span>
                </div>
                <table className="text-sm">
                  <tbody>
                    {translation.length && (
                      <tr>
                        <td className="w-[70px]"> {t("yacht.LENGTH")}</td>
                        <td className="pl-8">{translation.length}</td>
                      </tr>
                    )}
                    {translation.builder && (
                      <tr>
                        <td> {t("yacht.BUILDER")}</td>
                        <td className="pl-8">{translation.builder}</td>
                      </tr>
                    )}
                    {translation.shipyard && (
                      <tr>
                        <td>{t("yacht.SHIPYARD")}</td>
                        <td className="pl-8">{translation.shipyard}</td>
                      </tr>
                    )}
                    {translation.built && (
                      <tr>
                        <td>{t("yacht.BUILT")}</td>
                        <td className="pl-8">{translation.built}</td>
                      </tr>
                    )}
                    {translation.guests && (
                      <tr>
                        <td>{t("yacht.GUESTS")}</td>
                        <td className="pl-8">{translation.guests}</td>
                      </tr>
                    )}
                    {translation.price && (
                      <tr>
                        <td>{t("yacht.PRICE")}</td>
                        <td className="pl-8">{translation.price}</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </motion.div>
            </SwiperSlide>
          );
        })}
        <div className="flex justify-center gap-[14px]">
          <div className="swiper-button-prev border border-white rounded-[60px] px-[16px] py-[8px]">
            <FaArrowLeft />
          </div>
          <div className="swiper-button-next border border-white rounded-[60px] px-[16px] py-[8px]">
            <FaArrowRight />
          </div>
        </div>
      </Swiper>
    </section>
  );
};

export default ListYacht;

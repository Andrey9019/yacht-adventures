import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import { useTranslation } from "react-i18next";
import allComments from "../data/commentsData";

import "swiper/css";
import "swiper/css/pagination";

const CommentsSwiper = () => {
  const { i18n } = useTranslation();

  return (
    <Swiper
      className="mx-auto"
      modules={[Pagination, Navigation]}
      spaceBetween={16}
      slidesPerView={1}
      pagination={{ clickable: true }}
      breakpoints={{
        768: {
          spaceBetween: 16,
          slidesPerView: 2,
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 32,
        },
      }}
    >
      {allComments.map((comment, index) => (
        <SwiperSlide key={index} className="!flex justify-center">
          <div className="w-full max-w-[384px] flex flex-col p-6 mb-[14px] md:px-8 md:mb-8 xl:p-8 items-center rounded-3xl bg-[--dark-blue-2]">
            <img
              src={comment.imageClient.mobileSrc}
              srcSet={`${comment.imageClient.mobileSrc} 500w,${comment.imageClient.desktopSrc} 1000w`}
              alt={
                comment.translations[i18n.language]?.nameClient ||
                comment.translations.en.nameClient
              }
              className="w-12 h-12 mb-[18px] object-cover rounded-full"
            />
            <p className="mb-2">
              {comment.translations[i18n.language]?.nameClient ||
                comment.translations.en.nameClient}
            </p>
            <p className="text-xs font-normal text-center text-[#f6f5ef80]">
              {comment.translations[i18n.language]?.comment ||
                comment.translations.en.comment}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CommentsSwiper;

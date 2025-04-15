import { useTranslation } from "react-i18next";

import { motion } from "framer-motion";

const Аctivitys = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation();

  return (
    <section className="flex mx-auto">
      <div className="container custom-container">
        <ul className="flex flex-col items-center gap-6 activ-wrap md:justify-items-center xl:items-end">
          <motion.li
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.8 }}
            className="relative activ-box1"
          >
            <img
              src="images/activity/activity-1@1x.jpg"
              srcSet="images/activity/activity-1@1x.jpg 1x, images/activity/activity-1@2x.webp 2x"
              alt="Activity Diving"
              className="h-[335px] md:h-[632px] md:w-[704px] xl:h-[632px] xl:w-[712px] object-cover rounded-3xl"
              loading="lazy"
              decoding="async"
              width="335px"
            />
            <div className="absolute bottom-6 left-6 inline-flex px-7 py-[14px] text-sm md:text-lg text-[--dark-blue] bg-[--white] font-bold rounded-full">
              {t("activitys.activitys_1")}
            </div>
          </motion.li>

          <motion.li
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.8 }}
            className="relative activ-box2"
          >
            <img
              src="images/activity/activity-2@1x.jpg"
              srcSet="images/activity/activity-2@1x.jpg 1x, images/activity/activity-2@2x.webp 2x"
              alt="Activity Fishing"
              className="h-[335px] md:w-[400px] md:h-[389px] xl:w-[440px] xl:[428px] object-cover rounded-3xl"
              loading="lazy"
              decoding="async"
              width="335"
            />
            <div className="absolute bottom-6 left-6 inline-flex px-7 py-[14px] text-sm md:text-lg text-[--dark-blue] bg-[--white] font-bold rounded-full">
              {t("activitys.activitys_2")}
            </div>
          </motion.li>

          <motion.li
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.8 }}
            className="relative activ-box3"
          >
            <img
              src="images/activity/activity-3@1x.jpg"
              srcSet="images/activity/activity-3@1x.jpg 1x, images/activity/activity-3@2x.webp 2x"
              alt="Activity Sunbathing"
              className="h-[335px] md:w-[380px] md:h-[352px] xl:w-[436px] xl-[352px] object-cover rounded-3xl"
              loading="lazy"
              decoding="async"
              width="335"
            />
            <div className="absolute bottom-6 left-6 inline-flex px-7 py-[14px] text-sm md:text-lg text-[--dark-blue] bg-[--white] font-bold rounded-full">
              {t("activitys.activitys_3")}
            </div>
          </motion.li>
        </ul>
      </div>
    </section>
  );
};

export default Аctivitys;

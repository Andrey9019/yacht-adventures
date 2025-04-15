import Button from "../ui/Button";
import { Trans, useTranslation } from "react-i18next";

import { motion } from "framer-motion";

export default function About() {
  const { t } = useTranslation();

  return (
    <section
      id="About"
      className="flex mx-auto mb-40 md:mb-[370px] xl:mb-[494px]"
    >
      <div className="container about-container">
        <div className="grid gap-[14px] text-sm xl:text-base mb-10 md:mb-16 grid-cols-2 md:grid-cols-4 xl:grid-cols-6">
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "backIn" }}
            className="col-span-2 row-start-1 md:col-span-3 md:row-start-1 xl:col-span-3 xl:row-start-1 text-2xl md:text-[32px] mb-10"
          >
            <Trans
              i18nKey="about.title_1"
              components={{
                1: <span className="italic text-[--prime-phrase]" />,
              }}
            />
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "backIn" }}
            className="col-span-1 row-start-2 md:col-span-1 md:col-start-3 md:row-start-2 xl:col-start-5 xl:row-start-1"
          >
            {t("about.text_1")}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2.5, ease: "backIn" }}
            className="col-span-1 row-start-2 md:col-span-1 md:col-start-4 md:row-start-2 xl:col-start-6 xl:row-start-1"
          >
            {t("about.text_2")}
          </motion.p>
        </div>

        <div className="relative">
          <div className="about-wrap">
            <div className="about-box1 xl:w-[533px]">
              <motion.img
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
                src="images/about/about-1@1x.jpg"
                srcSet="images/about/about-1@1x.jpg 1x, images/about/about-1@2x.webp 2x"
                alt="Yacht's view"
                className="h-[524px] md:h-[630px] xl:h-[473px] xl:w-[533px] object-cover rounded-3xl"
                loading="lazy"
              />
            </div>
            <div className=" about-box2 md:w-[308px]">
              <motion.img
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
                src="images/about/about-2@1x.jpg"
                srcSet="images/about/about-2@1x.jpg 1x, images/about/about-2@2x.webp 2x"
                alt="Yacht's view"
                className="h-[289px] md:w-[308px] scale-x-[-1] object-cover rounded-3xl"
                loading="lazy"
              />
            </div>
            <div className="image-container about-box3 w-[260px]">
              <motion.img
                src="images/about/about-3@1x.jpg"
                srcSet="images/about/about-3@1x.jpg 1x, images/about/about-3@2x.webp 2x"
                alt="Yacht's view"
                className="h-[244px] w-[260px] object-cover rounded-3xl"
                loading="lazy"
              />
            </div>
          </div>
          <div className="absolute -bottom-24 md:-bottom-64 md:px-8 xl:-bottom-96 xl:px-24">
            <p className="mb-10 md:mb-16 text-[36px] md:text-[70px] xl:text-[100px] xl:font-medium">
              {t("about.title_2")}
            </p>
            <Button
              text={t("about.button")}
              onClick={() => {
                document
                  .getElementById("Rent")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

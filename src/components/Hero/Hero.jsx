import { useTranslation } from "react-i18next";
import Button from "../ui/Button";
import { motion } from "framer-motion";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="container flex items-center justify-center mx-auto hero-bg-img">
      <div className="flex-row-reverse hero-container xl:flex">
        <motion.div
          className="flex flex-col items-center text-center max-w-[900px]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h1
            className="text-3xl md:text-6xl font-medium tracking-[-0.6px] md:tracking-[-0.64px] xl:tracking-[-1.7px] mb-6 md:mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {t("hero.title")}
          </motion.h1>

          <motion.p
            className="text-sm md:text-base font-normal tracking-[0.28px] max-w-[560px] mb-9 md:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {t("hero.text")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Button
              text={t("hero.button")}
              hoverTextColor=""
              backgroundColor="#93ABAE"
              hoverBackgroundColor="#88B3B9"
              borderColor="none"
              hoverBorderColor="none"
              onClick={() => {
                document
                  .getElementById("Rent")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

import Button from "../ui/Button";

import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="hero-bg-img container flex justify-center items-center mx-auto">
      <div className=" hero-container xl:flex flex-row-reverse">
        <div className="flex flex-col items-center  text-center max-w-[900px]">
          <h1 className="text-3xl md:text-6xl font-medium tracking-[-0.6px] md:tracking-[-0.64px] xl:tracking-[-1.7px] mb-6 md:mb-4  ">
            {t("hero.title")}
          </h1>
          <p className="text-sm md:text-base font-normal tracking-[0.28px] max-w-[560px] mb-9 md:mb-8">
            {t("hero.text")}
          </p>
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
        </div>
      </div>
    </section>
  );
};
export default Hero;

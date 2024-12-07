import CommentsSwiper from "./CommentsSwiper";

import { Trans, useTranslation } from "react-i18next";

const Comments = () => {
  const { t } = useTranslation();

  return (
    <section id="Reviews" className="flex mx-auto max-md:mb-4">
      <div className="container custom-container">
        <div className="mb-10 xl:mb-[68px] flex flex-col xl:flex-row justify-between gap-4 md:gap-0 ">
          <p className="text-2xl md:text-3xl  mb-4 md:mb-8 xl:mb-0 md:w-[70%] xl:w-[32%] max-xl:self-start">
            <Trans
              i18nKey="commentars.title"
              components={{
                1: <span className="italic text-[--prime-phrase]" />,
              }}
            />
          </p>
          <p className="text-sm md:text-base md:w-[40%] xl:w-[24%] max-xl:self-end">
            {t("commentars.text")}
          </p>
        </div>
        <CommentsSwiper />
      </div>
    </section>
  );
};

export default Comments;

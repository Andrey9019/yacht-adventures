import { useState, useEffect } from "react";
import { FaSailboat } from "react-icons/fa6";
import MobileHeader from "./MobileHeader";

import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../ui/LanguageSwitcher";

const Header = () => {
  const { t } = useTranslation();

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="container relative flex justify-between items-center py-6 px-5 md:p-[35px]">
      <div className="flex items-center gap-2">
        <FaSailboat className="w-[18px] md:w-6" />
        <span className="text-sm font-medium uppercase md:font-bold md:text-xl">
          {t("header.logo_nav")}
        </span>
      </div>

      {!isMobile ? (
        <>
          <LanguageSwitcher />
          <nav className="hidden md:flex text-sm gap-6">
            <a
              href="#About"
              className="hover:text-[--prime-dark] font-bold uppercase"
            >
              {t("header.about_nav")}
            </a>
            <a
              href="#Yachts"
              className="hover:text-[--prime-dark] font-bold uppercase"
            >
              {t("header.yachts_nav")}
            </a>
            <a
              href="#Reviews"
              className="hover:text-[--prime-dark] font-bold uppercase"
            >
              {t("header.reviews_nav")}
            </a>
          </nav>
        </>
      ) : (
        <MobileHeader />
      )}
    </header>
  );
};

export default Header;

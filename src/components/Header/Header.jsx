import { useState, useEffect } from "react";

import MobileHeader from "./MobileHeader";

import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../ui/LanguageSwitcher";

import { motion } from "framer-motion";

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
        <motion.svg
          width="18"
          height="18"
          viewBox="0 0 576 512"
          initial="hidden"
          animate="visible"
          xmlns="http://www.w3.org/2000/svg"
          className="md:w-6"
        >
          <motion.path
            d="M256 16c0-7 4.5-13.2 11.2-15.3s13.9 .4 17.9 6.1l224 320c3.4 4.9 3.8 11.3 1.1 16.6s-8.2 8.6-14.2 8.6l-224 0c-8.8 0-16-7.2-16-16l0-320zM212.1 96.5c7 1.9 11.9 8.2 11.9 15.5l0 224c0 8.8-7.2 16-16 16L80 352c-5.7 0-11-3-13.8-8s-2.9-11-.1-16l128-224c3.6-6.3 11-9.4 18-7.5zM5.7 404.3C2.8 394.1 10.5 384 21.1 384l533.8 0c10.6 0 18.3 10.1 15.4 20.3l-4 14.3C550.7 473.9 500.4 512 443 512L133 512C75.6 512 25.3 473.9 9.7 418.7l-4-14.3z"
            fill="transparent"
            stroke="white"
            strokeWidth="50"
            variants={{
              hidden: { pathLength: 0 },
              visible: { pathLength: 1, transition: { duration: 10 } },
            }}
          />
        </motion.svg>
        <motion.span
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-sm font-medium uppercase md:font-bold md:text-xl"
        >
          {t("header.logo_nav")}
        </motion.span>
      </div>

      {!isMobile ? (
        <>
          <LanguageSwitcher />
          <nav className="hidden gap-6 text-sm md:flex">
            <motion.a
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              href="#About"
              className="hover:text-[--prime-dark] font-bold uppercase"
            >
              {t("header.about_nav")}
            </motion.a>
            <motion.a
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              href="#Yachts"
              className="hover:text-[--prime-dark] font-bold uppercase"
            >
              {t("header.yachts_nav")}
            </motion.a>
            <motion.a
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              href="#Reviews"
              className="hover:text-[--prime-dark] font-bold uppercase"
            >
              {t("header.reviews_nav")}
            </motion.a>
          </nav>
        </>
      ) : (
        <MobileHeader />
      )}
    </header>
  );
};

export default Header;

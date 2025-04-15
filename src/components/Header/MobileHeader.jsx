import { useState } from "react";

import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { FaSailboat } from "react-icons/fa6";

import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../ui/LanguageSwitcher";

import { motion } from "framer-motion";

const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  const { t } = useTranslation();

  return (
    <>
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden focus:outline-none"
      >
        {isMenuOpen ? (
          <span className="text-4xl">
            <IoMdClose />
          </span>
        ) : (
          <HiOutlineMenuAlt3 className="w-[18px] md:w-6" />
        )}
      </button>
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[--dark-blue] z-50 flex flex-col items-center text-center">
          <div className="relative flex items-center justify-between w-full px-5 py-6">
            <div className="flex items-center gap-2">
              <FaSailboat className="w-[18px] md:w-6" />
              <span className="text-sm font-medium uppercase md:font-bold md:text-xl">
                {t("header.logo_nav")}
              </span>
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="focus:outline-none"
            >
              <IoMdClose />
            </button>
          </div>

          <nav className="flex flex-col gap-6 mt-14 mb-14">
            <motion.a
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              href="#About"
              onClick={closeMenu}
              className="text-white hover:text-[--prime-light] text-lg font-bold uppercase"
            >
              {t("header.about_nav")}
            </motion.a>
            <motion.a
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              href="#Yachts"
              onClick={closeMenu}
              className="text-white hover:text-[--prime-light] text-lg font-bold uppercase"
            >
              {t("header.yachts_nav")}
            </motion.a>
            <motion.a
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              href="#Reviews"
              onClick={closeMenu}
              className="text-white hover:text-[--prime-light] text-lg font-bold uppercase"
            >
              {t("header.reviews_nav")}
            </motion.a>
          </nav>
          <LanguageSwitcher />
        </div>
      )}
    </>
  );
};

export default MobileHeader;

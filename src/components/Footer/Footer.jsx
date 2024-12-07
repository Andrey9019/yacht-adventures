import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaSailboat } from "react-icons/fa6";

import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer  container flex flex-col mx-auto relative">
      <div className="absolute top-0 left-4 right-4 h-[1px] bg-[#f6f5ef33]">
        {" "}
      </div>

      <div className="mb-10 md:mb-[100px] xl:mb-[132px]">
        <div className=" pt-10 md:pt-[60px] flex flex-col md:flex-row justify-between items-start gap-10 ">
          <div className="flex items-center gap-2">
            <FaSailboat className="w-[18px] md:w-6" />
            <span className="text-sm font-medium uppercase md:font-bold md:text-xl">
              Yacht Adventures
            </span>
          </div>

          <nav className="flex text-sm flex-col xl:flex-row gap-[14px] md:gap-6">
            <a
              href="#About"
              className="w-max hover:text-[--prime-dark] font-bold uppercase "
            >
              {t("header.about_nav")}
            </a>
            <a
              href="#Yachts"
              className="w-max hover:text-[--prime-dark] font-bold  uppercase"
            >
              {t("header.yachts_nav")}
            </a>
            <a
              href="#Reviews"
              className="w-max hover:text-[--prime-dark] font-bold  uppercase"
            >
              {t("header.reviews_nav")}
            </a>
          </nav>

          <div>
            <p className="text-sm font-bold uppercase mb-4">
              {t("footer.social")}
            </p>
            <ul className="flex gap-[14px] md:gap-4">
              <li className="w-8 h-8 md:w-10 md:h-10 border rounded-lg flex items-center justify-center hover:text-[--prime-dark] hover:border-[--prime-dark]">
                <a href="/">
                  <FaFacebookF className=" md:w-5 md:h-5" />
                </a>
              </li>
              <li className="w-8 h-8 md:w-10 md:h-10 border rounded-lg flex items-center justify-center hover:text-[--prime-dark] hover:border-[--prime-dark]">
                <a href="/">
                  <FaInstagram className=" md:w-5 md:h-5" />
                </a>
              </li>
              <li className="w-8 h-8 md:w-10 md:h-10 border rounded-lg flex items-center justify-center hover:text-[--prime-dark] hover:border-[--prime-dark]">
                <a href="/">
                  <FaYoutube className=" md:w-5 md:h-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-[14px]">
        <p>{t("footer.2024_Yacht_Adventures")}</p>
        <a href="/" className="hover:text-[--prime-dark]">
          <p>{t("footer.Privacy_Police")}</p>
        </a>
      </div>
    </footer>
  );
};
export default Footer;

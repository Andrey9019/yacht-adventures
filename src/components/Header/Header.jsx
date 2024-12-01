import { useState, useEffect } from "react";
import { FaSailboat } from "react-icons/fa6";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Забороняємо скрол, коли меню відкрите
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => (document.body.style.overflow = "auto");
  }, [isMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Викликаємо один раз, щоб задати початкове значення

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Функція для закриття меню
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="container relative flex justify-between items-center py-6 px-5 md:p-[35px]">
      <div className="flex items-center gap-2">
        <FaSailboat className="w-[18px] md:w-6" />
        <span className="text-sm font-medium uppercase md:font-bold md:text-xl">
          Yacht Adventures
        </span>
      </div>

      {/* Навігація для десктопу */}
      {!isMobile ? (
        <nav className="hidden md:flex text-sm gap-6">
          <a
            href="#About"
            className="hover:text-[--prime-dark] font-bold uppercase"
          >
            About
          </a>
          <a
            href="#Yachts"
            className="hover:text-[--prime-dark] font-bold uppercase"
          >
            Yachts
          </a>
          <a
            href="#Reviews"
            className="hover:text-[--prime-dark] font-bold uppercase"
          >
            Reviews
          </a>
        </nav>
      ) : (
        <>
          {/* Бургер-меню */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden focus:outline-none"
          >
            {isMenuOpen ? (
              <span className="text-4xl">
                {/* Іконка для закриття */}
                <IoMdClose />
              </span>
            ) : (
              <HiOutlineMenuAlt3 className="w-[18px] md:w-6" />
            )}
          </button>
          {/* Мобільне меню */}
          {isMenuOpen && (
            <div className="fixed inset-0 bg-[--dark-blue] z-50 flex flex-col items-center text-center">
              {/* Верхня частина з логотипом, назвою і хрестиком */}
              <div className="relative w-full flex justify-between items-center py-6 px-5">
                <div className="flex items-center gap-2">
                  <FaSailboat className="w-[18px] md:w-6" />
                  <span className="text-sm font-medium uppercase md:font-bold md:text-xl">
                    Yacht Adventures
                  </span>
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-4xl focus:outline-none"
                >
                  {/* Іконка для закриття */}
                  <IoMdClose />
                </button>
              </div>

              {/* Навігація мобільного меню */}
              <nav className="flex flex-col gap-6">
                <a
                  href="#About"
                  onClick={closeMenu}
                  className="text-white hover:text-[--prime-light] text-lg font-bold uppercase"
                >
                  About
                </a>
                <a
                  href="#Yachts"
                  onClick={closeMenu}
                  className="text-white hover:text-[--prime-light] text-lg font-bold uppercase"
                >
                  Yachts
                </a>
                <a
                  href="#Reviews"
                  onClick={closeMenu}
                  className="text-white hover:text-[--prime-light] text-lg font-bold uppercase"
                >
                  Reviews
                </a>
              </nav>
            </div>
          )}
        </>
      )}
      {/* <div className="absolute bottom-0 left-4 right-4 h-[1px] bg-[#f6f5ef33]"></div> */}
    </header>
  );
};

export default Header;

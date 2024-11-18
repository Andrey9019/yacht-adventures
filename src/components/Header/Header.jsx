import { useState, useEffect } from "react";

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
        {/* Логотип і назва */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width=""
          height=""
          viewBox="0 0 18 18"
          fill="none"
          className="w-[18px] md:w-6"
        >
          <mask
            id="mask0_3500_65"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="18"
            height="18"
          >
            <path
              d="M0 14.412L4.0605 18H15.972L17.6775 15.6038L0.0015 14.412H0ZM10.4887 0V14.3048L15.9705 14.682L10.4887 0ZM9.74175 2.4105L1.82175 13.6807L9.74175 14.2155V2.4105Z"
              fill="black"
            />
          </mask>
          <g mask="url(#mask0_3500_65)">
            <path d="M0 0H18V18H0V0Z" fill="url(#paint0_linear_3500_65)" />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_3500_65"
              x1="7.66484"
              y1="2.72868e-06"
              x2="16.8581"
              y2="0.347733"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#BEC7C2" />
              <stop offset="1" stopColor="#A1B5BA" />
            </linearGradient>
          </defs>
        </svg>
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M18 6L6 18"
                    stroke="#F6F5EF"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 6L18 18"
                    stroke="#F6F5EF"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M2 5.995C2 5.445 2.446 5 2.995 5H11.005C11.2689 5 11.522 5.10483 11.7086 5.29143C11.8952 5.47803 12 5.73111 12 5.995C12 6.25889 11.8952 6.51197 11.7086 6.69857C11.522 6.88517 11.2689 6.99 11.005 6.99H2.995C2.73111 6.99 2.47803 6.88517 2.29143 6.69857C2.10483 6.51197 2 6.25889 2 5.995ZM2 12C2 11.45 2.446 11.005 2.995 11.005H21.005C21.2689 11.005 21.522 11.1098 21.7086 11.2964C21.8952 11.483 22 11.7361 22 12C22 12.2639 21.8952 12.517 21.7086 12.7036C21.522 12.8902 21.2689 12.995 21.005 12.995H2.995C2.73111 12.995 2.47803 12.8902 2.29143 12.7036C2.10483 12.517 2 12.2639 2 12ZM2.995 17.01C2.73111 17.01 2.47803 17.1148 2.29143 17.3014C2.10483 17.488 2 17.7411 2 18.005C2 18.2689 2.10483 18.522 2.29143 18.7086C2.47803 18.8952 2.73111 19 2.995 19H15.005C15.2689 19 15.522 18.8952 15.7086 18.7086C15.8952 18.522 16 18.2689 16 18.005C16 17.7411 15.8952 17.488 15.7086 17.3014C15.522 17.1148 15.2689 17.01 15.005 17.01H2.995Z"
                  fill="#F6F5EF"
                />
              </svg>
            )}
          </button>
          {/* Мобільне меню */}
          {isMenuOpen && (
            <div className="fixed inset-0 bg-[--dark-blue] z-50 flex flex-col items-center text-center">
              {/* Верхня частина з логотипом, назвою і хрестиком */}
              <div className="relative w-full flex justify-between items-center py-6 px-5">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <mask
                      id="mask0_3500_65"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="18"
                      height="18"
                    >
                      <path
                        d="M0 14.412L4.0605 18H15.972L17.6775 15.6038L0.0015 14.412H0ZM10.4887 0V14.3048L15.9705 14.682L10.4887 0ZM9.74175 2.4105L1.82175 13.6807L9.74175 14.2155V2.4105Z"
                        fill="black"
                      />
                    </mask>
                    <g mask="url(#mask0_3500_65)">
                      <path
                        d="M0 0H18V18H0V0Z"
                        fill="url(#paint0_linear_3500_65)"
                      />
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_3500_65"
                        x1="7.66484"
                        y1="2.72868e-06"
                        x2="16.8581"
                        y2="0.347733"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#BEC7C2" />
                        <stop offset="1" stopColor="#A1B5BA" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <span className="text-sm font-medium uppercase md:font-bold md:text-xl">
                    Yacht Adventures
                  </span>
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-4xl focus:outline-none"
                >
                  {/* Іконка для закриття */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M18 6L6 18"
                      stroke="#F6F5EF"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 6L18 18"
                      stroke="#F6F5EF"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
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
      <div className="absolute bottom-0 left-4 right-4 h-[1px] bg-[#f6f5ef33]"></div>
    </header>
  );
};

export default Header;

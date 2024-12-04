import { useState } from "react";

import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { FaSailboat } from "react-icons/fa6";

const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

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
          <div className="relative w-full flex justify-between items-center py-6 px-5">
            <div className="flex items-center gap-2">
              <FaSailboat className="w-[18px] md:w-6" />
              <span className="text-sm font-medium uppercase md:font-bold md:text-xl">
                Yacht Adventures
              </span>
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="focus:outline-none"
            >
              <IoMdClose />
            </button>
          </div>

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
  );
};

export default MobileHeader;

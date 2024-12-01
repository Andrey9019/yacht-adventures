import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex container px-5 justify-end">
      <button
        onClick={scrollToTop}
        className="flex items-center justify-center w-11 h-11 md:w-[68px] md:h-[68px] p-3 rounded-lg bg-[--prime-phrase] hover:bg-[--prime-dark] transition duration-300"
      >
        <FaArrowUp className=" md:w-7 md:h-7" />
      </button>
    </div>
  );
};

export default ScrollToTopButton;

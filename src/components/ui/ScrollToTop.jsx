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
        <svg
          className=" md:w-7 md:h-7"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 18 8"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.5 0L0 4L5.5 8V4.69282L18 4.69282V3.30718L5.5 3.30718V0Z"
            fill="#F6F5EF"
            transform="rotate (90 9 4)"
          />
        </svg>
      </button>
    </div>
  );
};

export default ScrollToTopButton;

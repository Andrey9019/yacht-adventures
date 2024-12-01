import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { useEffect, useState } from "react";
import ItemYacht from "./ItemYacht";
import allYachts from "../data/yachtsData";

const ListYacht = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [yachtsToShow, setYachtsToShow] = useState(calculateYachtsToShow());

  function calculateYachtsToShow() {
    if (window.innerWidth >= 1280) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  }

  useEffect(() => {
    const handleResize = () => {
      setYachtsToShow(calculateYachtsToShow());
      setCurrentPage(1);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(allYachts.length / yachtsToShow);

  const handleNextPage = () => {
    setCurrentPage((prevPage) =>
      prevPage < totalPages ? prevPage + 1 : prevPage
    );
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  const indexOfLastYacht = currentPage * yachtsToShow;
  const indexOfFirstYacht = indexOfLastYacht - yachtsToShow;
  const currentYachts = allYachts.slice(indexOfFirstYacht, indexOfLastYacht);

  return (
    <section id="Yachts" className="flex mx-auto ">
      <div className=" list-container container">
        <div className="xl:flex xl:justify-between">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="disabled:opacity-50 max-xl:hidden"
          >
            <div className="border border-white rounded-[60px] p-[14px]">
              <FaArrowLeft />
            </div>
          </button>

          <ul className="grid justify-items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {currentYachts.map((yacht, index) => (
              <ItemYacht key={index} yachtContent={yacht} />
            ))}
          </ul>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className=" disabled:opacity-50 max-xl:hidden"
          >
            <div className="border border-white rounded-[60px] p-[14px]">
              <FaArrowRight />
            </div>
          </button>
        </div>
        <div className="flex justify-center gap-[14px] xl:hidden">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="disabled:opacity-50"
          >
            <div className="border border-white rounded-[60px] p-[14px]">
              <FaArrowLeft />
            </div>
          </button>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className=" disabled:opacity-50"
          >
            <div className="border border-white rounded-[60px] p-[14px]">
              <FaArrowRight />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ListYacht;

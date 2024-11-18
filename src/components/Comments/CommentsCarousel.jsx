import { useState, useEffect } from "react";
import allComments from "../data/commentsData";

const CommentsCarousel = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [commentsPerPage, setCommentsPerPage] = useState(1);

  // Зміна кількості коментарів на основі розміру екрану
  useEffect(() => {
    const updateCommentsPerPage = () => {
      if (window.innerWidth >= 1216) {
        setCommentsPerPage(3); // Для десктопу
      } else if (window.innerWidth >= 768) {
        setCommentsPerPage(2); // Для планшету
      } else {
        setCommentsPerPage(1); // Для мобілки
      }
    };
    updateCommentsPerPage();
    window.addEventListener("resize", updateCommentsPerPage);
    return () => window.removeEventListener("resize", updateCommentsPerPage);
  }, []);

  // Обчислення кількості сторінок
  const totalPages = Math.ceil(allComments.length / commentsPerPage);

  // Автоматичне перемикання сторінок кожні 10 секунд
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
    }, 10000);
    return () => clearInterval(interval);
  }, [totalPages]);

  // Функція для переходу на певну сторінку
  const goToPage = (page) => {
    setCurrentPage(page);
  };

  // Визначаємо індекси коментарів для поточної сторінки
  const startIndex = currentPage * commentsPerPage;
  const currentComments = allComments.slice(
    startIndex,
    startIndex + commentsPerPage
  );

  return (
    <div className="relative">
      <ul className="flex justify-center gap-4 list-none p-0">
        {currentComments.map((comment, index) => (
          <li key={index} className="mb-[14px] md:mb-8 max-w-[384px]">
            <div className="flex flex-col p-6 md:px-8 xl:p-8 items-center rounded-3xl bg-[--dark-blue-2]">
              <img
                src={comment.imageClient.mobileSrc}
                srcSet={`${comment.imageClient.mobileSrc} 500w,${comment.imageClient.desktopSrc} 1000w`}
                alt={comment.nameClient}
                className="w-12 h-12 mb-[18px] object-cover rounded-full"
              />

              <p className="mb-2">{comment.nameClient}</p>
              <p className="text-sm font-normal text-center text-[#f6f5ef80]">
                {comment.comment}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <div className="flex justify-center gap-[10px] xl:hidden">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToPage(index)}
            className={`w-3 h-3 rounded-full ${
              currentPage === index ? "bg-gray-400" : "bg-gray-800"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default CommentsCarousel;

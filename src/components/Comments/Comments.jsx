import CommentsCarousel from "./CommentsCarousel";

const Comments = () => {
  return (
    <section id="Reviews" className="flex mx-auto max-md:mb-4">
      <div className="container custom-container">
        <div className="mb-10 xl:mb-[68px] flex flex-col xl:flex-row justify-between gap-4 md:gap-0 ">
          <p className="text-2xl md:text-3xl  mb-4 md:mb-8 xl:mb-0 md:w-[70%] xl:w-[32%] max-xl:self-start">
            <span className="text-[--prime-phrase] italic">
              Yacht Adventures
            </span>{" "}
            take pride in providing the best possible service and experience to
            our customers
          </p>
          <p className="text-sm md:text-base md:w-[40%] xl:w-[24%] max-xl:self-end">
            Our customers have enjoyed unforgettable moments on our yachts.
            Don&apos;t just take our word for it - read on to find out what they
            have to say about their journey with us.
          </p>
        </div>
        <CommentsCarousel />
      </div>
    </section>
  );
};

export default Comments;

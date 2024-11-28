import Button from "../ui/Button";

const About = () => {
  return (
    <section
      id="About"
      className="flex mx-auto mb-40 md:mb-[370px] xl:mb-[494px]"
    >
      <div className="container about-container ">
        <div className="grid gap-[14px] text-sm xl:text-base mb-10 md:mb-16 grid-cols-2 md:grid-cols-4 xl:grid-cols-6">
          <p className="col-span-2 row-start-1 md:col-span-3 md:row-start-1 xl:col-span-3 xl:row-start-1 text-2xl md:text-[32px] mb-10">
            <span className="italic text-[--prime-phrase]">
              Yacht Adventures{" "}
            </span>
            fleet is here to take you on the ultimate adventure. Each yacht is
            hand-picked for its comfort, style, and performance.
          </p>
          <p className="col-span-1 row-start-2 md:col-span-1 md:col-start-3 md:row-start-2 xl:col-start-5 xl:row-start-1">
            From spacious decks to state-of-the-art technology, our yachts are
            designed to provide the perfect blend of luxury and functionality.
            Take a look at our selection below and choose the yacht that matches
            your needs and preferences.
          </p>
          <p className="col-span-1 row-start-2 md:col-span-1 md:col-start-4 md:row-start-2 xl:col-start-6 xl:row-start-1">
            No matter which yacht you choose, our experienced crew will ensure
            that your journey is smooth and enjoyable. Book now and get ready
            for an unforgettable adventure on the high seas.
          </p>
        </div>

        <div className="relative">
          <div className="about-wrap">
            <div className="about-box1 xl:w-[533px]">
              {" "}
              <img
                src="images/about/about-1@1x.jpg"
                srcSet="images/about/about-1@1x.jpg 1x, images/about/about-1@2x.webp 2x"
                alt="Yacht's view"
                className="h-[524px] md:h-[630px] xl:h-[473px] xl:w-[533px] object-cover rounded-3xl  "
                // loading="lazy" // відкладене завантаження
                // decoding="async" // асинхронне декодування
                // width="500" // встановлення ширини для покращення продуктивності
                // height="250" // встановлення висоти
              />
            </div>
            <div className=" about-box2 md:w-[308px]">
              <img
                src="images/about/about-2@1x.jpg"
                srcSet="images/about/about-2@1x.jpg 1x, images/about/about-2@2x.webp 2x"
                alt="Yacht's view"
                className="h-[289px] md:w-[308px] scale-x-[-1] object-cover rounded-3xl "
                loading="lazy" // відкладене завантаження
                decoding="async" // асинхронне декодування
                // width="500" // встановлення ширини для покращення продуктивності
                // height="250" // встановлення висоти
              />
            </div>
            <div className="image-container about-box3 w-[260px] ">
              <img
                src="images/about/about-3@1x.jpg"
                srcSet="images/about/about-3@1x.jpg 1x, images/about/about-3@2x.webp 2x"
                alt="Yacht's view"
                className="h-[244px] w-[260px] object-cover rounded-3xl"
                loading="lazy" // відкладене завантаження
                decoding="async" // асинхронне декодування
                // width="500" // встановлення ширини для покращення продуктивності
                // height="250" // встановлення висоти
              />
            </div>
          </div>
          <div className="absolute -bottom-24 md:-bottom-64 md:px-8 xl:-bottom-96  xl:px-24">
            <p className="mb-10 md:mb-16 text-[36px] md:text-[70px] xl:text-[100px] xl:font-medium ">
              Choose your dream yacht and sail away into the sunset
            </p>
            <Button
              text="Yacht rental"
              onClick={() => {
                document
                  .getElementById("Rent")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

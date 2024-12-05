import Button from "../ui/Button";

const Hero = () => {
  return (
    <section className="hero-bg-img container flex mx-auto">
      <div className=" hero-container xl:flex flex-row-reverse">
        <div className=" flex flex-col items-center text-center">
          <h1 className="text-3xl md:text-6xl font-medium tracking-[-0.6px] md:tracking-[-0.64px] xl:tracking-[-1.7px] mb-6 md:mb-4">
            Explore the High Seas with Our Luxury Yacht Rentals
          </h1>
          <p className="text-sm md:text-base font-normal tracking-[0.28px] max-w-[541px] mb-9 md:mb-8">
            Experience the freedom and luxury of yachting on the open seas.
            Choose from our top-of-the-line yachts and embark on an
            unforgettable journey surrounded by breathtaking views and
            state-of-the-art amenities.
          </p>
          <Button
            text="Yacht rental"
            hoverTextColor=""
            backgroundColor="#93ABAE"
            hoverBackgroundColor="#88B3B9"
            borderColor="none"
            hoverBorderColor="none"
            onClick={() => {
              document
                .getElementById("Rent")
                .scrollIntoView({ behavior: "smooth" });
            }}
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;

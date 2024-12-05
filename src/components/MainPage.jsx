import Hero from "./Hero/Hero";
import About from "./About/About";
import ListYacht from "./ListYacht/ListYacht";
import Activitys from "./Activitys/Activitys";
import Rent from "./RentForm/Rent";
import Comments from "./Comments/Comments";
import ScrollToTopButton from "./ui/ScrollToTop";

const MainPage = () => {
  return (
    <main>
      <Hero />
      <About />
      <ListYacht />
      <Activitys />
      <Rent />
      <Comments />
      <ScrollToTopButton />
    </main>
  );
};
export default MainPage;

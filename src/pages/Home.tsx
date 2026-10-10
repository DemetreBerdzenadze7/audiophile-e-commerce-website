import Hero from "../components/home/Hero";
import Categories from "../components/shared/Categories";
import FeaturedProducts from "../components/home/FeaturedProducts";
import BestGear from "../components/shared/BestGear";

const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <BestGear />
    </>
  );
};

export default Home;

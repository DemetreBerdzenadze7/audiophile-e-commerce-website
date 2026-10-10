import CategoryHeader from "../components/category/CategoryHeader";
import CategoryProducts from "../components/category/CategoryProducts";
import Categories from "../components/shared/Categories";
import BestGear from "../components/shared/BestGear";

const Headphones = () => {
  return (
    <>
      <CategoryHeader title="Headphones" />
      <CategoryProducts category="headphones" />
      <Categories className="mt-30 lg:mt-40" />
      <BestGear className="my-30 lg:my-40" />
    </>
  );
};

export default Headphones;

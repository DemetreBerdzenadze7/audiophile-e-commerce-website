import { useParams } from "react-router";
import Container from "../container/Container";
import ProductOverview from "../components/product/ProductOverview";
import ProductFeatures from "../components/product/ProductFeatures";
import ProductGallery from "../components/product/ProductGallery";
import RelatedProducts from "../components/product/RelatedProducts";
import Categories from "../components/shared/Categories";
import BestGear from "../components/shared/BestGear";
import { products } from "../data/products";

const ProductDetail = () => {
  const { slug } = useParams();
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return (
      <Container className="py-30 text-center">
        <h1 className="text-h4 font-bold uppercase">Product not found</h1>
      </Container>
    );
  }

  console.log(slug);

  return (
    <>
      <ProductOverview product={product} />
      <ProductFeatures product={product} />
      <ProductGallery product={product} />
      <RelatedProducts product={product} />
      <Categories className="mt-30 lg:mt-40" />
      <BestGear className="my-30 lg:my-40" />
    </>
  );
};

export default ProductDetail;

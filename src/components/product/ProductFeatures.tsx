import Container from "../../container/Container";
import type { Product } from "../../types/product";

interface ProductFeaturesProps {
  product: Product;
}

const ProductFeatures = ({ product }: ProductFeaturesProps) => {
  return (
    <Container className="flex flex-col gap-22 mt-22 md:gap-30 md:mt-30 lg:flex-row lg:justify-between lg:gap-0 lg:mt-40">
      <section className="lg:max-w-158.75">
        <h2 className="text-h3-sm font-bold uppercase md:text-h3">Features</h2>
        <p className="mt-6 text-body font-medium text-black/50 whitespace-pre-line md:mt-8">
          {product.features}
        </p>
      </section>

      <section className="md:grid md:grid-cols-2 md:gap-2.75 lg:flex lg:flex-col lg:gap-0 lg:w-87.5">
        <h2 className="text-h3-sm font-bold uppercase md:text-h3">In the box</h2>
        <ul className="flex flex-col gap-2 mt-6 md:mt-0 lg:mt-8">
          {product.includes.map(({ quantity, item }) => (
            <li key={item} className="flex gap-6 text-body">
              <span className="w-4 font-bold text-orange">{quantity}x</span>
              <span className="font-medium capitalize text-black/50">{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </Container>
  );
};

export default ProductFeatures;

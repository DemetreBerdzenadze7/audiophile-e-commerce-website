import Container from "../../container/Container";
import Button from "../shared/Button";
import type { Product } from "../../types/product";

interface RelatedProductsProps {
  product: Product;
}

const RelatedProducts = ({ product }: RelatedProductsProps) => {
  return (
    <Container className="mt-30 text-center lg:mt-40">
      <h2 className="text-h3-sm font-bold uppercase md:text-h3">You may also like</h2>

      <ul className="flex flex-col gap-14 mt-10 md:grid md:grid-cols-3 md:gap-2.75 md:mt-14 lg:gap-7.5 lg:mt-16">
        {product.others.map(({ slug, name, image }) => (
          <li key={slug} className="flex flex-col items-center">
            <picture className="w-full">
              <source media="(min-width: 72.5rem)" srcSet={image.desktop} />
              <source media="(min-width: 48rem)" srcSet={image.tablet} />
              <img
                src={image.mobile}
                alt={name}
                className="w-full h-30 object-cover rounded-card md:h-79.5"
              />
            </picture>
            <h3 className="mt-8 text-h5 font-bold uppercase md:mt-10">{name}</h3>
            <Button to={`/product/${slug}`} className="mt-8">
              See product
            </Button>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default RelatedProducts;

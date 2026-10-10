import { Link } from "react-router";
import Container from "../../container/Container";
import Button from "../shared/Button";
import { splitName } from "../../utils/splitName";
import type { Product } from "../../types/product";

interface ProductOverviewProps {
  product: Product;
}

const ProductOverview = ({ product }: ProductOverviewProps) => {
  const [model, type] = splitName(product.name);

  return (
    <Container className="mt-4 md:mt-8 lg:mt-20">
      <Link
        to={`/${product.category}`}
        className="text-body font-medium text-black/50 hover:text-orange transition-colors"
      >
        Go Back
      </Link>

      <article className="flex flex-col mt-6 md:flex-row md:items-center md:gap-17.25 lg:gap-31.25 lg:mt-10">
        <picture className="md:shrink-0">
          <source media="(min-width: 72.5rem)" srcSet={product.image.desktop} />
          <source media="(min-width: 48rem)" srcSet={product.image.tablet} />
          <img
            src={product.image.mobile}
            alt={product.name}
            className="w-full h-81.75 object-cover rounded-card md:w-70.25 md:h-120 lg:w-135 lg:h-140"
          />
        </picture>

        <div className="flex flex-col items-start mt-8 md:flex-1 md:mt-0">
          {product.new && (
            <p className="mb-6 text-overline uppercase text-orange md:mb-4">New product</p>
          )}
          <h1 className="text-h4 font-bold uppercase lg:text-h2">
            {model}
            <br />
            {type}
          </h1>
          <p className="mt-6 text-body font-medium text-black/50 md:mt-8">{product.description}</p>
          <p className="mt-6 text-h6 font-bold md:mt-8">$ {product.price.toLocaleString("en-US")}</p>

          <div className="flex gap-4 mt-8 lg:mt-12">
            <div className="flex items-center justify-between w-30 h-12 px-4 bg-gray text-subtitle font-bold">
              <button
                type="button"
                aria-label="Decrease quantity"
                className="text-black/25 hover:text-orange transition-colors"
              >
                -
              </button>
              <span>1</span>
              <button
                type="button"
                aria-label="Increase quantity"
                className="text-black/25 hover:text-orange transition-colors"
              >
                +
              </button>
            </div>
            <Button>Add to cart</Button>
          </div>
        </div>
      </article>
    </Container>
  );
};

export default ProductOverview;

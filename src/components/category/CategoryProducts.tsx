import Container from "../../container/Container";
import Button from "../shared/Button";
import { products } from "../../data/products";
import type { Category } from "../../types/product";
import { splitName } from "../../utils/splitName";

interface CategoryProductsProps {
  category: Category;
}

const CategoryProducts = ({ category }: CategoryProductsProps) => {
  const categoryProducts = products
    .filter((product) => product.category === category)
    .sort((a, b) => b.id - a.id);

  return (
    <Container className="flex flex-col gap-30 mt-16 md:mt-30 lg:gap-40 lg:mt-40">
      {categoryProducts.map((product, index) => {
        const [model, type] = splitName(product.name);

        return (
          <article
            key={product.id}
            className={`flex flex-col items-center text-center lg:flex-row lg:justify-between lg:text-left ${
              index % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            <picture className="w-full lg:w-auto lg:shrink-0">
              <source
                media="(min-width: 72.5rem)"
                srcSet={product.categoryImage.desktop}
              />
              <source
                media="(min-width: 48rem)"
                srcSet={product.categoryImage.tablet}
              />
              <img
                src={product.categoryImage.mobile}
                alt={product.name}
                className="w-full h-88 object-cover rounded-card lg:w-135 lg:h-140"
              />
            </picture>

            <div className="flex flex-col items-center mt-8 md:mt-13 lg:items-start lg:mt-0 lg:max-w-111.25">
              {product.new && (
                <p className="mb-6 text-overline uppercase text-orange md:mb-4">
                  New product
                </p>
              )}
              <h2 className="text-h4 font-bold uppercase md:text-h2">
                {model}
                <br />
                {type}
              </h2>
              <p className="mt-6 text-body font-medium text-black/50 md:max-w-143 lg:mt-8">
                {product.description}
              </p>
              <Button to={`/product/${product.slug}`} className="mt-6 lg:mt-10">
                See product
              </Button>
            </div>
          </article>
        );
      })}
    </Container>
  );
};

export default CategoryProducts;

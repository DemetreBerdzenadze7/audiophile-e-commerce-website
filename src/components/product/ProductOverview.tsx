import { Link } from "react-router";
import Container from "../../container/Container";
import Button from "../shared/Button";
import { splitName } from "../../utils/splitName";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../redux/store";
import { addProduct } from "../../redux/cartSlice";

interface ProductOverviewProps {
  product: Product;
}

const ProductOverview = ({ product }: ProductOverviewProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((store: RootState) => store.cart);

  const [model, type] = splitName(product.name);
  const [amount, setAmount] = useState<number>(1);

  const increaseAmount = () => {
    setAmount((prev) => prev + 1);
  };

  const decreaseAmount = () => {
    setAmount((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleAddProduct = (
    slug: string,
    shortName: string,
    price: number,
    image: string,
    quantity: number,
  ) => {
    dispatch(addProduct(slug, shortName, price, image, quantity));
  };

  console.log(products);

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
            <p className="mb-6 text-overline uppercase text-orange md:mb-4">
              New product
            </p>
          )}
          <h1 className="text-h4 font-bold uppercase lg:text-h2">
            {model}
            <br />
            {type}
          </h1>
          <p className="mt-6 text-body font-medium text-black/50 md:mt-8">
            {product.description}
          </p>
          <p className="mt-6 text-h6 font-bold md:mt-8">
            $ {product.price.toLocaleString("en-US")}
          </p>

          <div className="flex gap-4 mt-8 lg:mt-12">
            <div className="flex items-center justify-between w-30 h-12 px-4 bg-gray text-subtitle font-bold">
              <button
                type="button"
                aria-label="Decrease quantity"
                className="text-black/25 hover:text-orange transition-colors"
                onClick={decreaseAmount}
              >
                -
              </button>
              <span>{amount}</span>
              <button
                type="button"
                aria-label="Increase quantity"
                className="text-black/25 hover:text-orange transition-colors"
                onClick={increaseAmount}
              >
                +
              </button>
            </div>
            <Button
              onClick={() =>
                handleAddProduct(
                  product.slug,
                  product.shortName,
                  product.price,
                  product.cartImage,
                  amount,
                )
              }
            >
              Add to cart
            </Button>
          </div>
        </div>
      </article>
    </Container>
  );
};

export default ProductOverview;

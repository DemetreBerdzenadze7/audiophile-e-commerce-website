import { useDispatch, useSelector } from "react-redux";
import Container from "../../container/Container";
import Button from "../shared/Button";
import type { RootState } from "../../redux/store";
import type { AppDispatch } from "../../redux/store";
import {
  decreaseAmount,
  increaseAmount,
  removeAllProducts,
} from "../../redux/cartSlice";

const formatPrice = (price: number) => `$ ${price.toLocaleString("en-US")}`;

interface CartModalProps {
  onClose: () => void;
}

const CartModal = ({ onClose }: CartModalProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((store: RootState) => store.cart);

  const total = products.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const handleRemoveAll = () => {
    dispatch(removeAllProducts());
    onClose();
  };

  const handleIncreaseAmount = (slug: string, amount: number) => {
    dispatch(increaseAmount(slug, amount));
  };

  const handleDecreaseAmount = (slug: string, amount: number) => {
    const item = products.find((product) => product.slug === slug);
    const isLastItem = products.length === 1 && item?.quantity === 1;

    dispatch(decreaseAmount(slug, amount));

    if (isLastItem) {
      onClose();
    }
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-x-0 bottom-0 top-22.5 z-50 overflow-y-auto bg-black/40 lg:top-24.25"
    >
      <Container>
        <div
          onClick={(event) => event.stopPropagation()}
          className="mt-6 mb-6 px-7 py-8 bg-white rounded-card md:ml-auto md:w-94.25 md:px-8 lg:mt-8"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-h6 font-bold uppercase">
              Cart({products.length}){" "}
            </h2>
            {products.length > 0 && (
              <button
                type="button"
                onClick={handleRemoveAll}
                className="text-body font-medium text-black/50 underline hover:text-orange transition-colors"
              >
                Remove all
              </button>
            )}
          </div>

          {products.length === 0 ? (
            <p className="mt-8 text-body font-medium text-black/50">
              Your cart is empty.
            </p>
          ) : (
            <>
              <ul className="flex flex-col gap-6 mt-8">
                {products.map(({ slug, shortName, price, image, quantity }) => (
                  <li key={slug} className="flex items-center gap-4">
                    <img
                      src={image}
                      alt={shortName}
                      className="size-16 shrink-0 rounded-card"
                    />
                    <div className="flex-1">
                      <p className="text-body font-bold uppercase">
                        {shortName}
                      </p>
                      <p className="text-[0.875rem] font-bold text-black/50">
                        {formatPrice(price)}
                      </p>
                    </div>
                    <div className="flex items-center justify-between w-24 h-8 px-3 bg-gray text-subtitle font-bold">
                      <button
                        type="button"
                        aria-label={`Decrease ${shortName} quantity`}
                        className="text-black/25 hover:text-orange transition-colors"
                        onClick={() => handleDecreaseAmount(slug, 1)}
                      >
                        -
                      </button>
                      <span>{quantity}</span>
                      <button
                        type="button"
                        aria-label={`Increase ${shortName} quantity`}
                        className="text-black/25 hover:text-orange transition-colors"
                        onClick={() => handleIncreaseAmount(slug, 1)}
                      >
                        +
                      </button>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between mt-8">
                <p className="text-body font-medium uppercase text-black/50">
                  Total
                </p>
                <p className="text-h6 font-bold">{formatPrice(total)}</p>
              </div>

              <Button
                fullWidth
                className="mt-6"
                to="/checkout"
                onClick={onClose}
              >
                Checkout
              </Button>
            </>
          )}
        </div>
      </Container>
    </div>
  );
};

export default CartModal;

import Button from "../shared/Button";
import { useLockBodyScroll } from "../../hooks/useLockBodyScroll";

interface OrderConfirmationProps {
  items: CartItem[];
  grandTotal: number;
  onBackHome?: () => void;
}

const formatPrice = (price: number) => `$ ${price.toLocaleString("en-US")}`;

const OrderConfirmation = ({ items, grandTotal, onBackHome }: OrderConfirmationProps) => {
  useLockBodyScroll();

  const [firstItem, ...otherItems] = items;

  return (
    <div className="fixed inset-x-0 bottom-0 top-22.5 z-50 overflow-y-auto bg-black/40 animate-fade-in lg:top-24.25">
      <div className="flex min-h-full px-6 py-6 md:px-10">
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="order-confirmation-title"
          className="w-full max-w-135 m-auto p-8 bg-white rounded-card animate-modal-in md:p-12"
        >
          <img src="/images/checkout/icon-order-confirmation.svg" alt="" className="size-16" />

          <h2
            id="order-confirmation-title"
            className="mt-6 text-h5 font-bold uppercase md:mt-8 md:text-h3"
          >
            Thank you
            <br />
            for your order
          </h2>
          <p className="mt-4 text-body font-medium text-black/50 md:mt-6">
            You will receive an email confirmation shortly.
          </p>

          <div className="mt-6 overflow-hidden rounded-card md:grid md:grid-cols-[246fr_198fr] md:mt-8">
            <div className="p-6 bg-gray">
              {firstItem && (
                <div className="flex items-center gap-4">
                  <img
                    src={firstItem.image}
                    alt={firstItem.shortName}
                    className="size-12.5 shrink-0 rounded-card"
                  />
                  <div className="flex-1">
                    <p className="text-body font-bold uppercase">{firstItem.shortName}</p>
                    <p className="text-input font-bold text-black/50">
                      {formatPrice(firstItem.price)}
                    </p>
                  </div>
                  <p className="self-start pt-1 text-body font-bold text-black/50">
                    x{firstItem.quantity}
                  </p>
                </div>
              )}

              {otherItems.length > 0 && (
                <p className="pt-3 mt-3 border-t border-black/8 text-label font-bold text-center text-black/50">
                  and {otherItems.length} other item(s)
                </p>
              )}
            </div>

            <div className="flex flex-col justify-center gap-2 px-6 py-4 bg-black md:px-8">
              <p className="text-body font-medium uppercase text-white/50">Grand total</p>
              <p className="text-h6 font-bold text-white">{formatPrice(grandTotal)}</p>
            </div>
          </div>

          <Button to="/home" onClick={onBackHome} fullWidth className="mt-6 md:mt-11.5">
            Back to home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;

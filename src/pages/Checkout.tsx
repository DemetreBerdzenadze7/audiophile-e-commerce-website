import Container from "../container/Container";
import CheckoutForm from "../components/checkout/CheckoutForm";
import CheckoutSummary from "../components/checkout/CheckoutSummary";
import OrderConfirmation from "../components/checkout/OrderConfirmation";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../redux/store";
import { removeAllProducts } from "../redux/cartSlice";
import { useNavigate } from "react-router";
import { useEffect, useRef, useState } from "react";

const Checkout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const products = useSelector((store: RootState) => store.cart);

  const [isProcessing, setIsProcessing] = useState(false);
  const [isOrderComplete, setIsOrderComplete] = useState(false);
  const paymentTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  // Clear the fake payment timer if the user leaves the page early
  useEffect(() => () => clearTimeout(paymentTimer.current), []);

  // Simulates a payment request before showing the confirmation
  const handleOrderSuccess = () => {
    setIsProcessing(true);
    paymentTimer.current = setTimeout(() => {
      setIsProcessing(false);
      setIsOrderComplete(true);
    }, 1500);
  };

  const hasRedirected = useRef(false);

  useEffect(() => {
    // After a finished order the cart is cleared on purpose, so don't redirect back
    if (products.length === 0 && !isOrderComplete && !hasRedirected.current) {
      hasRedirected.current = true;
      navigate(-1);
    }
  }, [products.length, isOrderComplete, navigate]);

  const total = products.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const vat = Math.round((total * 20) / 100);
  const grandTotal = total + 50;

  const handleBackHome = () => {
    dispatch(removeAllProducts());
  };

  return (
    <div className="pb-12 md:pb-29 lg:bg-gray lg:pb-35">
      <Container className="pt-4 md:pt-12 lg:pt-20">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="text-body font-medium text-black/50 hover:text-orange transition-colors"
        >
          Go Back
        </button>

        <div className="flex flex-col gap-8 mt-6 lg:flex-row lg:gap-7.5 lg:mt-9.5">
          <CheckoutForm onSuccess={handleOrderSuccess} />

          <CheckoutSummary
            items={products}
            total={total}
            shipping={50}
            vat={vat}
            grandTotal={grandTotal}
            isProcessing={isProcessing}
          />
        </div>
      </Container>

      {isOrderComplete && (
        <OrderConfirmation items={products} grandTotal={grandTotal} onBackHome={handleBackHome} />
      )}
    </div>
  );
};

export default Checkout;

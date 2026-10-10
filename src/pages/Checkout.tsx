import Container from "../container/Container";
import CheckoutForm from "../components/checkout/CheckoutForm";
import CheckoutSummary from "../components/checkout/CheckoutSummary";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { useNavigate } from "react-router";
import { useEffect, useRef } from "react";

const Checkout = () => {
  const navigate = useNavigate();

  const products = useSelector((store: RootState) => store.cart);

  const hasRedirected = useRef(false);

  useEffect(() => {
    // StrictMode runs effects twice in dev, the ref makes sure we only go back once
    if (products.length === 0 && !hasRedirected.current) {
      hasRedirected.current = true;
      navigate(-1);
    }
  }, [products.length, navigate]);

  const total = products.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const vat = Math.round((total * 20) / 100);

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
          <CheckoutForm />

          <CheckoutSummary
            items={products}
            total={total}
            shipping={50}
            vat={vat}
            grandTotal={total + 50}
          />
        </div>
      </Container>
    </div>
  );
};

export default Checkout;

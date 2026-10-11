import Button from "../shared/Button";

interface CheckoutSummaryProps {
  items: CartItem[];
  total: number;
  shipping: number;
  vat: number;
  grandTotal: number;
}

const formatPrice = (price: number) => `$ ${price.toLocaleString("en-US")}`;

const CheckoutSummary = ({ items, total, shipping, vat, grandTotal }: CheckoutSummaryProps) => {
  const rows = [
    { label: "Total", value: total },
    { label: "Shipping", value: shipping },
    { label: "VAT (included)", value: vat },
  ];

  return (
    <aside className="px-6 py-8 bg-white rounded-card md:p-8 lg:w-87.5 lg:shrink-0 lg:self-start">
      <h2 className="text-h6 font-bold uppercase">Summary</h2>

      {items.length === 0 ? (
        <p className="mt-8 text-body font-medium text-black/50">Your cart is empty.</p>
      ) : (
        <ul className="flex flex-col gap-6 mt-8">
          {items.map(({ slug, shortName, price, image, quantity }) => (
            <li key={slug} className="flex items-center gap-4">
              <img src={image} alt={shortName} className="size-16 shrink-0 rounded-card" />
              <div className="flex-1">
                <p className="text-body font-bold uppercase">{shortName}</p>
                <p className="text-input font-bold text-black/50">{formatPrice(price)}</p>
              </div>
              <p className="self-start pt-1 text-body font-bold text-black/50">x{quantity}</p>
            </li>
          ))}
        </ul>
      )}

      <dl className="flex flex-col gap-2 mt-8">
        {rows.map(({ label, value }) => (
          <div key={label} className="flex items-center justify-between">
            <dt className="text-body font-medium uppercase text-black/50">{label}</dt>
            <dd className="text-h6 font-bold">{formatPrice(value)}</dd>
          </div>
        ))}
        <div className="flex items-center justify-between mt-4">
          <dt className="text-body font-medium uppercase text-black/50">Grand total</dt>
          <dd className="text-h6 font-bold text-orange">{formatPrice(grandTotal)}</dd>
        </div>
      </dl>

      <Button type="submit" form="checkout-form" fullWidth className="mt-8">
        Continue &amp; Pay
      </Button>
    </aside>
  );
};

export default CheckoutSummary;

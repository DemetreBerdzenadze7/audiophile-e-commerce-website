import FormField from "./FormField";
import PaymentOption from "./PaymentOption";

const sectionTitle = "text-subtitle font-bold uppercase text-orange";

const CheckoutForm = () => {
  return (
    <form
      id="checkout-form"
      className="flex-1 px-6 pt-6 pb-8 bg-white rounded-card md:px-7 md:pt-7.5 md:pb-7.5 lg:px-12 lg:pt-13.5 lg:pb-12"
    >
      <h1 className="text-h4 font-bold uppercase md:text-h3">Checkout</h1>

      <fieldset className="mt-8 md:mt-10">
        <legend className={sectionTitle}>Billing details</legend>
        <div className="grid gap-6 mt-4 md:grid-cols-2 md:gap-x-4">
          <FormField label="Name" name="name" placeholder="Alexei Ward" />
          <FormField
            label="Email Address"
            name="email"
            type="email"
            placeholder="alexei@mail.com"
          />
          <FormField label="Phone Number" name="phone" type="tel" placeholder="+1 202-555-0136" />
        </div>
      </fieldset>

      <fieldset className="mt-8 md:mt-13">
        <legend className={sectionTitle}>Shipping info</legend>
        <div className="grid gap-6 mt-4 md:grid-cols-2 md:gap-x-4">
          <FormField
            label="Address"
            name="address"
            placeholder="1137 Williams Avenue"
            className="md:col-span-2"
          />
          <FormField label="ZIP Code" name="zip" placeholder="10001" />
          <FormField label="City" name="city" placeholder="New York" />
          <FormField label="Country" name="country" placeholder="United States" />
        </div>
      </fieldset>

      <fieldset className="mt-8 md:mt-13">
        <legend className={sectionTitle}>Payment details</legend>
        <div className="grid gap-4 mt-4 md:grid-cols-2 md:gap-x-4">
          <p className="text-label font-bold">Payment Method</p>
          <div className="flex flex-col gap-4">
            <PaymentOption label="e-Money" value="e-money" defaultChecked />
            <PaymentOption label="Cash on Delivery" value="cash" />
          </div>
        </div>
        <div className="grid gap-6 mt-8 md:grid-cols-2 md:gap-x-4 md:mt-6">
          <FormField label="e-Money Number" name="eMoneyNumber" placeholder="238521993" />
          <FormField label="e-Money PIN" name="eMoneyPin" placeholder="6891" />
        </div>
      </fieldset>
    </form>
  );
};

export default CheckoutForm;

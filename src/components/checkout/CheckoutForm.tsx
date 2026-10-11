import FormField from "./FormField";
import PaymentOption from "./PaymentOption";
import { useForm, useWatch, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { checkoutSchema, type CheckoutFormData } from "./checkoutSchema";

const sectionTitle = "text-subtitle font-bold uppercase text-orange";

const CheckoutForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CheckoutFormData>({
    resolver: yupResolver(checkoutSchema),
    defaultValues: { paymentMethod: "e-money" },
  });

  const paymentMethod = useWatch({ control, name: "paymentMethod" });

  const onSubmit: SubmitHandler<CheckoutFormData> = (data) => console.log(data);

  return (
    <form
      id="checkout-form"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="flex-1 px-6 pt-6 pb-8 bg-white rounded-card md:px-7 md:pt-7.5 md:pb-7.5 lg:px-12 lg:pt-13.5 lg:pb-12"
    >
      <h1 className="text-h4 font-bold uppercase md:text-h3">Checkout</h1>

      <fieldset className="mt-8 md:mt-10">
        <legend className={sectionTitle}>Billing details</legend>
        <div className="grid gap-6 mt-4 md:grid-cols-2 md:gap-x-4">
          <FormField
            label="Name"
            placeholder="Alexei Ward"
            registration={register("name")}
            error={errors.name?.message}
          />
          <FormField
            label="Email Address"
            type="email"
            placeholder="alexei@mail.com"
            registration={register("email")}
            error={errors.email?.message}
          />
          <FormField
            label="Phone Number"
            type="tel"
            placeholder="+1 202-555-0136"
            mask="+1 ___-___-____"
            registration={register("phone")}
            error={errors.phone?.message}
          />
        </div>
      </fieldset>

      <fieldset className="mt-8 md:mt-13">
        <legend className={sectionTitle}>Shipping info</legend>
        <div className="grid gap-6 mt-4 md:grid-cols-2 md:gap-x-4">
          <FormField
            label="Address"
            placeholder="1137 Williams Avenue"
            registration={register("address")}
            error={errors.address?.message}
            className="md:col-span-2"
          />
          <FormField
            label="ZIP Code"
            placeholder="10001"
            mask="_____"
            registration={register("zip")}
            error={errors.zip?.message}
          />
          <FormField
            label="City"
            placeholder="New York"
            registration={register("city")}
            error={errors.city?.message}
          />
          <FormField
            label="Country"
            placeholder="United States"
            registration={register("country")}
            error={errors.country?.message}
          />
        </div>
      </fieldset>

      <fieldset className="mt-8 md:mt-13">
        <legend className={sectionTitle}>Payment details</legend>
        <div className="grid gap-4 mt-4 md:grid-cols-2 md:gap-x-4">
          <p className="text-label font-bold">Payment Method</p>
          <div className="flex flex-col gap-4">
            <PaymentOption
              label="e-Money"
              value="e-money"
              registration={register("paymentMethod")}
            />
            <PaymentOption
              label="Cash on Delivery"
              value="cash"
              registration={register("paymentMethod")}
            />
          </div>
        </div>

        {paymentMethod === "e-money" ? (
          <div className="grid gap-6 mt-8 md:grid-cols-2 md:gap-x-4 md:mt-6">
            <FormField
              label="e-Money Number"
              placeholder="238521993"
              mask="_________"
              registration={register("eMoneyNumber")}
              error={errors.eMoneyNumber?.message}
            />
            <FormField
              label="e-Money PIN"
              placeholder="6891"
              mask="____"
              registration={register("eMoneyPin")}
              error={errors.eMoneyPin?.message}
            />
          </div>
        ) : (
          <div className="flex items-center gap-8 mt-8 md:mt-6">
            <img
              src="/images/checkout/icon-cash-on-delivery.svg"
              alt=""
              className="shrink-0"
            />
            <p className="text-body font-medium text-black/50">
              The &lsquo;Cash on Delivery&rsquo; option enables you to pay in cash when our
              delivery courier arrives at your residence. Just make sure your address is correct
              so that your order will not be cancelled.
            </p>
          </div>
        )}
      </fieldset>
    </form>
  );
};

export default CheckoutForm;

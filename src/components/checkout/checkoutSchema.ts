import * as yup from "yup";

const REQUIRED = "Field cannot be empty";
const WRONG_FORMAT = "Wrong format";

export const checkoutSchema = yup.object({
  name: yup.string().trim().required(REQUIRED),
  email: yup.string().trim().required(REQUIRED).email(WRONG_FORMAT),
  phone: yup
    .string()
    .required(REQUIRED)
    .matches(/^\+1 \d{3}-\d{3}-\d{4}$/, WRONG_FORMAT),
  address: yup.string().trim().required(REQUIRED),
  zip: yup
    .string()
    .required(REQUIRED)
    .matches(/^\d{5}$/, WRONG_FORMAT),
  city: yup.string().trim().required(REQUIRED),
  country: yup.string().trim().required(REQUIRED),
  paymentMethod: yup.string().oneOf(["e-money", "cash"]).required(REQUIRED),
  // e-Money fields are only required when e-Money is selected
  eMoneyNumber: yup.string().when("paymentMethod", {
    is: "e-money",
    then: (schema) => schema.required(REQUIRED).matches(/^\d{9}$/, WRONG_FORMAT),
    otherwise: (schema) => schema.notRequired(),
  }),
  eMoneyPin: yup.string().when("paymentMethod", {
    is: "e-money",
    then: (schema) => schema.required(REQUIRED).matches(/^\d{4}$/, WRONG_FORMAT),
    otherwise: (schema) => schema.notRequired(),
  }),
});

export type CheckoutFormData = yup.InferType<typeof checkoutSchema>;

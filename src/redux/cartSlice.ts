import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: CartItem[] = [];

interface Amount {
  slug: string;
  amount: number;
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: {
      prepare(
        slug: string,
        shortName: string,
        price: number,
        image: string,
        quantity: number,
      ) {
        return { payload: { slug, shortName, price, image, quantity } };
      },
      reducer(state, action: PayloadAction<CartItem>) {
        const duplicatedProduct = state.find(
          (item) => item.slug === action.payload.slug,
        );

        if (duplicatedProduct) {
          duplicatedProduct.quantity += action.payload.quantity;
        } else {
          state.push(action.payload);
        }
      },
    },
    removeAllProducts() {
      return [];
    },
    increaseAmount: {
      prepare(slug: string, amount: number) {
        return { payload: { slug, amount } };
      },
      reducer(state, action: PayloadAction<Amount>) {
        const item = state.find((item) => item.slug === action.payload.slug);

        if (item) {
          item.quantity += action.payload.amount;
        }
      },
    },
    decreaseAmount: {
      prepare(slug: string, amount: number) {
        return { payload: { slug, amount } };
      },
      reducer(state, action: PayloadAction<Amount>) {
        const item = state.find((item) => item.slug === action.payload.slug);

        if (item) {
          if (item.quantity === 1) {
            return state.filter((item) => item.slug !== action.payload.slug);
          }

          item.quantity -= 1;
        }
      },
    },
  },
});

export const { addProduct, removeAllProducts, increaseAmount, decreaseAmount } =
  cartSlice.actions;

export default cartSlice.reducer;

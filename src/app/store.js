import { configureStore } from "@reduxjs/toolkit";
import sliderReducer from "../features/slider/sliderSlice";
import cartReducer from "../features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    slider: sliderReducer,
    cart: cartReducer,
  },
});

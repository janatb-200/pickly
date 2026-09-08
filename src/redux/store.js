import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import wishlistReducer from "./wishlistSlice";

const savedCart = localStorage.getItem("picklyCart");
const savedWishlist = localStorage.getItem("picklyWishlist");

const preloadedState = {
  cart: savedCart
    ? JSON.parse(savedCart)
    : {
        items: [],
      },

  wishlist: savedWishlist
    ? JSON.parse(savedWishlist)
    : {
        items: [],
      },
};

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
  },

  preloadedState,
});

store.subscribe(() => {
  localStorage.setItem(
    "picklyCart",
    JSON.stringify(store.getState().cart)
  );

  localStorage.setItem(
    "picklyWishlist",
    JSON.stringify(store.getState().wishlist)
  );
});
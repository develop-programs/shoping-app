import { createSlice } from "@reduxjs/toolkit";
let store;
if (typeof window !== "undefined") {
  store = localStorage.getItem("cart");
}

type Data = {
  cart: [];
  TotalQuantity: number;
  TotalPrice: number;
};
const initialState: Data = {
  cart: store ? JSON.parse(store) : [],
  TotalQuantity: 0,
  TotalPrice: 0,
};
const ShopingCart = createSlice({
  name: "ShopingCart",
  initialState,
  reducers: {
    AddToCart: (state: any, action: any) => {
      const index = state.cart.findIndex(
        (item: any) => item.uuid === action.payload.uuid
      );
      if (index >= 0) {
        state.cart[index].piece += 1;
      } else {
        const TempItems = {
          ...action.payload,
          piece: 1,
        };
        state.cart.push(TempItems);
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    RemoveFromCart: (state: any, action: any) => {
      const index = state.cart.findIndex(
        (item: any) => item.uuid === action.payload.uuid
      );
      if (state.cart[index].piece > 1) {
        state.cart[index].piece -= 1;
      } else if (state.cart[index].piece === 1) {
        state.cart = state.cart.filter(
          (item: any) => item.uuid !== action.payload.uuid
        );
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    ClearCart: (state: any) => {
      state.cart = [];
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    Total: (state: any) => {
      let { Price, Quantity } = state.cart.reduce(
        (cartTotal: any, Cartitem: any) => {
          const { price, piece } = Cartitem;
          const itemTotal = price * piece;

          cartTotal.Price += itemTotal;
          cartTotal.Quantity += piece;

          return cartTotal;
        },
        {
          Price: 0,
          Quantity: 0,
        }
      );
      state.TotalQuantity = Quantity;
      state.TotalPrice = Price;
    },
  },
});

export const { AddToCart, RemoveFromCart, ClearCart, Total } =
  ShopingCart.actions;
export default ShopingCart.reducer;

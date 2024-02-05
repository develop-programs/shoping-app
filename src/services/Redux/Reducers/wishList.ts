import { createSlice } from "@reduxjs/toolkit";
let store;
if (typeof window !== "undefined") {
  store = localStorage.getItem("List");
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
const WishList = createSlice({
  name: "WishList",
  initialState,
  reducers: {
    AddToList: (state: any, action: any) => {
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
      localStorage.setItem("List", JSON.stringify(state.cart));
    },
    RemoveFromList: (state: any, action: any) => {
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
      localStorage.setItem("List", JSON.stringify(state.cart));
    },
    ClearList: (state: any) => {
      state.cart = [];
      localStorage.setItem("List", JSON.stringify(state.cart));
    },
  },
});
export const { AddToList, RemoveFromList, ClearList } = WishList.actions;
export default WishList.reducer;

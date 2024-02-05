import { configureStore } from "@reduxjs/toolkit";
import SearchToggle from "./Reducers/SearchToggle";
import ShopingCart from "./Reducers/Cart";
import wishList from "./Reducers/wishList";

export const store = configureStore({
  reducer: {
    Search: SearchToggle,
    Cart: ShopingCart,
    WishList: wishList,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

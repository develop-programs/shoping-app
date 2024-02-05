import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  Toggle: boolean;
}

const initialState: CounterState = {
  Toggle: false,
};

export const SearchToggle = createSlice({
  name: "ToggleBtn",
  initialState,
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    OpenSearch: (state) => {
      state.Toggle = true;
    },
    CloseSearch: (state) => {
      state.Toggle = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { OpenSearch, CloseSearch } = SearchToggle.actions;

export default SearchToggle.reducer;

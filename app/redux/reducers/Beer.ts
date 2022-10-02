import { createSlice } from "@reduxjs/toolkit";

// Types
import { Beer } from "../../../types";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  beers: Beer[];
}

const initialState: CounterState = {
  beers: [],
};

export const counterSlice = createSlice({
  name: "beer",
  initialState,
  reducers: {
    addBeer: (state, action: PayloadAction<any>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.beers.push(action.payload.beer);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addBeer } = counterSlice.actions;

export default counterSlice.reducer;

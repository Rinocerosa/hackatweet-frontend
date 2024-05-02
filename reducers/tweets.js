import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const tweetSlice = createSlice({
  name: "tweet",
  initialState,
  reducers: {},
});

export const {} = tweetSlice.actions;
export default tweetSlice.reducer;

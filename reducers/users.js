import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: { token: null, username: null, id: null, firstname: null },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signup: (state, action) => {
      state.value.token = action.payload.token;
      state.value.username = action.payload.username;
      state.value.id = action.payload.id;
    },
    logout: (state) => {
      state.value.token = null;
      state.value.username = null;
      state.value.id = null;
    },
  },
});

export const { signup, logout } = userSlice.actions;
export default userSlice.reducer;

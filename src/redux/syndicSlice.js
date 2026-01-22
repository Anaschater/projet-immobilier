import { createSlice } from "@reduxjs/toolkit";

const initialState = { syndic: null };

const syndicSlice = createSlice({
   name: "syndic",
   initialState,
   reducers: {
      loginSyndic: (state, action) => {
         state.syndic = action.payload;
      },
      logoutSyndic: (state) => {
         state.syndic = null;
      },
   },
});

export const { loginSyndic, logoutSyndic } = syndicSlice.actions;
export default syndicSlice.reducer;

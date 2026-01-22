import { createSlice } from "@reduxjs/toolkit";
import { quartiers } from "../data/data";

const quartierSlice = createSlice({
  name: "quartier",
  initialState: [...quartiers],
  reducers: {
    ajouterQuartier: (state, action) => {
      state.push(action.payload);
    },
    modifierQuartier: (state, action) => {
      const index = state.findIndex((q) => q.code === action.payload.code);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    supprimerQuartier: (state, action) => {
      return state.filter((q) => q.code !== action.payload);
    },
  },
});

export const { ajouterQuartier, modifierQuartier, supprimerQuartier } = quartierSlice.actions;
export default quartierSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import { biens } from "../data/data";

const bienSlice = createSlice({
  name: "bien",
  initialState: [...biens],
  reducers: {
    ajouterBien: (state, action) => {
      state.push(action.payload);
    },
    modifierBien: (state, action) => {
      const index = state.findIndex((b) => b.code === action.payload.code);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    supprimerBien: (state, action) => {
      return state.filter((b) => b.code !== action.payload);
    },
  },
});

export const { ajouterBien, modifierBien, supprimerBien } = bienSlice.actions;
export default bienSlice.reducer;

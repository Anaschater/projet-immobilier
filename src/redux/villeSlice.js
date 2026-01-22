import { createSlice } from "@reduxjs/toolkit";
import { villes } from "../data/data"; // بيانات أولية

const villeSlice = createSlice({
  name: "ville",
  initialState: [...villes], // المدن الأولية
  reducers: {
    ajouterVille: (state, action) => {
      state.push(action.payload);
    },
    modifierVille: (state, action) => {
      const index = state.findIndex((v) => v.code === action.payload.code);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    supprimerVille: (state, action) => {
      return state.filter((v) => v.code !== action.payload);
    },
  },
});

export const { ajouterVille, modifierVille, supprimerVille } = villeSlice.actions;
export default villeSlice.reducer;

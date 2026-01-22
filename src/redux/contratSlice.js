import { createSlice } from "@reduxjs/toolkit";
import { contrats } from "../data/data";

const contratSlice = createSlice({
  name: "contrat",
  initialState: [...contrats],
  reducers: {
    ajouterContrat: (state, action) => {
      state.push(action.payload);
    },
    modifierContrat: (state, action) => {
      const index = state.findIndex((c) => c.num === action.payload.num);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    supprimerContrat: (state, action) => {
      return state.filter((c) => c.num !== action.payload);
    },
  },
});

export const { ajouterContrat, modifierContrat, supprimerContrat } = contratSlice.actions;
export default contratSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import data from "../data";

const quartierSlice = createSlice({
  name: "quartiers",
  initialState: data.quartiers,
  reducers: {
    ajouterQuartier: (state, action) => {
      state.push(action.payload);
    },
    modifierQuartier: (state, action) => {
      const { id, nom, villeId } = action.payload;
      const quartier = state.find((q) => q.id === id);
      if (quartier) {
        quartier.nom = nom;
        quartier.villeId = villeId;
      }
    },
    supprimerQuartier: (state, action) => {
      return state.filter((q) => q.id !== action.payload);
    },
  },
});

export const { ajouterQuartier, modifierQuartier, supprimerQuartier } =
  quartierSlice.actions;
export default quartierSlice.reducer;

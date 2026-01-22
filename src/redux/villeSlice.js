import { createSlice } from "@reduxjs/toolkit";
import data from "../data";

const villeSlice = createSlice({
  name: "villes",
  initialState: data.villes,
  reducers: {
    ajouterVille: (state, action) => {
      state.push(action.payload);
    },
    modifierVille: (state, action) => {
      const { id, nom, regionId } = action.payload;
      const ville = state.find((v) => v.id === id);
      if (ville) {
        ville.nom = nom;
        ville.regionId = regionId;
      }
    },
    supprimerVille: (state, action) => {
      return state.filter((v) => v.id !== action.payload);
    },
  },
});

export const { ajouterVille, modifierVille, supprimerVille } =
  villeSlice.actions;
export default villeSlice.reducer;

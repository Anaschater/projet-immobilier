import { createSlice } from "@reduxjs/toolkit";
import data from "../data";

const regionSlice = createSlice({
  name: "regions",
  initialState: data.regions,
  reducers: {
    ajouterRegion: (state, action) => {
      state.push(action.payload);
    },
    modifierRegion: (state, action) => {
      const { id, nom } = action.payload;
      const region = state.find((r) => r.id === id);
      if (region) region.nom = nom;
    },
    supprimerRegion: (state, action) => {
      return state.filter((r) => r.id !== action.payload);
    },
  },
});

export const { ajouterRegion, modifierRegion, supprimerRegion } =
  regionSlice.actions;
export default regionSlice.reducer;

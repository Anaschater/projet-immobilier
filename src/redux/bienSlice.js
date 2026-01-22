import { createSlice } from "@reduxjs/toolkit";
import data from "../data";

const bienSlice = createSlice({
  name: "biens",
  initialState: data.biens,
  reducers: {
    ajouterBien: (state, action) => {
      state.push(action.payload);
    },
    modifierBien: (state, action) => {
      const { id, type, quartierId, prix } = action.payload;
      const bien = state.find((b) => b.id === id);
      if (bien) {
        bien.type = type;
        bien.quartierId = quartierId;
        bien.prix = prix;
      }
    },
    supprimerBien: (state, action) => {
      return state.filter((b) => b.id !== action.payload);
    },
  },
});

export const { ajouterBien, modifierBien, supprimerBien } = bienSlice.actions;
export default bienSlice.reducer;

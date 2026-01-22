import { createSlice } from "@reduxjs/toolkit";
import data from "../data";

const contratSlice = createSlice({
  name: "contrats",
  initialState: data.contrats,
  reducers: {
    ajouterContrat: (state, action) => {
      state.push(action.payload);
    },
    modifierContrat: (state, action) => {
      const { id, bienId, client, date, montant } = action.payload;
      const contrat = state.find((c) => c.id === id);
      if (contrat) {
        contrat.bienId = bienId;
        contrat.client = client;
        contrat.date = date;
        contrat.montant = montant;
      }
    },
    supprimerContrat: (state, action) => {
      return state.filter((c) => c.id !== action.payload);
    },
  },
});

export const { ajouterContrat, modifierContrat, supprimerContrat } =
  contratSlice.actions;
export default contratSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { regions } from "../data/data"; // بيانات أولية

const regionSlice = createSlice({
  name: "region",
  initialState: [...regions], // لائحة المناطق
  reducers: {
    ajouterRegion: (state, action) => {
      state.push(action.payload);
    },
    modifierRegion: (state, action) => {
      const index = state.findIndex((r) => r.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    supprimerRegion: (state, action) => {
      return state.filter((r) => r.id !== action.payload);
    },
  },
});

export const { ajouterRegion, modifierRegion, supprimerRegion } = regionSlice.actions;
export default regionSlice.reducer;

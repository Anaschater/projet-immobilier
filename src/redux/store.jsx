
import { configureStore } from "@reduxjs/toolkit";
import regionReducer from "./regionSlice";
import villeReducer from "./villeSlice";
import quartierReducer from "./quartierSlice";
import bienReducer from "./bienSlice";
import contratReducer from "./contratSlice";

const store = configureStore({
  reducer: {
    regions: regionReducer,
    villes: villeReducer,
    quartiers: quartierReducer,
    biens: bienReducer,
    contrats: contratReducer,
  },
});

export default store;

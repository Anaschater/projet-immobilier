import { configureStore } from "@reduxjs/toolkit";
import syndicReducer from "./syndicSlice";
import villeReducer from "./villeSlice";
import regionReducer from "./regionSlice";
import quartierReducer from "./quartierSlice";
import bienReducer from "./bienSlice";
import contratReducer from "./contratSlice";

const store = configureStore({
  reducer: {
    syndic: syndicReducer,
    ville: villeReducer,
    region: regionReducer,
    quartier: quartierReducer,
    bien: bienReducer,
    contrat: contratReducer,
  },
});

export default store;

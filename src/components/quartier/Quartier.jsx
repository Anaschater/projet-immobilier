import React from "react";
import AjouterQuartier from "./AjouterQuartier";
import MiseAJourQuartier from "./MiseAJourQuartier";

function Quartier() {
   return (
      <div style={{ display: "flex", gap: 20, padding: 20 }}>
         <div style={{ flex: 1, border: "1px solid #ddd", padding: 16 }}>
            <h3>Ajouter un quartier</h3>
            <AjouterQuartier />
         </div>
         <div style={{ flex: 1, border: "1px solid #ddd", padding: 16 }}>
            <h3>Gérer les quartiers</h3>
            <MiseAJourQuartier />
         </div>
      </div>
   );
}

export default Quartier;

import React from "react";
import AjouterContrat from "./AjouterContrat";
import MiseAJourContrat from "./MiseAJourContrat";

function Contrat() {
   return (
      <div style={{ display: "flex", gap: 20, padding: 20 }}>
         <div style={{ flex: 1, border: "1px solid #ddd", padding: 16 }}>
            <h3>Ajouter un contrat</h3>
            <AjouterContrat />
         </div>
         <div style={{ flex: 1, border: "1px solid #ddd", padding: 16 }}>
            <h3>Gérer les contrats</h3>
            <MiseAJourContrat />
         </div>
      </div>
   );
}

export default Contrat;

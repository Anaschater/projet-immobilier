import React from "react";
import AjouterBien from "./AjouterBien";
import MiseAJourBien from "./MiseAJourBien";

function Bien() {
   return (
      <div style={{ display: "flex", gap: 20, padding: 20 }}>
         <div style={{ flex: 1, border: "1px solid #ddd", padding: 16 }}>
            <h3>Ajouter un bien</h3>
            <AjouterBien />
         </div>
         <div style={{ flex: 1, border: "1px solid #ddd", padding: 16 }}>
            <h3>Gérer les biens</h3>
            <MiseAJourBien />
         </div>
      </div>
   );
}

export default Bien;

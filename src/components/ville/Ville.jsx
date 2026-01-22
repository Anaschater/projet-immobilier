import React from "react";
import AjouterVille from "./AjouterVille";
import MiseAJourVille from "./MiseAJourVille";

function Ville() {
   return (
      <div style={{ display: "flex", gap: 20, padding: 20 }}>
         <div style={{ flex: 1, border: "1px solid #ddd", padding: 16 }}>
            <h3>Ajouter une ville</h3>
            <AjouterVille />
         </div>
         <div style={{ flex: 1, border: "1px solid #ddd", padding: 16 }}>
            <h3>Gérer les villes</h3>
            <MiseAJourVille />
         </div>
      </div>
   );
}

export default Ville;

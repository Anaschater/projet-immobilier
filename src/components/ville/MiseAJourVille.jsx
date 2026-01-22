import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { modifierVille, supprimerVille } from "../../redux/villeSlice";

function MiseAJourVille() {
   const villes = useSelector((state) => state.ville);
   const regions = useSelector((state) => state.region);
   const [filtre, setFiltre] = useState("");
   const [villeModif, setVilleModif] = useState(null);
   const dispatch = useDispatch();

   const villesFiltrées = villes.filter((v) =>
      v.nom.toLowerCase().includes(filtre.toLowerCase()),
   );

   const handleModifier = () => {
      if (!villeModif.nom || !villeModif.region) {
         alert("Tous les champs sont obligatoires !");
         return;
      }
      dispatch(modifierVille(villeModif));
      setVilleModif(null);
   };

   const handleSupprimer = (code) => {
      if (window.confirm("Supprimer cette ville ?")) {
         dispatch(supprimerVille(code));
      }
   };

   return (
      <div style={{ padding: "30px" }}>
         <h2>🛠️ Gestion des villes</h2>

         <input
            type="text"
            placeholder="🔍 Filtrer par nom..."
            value={filtre}
            onChange={(e) => setFiltre(e.target.value)}
            style={{ marginBottom: "20px" }}
         />

         <table
            border="1"
            cellPadding="8"
            style={{ width: "100%", textAlign: "left" }}
         >
            <thead>
               <tr>
                  <th>Code</th>
                  <th>Nom</th>
                  <th>Région</th>
                  <th>Actions</th>
               </tr>
            </thead>
            <tbody>
               {villesFiltrées.map((v) => (
                  <tr key={v.code}>
                     <td>{v.code}</td>
                     <td>
                        {villeModif?.code === v.code ? (
                           <input
                              value={villeModif.nom}
                              onChange={(e) =>
                                 setVilleModif({
                                    ...villeModif,
                                    nom: e.target.value,
                                 })
                              }
                           />
                        ) : (
                           v.nom
                        )}
                     </td>
                     <td>
                        {villeModif?.code === v.code ? (
                           <select
                              value={villeModif.region}
                              onChange={(e) =>
                                 setVilleModif({
                                    ...villeModif,
                                    region: parseInt(e.target.value),
                                 })
                              }
                           >
                              {regions.map((r) => (
                                 <option key={r.id} value={r.id}>
                                    {r.nom}
                                 </option>
                              ))}
                           </select>
                        ) : (
                           regions.find((r) => r.id === v.region)?.nom
                        )}
                     </td>
                     <td>
                        {villeModif?.code === v.code ? (
                           <>
                              <button onClick={handleModifier}>
                                 💾 Enregistrer
                              </button>
                              <button onClick={() => setVilleModif(null)}>
                                 ❌ Annuler
                              </button>
                           </>
                        ) : (
                           <>
                              <button onClick={() => setVilleModif(v)}>
                                 ✏️ Modifier
                              </button>
                              <button onClick={() => handleSupprimer(v.code)}>
                                 🗑️ Supprimer
                              </button>
                           </>
                        )}
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   );
}

export default MiseAJourVille;

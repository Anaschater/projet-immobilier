import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { modifierBien, supprimerBien } from "../../redux/bienSlice";

function MiseAJourBien() {
   const biens = useSelector((state) => state.bien);
   const quartiers = useSelector((state) => state.quartier);
   const [filtre, setFiltre] = useState("");
   const [bienModif, setBienModif] = useState(null);
   const dispatch = useDispatch();

   const biensFiltres = biens.filter((b) =>
      b.adresse.toLowerCase().includes(filtre.toLowerCase()),
   );

   const handleModifier = () => {
      if (
         !bienModif.adresse ||
         !bienModif.superficie ||
         !bienModif.type ||
         !bienModif.quartier
      ) {
         alert("Tous les champs sont obligatoires !");
         return;
      }

      dispatch(modifierBien(bienModif));
      setBienModif(null);
   };

   const handleSupprimer = (code) => {
      if (window.confirm("Supprimer ce bien ?")) {
         dispatch(supprimerBien(code));
      }
   };

   return (
      <div style={{ padding: "30px" }}>
         <h2>🛠️ Gestion des biens immobiliers</h2>

         <input
            type="text"
            placeholder="🔍 Filtrer par adresse..."
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
                  <th>Adresse</th>
                  <th>Superficie</th>
                  <th>Type</th>
                  <th>Quartier</th>
                  <th>Actions</th>
               </tr>
            </thead>
            <tbody>
               {biensFiltres.map((b) => (
                  <tr key={b.code}>
                     <td>{b.code}</td>
                     <td>
                        {bienModif?.code === b.code ? (
                           <input
                              value={bienModif.adresse}
                              onChange={(e) =>
                                 setBienModif({
                                    ...bienModif,
                                    adresse: e.target.value,
                                 })
                              }
                           />
                        ) : (
                           b.adresse
                        )}
                     </td>
                     <td>
                        {bienModif?.code === b.code ? (
                           <input
                              type="number"
                              value={bienModif.superficie}
                              onChange={(e) =>
                                 setBienModif({
                                    ...bienModif,
                                    superficie: parseFloat(e.target.value),
                                 })
                              }
                           />
                        ) : (
                           b.superficie
                        )}
                     </td>
                     <td>
                        {bienModif?.code === b.code ? (
                           <select
                              value={bienModif.type}
                              onChange={(e) =>
                                 setBienModif({
                                    ...bienModif,
                                    type: e.target.value,
                                 })
                              }
                           >
                              <option value="appartement">Appartement</option>
                              <option value="villa">Villa</option>
                              <option value="bureau">Bureau</option>
                              <option value="magasin">Magasin</option>
                           </select>
                        ) : (
                           b.type
                        )}
                     </td>
                     <td>
                        {bienModif?.code === b.code ? (
                           <select
                              value={bienModif.quartier}
                              onChange={(e) =>
                                 setBienModif({
                                    ...bienModif,
                                    quartier: parseInt(e.target.value),
                                 })
                              }
                           >
                              {quartiers.map((q) => (
                                 <option key={q.code} value={q.code}>
                                    {q.nom}
                                 </option>
                              ))}
                           </select>
                        ) : (
                           quartiers.find((q) => q.code === b.quartier)?.nom
                        )}
                     </td>
                     <td>
                        {bienModif?.code === b.code ? (
                           <>
                              <button onClick={handleModifier}>
                                 💾 Enregistrer
                              </button>
                              <button onClick={() => setBienModif(null)}>
                                 ❌ Annuler
                              </button>
                           </>
                        ) : (
                           <>
                              <button onClick={() => setBienModif(b)}>
                                 ✏️ Modifier
                              </button>
                              <button onClick={() => handleSupprimer(b.code)}>
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

export default MiseAJourBien;

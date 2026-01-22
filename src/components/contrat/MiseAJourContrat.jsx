import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { modifierContrat, supprimerContrat } from "../../redux/contratSlice";

function MiseAJourContrat() {
   const contrats = useSelector((state) => state.contrat);
   const biens = useSelector((state) => state.bien);
   const [filtre, setFiltre] = useState("");
   const [contratModif, setContratModif] = useState(null);
   const dispatch = useDispatch();

   const contratsFiltres = contrats.filter((c) =>
      c.syndic.toLowerCase().includes(filtre.toLowerCase()),
   );

   const handleModifier = () => {
      if (
         !contratModif.bien ||
         !contratModif.prix_mensuel ||
         !contratModif.date ||
         !contratModif.etat
      ) {
         alert("Tous les champs sont obligatoires !");
         return;
      }

      dispatch(modifierContrat(contratModif));
      setContratModif(null);
   };

   const handleSupprimer = (num) => {
      if (window.confirm("Supprimer ce contrat ?")) {
         dispatch(supprimerContrat(num));
      }
   };

   return (
      <div style={{ padding: "30px" }}>
         <h2>🛠️ Gestion des contrats</h2>

         <input
            type="text"
            placeholder="🔍 Filtrer par syndic..."
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
                  <th>Num</th>
                  <th>Bien</th>
                  <th>Prix (MAD)</th>
                  <th>Date</th>
                  <th>État</th>
                  <th>Syndic</th>
                  <th>Actions</th>
               </tr>
            </thead>
            <tbody>
               {contratsFiltres.map((c) => (
                  <tr key={c.num}>
                     <td>{c.num}</td>
                     <td>
                        {contratModif?.num === c.num ? (
                           <select
                              value={contratModif.bien}
                              onChange={(e) =>
                                 setContratModif({
                                    ...contratModif,
                                    bien: parseInt(e.target.value),
                                 })
                              }
                           >
                              {biens.map((b) => (
                                 <option key={b.code} value={b.code}>
                                    {b.adresse}
                                 </option>
                              ))}
                           </select>
                        ) : (
                           biens.find((b) => b.code === c.bien)?.adresse
                        )}
                     </td>
                     <td>
                        {contratModif?.num === c.num ? (
                           <input
                              type="number"
                              value={contratModif.prix_mensuel}
                              onChange={(e) =>
                                 setContratModif({
                                    ...contratModif,
                                    prix_mensuel: parseFloat(e.target.value),
                                 })
                              }
                           />
                        ) : (
                           c.prix_mensuel
                        )}
                     </td>
                     <td>
                        {contratModif?.num === c.num ? (
                           <input
                              type="date"
                              value={contratModif.date}
                              onChange={(e) =>
                                 setContratModif({
                                    ...contratModif,
                                    date: e.target.value,
                                 })
                              }
                           />
                        ) : (
                           c.date
                        )}
                     </td>
                     <td>
                        {contratModif?.num === c.num ? (
                           <select
                              value={contratModif.etat}
                              onChange={(e) =>
                                 setContratModif({
                                    ...contratModif,
                                    etat: e.target.value,
                                 })
                              }
                           >
                              <option value="en cours">En cours</option>
                              <option value="résilié">Résilié</option>
                           </select>
                        ) : (
                           c.etat
                        )}
                     </td>
                     <td>{c.syndic}</td>
                     <td>
                        {contratModif?.num === c.num ? (
                           <>
                              <button onClick={handleModifier}>
                                 💾 Enregistrer
                              </button>
                              <button onClick={() => setContratModif(null)}>
                                 ❌ Annuler
                              </button>
                           </>
                        ) : (
                           <>
                              <button onClick={() => setContratModif(c)}>
                                 ✏️ Modifier
                              </button>
                              <button onClick={() => handleSupprimer(c.num)}>
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

export default MiseAJourContrat;

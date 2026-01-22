import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { modifierQuartier, supprimerQuartier } from "../../redux/quartierSlice";

function MiseAJourQuartier() {
   const quartiers = useSelector((state) => state.quartier);
   const villes = useSelector((state) => state.ville);
   const [filtre, setFiltre] = useState("");
   const [quartierModif, setQuartierModif] = useState(null);
   const dispatch = useDispatch();

   const quartiersFiltres = quartiers.filter((q) =>
      q.nom.toLowerCase().includes(filtre.toLowerCase()),
   );

   const handleModifier = () => {
      if (
         !quartierModif.nom ||
         !quartierModif.ville ||
         !quartierModif.population
      ) {
         alert("Tous les champs sont obligatoires !");
         return;
      }
      
      dispatch(modifierQuartier(quartierModif));
      setQuartierModif(null);
   };

   const handleSupprimer = (code) => {
      if (window.confirm("Supprimer ce quartier ?")) {
         dispatch(supprimerQuartier(code));
      }
   };

   return (
      <div style={{ padding: "30px" }}>
         <h2>🛠️ Gestion des quartiers</h2>

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
                  <th>Ville</th>
                  <th>Population</th>
                  <th>Actions</th>
               </tr>
            </thead>
            <tbody>
               {quartiersFiltres.map((q) => (
                  <tr key={q.code}>
                     <td>{q.code}</td>
                     <td>
                        {quartierModif?.code === q.code ? (
                           <input
                              value={quartierModif.nom}
                              onChange={(e) =>
                                 setQuartierModif({
                                    ...quartierModif,
                                    nom: e.target.value,
                                 })
                              }
                           />
                        ) : (
                           q.nom
                        )}
                     </td>
                     <td>
                        {quartierModif?.code === q.code ? (
                           <select
                              value={quartierModif.ville}
                              onChange={(e) =>
                                 setQuartierModif({
                                    ...quartierModif,
                                    ville: parseInt(e.target.value),
                                 })
                              }
                           >
                              {villes.map((v) => (
                                 <option key={v.code} value={v.code}>
                                    {v.nom}
                                 </option>
                              ))}
                           </select>
                        ) : (
                           villes.find((v) => v.code === q.ville)?.nom
                        )}
                     </td>
                     <td>
                        {quartierModif?.code === q.code ? (
                           <input
                              type="number"
                              value={quartierModif.population}
                              onChange={(e) =>
                                 setQuartierModif({
                                    ...quartierModif,
                                    population: parseInt(e.target.value),
                                 })
                              }
                           />
                        ) : (
                           q.population
                        )}
                     </td>
                     <td>
                        {quartierModif?.code === q.code ? (
                           <>
                              <button onClick={handleModifier}>
                                 💾 Enregistrer
                              </button>
                              <button onClick={() => setQuartierModif(null)}>
                                 ❌ Annuler
                              </button>
                           </>
                        ) : (
                           <>
                              <button onClick={() => setQuartierModif(q)}>
                                 ✏️ Modifier
                              </button>
                              <button onClick={() => handleSupprimer(q.code)}>
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

export default MiseAJourQuartier;

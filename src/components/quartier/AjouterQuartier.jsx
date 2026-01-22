import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ajouterQuartier } from "../../redux/quartierSlice";
import { useNavigate } from "react-router-dom";

function AjouterQuartier() {
   const [code, setCode] = useState("");
   const [nom, setNom] = useState("");
   const [ville, setVille] = useState("");
   const [population, setPopulation] = useState("");

   const villes = useSelector((state) => state.ville);
   const quartiers = useSelector((state) => state.quartier);
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const handleSubmit = (e) => {
      e.preventDefault();

      if (!code || !nom || !ville || !population) {
         alert("Veuillez remplir tous les champs !");
         return;
      }

      const existe = quartiers.find((q) => q.code === parseInt(code));
      if (existe) {
         alert("Code de quartier déjà utilisé !");
         return;
      }

      dispatch(
         ajouterQuartier({
            code: parseInt(code),
            nom,
            ville: parseInt(ville),
            population: parseInt(population),
            total: 0,
         }),
      );

      alert("Quartier ajouté avec succès !");
      navigate("/");
   };

   return (
      <div
         style={{ maxWidth: "500px", margin: "50px auto", textAlign: "center" }}
      >
         <h2>Ajouter un quartier</h2>
         <form onSubmit={handleSubmit}>
            <input
               type="number"
               placeholder="Code du quartier"
               value={code}
               onChange={(e) => setCode(e.target.value)}
               required
            />
            <br />
            <br />
            <input
               type="text"
               placeholder="Nom du quartier"
               value={nom}
               onChange={(e) => setNom(e.target.value)}
               required
            />
            <br />
            <br />
            <select
               value={ville}
               onChange={(e) => setVille(e.target.value)}
               required
            >
               <option value="">-- Sélectionner une ville --</option>
               {villes.map((v) => (
                  <option key={v.code} value={v.code}>
                     {v.nom}
                  </option>
               ))}
            </select>
            <br />
            <br />
            <input
               type="number"
               placeholder="Population"
               value={population}
               onChange={(e) => setPopulation(e.target.value)}
               required
            />
            <br />
            <br />
            <button type="submit">Enregistrer</button>
         </form>
      </div>
   );
}

export default AjouterQuartier;

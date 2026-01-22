import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ajouterVille } from "../../redux/villeSlice";
import { useNavigate } from "react-router-dom";

function AjouterVille() {
   const [code, setCode] = useState("");
   const [nom, setNom] = useState("");
   const [region, setRegion] = useState("");
   const regions = useSelector((state) => state.region ?? []);
   const villes = useSelector((state) => state.ville ?? []);
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const handleSubmit = (e) => {
      e.preventDefault();

      // تحقق من عدم تكرار الكود
      const existe = villes.find((v) => v.code === parseInt(code));
      if (existe) {
         alert("Code de ville déjà utilisé !");
         return;
      }

      if (!code || !nom || !region) {
         alert("Veuillez remplir tous les champs !");
         return;
      }

      dispatch(
         ajouterVille({
            code: parseInt(code),
            nom,
            region: parseInt(region),
            total: 0,
         }),
      );

      alert("Ville ajoutée avec succès !");
      navigate("/");
   };

   return (
      <div
         style={{ maxWidth: "500px", margin: "50px auto", textAlign: "center" }}
      >
         <h2>Ajouter une ville</h2>
         <form onSubmit={handleSubmit}>
            <div>
               <input
                  type="number"
                  placeholder="Code de la ville"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  required
               />
            </div>
            <div style={{ marginTop: "10px" }}>
               <input
                  type="text"
                  placeholder="Nom de la ville"
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                  required
               />
            </div>
            <div style={{ marginTop: "10px" }}>
               <select
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  required
               >
                  <option value="">-- Sélectionner une région --</option>
                  {regions.map((r) => (
                     <option key={r.id} value={r.id}>
                        {r.nom}
                     </option>
                  ))}
               </select>
            </div>
            <button type="submit" style={{ marginTop: "20px" }}>
               Enregistrer
            </button>
         </form>
      </div>
   );
}

export default AjouterVille;

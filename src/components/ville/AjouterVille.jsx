import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ajouterVille } from "../../redux/villeSlice";
import { useNavigate } from "react-router-dom";
import "../../styles/Form.css";

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
      <div className="form-container">
         <div className="form-wrapper">
            <div className="form-card">
               <div className="form-header">
                  <h2>Ajouter une Ville</h2>
                  <p>Créez une nouvelle ville dans le système</p>
               </div>
               <div className="form-body">
                  <form onSubmit={handleSubmit}>
                     <div className="form-group">
                        <label className="form-label">Code de la ville</label>
                        <input
                           type="number"
                           className="form-input"
                           placeholder="Ex: 101"
                           value={code}
                           onChange={(e) => setCode(e.target.value)}
                           required
                        />
                     </div>

                     <div className="form-group">
                        <label className="form-label">Nom de la ville</label>
                        <input
                           type="text"
                           className="form-input"
                           placeholder="Ex: Berkane"
                           value={nom}
                           onChange={(e) => setNom(e.target.value)}
                           required
                        />
                     </div>

                     <div className="form-group">
                        <label className="form-label">Région</label>
                        <select
                           className="form-select"
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

                     <div className="form-actions">
                        <button type="submit" className="form-btn btn-submit">
                            Enregistrer
                        </button>
                        <button
                           type="button"
                           className="form-btn btn-cancel"
                           onClick={() => navigate("/")}
                        >
                            Annuler
                        </button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
}

export default AjouterVille;

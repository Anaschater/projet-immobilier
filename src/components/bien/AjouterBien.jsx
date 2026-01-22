import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ajouterBien } from "../../redux/bienSlice";
import { useNavigate } from "react-router-dom";

function AjouterBien() {
   const [code, setCode] = useState("");
   const [adresse, setAdresse] = useState("");
   const [superficie, setSuperficie] = useState("");
   const [type, setType] = useState("");
   const [quartier, setQuartier] = useState("");

   const quartiers = useSelector((state) => state.quartier);
   const biens = useSelector((state) => state.bien);
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const handleSubmit = (e) => {
      e.preventDefault();

      if (!code || !adresse || !superficie || !type || !quartier) {
         alert("Veuillez remplir tous les champs !");
         return;
      }

      const existe = biens.find((b) => b.code === parseInt(code));
      if (existe) {
         alert("Code de bien déjà utilisé !");
         return;
      }

      dispatch(
         ajouterBien({
            code: parseInt(code),
            adresse,
            superficie: parseFloat(superficie),
            type,
            quartier: parseInt(quartier),
            total: 0,
         }),
      );

      alert("Bien ajouté avec succès !");
      navigate("/");
   };

   return (
      <div
         style={{ maxWidth: "500px", margin: "50px auto", textAlign: "center" }}
      >
         <h2>➕ Ajouter un bien immobilier</h2>
         <form onSubmit={handleSubmit}>
            <input
               type="number"
               placeholder="Code du bien"
               value={code}
               onChange={(e) => setCode(e.target.value)}
               required
            />
            <br />
            <br />
            <input
               type="text"
               placeholder="Adresse"
               value={adresse}
               onChange={(e) => setAdresse(e.target.value)}
               required
            />
            <br />
            <br />
            <input
               type="number"
               placeholder="Superficie (m²)"
               value={superficie}
               onChange={(e) => setSuperficie(e.target.value)}
               required
            />
            <br />
            <br />
            <select
               value={type}
               onChange={(e) => setType(e.target.value)}
               required
            >
               <option value="">-- Type de bien --</option>
               <option value="appartement">Appartement</option>
               <option value="villa">Villa</option>
               <option value="bureau">Bureau</option>
               <option value="magasin">Magasin</option>
            </select>
            <br />
            <br />
            <select
               value={quartier}
               onChange={(e) => setQuartier(e.target.value)}
               required
            >
               <option value="">-- Sélectionner un quartier --</option>
               {quartiers.map((q) => (
                  <option key={q.code} value={q.code}>
                     {q.nom}
                  </option>
               ))}
            </select>
            <br />
            <br />
            <button type="submit">Enregistrer</button>
         </form>
      </div>
   );
}

export default AjouterBien;

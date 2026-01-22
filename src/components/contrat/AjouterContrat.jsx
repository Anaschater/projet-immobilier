import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ajouterContrat } from "../../redux/contratSlice";
import { useNavigate } from "react-router-dom";

function AjouterContrat() {
   const [num, setNum] = useState("");
   const [bien, setBien] = useState("");
   const [prix, setPrix] = useState("");
   const [date, setDate] = useState("");
   const [etat, setEtat] = useState("en cours");

   const biens = useSelector((state) => state.bien);
   const syndic = useSelector((state) => state.syndic.syndic);
   const contrats = useSelector((state) => state.contrat);
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const handleSubmit = (e) => {
      e.preventDefault();

      if (!num || !bien || !prix || !date || !etat) {
         alert("Veuillez remplir tous les champs !");
         return;
      }

      const existe = contrats.find((c) => c.num === parseInt(num));
      if (existe) {
         alert("Numéro de contrat déjà utilisé !");
         return;
      }

      dispatch(
         ajouterContrat({
            num: parseInt(num),
            bien: parseInt(bien),
            prix_mensuel: parseFloat(prix),
            date,
            etat,
            syndic: syndic.nom,
         }),
      );

      alert("Contrat ajouté avec succès !");
      navigate("/");
   };

   return (
      <div
         style={{ maxWidth: "500px", margin: "50px auto", textAlign: "center" }}
      >
         <h2>➕ Ajouter un contrat</h2>
         <form onSubmit={handleSubmit}>
            <input
               type="number"
               placeholder="Numéro du contrat"
               value={num}
               onChange={(e) => setNum(e.target.value)}
               required
            />
            <br />
            <br />
            <select
               value={bien}
               onChange={(e) => setBien(e.target.value)}
               required
            >
               <option value="">-- Sélectionner un bien --</option>
               {biens.map((b) => (
                  <option key={b.code} value={b.code}>
                     {b.adresse} ({b.type})
                  </option>
               ))}
            </select>
            <br />
            <br />
            <input
               type="number"
               placeholder="Prix mensuel (MAD)"
               value={prix}
               onChange={(e) => setPrix(e.target.value)}
               required
            />
            <br />
            <br />
            <input
               type="date"
               value={date}
               onChange={(e) => setDate(e.target.value)}
               required
            />
            <br />
            <br />
            <select
               value={etat}
               onChange={(e) => setEtat(e.target.value)}
               required
            >
               <option value="en cours">En cours</option>
               <option value="résilié">Résilié</option>
            </select>
            <br />
            <br />
            <button type="submit">Enregistrer</button>
         </form>
      </div>
   );
}

export default AjouterContrat;

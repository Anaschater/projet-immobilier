import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ajouterContrat } from "../../redux/contratSlice";
import { useNavigate } from "react-router-dom";
import "../../styles/Form.css";

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
    <div className="form-container">
      <div className="form-wrapper">
        <div className="form-card">
          <div className="form-header">
            <h2>Ajouter un Contrat</h2>
            <p>Enregistrez un nouveau contrat de location</p>
          </div>
          <div className="form-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Numéro du contrat</label>
                <input
                  type="number"
                  className="form-input"
                  placeholder="Ex: 5001"
                  value={num}
                  onChange={(e) => setNum(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Bien immobilier</label>
                <select
                  className="form-select"
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
              </div>

              <div className="form-group">
                <label className="form-label">Prix mensuel (MAD)</label>
                <input
                  type="number"
                  className="form-input"
                  placeholder="Ex: 5000"
                  value={prix}
                  onChange={(e) => setPrix(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Date du contrat</label>
                <input
                  type="date"
                  className="form-input"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">État du contrat</label>
                <select
                  className="form-select"
                  value={etat}
                  onChange={(e) => setEtat(e.target.value)}
                  required
                >
                  <option value="en cours">En cours</option>
                  <option value="résilié">Résilié</option>
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

export default AjouterContrat;

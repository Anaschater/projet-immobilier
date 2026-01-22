import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ajouterQuartier } from "../../redux/quartierSlice";
import { useNavigate } from "react-router-dom";
import "../../styles/Form.css";

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
    <div className="form-container">
      <div className="form-wrapper">
        <div className="form-card">
          <div className="form-header">
            <h2>Ajouter un Quartier</h2>
            <p>Créez un nouveau quartier dans le système</p>
          </div>
          <div className="form-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Code du quartier</label>
                <input
                  type="number"
                  className="form-input"
                  placeholder="Ex: 1001"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Nom du quartier</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Ex: Centre-Ville"
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Ville</label>
                <select
                  className="form-select"
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
              </div>

              <div className="form-group">
                <label className="form-label">Population</label>
                <input
                  type="number"
                  className="form-input"
                  placeholder="Ex: 5000"
                  value={population}
                  onChange={(e) => setPopulation(e.target.value)}
                  required
                />
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

export default AjouterQuartier;

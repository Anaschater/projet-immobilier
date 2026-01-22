import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ajouterBien } from "../../redux/bienSlice";
import { useNavigate } from "react-router-dom";
import "../../styles/Form.css";

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
    <div className="form-container">
      <div className="form-wrapper">
        <div className="form-card">
          <div className="form-header">
            <h2>Ajouter un Bien Immobilier</h2>
            <p>Créez un nouveau bien dans le système</p>
          </div>
          <div className="form-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Code du bien</label>
                <input
                  type="number"
                  className="form-input"
                  placeholder="Ex: 2001"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Adresse</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Ex: 123 Rue Mohammed V"
                  value={adresse}
                  onChange={(e) => setAdresse(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Superficie (m²)</label>
                <input
                  type="number"
                  className="form-input"
                  placeholder="Ex: 150"
                  value={superficie}
                  onChange={(e) => setSuperficie(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Type de bien</label>
                <select
                  className="form-select"
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
              </div>

              <div className="form-group">
                <label className="form-label">Quartier</label>
                <select
                  className="form-select"
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

export default AjouterBien;

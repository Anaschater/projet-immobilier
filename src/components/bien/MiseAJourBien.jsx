import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { modifierBien, supprimerBien } from "../../redux/bienSlice";
import "../../styles/Form.css";

function MiseAJourBien() {
  const biens = useSelector((state) => state.bien);
  const quartiers = useSelector((state) => state.quartier);
  const [filtre, setFiltre] = useState("");
  const [bienModif, setBienModif] = useState(null);
  const dispatch = useDispatch();

  const biensFiltres = biens.filter((b) =>
    b.adresse.toLowerCase().includes(filtre.toLowerCase()),
  );

  const handleModifier = () => {
    if (
      !bienModif.adresse ||
      !bienModif.superficie ||
      !bienModif.type ||
      !bienModif.quartier
    ) {
      alert("Tous les champs sont obligatoires !");
      return;
    }

    dispatch(modifierBien(bienModif));
    setBienModif(null);
  };

  const handleSupprimer = (code) => {
    if (window.confirm("Supprimer ce bien ?")) {
      dispatch(supprimerBien(code));
    }
  };

  return (
    <div className="management-container">
      <div className="management-header">
        <h2>Gestion des Biens Immobiliers</h2>
        <div className="search-box">
          <input
            type="text"
            className="search-input"
            placeholder="Filtrer par adresse..."
            value={filtre}
            onChange={(e) => setFiltre(e.target.value)}
          />
        </div>
      </div>

      <div className="table-wrapper">
        {biensFiltres.length === 0 ? (
          <div className="empty-state">
            <p>Aucun bien trouvé</p>
          </div>
        ) : (
          <table className="management-table">
            <thead>
              <tr>
                <th>Code</th>
                <th>Adresse</th>
                <th>Superficie</th>
                <th>Type</th>
                <th>Quartier</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {biensFiltres.map((b) => (
                <tr key={b.code}>
                  <td>{b.code}</td>
                  <td>
                    {bienModif?.code === b.code ? (
                      <input
                        className="form-input"
                        value={bienModif.adresse}
                        onChange={(e) =>
                          setBienModif({
                            ...bienModif,
                            adresse: e.target.value,
                          })
                        }
                      />
                    ) : (
                      b.adresse
                    )}
                  </td>
                  <td>
                    {bienModif?.code === b.code ? (
                      <input
                        type="number"
                        className="form-input"
                        value={bienModif.superficie}
                        onChange={(e) =>
                          setBienModif({
                            ...bienModif,
                            superficie: parseFloat(e.target.value),
                          })
                        }
                      />
                    ) : (
                      b.superficie
                    )}
                  </td>
                  <td>
                    {bienModif?.code === b.code ? (
                      <select
                        className="form-select"
                        value={bienModif.type}
                        onChange={(e) =>
                          setBienModif({
                            ...bienModif,
                            type: e.target.value,
                          })
                        }
                      >
                        <option value="appartement">Appartement</option>
                        <option value="villa">Villa</option>
                        <option value="bureau">Bureau</option>
                        <option value="magasin">Magasin</option>
                      </select>
                    ) : (
                      b.type
                    )}
                  </td>
                  <td>
                    {bienModif?.code === b.code ? (
                      <select
                        className="form-select"
                        value={bienModif.quartier}
                        onChange={(e) =>
                          setBienModif({
                            ...bienModif,
                            quartier: parseInt(e.target.value),
                          })
                        }
                      >
                        {quartiers.map((q) => (
                          <option key={q.code} value={q.code}>
                            {q.nom}
                          </option>
                        ))}
                      </select>
                    ) : (
                      quartiers.find((q) => q.code === b.quartier)?.nom
                    )}
                  </td>
                  <td>
                    {bienModif?.code === b.code ? (
                      <div className="action-buttons">
                        <button
                          className="btn-table btn-edit"
                          onClick={handleModifier}
                        >
                           Enregistrer
                        </button>
                        <button
                          className="btn-table btn-cancel"
                          onClick={() => setBienModif(null)}
                        >
                           Annuler
                        </button>
                      </div>
                    ) : (
                      <div className="action-buttons">
                        <button
                          className="btn-table btn-edit"
                          onClick={() => setBienModif(b)}
                        >
                           Modifier
                        </button>
                        <button
                          className="btn-table btn-delete"
                          onClick={() => handleSupprimer(b.code)}
                        >
                           Supprimer
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default MiseAJourBien;

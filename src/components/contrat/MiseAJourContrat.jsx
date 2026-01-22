import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { modifierContrat, supprimerContrat } from "../../redux/contratSlice";
import "../../styles/Form.css";

function MiseAJourContrat() {
  const contrats = useSelector((state) => state.contrat);
  const biens = useSelector((state) => state.bien);
  const [filtre, setFiltre] = useState("");
  const [contratModif, setContratModif] = useState(null);
  const dispatch = useDispatch();

  const contratsFiltres = contrats.filter((c) =>
    c.syndic.toLowerCase().includes(filtre.toLowerCase()),
  );

  const handleModifier = () => {
    if (
      !contratModif.bien ||
      !contratModif.prix_mensuel ||
      !contratModif.date ||
      !contratModif.etat
    ) {
      alert("Tous les champs sont obligatoires !");
      return;
    }

    dispatch(modifierContrat(contratModif));
    setContratModif(null);
  };

  const handleSupprimer = (num) => {
    if (window.confirm("Supprimer ce contrat ?")) {
      dispatch(supprimerContrat(num));
    }
  };

  return (
    <div className="management-container">
      <div className="management-header">
        <h2>Gestion des Contrats</h2>
        <div className="search-box">
          <input
            type="text"
            className="search-input"
            placeholder="Filtrer par syndic..."
            value={filtre}
            onChange={(e) => setFiltre(e.target.value)}
          />
        </div>
      </div>

      <div className="table-wrapper">
        {contratsFiltres.length === 0 ? (
          <div className="empty-state">
            <p>Aucun contrat trouvé</p>
          </div>
        ) : (
          <table className="management-table">
            <thead>
              <tr>
                <th>Num</th>
                <th>Bien</th>
                <th>Prix (MAD)</th>
                <th>Date</th>
                <th>État</th>
                <th>Syndic</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {contratsFiltres.map((c) => (
                <tr key={c.num}>
                  <td>{c.num}</td>
                  <td>
                    {contratModif?.num === c.num ? (
                      <select
                        className="form-select"
                        value={contratModif.bien}
                        onChange={(e) =>
                          setContratModif({
                            ...contratModif,
                            bien: parseInt(e.target.value),
                          })
                        }
                      >
                        {biens.map((b) => (
                          <option key={b.code} value={b.code}>
                            {b.adresse}
                          </option>
                        ))}
                      </select>
                    ) : (
                      biens.find((b) => b.code === c.bien)?.adresse
                    )}
                  </td>
                  <td>
                    {contratModif?.num === c.num ? (
                      <input
                        type="number"
                        className="form-input"
                        value={contratModif.prix_mensuel}
                        onChange={(e) =>
                          setContratModif({
                            ...contratModif,
                            prix_mensuel: parseFloat(e.target.value),
                          })
                        }
                      />
                    ) : (
                      c.prix_mensuel
                    )}
                  </td>
                  <td>
                    {contratModif?.num === c.num ? (
                      <input
                        type="date"
                        className="form-input"
                        value={contratModif.date}
                        onChange={(e) =>
                          setContratModif({
                            ...contratModif,
                            date: e.target.value,
                          })
                        }
                      />
                    ) : (
                      c.date
                    )}
                  </td>
                  <td>
                    {contratModif?.num === c.num ? (
                      <select
                        className="form-select"
                        value={contratModif.etat}
                        onChange={(e) =>
                          setContratModif({
                            ...contratModif,
                            etat: e.target.value,
                          })
                        }
                      >
                        <option value="en cours">En cours</option>
                        <option value="résilié">Résilié</option>
                      </select>
                    ) : (
                      c.etat
                    )}
                  </td>
                  <td>{c.syndic}</td>
                  <td>
                    {contratModif?.num === c.num ? (
                      <div className="action-buttons">
                        <button
                          className="btn-table btn-edit"
                          onClick={handleModifier}
                        >
                           Enregistrer
                        </button>
                        <button
                          className="btn-table btn-cancel"
                          onClick={() => setContratModif(null)}
                        >
                           Annuler
                        </button>
                      </div>
                    ) : (
                      <div className="action-buttons">
                        <button
                          className="btn-table btn-edit"
                          onClick={() => setContratModif(c)}
                        >
                           Modifier
                        </button>
                        <button
                          className="btn-table btn-delete"
                          onClick={() => handleSupprimer(c.num)}
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

export default MiseAJourContrat;

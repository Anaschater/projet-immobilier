import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { modifierQuartier, supprimerQuartier } from "../../redux/quartierSlice";
import "../../styles/Form.css";

function MiseAJourQuartier() {
  const quartiers = useSelector((state) => state.quartier);
  const villes = useSelector((state) => state.ville);
  const [filtre, setFiltre] = useState("");
  const [quartierModif, setQuartierModif] = useState(null);
  const dispatch = useDispatch();

  const quartiersFiltres = quartiers.filter((q) =>
    q.nom.toLowerCase().includes(filtre.toLowerCase()),
  );

  const handleModifier = () => {
    if (
      !quartierModif.nom ||
      !quartierModif.ville ||
      !quartierModif.population
    ) {
      alert("Tous les champs sont obligatoires !");
      return;
    }

    dispatch(modifierQuartier(quartierModif));
    setQuartierModif(null);
  };

  const handleSupprimer = (code) => {
    if (window.confirm("Supprimer ce quartier ?")) {
      dispatch(supprimerQuartier(code));
    }
  };

  return (
    <div className="management-container">
      <div className="management-header">
        <h2>Gestion des Quartiers</h2>
        <div className="search-box">
          <input
            type="text"
            className="search-input"
            placeholder="Filtrer par nom..."
            value={filtre}
            onChange={(e) => setFiltre(e.target.value)}
          />
        </div>
      </div>

      <div className="table-wrapper">
        {quartiersFiltres.length === 0 ? (
          <div className="empty-state">
            <p>Aucun quartier trouvé</p>
          </div>
        ) : (
          <table className="management-table">
            <thead>
              <tr>
                <th>Code</th>
                <th>Nom</th>
                <th>Ville</th>
                <th>Population</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {quartiersFiltres.map((q) => (
                <tr key={q.code}>
                  <td>{q.code}</td>
                  <td>
                    {quartierModif?.code === q.code ? (
                      <input
                        className="form-input"
                        value={quartierModif.nom}
                        onChange={(e) =>
                          setQuartierModif({
                            ...quartierModif,
                            nom: e.target.value,
                          })
                        }
                      />
                    ) : (
                      q.nom
                    )}
                  </td>
                  <td>
                    {quartierModif?.code === q.code ? (
                      <select
                        className="form-select"
                        value={quartierModif.ville}
                        onChange={(e) =>
                          setQuartierModif({
                            ...quartierModif,
                            ville: parseInt(e.target.value),
                          })
                        }
                      >
                        {villes.map((v) => (
                          <option key={v.code} value={v.code}>
                            {v.nom}
                          </option>
                        ))}
                      </select>
                    ) : (
                      villes.find((v) => v.code === q.ville)?.nom
                    )}
                  </td>
                  <td>
                    {quartierModif?.code === q.code ? (
                      <input
                        type="number"
                        className="form-input"
                        value={quartierModif.population}
                        onChange={(e) =>
                          setQuartierModif({
                            ...quartierModif,
                            population: parseInt(e.target.value),
                          })
                        }
                      />
                    ) : (
                      q.population
                    )}
                  </td>
                  <td>
                    {quartierModif?.code === q.code ? (
                      <div className="action-buttons">
                        <button
                          className="btn-table btn-edit"
                          onClick={handleModifier}
                        >
                           Enregistrer
                        </button>
                        <button
                          className="btn-table btn-cancel"
                          onClick={() => setQuartierModif(null)}
                        >
                           Annuler
                        </button>
                      </div>
                    ) : (
                      <div className="action-buttons">
                        <button
                          className="btn-table btn-edit"
                          onClick={() => setQuartierModif(q)}
                        >
                           Modifier
                        </button>
                        <button
                          className="btn-table btn-delete"
                          onClick={() => handleSupprimer(q.code)}
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

export default MiseAJourQuartier;

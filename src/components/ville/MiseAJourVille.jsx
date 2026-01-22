import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { modifierVille, supprimerVille } from "../../redux/villeSlice";
import "../../styles/Form.css";

function MiseAJourVille() {
  const villes = useSelector((state) => state.ville);
  const regions = useSelector((state) => state.region);
  const [filtre, setFiltre] = useState("");
  const [villeModif, setVilleModif] = useState(null);
  const dispatch = useDispatch();

  const villesFiltrées = villes.filter((v) =>
    v.nom.toLowerCase().includes(filtre.toLowerCase())
  );

  const handleModifier = () => {
    if (!villeModif.nom || !villeModif.region) {
      alert("Tous les champs sont obligatoires !");
      return;
    }
    dispatch(modifierVille(villeModif));
    setVilleModif(null);
  };

  const handleSupprimer = (code) => {
    if (window.confirm("Supprimer cette ville ?")) {
      dispatch(supprimerVille(code));
    }
  };

  return (
    <div className="form-container">
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="management-header">
          <h2 className="management-title"> Gestion des villes</h2>
          <div className="search-filter">
            <input
              type="text"
              className="search-input"
              placeholder=" Filtrer par nom..."
              value={filtre}
              onChange={(e) => setFiltre(e.target.value)}
            />
          </div>
        </div>

        <div className="table-wrapper">
          {villesFiltrées.length === 0 ? (
            <div className="empty-state">
              <div className="empty-state-icon">📭</div>
              <div className="empty-state-text">Aucune ville trouvée</div>
            </div>
          ) : (
            <table className="management-table">
              <thead>
                <tr>
                  <th>Code</th>
                  <th>Nom</th>
                  <th>Région</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {villesFiltrées.map((v) => (
                  <tr key={v.code}>
                    <td>
                      <strong>{v.code}</strong>
                    </td>
                    <td>
                      {villeModif?.code === v.code ? (
                        <input
                          type="text"
                          className="form-input"
                          value={villeModif.nom}
                          onChange={(e) =>
                            setVilleModif({
                              ...villeModif,
                              nom: e.target.value,
                            })
                          }
                        />
                      ) : (
                        v.nom
                      )}
                    </td>
                    <td>
                      {villeModif?.code === v.code ? (
                        <select
                          className="form-select"
                          value={villeModif.region}
                          onChange={(e) =>
                            setVilleModif({
                              ...villeModif,
                              region: parseInt(e.target.value),
                            })
                          }
                        >
                          {regions.map((r) => (
                            <option key={r.id} value={r.id}>
                              {r.nom}
                            </option>
                          ))}
                        </select>
                      ) : (
                        regions.find((r) => r.id === v.region)?.nom
                      )}
                    </td>
                    <td>
                      <div className="table-actions">
                        {villeModif?.code === v.code ? (
                          <>
                            <button
                              className="btn-table btn-view"
                              onClick={handleModifier}
                            >
                               Enregistrer
                            </button>
                            <button
                              className="btn-table btn-edit"
                              onClick={() => setVilleModif(null)}
                            >
                               Annuler
                            </button>
                          </>
                        ) : (
                          <>
                            <button
                              className="btn-table btn-edit"
                              onClick={() => setVilleModif(v)}
                            >
                               Modifier
                            </button>
                            <button
                              className="btn-table btn-delete"
                              onClick={() => handleSupprimer(v.code)}
                            >
                               Supprimer
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default MiseAJourVille;
 
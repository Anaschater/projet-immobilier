import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  ajouterVille,
  modifierVille,
  supprimerVille,
} from "../redux/villeSlice";
function VillesPage() {
  const villes = useSelector((state) => state.villes);
  const regions = useSelector((state) => state.regions);
  const dispatch = useDispatch();
  const [nom, setNom] = useState("");
  const [regionId, setRegionId] = useState("");
  const [editId, setEditId] = useState(null);
  const handleAdd = () => {
    if (nom.trim() && regionId) {
      dispatch(
        ajouterVille({ id: Date.now(), nom, regionId: Number(regionId) }),
      );
      setNom("");
      setRegionId("");
    }
  };
  const handleUpdate = () => {
    dispatch(modifierVille({ id: editId, nom, regionId: Number(regionId) }));
    setEditId(null);
    setNom("");
    setRegionId("");
  };
  return (
    <div>
      {" "}
      <h2>Villes</h2>{" "}
      <input
        value={nom}
        onChange={(e) => setNom(e.target.value)}
        placeholder="Nom de la ville"
      />{" "}
      <select value={regionId} onChange={(e) => setRegionId(e.target.value)}>
        {" "}
        <option value="">-- Région --</option>{" "}
        {regions.map((r) => (
          <option key={r.id} value={r.id}>
            {r.nom}
          </option>
        ))}{" "}
      </select>{" "}
      {editId ? (
        <button onClick={handleUpdate}>Modifier</button>
      ) : (
        <button onClick={handleAdd}>Ajouter</button>
      )}{" "}
      <ul>
        {" "}
        {villes.map((v) => (
          <li key={v.id}>
            {" "}
            {v.nom} ({regions.find((r) => r.id === v.regionId)?.nom}){" "}
            <button
              onClick={() => {
                setEditId(v.id);
                setNom(v.nom);
                setRegionId(v.regionId);
              }}
            >
              Modifer
            </button>{" "}
            <button onClick={() => dispatch(supprimerVille(v.id))}>
              Supprimer
            </button>{" "}
          </li>
        ))}{" "}
      </ul>{" "}
    </div>
  );
}
export default VillesPage;

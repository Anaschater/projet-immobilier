import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  ajouterRegion,
  modifierRegion,
  supprimerRegion,
} from "../redux/regionSlice";
function RegionsPage() {
  const regions = useSelector((state) => state.regions);
  const dispatch = useDispatch();
  const [nom, setNom] = useState("");
  const [editId, setEditId] = useState(null);
  const handleAdd = () => {
    if (nom.trim()) {
      dispatch(ajouterRegion({ id: Date.now(), nom }));
      setNom("");
    }
  };
  const handleUpdate = () => {
    dispatch(modifierRegion({ id: editId, nom }));
    setEditId(null);
    setNom("");
  };
  return (
    <div>
      {" "}
      <h2>Régions</h2>{" "}
      <input
        value={nom}
        onChange={(e) => setNom(e.target.value)}
        placeholder="Nom de la région"
      />{" "}
      {editId ? (
        <button onClick={handleUpdate}>Modifier</button>
      ) : (
        <button onClick={handleAdd}>Ajouter</button>
      )}{" "}
      <ul>
        {" "}
        {regions.map((r) => (
          <li key={r.id}>
            {" "}
            {r.nom}{" "}
            <button
              onClick={() => {
                setEditId(r.id);
                setNom(r.nom);
              }}
            >
              Modifier
            </button>{" "}
            <button onClick={() => dispatch(supprimerRegion(r.id))}>
              Supprimer
            </button>{" "}
          </li>
        ))}{" "}
      </ul>{" "}
    </div>
  );
}
export default RegionsPage;

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  ajouterQuartier,
  modifierQuartier,
  supprimerQuartier,
} from "../redux/quartierSlice";
function QuartiersPage() {
  const quartiers = useSelector((state) => state.quartiers);
  const villes = useSelector((state) => state.villes);
  const dispatch = useDispatch();
  const [nom, setNom] = useState("");
  const [villeId, setVilleId] = useState("");
  const [editId, setEditId] = useState(null);
  const handleAdd = () => {
    if (nom.trim() && villeId) {
      dispatch(
        ajouterQuartier({ id: Date.now(), nom, villeId: Number(villeId) }),
      );
      setNom("");
      setVilleId("");
    }
  };
  const handleUpdate = () => {
    dispatch(modifierQuartier({ id: editId, nom, villeId: Number(villeId) }));
    setEditId(null);
    setNom("");
    setVilleId("");
  };
  return (
    <div>
      {" "}
      <h2>Quartiers</h2>{" "}
      <input
        value={nom}
        onChange={(e) => setNom(e.target.value)}
        placeholder="Nom du quartier"
      />{" "}
      <select value={villeId} onChange={(e) => setVilleId(e.target.value)}>
        {" "}
        <option value="">-- Ville --</option>{" "}
        {villes.map((v) => (
          <option key={v.id} value={v.id}>
            {v.nom}
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
        {quartiers.map((q) => (
          <li key={q.id}>
            {" "}
            {q.nom} ({villes.find((v) => v.id === q.villeId)?.nom}){" "}
            <button
              onClick={() => {
                setEditId(q.id);
                setNom(q.nom);
                setVilleId(q.villeId);
              }}
            >
              Modifier
            </button>{" "}
            <button onClick={() => dispatch(supprimerQuartier(q.id))}>
              Supprimer
            </button>{" "}
          </li>
        ))}{" "}
      </ul>{" "}
    </div>
  );
}
export default QuartiersPage;

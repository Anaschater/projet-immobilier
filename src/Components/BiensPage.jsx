import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ajouterBien, modifierBien, supprimerBien } from "../redux/bienSlice";
function BiensPage() {
  const biens = useSelector((state) => state.biens);
  const quartiers = useSelector((state) => state.quartiers);
  const dispatch = useDispatch();
  const [type, setType] = useState("");
  const [prix, setPrix] = useState("");
  const [quartierId, setQuartierId] = useState("");
  const [editId, setEditId] = useState(null);
  const handleAdd = () => {
    if (type.trim() && prix && quartierId) {
      dispatch(
        ajouterBien({
          id: Date.now(),
          type,
          prix: Number(prix),
          quartierId: Number(quartierId),
        }),
      );
      setType("");
      setPrix("");
      setQuartierId("");
    }
  };
  const handleUpdate = () => {
    dispatch(
      modifierBien({
        id: editId,
        type,
        prix: Number(prix),
        quartierId: Number(quartierId),
      }),
    );
    setEditId(null);
    setType("");
    setPrix("");
    setQuartierId("");
  };
  return (
    <div>
      <h2>Biens</h2>
      <input
        value={type}
        onChange={(e) => setType(e.target.value)}
        placeholder="Type"
      />
      <input
        value={prix}
        onChange={(e) => setPrix(e.target.value)}
        placeholder="Prix"
        type="number"
      />
      <select
        value={quartierId}
        onChange={(e) => setQuartierId(e.target.value)}
      >
        <option value="">-- Quartier --</option>
        {quartiers.map((q) => (
          <option key={q.id} value={q.id}>
            {q.nom}
          </option>
        ))}
      </select>
      {editId ? (
        <button onClick={handleUpdate}>Modifier</button>
      ) : (
        <button onClick={handleAdd}>Ajouter</button>
      )}
      <ul>
        {biens.map((b) => (
          <li key={b.id}>
            {b.type} - {b.prix} DH (
            {quartiers.find((q) => q.id === b.quartierId)?.nom})
            <button
              onClick={() => {
                setEditId(b.id);
                setType(b.type);
                setPrix(b.prix);
                setQuartierId(b.quartierId);
              }}
            >
              Modifier
            </button>
            <button onClick={() => dispatch(supprimerBien(b.id))}>
              Supprimer
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default BiensPage;

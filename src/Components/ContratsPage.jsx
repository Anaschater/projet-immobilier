import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  ajouterContrat,
  modifierContrat,
  supprimerContrat,
} from "../redux/contratSlice";
function ContratsPage() {
  const contrats = useSelector((state) => state.contrats);
  const biens = useSelector((state) => state.biens);
  const dispatch = useDispatch();
  const [client, setClient] = useState("");
  const [date, setDate] = useState("");
  const [montant, setMontant] = useState("");
  const [bienId, setBienId] = useState("");
  const [editId, setEditId] = useState(null);
  const handleAdd = () => {
    if (client.trim() && date && montant && bienId) {
      dispatch(
        ajouterContrat({
          id: Date.now(),
          client,
          date,
          montant: Number(montant),
          bienId: Number(bienId),
        }),
      );
      setClient("");
      setDate("");
      setMontant("");
      setBienId("");
    }
  };
  const handleUpdate = () => {
    dispatch(
      modifierContrat({
        id: editId,
        client,
        date,
        montant: Number(montant),
        bienId: Number(bienId),
      }),
    );
    setEditId(null);
    setClient("");
    setDate("");
    setMontant("");
    setBienId("");
  };
  return (
    <div>
      <h2>Contrats</h2>
      <input
        value={client}
        onChange={(e) => setClient(e.target.value)}
        placeholder="Client"
      />
      <input
        value={date}
        onChange={(e) => setDate(e.target.value)}
        placeholder="Date"
        type="date"
      />
      <input
        value={montant}
        onChange={(e) => setMontant(e.target.value)}
        placeholder="Montant"
        type="number"
      />
      <select value={bienId} onChange={(e) => setBienId(e.target.value)}>
        <option value="">-- Bien --</option>
        {biens.map((b) => (
          <option key={b.id} value={b.id}>
            {b.type} - {b.prix}
          </option>
        ))}
      </select>
      {editId ? (
        <button onClick={handleUpdate}>Modifier</button>
      ) : (
        <button onClick={handleAdd}>Ajouter</button>
      )}
      <ul>
        {contrats.map((c) => (
          <li key={c.id}>
            {c.client} - {c.date} - {c.montant} -
            {biens.find((b) => b.id === c.bienId)?.type}
            <button
              onClick={() => {
                setEditId(c.id);
                setClient(c.client);
                setDate(c.date);
                setMontant(c.montant);
                setBienId(c.bienId);
              }}
            >
              Modifier
            </button>
            <button onClick={() => dispatch(supprimerContrat(c.id))}>
              Supprimer
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ContratsPage;

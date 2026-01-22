import React, { useState } from "react";
import { useSelector } from "react-redux";

function TestWebService() {
  const villes = useSelector((state) => state.ville);
  const quartiers = useSelector((state) => state.quartier);
  const biens = useSelector((state) => state.bien);
  const contrats = useSelector((state) => state.contrat);

  const [villeCode, setVilleCode] = useState("");
  const [resultat, setResultat] = useState(null);

  const handleTest = () => {
    const quartiersVille = quartiers.filter((q) => q.ville === parseInt(villeCode));
    const quartiersIds = quartiersVille.map((q) => q.code);

    const biensVille = biens.filter((b) => quartiersIds.includes(b.quartier));
    const biensIds = biensVille.map((b) => b.code);

    const contratsResilies = contrats.filter(
      (c) => biensIds.includes(c.bien) && c.etat === "résilié"
    );

    setResultat({
      nbBiens: biensVille.length,
      nbResilies: contratsResilies.length,
    });
  };

  return (
    <div style={{ maxWidth: "500px", margin: "50px auto", textAlign: "center" }}>
      <h2>🧪 Test Web Service</h2>

      <select
        value={villeCode}
        onChange={(e) => setVilleCode(e.target.value)}
        required
      >
        <option value="">-- Sélectionner une ville --</option>
        {villes.map((v) => (
          <option key={v.code} value={v.code}>
            {v.nom}
          </option>
        ))}
      </select>

      <br /><br />
      <button onClick={handleTest} disabled={!villeCode}>
        Tester
      </button>

      {resultat && (
        <div style={{ marginTop: "30px" }}>
          <p>🏘️ Nombre de biens : <strong>{resultat.nbBiens}</strong></p>
          <p>📄 Contrats résiliés : <strong>{resultat.nbResilies}</strong></p>
        </div>
      )}
    </div>
  );
}

export default TestWebService;

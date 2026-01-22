import React from "react";
import { useSelector } from "react-redux";

function Statistiques() {
  const contrats = useSelector((state) => state.contrat);

  // حساب المداخيل حسب كل شهر
  const revenusParMois = {};

  contrats.forEach((contrat) => {
    if (contrat.etat === "en cours") {
      const date = new Date(contrat.date);
      const mois = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;

      if (!revenusParMois[mois]) {
        revenusParMois[mois] = 0;
      }

      revenusParMois[mois] += contrat.prix_mensuel;
    }
  });

  // ترتيب حسب التاريخ
  const moisTries = Object.keys(revenusParMois).sort();

  return (
    <div style={{ maxWidth: "600px", margin: "50px auto", textAlign: "center" }}>
      <h2>📈 Statistiques des revenus</h2>
      <table border="1" cellPadding="8" style={{ width: "100%", textAlign: "center" }}>
        <thead>
          <tr>
            <th>Mois</th>
            <th>Revenu total (MAD)</th>
          </tr>
        </thead>
        <tbody>
          {moisTries.map((mois) => (
            <tr key={mois}>
              <td>{mois}</td>
              <td>{revenusParMois[mois].toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Statistiques;

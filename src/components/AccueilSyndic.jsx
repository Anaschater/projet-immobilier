import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function AccueilSyndic() {
  const syndic = useSelector((state) => state.syndic.syndic);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
    window.location.reload(); // إعادة تحميل باش يمسح session
  };

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h2>👋 Bienvenue, {syndic.nom}</h2>
      <p>Choisissez une action :</p>

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px", marginTop: "30px" }}>
        {/* Villes */}
        <Link to="/ajouter-ville"><button>➕ Ajouter Ville</button></Link>
        <Link to="/mise-a-jour-ville"><button>🛠️ Gérer Villes</button></Link>

        {/* Quartiers */}
        <Link to="/ajouter-quartier"><button>➕ Ajouter Quartier</button></Link>
        <Link to="/mise-a-jour-quartier"><button>🛠️ Gérer Quartiers</button></Link>

        {/* Biens */}
        <Link to="/ajouter-bien"><button>➕ Ajouter Bien</button></Link>
        <Link to="/mise-a-jour-bien"><button>🛠️ Gérer Biens</button></Link>

        {/* Contrats */}
        <Link to="/ajouter-contrat"><button>➕ Ajouter Contrat</button></Link>
        <Link to="/mise-a-jour-contrat"><button>🛠️ Gérer Contrats</button></Link>

        {/* Services */}
        <Link to="/test-web-service"><button>🧪 Test Web Service</button></Link>
        <Link to="/statistiques"><button>📊 Statistiques</button></Link>
      </div>

      <br /><br />
      <button onClick={handleLogout} style={{ backgroundColor: "crimson", color: "white" }}>
        🚪 Se déconnecter
      </button>
    </div>
  );
}

export default AccueilSyndic;

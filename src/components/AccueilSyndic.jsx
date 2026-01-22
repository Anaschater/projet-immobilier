import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "../styles/AccueilSyndic.css";
import villesImg from "../assets/images/ville.jpg";
import quartiersImg from "../assets/images/quartier.png";
import biensImg from "../assets/images/biens.jpg";
import contratsImg from "../assets/images/contrats.jpg";

function AccueilSyndic() {
  const syndic = useSelector((state) => state.syndic.syndic);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
   
  };

  const actions = [
    {
      id: 1,
      title: "Villes",
      image: villesImg,
      add: "/ajouter-ville",
      manage: "/mise-a-jour-ville",
      description: "Gérer vos villes",
    },
    {
      id: 2,
      title: "Quartiers",
      image: quartiersImg,
      add: "/ajouter-quartier",
      manage: "/mise-a-jour-quartier",
      description: "Organiser vos quartiers",
    },
    {
      id: 3,
      title: "Biens",
      image: biensImg,
      add: "/ajouter-bien",
      manage: "/mise-a-jour-bien",
      description: "Ajouter & gérer les biens",
    },
    {
      id: 4,
      title: "Contrats",
      image: contratsImg,
      add: "/ajouter-contrat",
      manage: "/mise-a-jour-contrat",
      description: "Gérer les contrats",
    },
  ];

  return (
    <div className="accueil">
      <div className="accueil-header">
        <h2> Bienvenue, {syndic.nom}</h2>
        <p className="accueil-description">Choisissez une action :</p>
      </div>

      <div className="accueil-grid">
        {actions.map((action) => (
          <div key={action.id} className="action-card">
            <div className="action-card-image">
              <img src={action.image} alt={action.title} />
            </div>
            <div className="action-card-title">{action.title}</div>
            <div className="action-card-description">{action.description}</div>
            <div className="action-card-buttons">
              <Link to={action.add} className="btn-add">
                Ajouter
              </Link>
              <Link to={action.manage} className="btn-manage">
                Gérer
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="logout-section">
        <button className="btn-logout" onClick={handleLogout}>
          Se déconnecter
        </button>
      </div>
    </div>
  );
}

export default AccueilSyndic;

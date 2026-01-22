import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutSyndic } from "../redux/syndicSlice";
import "../styles/Navbar.css";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutSyndic());
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div
          className="navbar-brand"
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        >
          <h1 className="navbar-title">Chater Immobilier</h1>
        </div>

        <ul className="navbar-menu">
          <li className="navbar-item" onClick={() => navigate("/")}>
            Accueil
          </li>
          <li className="navbar-item" onClick={() => navigate("/ville")}>
            Villes
          </li>
          <li className="navbar-item" onClick={() => navigate("/quartier")}>
            Quartiers
          </li>
          <li className="navbar-item" onClick={() => navigate("/bien")}>
            Biens
          </li>
          <li className="navbar-item" onClick={() => navigate("/contrat")}>
            Contrats
          </li>
        </ul>

        <div className="navbar-menu">
          <button className="navbar-button logout" onClick={handleLogout}>
            Se déconnecter
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSyndic } from "../redux/syndicSlice";
import { syndics } from "../data/data";
import "../styles/Form.css";

function LoginPage() {
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    
    const found = syndics.find(
      (s) => s.code === code && s.mot_de_passe === password
    );

    if (found) {
      dispatch(loginSyndic({ code: found.code, nom: found.nom }));
      navigate("/");
    } else {
      alert("Code ou mot de passe incorrect !");
    }
  };

  return (
    <div className="form-container">
      <div className="form-wrapper">
        <div className="form-card">
          <div className="form-header">
            <h2>Authentification Syndic</h2>
            <p>Connectez-vous à votre compte</p>
          </div>
          <div className="form-body">
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label className="form-label">Code Syndic</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Ex: SYNDIC001"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Mot de passe</label>
                <input
                  type="password"
                  className="form-input"
                  placeholder="Entrez votre mot de passe"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="form-actions">
                <button type="submit" className="form-btn btn-submit">
                   Se connecter
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSyndic } from "../redux/syndicSlice";
import { syndics } from "../data/data";

function LoginPage() {
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // التحقق من وجود syndic فـ البيانات
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
    <div style={{ maxWidth: "400px", margin: "100px auto", textAlign: "center" }}>
      <h2>Authentification Syndic</h2>
      <form onSubmit={handleLogin}>
        <div>
          <input
            type="text"
            placeholder="Code Syndic"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            required
          />
        </div>
        <div style={{ marginTop: "10px" }}>
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" style={{ marginTop: "20px" }}>
          Se connecter
        </button>
      </form>
    </div>
  );
}

export default LoginPage;

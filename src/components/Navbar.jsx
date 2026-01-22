import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutSyndic } from "../redux/syndicSlice";

function Navbar() {
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const handleLogout = () => {
      dispatch(logoutSyndic());
      navigate("/login");
   };

   return (
      <div
         style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 20px",
            background: "#222",
            color: "white",
         }}
      >
         <div style={{ display: "flex", gap: "10px" }}>
            <button
               onClick={() => navigate("/")}
               style={{ padding: "8px 12px" }}
            >
               Accueil
            </button>
            <button
               onClick={() => navigate("/ville")}
               style={{ padding: "8px 12px" }}
            >
               Ville
            </button>
            <button
               onClick={() => navigate("/quartier")}
               style={{ padding: "8px 12px" }}
            >
               Quartier
            </button>
            <button
               onClick={() => navigate("/bien")}
               style={{ padding: "8px 12px" }}
            >
               Bien
            </button>
            <button
               onClick={() => navigate("/contrat")}
               style={{ padding: "8px 12px" }}
            >
               Contrat
            </button>
         </div>

         <div>
            <button
               onClick={() => navigate("/test-web-service")}
               style={{ marginRight: 10 }}
            >
               Tester WS
            </button>
            <button
               onClick={() => navigate("/statistiques")}
               style={{ marginRight: 10 }}
            >
               Statistiques
            </button>
            <button
               onClick={handleLogout}
               style={{
                  background: "crimson",
                  color: "white",
                  padding: "8px 12px",
               }}
            >
               Se déconnecter
            </button>
         </div>
      </div>
   );
}

export default Navbar;

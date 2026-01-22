import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import RegionsPage from "./Components/RegionsPage";
import VillesPage from "./Components/VillesPage";
import QuartiersPage from "./Components/QuartiersPage";
import BiensPage from "./Components/BiensPage";
import ContratsPage from "./Components/ContratsPage";
import AccuilPage from "./Components/AccuilPage";

function App() {
  return (
    <div>
      <nav>
        <Link to="/regions">Régions</Link> | <Link to="/villes">Villes</Link> |{" "}
        <Link to="/quartiers">Quartiers</Link> | <Link to="/biens">Biens</Link>{" "}
        | <Link to="/contrats">Contrats</Link>
      </nav>

      <Routes>
        <Route path="/" element={<AccuilPage />} />
        <Route path="/regions" element={<RegionsPage />} />
        <Route path="/villes" element={<VillesPage />} />
        <Route path="/quartiers" element={<QuartiersPage />} />
        <Route path="/biens" element={<BiensPage />} />
        <Route path="/contrats" element={<ContratsPage />} />
      </Routes>
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// الصفحات
import LoginPage from "./components/LoginPage";
import AccueilSyndic from "./components/AccueilSyndic";
import AjouterVille from "./components/ville/AjouterVille";
import MiseAJourVille from "./components/ville/MiseAJourVille";
import AjouterQuartier from "./components/quartier/AjouterQuartier";
import MiseAJourQuartier from "./components/quartier/MiseAJourQuartier";
import AjouterBien from "./components/bien/AjouterBien";
import MiseAJourBien from "./components/bien/MiseAJourBien";
import AjouterContrat from "./components/contrat/AjouterContrat";
import MiseAJourContrat from "./components/contrat/MiseAJourContrat";
import TestWebService from "./components/TestWebService";
import Statistiques from "./components/Statistiques";

// الحماية
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
   return (
      <Router>
         <Routes>
            {/* تسجيل الدخول */}
            <Route path="/login" element={<LoginPage />} />

            {/* الاستقبال */}
            <Route
               path="/"
               element={
                  <ProtectedRoute>
                     <AccueilSyndic />
                  </ProtectedRoute>
               }
            />

            {/* إدارة المدن */}
            <Route
               path="/ajouter-ville"
               element={
                  <ProtectedRoute>
                     <AjouterVille />
                  </ProtectedRoute>
               }
            />
            <Route
               path="/mise-a-jour-ville"
               element={
                  <ProtectedRoute>
                     <MiseAJourVille />
                  </ProtectedRoute>
               }
            />

            {/* إدارة الأحياء */}
            <Route
               path="/ajouter-quartier"
               element={
                  <ProtectedRoute>
                     <AjouterQuartier />
                  </ProtectedRoute>
               }
            />
            <Route
               path="/mise-a-jour-quartier"
               element={
                  <ProtectedRoute>
                     <MiseAJourQuartier />
                  </ProtectedRoute>
               }
            />

            {/* إدارة العقارات */}
            <Route
               path="/ajouter-bien"
               element={
                  <ProtectedRoute>
                     <AjouterBien />
                  </ProtectedRoute>
               }
            />
            <Route
               path="/mise-a-jour-bien"
               element={
                  <ProtectedRoute>
                     <MiseAJourBien />
                  </ProtectedRoute>
               }
            />

            {/* إدارة العقود */}
            <Route
               path="/ajouter-contrat"
               element={
                  <ProtectedRoute>
                     <AjouterContrat />
                  </ProtectedRoute>
               }
            />
            <Route
               path="/mise-a-jour-contrat"
               element={
                  <ProtectedRoute>
                     <MiseAJourContrat />
                  </ProtectedRoute>
               }
            />

            {/* Web Service + Statistiques */}
            <Route
               path="/test-web-service"
               element={
                  <ProtectedRoute>
                     <TestWebService />
                  </ProtectedRoute>
               }
            />
            <Route
               path="/statistiques"
               element={
                  <ProtectedRoute>
                     <Statistiques />
                  </ProtectedRoute>
               }
            />
         </Routes>
      </Router>
   );
}

export default App;

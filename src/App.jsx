import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// الصفحات
import LoginPage from "./components/LoginPage";
import AccueilSyndic from "./components/AccueilSyndic";
import Navbar from "./components/Navbar";
import Ville from "./components/ville/Ville";
import Quartier from "./components/quartier/Quartier";
import Bien from "./components/bien/Bien";
import Contrat from "./components/contrat/Contrat";
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
                     <>
                        <Navbar />
                        <AccueilSyndic />
                     </>
                  </ProtectedRoute>
               }
            />

            {/* إدارة المدن */}
            <Route
               path="/ville"
               element={
                  <ProtectedRoute>
                     <>
                        <Navbar />
                        <Ville />
                     </>
                  </ProtectedRoute>
               }
            />
            <Route
               path="/ajouter-ville"
               element={
                  <ProtectedRoute>
                     <>
                        <Navbar />
                        <AjouterVille />
                     </>
                  </ProtectedRoute>
               }
            />
            <Route
               path="/mise-a-jour-ville"
               element={
                  <ProtectedRoute>
                     <>
                        <Navbar />
                        <MiseAJourVille />
                     </>
                  </ProtectedRoute>
               }
            />

            {/* إدارة الأحياء */}
            <Route
               path="/quartier"
               element={
                  <ProtectedRoute>
                     <>
                        <Navbar />
                        <Quartier />
                     </>
                  </ProtectedRoute>
               }
            />
            <Route
               path="/ajouter-quartier"
               element={
                  <ProtectedRoute>
                     <>
                        <Navbar />
                        <AjouterQuartier />
                     </>
                  </ProtectedRoute>
               }
            />
            <Route
               path="/mise-a-jour-quartier"
               element={
                  <ProtectedRoute>
                     <>
                        <Navbar />
                        <MiseAJourQuartier />
                     </>
                  </ProtectedRoute>
               }
            />

            {/* إدارة العقارات */}
            <Route
               path="/bien"
               element={
                  <ProtectedRoute>
                     <>
                        <Navbar />
                        <Bien />
                     </>
                  </ProtectedRoute>
               }
            />
            <Route
               path="/ajouter-bien"
               element={
                  <ProtectedRoute>
                     <>
                        <Navbar />
                        <AjouterBien />
                     </>
                  </ProtectedRoute>
               }
            />
            <Route
               path="/mise-a-jour-bien"
               element={
                  <ProtectedRoute>
                     <>
                        <Navbar />
                        <MiseAJourBien />
                     </>
                  </ProtectedRoute>
               }
            />

            {/* إدارة العقود */}
            <Route
               path="/contrat"
               element={
                  <ProtectedRoute>
                     <>
                        <Navbar />
                        <Contrat />
                     </>
                  </ProtectedRoute>
               }
            />
            <Route
               path="/ajouter-contrat"
               element={
                  <ProtectedRoute>
                     <>
                        <Navbar />
                        <AjouterContrat />
                     </>
                  </ProtectedRoute>
               }
            />
            <Route
               path="/mise-a-jour-contrat"
               element={
                  <ProtectedRoute>
                     <>
                        <Navbar />
                        <MiseAJourContrat />
                     </>
                  </ProtectedRoute>
               }
            />

            {/* Web Service + Statistiques */}
            <Route
               path="/test-web-service"
               element={
                  <ProtectedRoute>
                     <>
                        <Navbar />
                        <TestWebService />
                     </>
                  </ProtectedRoute>
               }
            />
            <Route
               path="/statistiques"
               element={
                  <ProtectedRoute>
                     <>
                        <Navbar />
                        <Statistiques />
                     </>
                  </ProtectedRoute>
               }
            />
         </Routes>
      </Router>
   );
}

export default App;

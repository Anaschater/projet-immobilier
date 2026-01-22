import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const syndic = useSelector((state) => state.syndic.syndic);

  if (!syndic) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;

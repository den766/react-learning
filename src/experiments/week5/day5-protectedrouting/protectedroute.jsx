import { Navigate } from "react-router-dom";

function ProtectedRoute2({ isLoggedIn, children }) {
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute2;
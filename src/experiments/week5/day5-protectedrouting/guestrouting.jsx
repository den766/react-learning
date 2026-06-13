import { Navigate } from "react-router-dom";

function GuestRouting({ isLoggedIn, children }) {
  if (isLoggedIn) {
    return <Navigate to={"/dashboard"} />;
  }

  return children;
}

export default GuestRouting;

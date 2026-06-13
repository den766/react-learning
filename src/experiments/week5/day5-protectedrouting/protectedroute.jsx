import { Navigate } from "react-router-dom";

function ProtectedRoute2({ isLoggedIn, children }) {
  console.log(isLoggedIn);
  if (!isLoggedIn) {
   return  <Navigate to={"/login"} />;
  }

  // if(isLoggedIn) {

  //     return <Navigte  to={"/dash"}/> 
  // }

  return children;
}

export default ProtectedRoute2;

import { useState } from "react";

function ProtectedRoute() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log(isLoggedIn);

  return (
    <div>
      <h1>LoginStatus : {isLoggedIn ? "LoggedIn" : "LoggedOut"}</h1>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>{isLoggedIn ? "LogOut":"Login"  }</button>
    </div>
  );
}

export default ProtectedRoute;

import { createContext, useState } from "react";

export const Authcontext2 = createContext();

function AuthProvider2({ children }) {
  const [user, setUser] = useState(null);

  function logIn() {
    setUser({
      name: "Ashu",
    });
  }

  function logOut() {
    setUser(null);
  }

  return (
    <Authcontext2.Provider value={{ user, logIn , logOut }}>
      {children}
    </Authcontext2.Provider>
  );
}

export default AuthProvider2;

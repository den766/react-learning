import { Authcontext2 } from "../../../context/AuthContext2";
import { useContext } from "react";
import { ThemeContex2 } from "../../../context/ThemeContext2";

function NavbarDay6() {
  const { user, logIn, logOut } = useContext(Authcontext2);

  const {  theme , toggleTheme } = useContext(ThemeContex2);

  console.log(theme);

  if (!user) {
    return (
      <>
        <h2>Please login</h2>
        <button onClick={() => logIn()}>Login</button>
      </>
    );
  }

  return (
    <>
      <h2>welcome {user.name}</h2>
      <button onClick={() => toggleTheme()}>{theme ? "light" : "dark"}</button>
      <button onClick={() => logOut()}>Logout</button>
    </>
  );
}

export default NavbarDay6;

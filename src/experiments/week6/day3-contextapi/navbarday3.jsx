import { Themecontent } from "../../../context/Themecontent";
import { useContext } from "react";
function NavBar3() {
  const { theme, setTheme } = useContext(Themecontent);
  console.log(theme);

  return (
    <>
      <h2>{theme}</h2>

      <button onClick={() => setTheme(!theme)}>
        {theme ? "light" : "dark"}
      </button>
    </>
  );
}

export default NavBar3;

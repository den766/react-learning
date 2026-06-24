import { createContext, useEffect, useState } from "react";

export const ThemeContex2 = createContext();

function ThemeProvider2({ children }) {
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    document.body.className = theme ? "dark" : "light";
  }, [theme]);

  function toggleTheme() {
    setTheme(!theme);
  }

  return (
    <ThemeContex2.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContex2.Provider>
  );
}

export default ThemeProvider2;

import { createContext, useState } from "react";
import { useEffect } from "react";

export const Themecontent = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(false);
  useEffect(() => {
    document.body.className = theme ? "dark" : "light";
  }, [theme]);
  return (
    <Themecontent.Provider value={{ theme, setTheme }}>
      {children}
    </Themecontent.Provider>
  );
}

export default ThemeProvider;

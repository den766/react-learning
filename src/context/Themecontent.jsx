import { createContext, useState } from "react";

 export const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const  [theme, setTheme] = useState("light");

  return (
    <ThemeContext.provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.provider>
  );
}

export default ThemeProvider;

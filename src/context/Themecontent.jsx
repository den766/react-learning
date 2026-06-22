// import {  createContext, useState } from "react";

// export const ThemeContext = createContext();

// function ThemeProvider({children}){

//       const [theme, setTheme] = useState("light");

//        return(
//       <ThemeContext.Provider value={{theme, setTheme}}>
//         {children}
//       </ThemeContext.Provider>
//       )
// }

// export default ThemeProvider;

import { createContext, useState } from "react";

export const Themecontent = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
return (
  <Themecontent.Provider value={{ theme, setTheme }}>
    {children}
  </Themecontent.Provider>

)
}

export default ThemeProvider;

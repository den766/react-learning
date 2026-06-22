import { Themecontent } from "../../../context/Themecontent";
import { useContext } from "react";

function ProfileDay4() {

    const {theme , setTheme} = useContext(Themecontent);


     return (

         <>
          <h2>Welcome to profile </h2>
           <button onClick={()=> setTheme(!theme)}>{theme ? "light" : "dark"}</button>
         </>
     )
}

export default ProfileDay4;
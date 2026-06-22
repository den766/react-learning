import { Themecontent } from "../../../context/Themecontent";
import { useContext } from "react";
function NavBar3() {

  const data = useContext(Themecontent);
  console.log(data);
  
  return(

       <h2>{data.theme}</h2>
  )
}

export default NavBar3;

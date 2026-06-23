import { AuthContext } from "../../../context/AuthContex";
import { useContext } from "react";

function NavbarDay5() {
  const { user, logIn, logOut } = useContext(AuthContext);

  if(!user){

    return(
     <>
      <h2>Please Login</h2>
      <button onClick={()=> logIn()}>Login</button>
      </>
      )
  }

  return(
     <>
      <h2>Welcome {user.name}</h2>
      <button onClick={()=> logOut()}>Logout</button>
      </>
  )
}

export default NavbarDay5;
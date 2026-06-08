import { Link  , NavLink} from "react-router-dom";
function NavBar() {

     return (

         <nav>

        <Link to={"/"}>Home</Link>
        <Link to={"about"}>About</Link>
         <NavLink to={"contact"}>Contact</NavLink>
         <NavLink to={"profile"}>Profile</NavLink>
         <Link to={"settings"}>settings</Link>

         </nav>
     )
}

export default NavBar;
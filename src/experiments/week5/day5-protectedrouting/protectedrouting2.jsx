import { Link } from "react-router-dom"

function ProtectedDashboard() {


      return (

         <nav>
            <Link to={"/login"}>Login</Link>
            <Link to={"/dashboard"}>Dashboard</Link>
            <Link to={"/profile"}>Profile</Link>
            <Link to={"/settings"}>Settings</Link>
         </nav>
      )
}


export default ProtectedDashboard;
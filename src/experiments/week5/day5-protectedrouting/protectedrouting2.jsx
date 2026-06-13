import { Link } from "react-router-dom"

function ProtectedDashboard() {


      return (

         <nav>
            <Link to={"Login"}>Login</Link>
            <Link to={"dashboard"}>Dashboard</Link>
         </nav>
      )
}


export default ProtectedDashboard;
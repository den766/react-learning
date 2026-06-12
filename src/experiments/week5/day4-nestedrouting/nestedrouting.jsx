import { Link, Outlet } from "react-router-dom";

function DashBoardLayout() {
  return (
    <div>
      <h1>Dashboard Heading</h1>
      <nav>
        <Link to={"about"}>About</Link>
        <Link to={"contact"}>Contact</Link>
        <Link to={"settings"}>Settings</Link>
      </nav>

      <hr />
      <Outlet />
    </div>
  );
}

export default DashBoardLayout;

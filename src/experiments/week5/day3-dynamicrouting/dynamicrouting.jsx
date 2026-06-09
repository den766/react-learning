import { Link } from "react-router-dom";

function DynamicRouter() {
  return (
    <nav>
      <Link to={"/user/1"}>user1</Link>
      <Link to={"/user/2"}>user2</Link>
      <Link to={"/user/3"}>user3</Link>
      <Link to={"/user/4"}>user4</Link>
    </nav>
  );
}

export default DynamicRouter;

import { useState, useEffect } from "react";

function FetchUsers() {
  const [users, setUsers] = useState([]);

  console.log(users);

  console.log("render Phase");

  

  useEffect(() => {
    console.log("effect run started");

    async function getUser() {
        console.log("fetch Started");
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );

      console.log("response Arrived");  

      const data = await response.json();

      console.log("Json Parsed");

      console.log(data);

      setUsers(data);
      console.log("state update requested");
    }

    getUser();
  }, []);

  return (
    <div className="Users_Container">
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name} </li>
        ))}
      </ul>
    </div>
  );
}

export default FetchUsers;
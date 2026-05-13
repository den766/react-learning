import { useState, useEffect } from "react";

function FetchUsers() {
  const [users, setUsers] = useState([]);

  console.log("render Phase");

  useEffect(() => {
    console.log("effect run started");

    async function getUser() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );

      const data = await response.json();

      console.log(data);

      setUsers(data);


    }

    getUser();
  }, []);

  return (
    <div className="Users_Container">
      <ul>
        {users.map((user) => (
          <>
          <li>{user.name} , </li>
          <p>{user.username}</p>
          </>

        ))}
      </ul>
    </div>
  );
}

export default FetchUsers;

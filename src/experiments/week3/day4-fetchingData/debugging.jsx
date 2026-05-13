import { useState, useEffect } from "react";

function FetchUsers2() {
  const [users, setUsers] = useState([]);

  console.log(users);
  console.log(users.length)

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
      console.log(data)

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

       <h1>{users.length}</h1>
    </div>
  );
}

export default FetchUsers2;
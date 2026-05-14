import { useState, useEffect } from "react";

function Uistates() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

  console.log("render phase");
  console.log(users);
  console.log(loading);

  useEffect(() => {
    console.log("Effect Started");
    async function getUser() {
      try {
        console.log("Fetch Started");
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/u",
        );

        if (!response.ok) throw new Error("request failed");
        const data = await response.json();

        console.log("Data Arrived :", data);
        setUsers(data);

        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }

    getUser();
  }, []);

  if (loading) {
    return <h1>Loading....</h1>;
  }

  if(error){

     return <h1>{error}</h1>
  }

  return (
    
    <div>
      <h1>Users</h1>
      <ul>
          {users.map((user) => {

        return <li key={user.id}>{user.name}</li>;
      })}
      </ul>
      
    </div>
  );
}

export default Uistates;

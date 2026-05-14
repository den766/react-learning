import { useState, useEffect } from "react";

function EmptyState() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  console.log("render Phase");

  useEffect(() => {
    async function getUser() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/");
        if (!response.ok) throw new Error("Fetching Failed");
        const data = await response.json();

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
    return <h1>Loading Users...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  if (users.length === 0) {
    return <h1>No users found...</h1>;
  }

  return (
    <div>
      <ul>
        {users.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default EmptyState;

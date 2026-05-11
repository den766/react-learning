
import { useState, useEffect } from "react";


function Good() {

    const [users , SetUsers] = useState([]);

    useEffect(()=> {

        async function fetchUsers() {

              const response = await fetch("https://jsonplaceholder.typicode.com/users");

              const data = await response.json();

              SetUsers(data);
        }

        fetchUsers();
    }, []);

     return (
         
        <div>
            {users.map(user => (
                <p key={user.id}>{user.name}</p>
            ))}
        </div>
     )
}

export default Good;
import { useState, useEffect } from "react";

function Uistates() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

  console.log("render phase");
  console.log(users);
  console.log(loading);

  useEffect(() => {

    console.log("Effect Started");
    async function getUser() {
      try {

        console.log("Fetch Started");
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );
        
        if(!response.ok) throw new Error("request failed");
        const data = await response.json();

        console.log("Data Arrived :",  data)
        setUsers(data);

        setLoading(false);
      } catch (error) {

         console.log(error);
         setLoading(false);
      }
    }

    getUser();
  },[]);

  return <></>;
}

export default Uistates;

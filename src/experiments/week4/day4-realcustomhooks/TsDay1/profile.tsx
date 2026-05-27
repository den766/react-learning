import { useState } from "react";

function Profile() {

     const [username , setUsername] = useState<string>("Jhon");

     const [isOnline, setIsOnline] = useState<boolean>(false);

     return(

         <div>

            <h1>{ isOnline && username}</h1>
            <button onClick={()=> setIsOnline(true)}>Click</button>
         </div>
     )
}

export default Profile;
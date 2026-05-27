
function Welcome() {

     const username: string = "Ashu";
     const age: number = 23;
     const isOnline : boolean = true;

     return (
          <div>
         <h1>{username}</h1>
         <p>{age}</p>
         {isOnline && <p>Ashu is Online</p>}
         </div>
     )
}

export default Welcome;


function DemoUsers() {

     const users  : string[]= ["Jhone" , "Walt" , "Angela" , ];

     return (
          <>
          <h1>Demo Users</h1>
          {users.map((user)=> (

              <p key={user}>{user.toUpperCase()}</p>
          ))}
          </>
          
     )
}

export default DemoUsers;
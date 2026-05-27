import useInput from "../../../hooks/useInput";
function UserInput() {
 
  const username = useInput();
  const email = useInput();

  console.log(username)
  console.log(email);


  return (
    <div>
      <input type="text" value={username.value} onChange={username.handleChange}></input>

      <h1>{username.value}</h1>

      <button onClick={username.reset}>Reset</button>

      <input type="text" value={email.value} onChange={email.handleChange}></input>
      <h1>{email.value}</h1>
      <button onClick={email.reset}>resetMail</button>
    </div>
  );
}

export default UserInput;

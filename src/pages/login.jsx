function Login({ setisLogedIn, isLoggedIn }) {
  return (
    <>
      <button onClick={() => setisLogedIn(!isLoggedIn)}>Login</button>
    </>
  );
}

export default Login;

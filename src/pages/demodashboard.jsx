function DemoDashboard1({ setisLogedIn,isLoggedIn }) {
  return (
    <>
      <h1>Welcome to Dashboard Page</h1>

      <button onClick={() => setisLogedIn(!isLoggedIn)}>Logout</button>
    </>
  );
}

export default DemoDashboard1;

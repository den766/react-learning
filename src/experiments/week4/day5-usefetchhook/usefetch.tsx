import useFetch from "../../../hooks/usefetch2";

function GetUser() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users",
  );

  if (loading) {
    return <h1>Loading</h1>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      {data.map((user: any) => (
        <h2 key={user.id}>{user.name}</h2>
      ))}
    </div>
  );
}

export default GetUser;
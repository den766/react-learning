type UsercardProps = {
  username: string;
  age: number;
};

function UserCard({ username, age }: UsercardProps) {
  return (
    <div>
      <h1>{username}</h1>
      <p>{age}</p>
    </div>
  );
}

export default UserCard;

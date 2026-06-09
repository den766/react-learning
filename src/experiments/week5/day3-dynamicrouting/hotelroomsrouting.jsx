import { Link } from "react-router-dom";

function RoomRouting({rooms}) {
  
  return (
    <nav>
      {rooms.map((room) => (
        <Link to={`/room/${room.id}`} key={room.id}>{room.type}</Link>
      ))}
    </nav>
  );
}

export default RoomRouting;

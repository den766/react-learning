import { Link } from "react-router-dom";

function RoomRouting({rooms}) {
  
  return (
    <div>
    <h1>🏨 Hotel Room Viewer</h1>
    <nav>
      {rooms.map((room) => (
        <Link to={`/room/${room.id}`} key={room.id}>{room.type}</Link>
      ))}
    </nav>
    </div>
  );
}

export default RoomRouting;

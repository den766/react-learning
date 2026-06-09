import { useParams } from "react-router-dom";

function Room({ rooms }) {
  const { id } = useParams();

  const room = rooms.find((room) => room.id === Number(id));
  return (
    <div className="room-card">
      <h1>Room Number: {room.id}</h1>
      <h1>Room Type: {room.type}</h1>
      <h1>Room Price: ₹{room.price}</h1>
    </div>
  );
}

export default Room;

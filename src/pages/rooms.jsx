import { useParams } from "react-router-dom";

function Room({rooms}) {
  const { id } = useParams();

  const room = rooms.find(room => room.id === Number(id));
  return (
    <div>
      <h1>Room Number{id}</h1>
      <h1>Room Price {room.price}</h1>
    </div>
  );
}

export default Room;

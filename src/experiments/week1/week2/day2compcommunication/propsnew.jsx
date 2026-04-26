import { useState } from "react";
import Player from "./playercard";

function PlayerCard() {
  const [name, setName] = useState("Neymar");

  function changeName() {
    setName("Messi");
  }

  return <Player name={name} onChange={changeName} />;

  //  return (
  //   <>
  //      <Player player1="Neymar"/>
  //      <Player player2="Lionel Messi"/>
  //      </>
  //  )
}

export default PlayerCard;

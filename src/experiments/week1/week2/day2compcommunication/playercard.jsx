function Player(props){

    console.log(props);

    //  return (
    //    <>
    //     <h1>{props.player1}</h1>
    //     <h1>{props.player2}</h1>
    //     </>
    //  )

    return (

        <>
        <h1>{props.name}</h1>
        <button onClick={props.onChange}>Click</button>
        </>
    )
}

export default Player;
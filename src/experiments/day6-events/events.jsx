function ClickEvent(){

    //  function handleClick(){

    //     console.log("clicked me");
    //  }

    function sayHello(){

         console.log("hello");
    }

    function sayBye(){

        console.log("Bye");
    }

     return (

        // <div>
        //      <button onClick={handleClick}>clickMe</button>
        // </div>
        <>
        <div>
            <button onClick={sayHello}>SayHello</button>
        </div>
        <div>
            <button onClick={sayBye}>sayBye</button>
        </div>
        </>
     )
}

export default ClickEvent;
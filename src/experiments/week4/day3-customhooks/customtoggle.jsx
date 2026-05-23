import useToggle from "../../../hooks/useToggle";

function Toggle3() {

    const {

          isToggle,
        flipToggle,
    }  = useToggle();

     return (
       
        <>
        {isToggle && <h1>Hello its me</h1>}
        <button onClick={flipToggle}>click</button>
        </>
     )
}

export default Toggle3;
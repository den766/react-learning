import NoteCardRevise from "./notecardRevise"

function NoteListRevise(){

    return(

        <>
        <NoteCardRevise title="Js Array" content="Arrays are just collection of data" priority="1"/>
        <NoteCardRevise title="Clousure" content="Inner function can acess outer fn variable even after outer fn poped out from the callstack" priority="2"/>
        <NoteCardRevise title="objects" content="objects are collectoin of data entity" priority="2"/>
        </>
    )
}

export default NoteListRevise;
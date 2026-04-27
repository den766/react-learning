import SearchBar from "./searchBar"
import Notelist5 from "./notelist5"
import { useState } from "react"

function NoteApp() {
    const notes = ["React", "JavaScript", "Node", "CSS"];

    const [search , setSearch] = useState("");

     return (

        <>
         <Notelist5 notes={notes} search={search}/>
         <SearchBar setSearch={setSearch}/>
        </>
     )
}
export default NoteApp;
function Notelist5({ notes, search }) {
  const filteredNotes = notes.filter((note) =>
    note.toLowerCase().includes(search.toLowerCase()),
  );
  console.log(filteredNotes);

  return (
    <>
      {filteredNotes.map((note, index) => (
        <p key={index}>{note}</p>
      ))}
    </>
  );
}

export default Notelist5;

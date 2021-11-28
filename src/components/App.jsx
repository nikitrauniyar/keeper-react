import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => [...prevNotes, newNote]);
  }

  function deleteNote(id) {
    setNotes(prevNotes => prevNotes.filter((noteItem, index) => index !== id));
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((currentNote, index) => (
        <Note
          key={index}
          id={index}
          title={currentNote.title}
          content={currentNote.content}
          onDelete={deleteNote}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;

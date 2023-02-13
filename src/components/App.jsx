import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, addnote] = useState([
    { title: "Test01", content: "Test01 Content" },
    { title: "Test02", content: "Test02 Content" },
  ]);

  function handleNotes(newNote) {
    addnote((preValue) => {
      return [...preValue, newNote];
    });
  }

  function deleteNote(toDeleteIndex) {
    console.log(toDeleteIndex);
    addnote((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== toDeleteIndex;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea handleNotes={handleNotes} />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            title={note.title}
            content={note.content}
            id={index}
            deleteNote={deleteNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;

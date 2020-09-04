import React, { useEffect, useState } from "react";
import NoteList from "./noteComponents/noteList";
import NoteForm from "./noteComponents/noteForm";
import "./noteComponents/note.css";
const LOCAL_STORAGE_KEY = "react-note-list";
const App = () => {
  let [notes, setNotes] = useState([]);
  function addNote(note) {
    console.log(note);
    setNotes([note, ...notes]);
  }
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (items) {
      setNotes(items);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(notes));
  }, [notes]);
  const handleDelete = (key) => {
    const items = notes.filter((c) => c.key !== key);
    setNotes(items);
  };
  const handleChange = (text, key) => {
    notes.map((note) => {
      if (note.key === key)
        return {
          ...note,
          value: text,
        };
    });
  };

  return (
    <div className="">
      <div className="page-header">
        <h1 style={{ color: "#151414" }}>Quotes & Notes</h1>
        <hr />
      </div>

      <NoteForm addNote={addNote} />
      <div className="container">
        <NoteList
          handleDelete={handleDelete}
          handleChange={handleChange}
          notes={notes}
        />
      </div>
    </div>
  );
};

export default App;

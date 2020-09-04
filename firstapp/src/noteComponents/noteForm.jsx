import React, { useState } from "react";
import "./note.css";

const NoteForm = ({ addNote }) => {
  const [note, setNote] = useState({
    key: "",
    value: "",
    completed: false,
  });
  const handleInput = (e) => {
    setNote({ value: e.target.value });
    //console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (note.value.trim()) {
      addNote({ key: Date.now(), ...note, completed: false });
    }
    setNote({ key: "", value: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="form-group">
      <input
        value={note.value}
        type="textarea"
        contentEditable="true"
        onChange={handleInput}
        placeholder="Type your note here..."
      />
      <button type="submit">Add Note</button>
    </form>
  );
};

export default NoteForm;

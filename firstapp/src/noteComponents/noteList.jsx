import React from "react";
import Note from "./note";
import "./note.css";

const NoteList = ({ handleDelete, notes, handleChange }) => {
  const items = notes.map((note) => (
    <Note
      key={note.key}
      handleDelete={handleDelete}
      handleChange={handleChange}
      note={note}
    />
  ));
  return <div className="container">{items}</div>;
};

export default NoteList;

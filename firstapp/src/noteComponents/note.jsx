import React from "react";
import "./note.css";
const Note = ({ note, handleChange, handleDelete }) => {
  return (
    <div className="note">
      <button onClick={() => handleDelete(note.key)} className="btn">
        x
      </button>

      <div className="post-content">
        <p
          contentEditable="true"
          key={note.key}
          onChange={(e) => handleChange(e.target.value, note.key)}
          type="text"
        >
          {note.value}
        </p>
      </div>
    </div>
  );
};

export default Note;

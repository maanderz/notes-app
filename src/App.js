import React, { useState } from "react";
import "./styles.css";
import Nav from "./Components/Nav";

export default function App() {
  const [notes, setNote] = useState([]);

  const addNote = function(value) {
    return setNote(notes => [...notes, value]);
  };

  const deleteNote = index => {
    // setNote(notes.splice(index, 1));
    console.log("clicked", notes, index);
    notes.splice(index, 1);
    console.log("notes", notes);
    setNote(notes => [...notes]);
  };

  return (
    <div className="App">
      <Nav newNote={addNote} />
      <div className="parent">
        {notes.map((note, index) => {
          return (
            <div className="child" key={index}>
              {" "}
              <button
                type="button"
                className="close"
                aria-label="Close"
                onClick={() => deleteNote(index)}
              >
                <span aria-hidden="true">&times;</span>
              </button>
              {note}
            </div>
          );
        })}
      </div>
    </div>
  );
}

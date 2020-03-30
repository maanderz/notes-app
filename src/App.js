import React, { useState } from "react";
import "./styles.css";
import Nav from "./Components/Nav";

export default function App() {
  const [notes, setNote] = useState([]);

  const addNote = function(value) {
    return setNote(notes => [...notes, value]);
  };

  return (
    <div className="App">
      <Nav newNote={addNote} />
      <ul>
        {notes.map((note, index) => {
          return <li key={index}> {note} </li>;
        })}
      </ul>
    </div>
  );
}

import React, { useState } from "react";
import "./styles.css";
import Nav from "./Components/Nav";

export default function App() {
  const [notes, setNote] = useState([]);

  const addNote = () => {
    setNote([
      ...notes,
      {
        id: notes.length,
        value: Math.random()
      }
    ]);
  };

  return (
    <div className="App">
      <Nav addNote={addNote} />
      <ul>
        {notes.map(item => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
}

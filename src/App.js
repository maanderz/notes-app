import React, { useState } from "react";
import "./styles.css";
import Nav from "./Components/Nav";

export default function App() {
  const [notes, setNote] = useState([]);

  const addNote = function(value) {
    return setNote(notes => [...notes, value]);
  };

  // only display 3 in a row
  // let three = [];
  // for (let i = 0; i < notes.length; i++) {
  //   three.push(<div>{notes[i]}</div>);
  // }
  return (
    <div className="App">
      <Nav newNote={addNote} />
      <div className="parent">
        {notes.map((note, index) => {
          return (
            <div className="child" key={index}>
              {" "}
              <button type="button" class="close" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              {note}
            </div>
          );
        })}
      </div>
      {/* <div> {three} </div> */}
    </div>
  );
}

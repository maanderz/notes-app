import React, { useState } from "react";
import "./styles.css";
import Nav from "./Components/Nav";
import NewNote from "./Components/NewNote";

export default function App() {
  const [notes, setNote] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);

  const addNote = function(value) {
    return setNote(notes => [...notes, value]);
  };

  const deleteNote = index => {
    notes.splice(index, 1);
    setNote(notes => [...notes]);
  };

  const editNote = () => {
    console.log("clicked edit");
    return setModalShow(true);
  };

  return (
    <div className="App">
      <Nav addNote={addNote} />
      <div className="parent">
        {notes.map((note, index) => {
          return (
            <div className="child" key={index}>
              {" "}
              <div>
                <button
                  type="button"
                  className="close"
                  aria-label="Close"
                  onClick={() => deleteNote(index)}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div onClick={() => editNote()}> {note} </div>
              <NewNote
                show={modalShow}
                addNote={addNote}
                onHide={() => setModalShow(false)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

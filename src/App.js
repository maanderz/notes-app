import React, { useState } from "react";
import "./styles.css";
import Nav from "./Components/Nav";
import NewNote from "./Components/NewNote";

export default function App() {
  const [notes, setNote] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);
  const [noteIndex, setIndex] = useState(0);

  const addNote = function(value) {
    return setNote(notes => [...notes, value]);
  };

  const deleteNote = index => {
    notes.splice(index, 1);
    setNote(notes => [...notes]);
  };

  const editNote = value => {
    notes.splice(noteIndex, 1, value);
    setNote(notes => [...notes]);
  };

  const editNoteIndex = index => {
    setIndex(index);
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
              <div
                onClick={() => {
                  setModalShow(true);
                  editNoteIndex(index);
                }}
              >
                {" "}
                {note}{" "}
              </div>
              <NewNote
                show={modalShow}
                editNote={editNote}
                notes={notes}
                index={noteIndex}
                onHide={() => setModalShow(false)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

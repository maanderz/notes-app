import React, { useState } from "react";
import "./styles.css";
import { Button, Modal } from "react-bootstrap";
// import Nav from "./Components/Nav";

export default function App() {
  const [notes, setNote] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);

  const addNote = function(value) {
    return setNote(notes => [...notes, value]);
  };

  return (
    <div className="App">
      <div className="title">
        <h1> Your Notes: </h1>
        <button
          type="button"
          className="btn btn-warning"
          onClick={() => setModalShow(true)}
        >
          New Note
        </button>
        <MyVerticallyCenteredModal
          show={modalShow}
          newnote={addNote}
          onHide={() => setModalShow(false)}
        />
      </div>
      <ul>
        {notes.map((note, index) => {
          return <li key={index}> {note} </li>;
        })}
      </ul>
    </div>
  );
}

function MyVerticallyCenteredModal(props) {
  const [value, setValue] = useState("");

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <div className="form-group">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="..."
            onChange={e => setValue(e.target.value)}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => {
            props.onHide();
            props.newnote(value);
          }}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

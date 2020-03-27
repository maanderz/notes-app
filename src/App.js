import React, { useState } from "react";
import "./styles.css";
import { Button, Modal } from "react-bootstrap";
// import Nav from "./Components/Nav";

export default function App() {
  const [notes, setNote] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);

  function addNote(newValue) {
    setNote(newValue);
  }

  return (
    <div className="App">
      <div className="title">
        <h1> Your Notes: </h1>
        <button
          type="button"
          className="btn btn-warning"
          onClick={() => setModalShow(true)}
          // onClick={props.addNote}
        >
          New Note
        </button>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </div>
    </div>
  );
}

function MyVerticallyCenteredModal(props) {
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
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

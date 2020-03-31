import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function NewNoteModal(props) {
  const [value, setValue] = useState("");

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">New Note</Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
          className="btn btn-success"
          onClick={() => {
            props.onHide();
            props.addNote(value);
          }}
        >
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default NewNoteModal;

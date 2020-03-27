import React from "react";
import { Button, Modal } from "react-bootstrap";

function NewNoteModal(props) {
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
        <div class="form-group">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="..."
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          className="btn btn-success"
          onClick={() => {
            props.onHide();
            props.addNote();
          }}
        >
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default NewNoteModal;

import React from "react";
import "./Nav.css";
import NewNote from "./NewNote";

function Nav(props) {
  const [modalShow, setModalShow] = React.useState(false);
  return (
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
      <NewNote
        show={modalShow}
        onHide={() => setModalShow(false)}
        addNote={props.addNote}
      />
    </div>
  );
}

export default Nav;

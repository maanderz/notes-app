import React from "react";
import "./Nav.css";
import NewNote from "./NewNote";

function Nav() {
  const [modalShow, setModalShow] = React.useState(false);

  // const openNewNote = () => {
  //   console.log("here");
  //   return <NewNote />;
  // };

  return (
    <div className="title">
      <h1> Your Notes: </h1>
      <button
        type="button"
        className="btn btn-warning"
        onClick={() => setModalShow(true)}
      >
        New Note
      </button>
      <NewNote show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}

export default Nav;

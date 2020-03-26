import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <div className="title">
      <h1> Your Notes: </h1>
      <button type="button" class="btn btn-warning">
        New Note
      </button>
    </div>
  );
}

export default Nav;

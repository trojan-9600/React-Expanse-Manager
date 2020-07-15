import React from "react";
import { Link } from "react-router-dom";

export default function Profileheader(props) {
  return (
    <div className="container">
      <div className="header">
        <h2 id="userName">
          Welcome {props.name}
          <Link to="/">
            <button className="btn btn-primary" id="backbutton">
              Back
            </button>
          </Link>
        </h2>
      </div>
    </div>
  );
}

import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode==='primary'?'dark':props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/about">
                About
              </Link>
            </li>
          </ul>
          <div className="navbar-nav ms-auto mb-2 mb-lg-0">
            <div
              onClick={() => {
                props.toggleMode("dark");
              }}
              className="bg-dark mx-1 my-1"
              style={{
                height: "30px",
                width: "30px",
                border: "1px solid #696969",
                borderRadius: "15px",
              }}
            ></div>
            <div
              onClick={() => {
                props.toggleMode("primary");
              }}
              className="bg-primary mx-1 my-1" 
              style={{
                height: "30px",
                width: "30px",
                border: "1px solid #343434",
                borderRadius: "15px",
              }}
            ></div>
            <div
              onClick={() => {
                props.toggleMode("light");
              }}
              className="bg-light mx-1 my-1"
              style={{
                height: "30px",
                width: "30px",
                border: "1px solid #343434",
                borderRadius: "15px",
              }}
            ></div>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "Set Title Here",
};

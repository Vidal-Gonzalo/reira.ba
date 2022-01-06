import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to={`/`}>
            Reira BA
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <FontAwesomeIcon
                icon={["fas", "cart-shopping"]}
                style={{ color: "#000000" }}
                size="lg"
              />
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav ms-auto">
              <li>
                <CartWidget />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

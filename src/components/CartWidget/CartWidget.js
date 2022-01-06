import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { Shop } from "../../context/CartContext";
import "./CartWidget.css";

export default function CartWidget() {
  const { cart } = useContext(Shop);

  return (
    <>
      <ul className="cart-widget">
        <li className="nav-item my-auto ms-3">
          <NavLink className="nav-link" to={`/category/stickers`}>
            Stickers
          </NavLink>
        </li>
        <li className="nav-item my-auto ms-3 me-3">
          <NavLink className="nav-link" to={`/category/albums`}>
            Albums
          </NavLink>
        </li>
        <li>
          <NavLink to={"/cart"}>
            <FontAwesomeIcon
              icon={["fas", "cart-shopping"]}
              style={{ color: "#000000" }}
              size="lg"
            />
          </NavLink>
          <span className="ms-2 my-auto">{cart.length}</span>
        </li>
      </ul>
    </>
  );
}

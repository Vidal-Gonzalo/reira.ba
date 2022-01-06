import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { Shop } from "../../context/CartContext";
import "./Cart.css";

export default function Cart() {
  const { cart, removeItem, clearCart } = useContext(Shop);

  return (
    <div className="container">
      <div className="wrap-table">
        {cart.length <= 0 ? (
          <div className="no-items">
            <h3>No hay ningún elemento en tu carrito :( </h3>
            <NavLink to={"/"}>Volver a la tienda</NavLink>
          </div>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Imagen</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((element) => {
                return (
                  <tr key={element.id}>
                    <td>
                      <img
                        src={element.pictureUrl}
                        alt="Imagen de producto"
                        width="50"
                      />
                    </td>
                    <td>{element.name}</td>
                    <td>{element.price}</td>
                    <td>{element.quantity}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => removeItem(element.id)}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr align="center">
                <td className="right" colSpan={1}>
                  <button onClick={clearCart} className="btn btn-danger">
                    Limpiar carrito
                  </button>
                </td>
                <td className="right" colSpan={3}>
                  <Link to="/checkout" className="btn btn-success">
                    Terminar compra
                  </Link>
                </td>
              </tr>
            </tfoot>
          </table>
        )}
      </div>
    </div>
  );
}

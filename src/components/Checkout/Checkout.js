import React, { useState, useContext } from "react";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";
import { Shop } from "../../context/CartContext";
import { db } from "../../firebase/config";
import { collection, addDoc, Timestamp } from "firebase/firestore/lite";

export default function Checkout() {
  const { cart, totalPrice, clearCart } = useContext(Shop);

  const [orderId, setOrderId] = useState(null);

  const [loading, setLoading] = useState(false);

  const [values, setValues] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const order = {
      buyer: {
        name: values.name,
        lastname: values.lastname,
        email: values.email,
        tel: values.phone,
      },
      items: cart,
      total: totalPrice(),
      date: Timestamp.fromDate(new Date()),
    };

    setLoading(true);

    const ordersRef = collection(db, "orders");

    addDoc(ordersRef, order)
      .then((response) => {
        setOrderId(response.id);
        clearCart();
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="container my-5">
      {orderId ? (
        <>
          <h2>Tu compra fue registrada</h2>
          <hr />
          <p>Tu número de orden es: {orderId}</p>
          <Link to="/" className="btn btn-success">
            Volver
          </Link>
        </>
      ) : (
        <div className="container my-5">
          <h2>Checkout</h2>
          <hr />

          <form onSubmit={handleSubmit}>
            <input
              onChange={handleInputChange}
              name="name"
              value={values.name}
              className="form-control my-2"
              type="text"
              placeholder="Nombre"
            />
            <hr />
            <input
              onChange={handleInputChange}
              name="lastname"
              value={values.lastname}
              className="form-control my-2"
              type="text"
              placeholder="Apellido"
            />
            <hr />
            <input
              onChange={handleInputChange}
              name="email"
              value={values.email}
              className="form-control my-2"
              type="email"
              placeholder="E-mail"
            />
            <hr />
            <input
              onChange={handleInputChange}
              name="phone"
              value={values.phone}
              className="form-control my-2"
              type="number"
              placeholder="Número de teléfono"
            />
            <button
              type="submit"
              className="btn btn-success"
              onClick={() => handleSubmit}
            >
              Enviar
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

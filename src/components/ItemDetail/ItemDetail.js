import React, { useState, useContext } from "react";
import { ToastContainer } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-toastify/dist/ReactToastify.css";
import ItemCount from "../ItemCount/ItemCount";
import { Shop } from "../../context/CartContext";
import "./ItemDetail.css";

export default function ItemDetail({ item }) {
  const { addItem } = useContext(Shop);
  const [bought, setBought] = useState(0);
  const [itemBought, setItemBought] = useState(false);

  const onAdd = (quantityToAdd) => {
    setBought(quantityToAdd);
  };

  const handlePurchase = () => {
    addItem({
      id: item.id,
      pictureUrl: item.pictureUrl,
      name: item.title,
      price: item.price,
      quantity: bought,
    });
    setItemBought(true);
  };

  return (
    <div className="details mt-3 text-white">
      <img
        src={item.pictureUrl}
        alt="Imagen de producto"
        className="mb-3"
        width="150"
        height="150"
      />
      <h1>{item.title}</h1>
      <h3>Precio: {item.price}</h3>
      {bought <= 0 ? (
        <ItemCount stock={5} initial={0} onAdd={onAdd} />
      ) : !itemBought ? (
        <button className="btn btn-success text-white" onClick={handlePurchase}>
          Terminar compra
        </button>
      ) : (
        <button className="btn btn-success disabled text-white">
          <FontAwesomeIcon
            icon={["fa", "check-circle"]}
            style={{ color: "#ffffff" }}
            size="lg"
            className="me-3"
          />
          ¡Compra realizada!
        </button>
      )}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

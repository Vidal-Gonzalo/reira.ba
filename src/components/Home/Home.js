import React from "react";
import ItemListContainer from "../../containers/ItemListContainer/ItemListContainer";
import "./Home.css";

export default function Home() {
  return (
    <>
      <section id="home">
        <div className="container">
          <div className="presentation center">
            <h1 className="home-title">¡Encuentra tus stickers en Reira!</h1>
            <p className="home-paragraph">
              Hacemos stickers a pedido junto con impresiones de álbumes
            </p>
            <a href="#items" className="btn btn-primary btn-lg">
              Explorar
            </a>
          </div>
        </div>
      </section>
      <ItemListContainer />
    </>
  );
}

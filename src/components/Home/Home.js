import React from "react";
import { Link } from "react-router-dom";
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
            <Link to={`/catalog`} className="btn btn-primary btn-lg">
              Ver catálogo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

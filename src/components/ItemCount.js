import React, { useState } from 'react'

export default function ItemCount({ stock, initial }) {

    const [count, setCount] = useState(0);
    const [bought, setBought] = useState(false);

    return (
        <div className="container">
            <div className="wrap-buttons">
                <div className="buttons">
                    <button className="btn btn-danger me-2" style={count === 0 || bought ? { visibility: "hidden" } : { display: "block" }} onClick={() => setCount(count - 1)}>-</button>
                    <p className="text-center">{count > initial ? count : initial}</p>
                    <button className="btn btn-primary ms-2" style={count === stock || bought || typeof stock === 'undefined' ? { visibility: "hidden" } : { display: "block" }} onClick={() => setCount(count + 1)}>+</button>
                </div>
                <div className="buy-button">
                    {
                        !bought ? <button className="buy-button btn btn-info" onClick={() => setBought(true)}>Agregar al carrito</button> : <div className="purchased"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                        </svg>¡Compra realizada con éxito!</div>
                    }
                </div>
            </div>

        </div>
    )
}

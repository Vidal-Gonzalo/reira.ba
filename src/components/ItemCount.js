import React, { useState } from 'react'

export default function ItemCount({ stock, initial, onAdd }) {

    const [count, setCount] = useState(0);

    return (
        <div className="container">
            <div className="wrap-buttons">
                <div className="buttons">
                    <button className="btn btn-danger me-2" style={count === 0 ? { visibility: "hidden" } : { display: "block" }} onClick={() => setCount(count - 1)}>-</button>
                    <p className="text-center">{count > initial ? count : initial}</p>
                    <button className="btn btn-primary ms-2" style={count === stock || typeof stock === 'undefined' ? { visibility: "hidden" } : { display: "block" }} onClick={() => setCount(count + 1)}>+</button>
                </div>
                <div className="buy-button">
                    <button className="buy-button btn btn-info" onClick={() => onAdd(count)}>Agregar al carrito</button>
                </div>
            </div>
        </div>
    )
}



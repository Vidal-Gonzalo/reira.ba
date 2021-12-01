import React from 'react'

export default function Item({ item }) {
    return (
        <div className="card">
            <h3 className="title">{item.title}</h3>
            <img src="" alt=""/>
            <p className="price">{item.price}</p>
            <button className="btn btn-primary">Ver detalle de producto</button>
        </div>
    )
}


import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Item({ item }) {
    const history = useHistory();

    function handleClick(id){
        history.push(`/item/${id}`)
    }

    return (
        <div className="item">
            <img src={item.pictureUrl} width="150" height="100"/>
            <h3 className="title">{item.title}</h3>
            <p className="price">{item.price}</p>
            <button className="btn btn-primary" onClick={() => handleClick(item.id)}>Ver detalle de producto</button>
        </div>
    )
}


import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { Shop } from '../context/CartContext';

export default function Cart() {

    const { cart, removeItem } = useContext(Shop);

    return (
        <div className='cart'>
            {cart.length <= 0 ? <div className='no-items'>
                <h2>No hay ningún item añadido a tu carrito :( </h2>
                <NavLink to={'/'}><button className='btn btn-success'>Agregar elementos a mi carrito</button></NavLink>
            </div> : <ul className='list-items-bought'>{cart.map(element => {
                    return (
                    <li className="item-bought" key={element.id}>
                        <img src={element.pictureUrl} alt="Imagen del elemento" width='50' height='50'/>
                        <p>{element.name}</p>
                        <p>Precio: {element.price}</p>
                        <div className='item-buttons'>
                            <button className='btn btn-danger' onClick={() => removeItem(element.id)}>Eliminar producto</button>
                        </div>
                    </li>
                    )
                })}</ul>}
        </div>
    )
}

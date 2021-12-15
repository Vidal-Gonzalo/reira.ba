import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import { Shop } from '../context/CartContext'

export default function CartWidget() {

    const { cart } = useContext(Shop);

    return (
        <>
            {cart.length > 0 ?
            <ul className="cart-widget">
                <li>
                    <NavLink to={'/cart'}><FontAwesomeIcon icon={['fas', 'cart-shopping']} style={{ color: '#FFFFFF' }} size="lg" /></NavLink>
                    <span className="ms-2 my-auto text-white">{cart.length}</span>
                </li>
            </ul>
            : null}
        </>
    )
}

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'

export default function CartWidget() {
    return (
        <ul className="cart">
            <li><NavLink className="cart-nav-item" to="/">Iniciar sesión</NavLink></li>
            <li><NavLink className="cart-nav-item" to="/">Registrarse</NavLink></li>
            <li>
                <FontAwesomeIcon icon={['fas', 'cart-shopping']} style={{ color: '#FFFFFF' }} size="lg" />
            </li>
        </ul>
    )
}

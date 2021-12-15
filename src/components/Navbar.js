import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CartWidget from './CartWidget'

export default function Navbar() {

    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to={`/`}>Reira BA</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">
                            <FontAwesomeIcon icon={['fas', 'cart-shopping']} style={{ color: '#FFFFFF' }} size="lg" />
                        </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mx-auto me-3 mb-2 mb-lg-0">
                            <li className="nav-item ms-3">
                                <NavLink className="nav-link" to={`/category/stickers`}>Stickers</NavLink>
                            </li>
                            <li className="nav-item ms-3">
                                <NavLink className="nav-link" to={`/category/albums`}>Albums</NavLink>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto">
                            <li><CartWidget /></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

import React from 'react'

import CartWidget from './CartWidget'

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Reira BA</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mx-auto me-3 mb-2 mb-lg-0">
                            <li className="nav-item ms-3">
                                <a className="nav-link active" aria-current="page" href="/">Stickers</a>
                            </li>
                            <li className="nav-item ms-3">
                                <a className="nav-link" href="/">Posters</a>
                            </li>
                            <li className="nav-item ms-3">
                                <a className="nav-link" href="/">Contacto</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto">
                            <CartWidget />
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

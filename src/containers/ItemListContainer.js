import React from 'react'

const ItemListContainer = ({ greeting }) => {
    return (
        <div className="container">
            <div className="wrap center">
                {greeting ? <p className="greeting">{greeting}</p> : <p className="no-greeting">No hay saludo :(</p>}
            </div>
        </div>
    )
}

export default ItemListContainer

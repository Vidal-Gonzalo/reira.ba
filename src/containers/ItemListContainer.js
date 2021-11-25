import React, { useState, useEffect } from 'react'
import ItemList from '../components/ItemList'
import Axios from 'axios';

export default function ItemListContainer() {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await Axios.get("assets/items.json")
                setItems(response.data);
            } catch (err) {
                setError(true)
            }
        }

        setTimeout(() => {
            fetchData().then(setLoading(false))
        }, 2000);
    })


    return (
        <div className="container">
            <div className="wrap center">
                {error ? <p>Ha habido un error</p> : null}
                <div>
                    {loading ? <p>Cargando...</p> : <ItemList items={items} />}
                </div>
            </div>
        </div>
    )
}


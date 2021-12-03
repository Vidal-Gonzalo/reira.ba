import React, { useState, useEffect } from 'react';
import getItems from '../services/getItems';
import { useParams } from 'react-router-dom';

export default function ItemDetailPage() {
    const { id } = useParams();
    const [item, setItem] = useState({ title: "", price: "", id: 0 })
    const [error, setError] = useState(false);
    const [count, setCount] = useState(0);
    const [bought, setBought] = useState(false);

    useEffect(() => {
        async function loadItem() {
            const response = await getItems.getItem(id);
            setItem(response.data);
        }

        loadItem();
    }, [id])

    return (
        <div className="item-detail-card mt-5">
            {!error ? <div className="details text-white">
                <img src={item.pictureUrl} className="mb-3" width="150" height="150"/>
                <h1>{item.title}</h1>
                <h3>Precio: {item.price}</h3>
                <div className="buy-button">
                    {
                        !bought ? <button className="buy-button btn btn-info" onClick={() => setBought(true)}>Agregar al carrito</button> 
                        : <div className="purchased"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                        </svg>¡Compra realizada con éxito!</div>
                    }
                </div>
            </div>
                : <p>Ha habido un error</p>
            }

        </div>
    )
}

import React, { useState, useEffect, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import getItems from '../services/getItems';
import ItemCount from '../components/ItemCount';
import Loader from '../components/Loader';
import { Shop } from '../context/CartContext';

export default function ItemDetailPage() {
    const { addItem, clearCart } = useContext(Shop);
    const { id } = useParams();
    const [item, setItem] = useState({ title: "", price: "", pictureUrl: "", id: 0 })
    const [bought, setBought] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const history = useHistory();

    useEffect(() => {
        async function loadItem() {
            try {
                const response = await getItems.getItem(id);
                setTimeout(() => {
                    setItem(response.data);
                    setLoading(false);
                }, 2000)
            }
            catch (err) {
                setError(err)
            }
        }

        loadItem();
    }, [id])

    const onAdd = (quantityToAdd) => {
        setBought(quantityToAdd);
    }

    const handlePurchase = () => {

        addItem({ id: item.id, name: item.title, price: item.price, quantity: bought });
        
    }


    return (
        <div className="item-detail-card mt-5">
            {item.title !== "" ? <div className="details text-white">
                <img src={item.pictureUrl} alt="Imagen de producto" className="mb-3" width="150" height="150" />
                <h1>{item.title}</h1>
                <h3>Precio: {item.price}</h3>
                {
                    bought <= 0 ? <ItemCount stock={5} initial={0} onAdd={onAdd} /> : <button className="btn btn-success text-white" onClick={handlePurchase}>Enviar</button>
                }
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />

            </div>
                : <Loader />
            }
        </div>
    )
}

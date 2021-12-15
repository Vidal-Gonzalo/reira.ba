import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import getItems from '../services/getItems';
import ItemList from '../components/ItemList'
import Loader from '../components/Loader';

export default function ItemListContainer() {

    const { categoryId } = useParams();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {

        async function loadItems() {

            setLoading(true);

            try {
                if (categoryId !== undefined) {
                    const response = await getItems.getCategoryItems(categoryId);
                    setTimeout(() => {
                        setLoading(false)
                        setItems(response.data)
                    }, 2000)
                } else {
                    const response = await getItems.getAllItems();
                    setTimeout(() => {
                        setLoading(false)
                        setItems(response.data)
                    }, 2000)
                }
            }
            catch (error) {
                setError(true);
                setLoading(false);
            }
        }
            loadItems();
    }, [categoryId])


    return (
        <section id="items">
            <div className="container">
                <div className="center">
                    {error ? <p>Ha habido un error</p> : null}
                    <div>
                        {!loading ?
                            <div className="item-list">
                                <ItemList items={items} />
                            </div> :
                            <Loader/>}
                    </div>
                </div>
            </div>
        </section>
    )
}


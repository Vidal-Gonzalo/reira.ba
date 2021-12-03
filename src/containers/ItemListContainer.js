import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import getItems from '../services/getItems';
import ItemList from '../components/ItemList'

export default function ItemListContainer() {

    const { categoryId } = useParams();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {

        async function loadItems() {
            try {
                if (categoryId !== undefined) {
                    const response = await getItems.getCategoryItems(categoryId);
                    setLoading(false)
                    setItems(response.data)
                } else {
                    const allItems = await getItems.getAllItems();
                    setLoading(false);
                    setItems(allItems.data)
                }
            }
            catch (error) {
                setError(true);
                setLoading(false);
                console.log(error)
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
                        {!loading ? <>
                            <div className="item-list">
                                <ItemList items={items} />
                            </div> </> :
                            <p>Cargando...</p>}
                    </div>
                </div>
            </div>
        </section>
    )
}


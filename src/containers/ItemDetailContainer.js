import React, { useState, useEffect } from 'react';
import ItemDetail from '../components/ItemDetail';
import getItem  from '../helpers/getItem.js';



export default function ItemDetailContainer() {

    const [item, setItem] = useState([])

    useEffect(() => {
        getItem(1).then((response) => {
            setItem(response)
        })
    }, [])

    return (
        <div>
            <ItemDetail item={item}/>
        </div>
    )
}




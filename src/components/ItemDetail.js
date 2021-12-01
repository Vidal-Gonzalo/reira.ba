import React from 'react'

export default function ItemDetail({item}) {
    return (
        <div>
            <p>{item.id}</p>
            <p>{item.title}</p>
        </div>
    )
}

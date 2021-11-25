import React from 'react'
import Item from './Item'


export default function ItemList({ items }) {
    return (
        <div>
            <ul className="item-list">
               {items.map( element => {
                   return <li key={element.id}><Item item = {element}/></li>
               })}
            </ul>
        </div>
    )
}

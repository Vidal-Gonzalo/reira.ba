import React from "react";
import Item from "../Item/Item";
import "./ItemList.css";

export default function ItemList({ items }) {
  return (
    <div className="wrap">
      {items.map((element) => {
        return (
          <div className="card" key={element.id}>
            <Item item={element} />
          </div>
        );
      })}
    </div>
  );
}

import React, { useState } from "react";

function Item({ name, category }) {
  const [addItem,setAddItem]=useState(false)
  const handleItems=()=>{
    setAddItem(!addItem)
  }
  const appClass = addItem ? "in-cart" : ""
  return (
    <li className={appClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleItems} className="add">{addItem ? "Remove From Cart":"Add to Cart"}</button>
    </li>
  );
}

export default Item;

import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory,setSelectedCategory]=useState("All")
  const handleSelectedCategory=(category)=>{
    console.log('category', category)
    setSelectedCategory(category)
  }
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={(e)=>handleSelectedCategory(e.target.value)}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items.map((item) => {
          return( (item.category===selectedCategory || selectedCategory==="All")?
          <Item key={item.id} name={item.name} category={item.category} />
        :"" )})}
        </ul>
    </div>
  );
}

export default ShoppingList;

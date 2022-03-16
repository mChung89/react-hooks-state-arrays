import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data/index";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filterBy, setFilterBy] = useState("All")

  function handleAddFood() {
    const newFood = getNewSpicyFood();
    setFoods(() => [...foods, newFood])
  }

  function handleClick (id) {
    const newFoodArray = foods.map(food => 
      food.id === id ? {...food, heatLevel: food.heatLevel + 1} : food)
    setFoods(newFoodArray)
  }
  const foodsToDisplay = foods.filter(food => filterBy === "All" ? true : food.cuisine === filterBy)
  
  const foodList = foodsToDisplay.map((food) => (
    <li key={food.id} onClick={() => handleClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  function filterList(e) {
    setFilterBy(e.target.value)
  }


  return (
    <div>
      <select onChange={filterList} name="filter">
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;

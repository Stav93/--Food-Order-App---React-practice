import React from "react";
import MealItemForm from "./MealItemForm"
import classes from "./MealItem.module.css";

function MealItem({ name, description, price, id }) {
  // const { name, description, price } = meal;

  const price2 = `$${price.toFixed(2)}`;

  return (
    <li className={classes.meal} key={id}>
      <div>
        <h3>{name}</h3>
        <p className={classes.description}>{description}</p>
        <span className={classes.price}>{price2}</span>
      </div>
      <div>
        <MealItemForm/>
      </div>
    </li>
  );
}

export default MealItem;

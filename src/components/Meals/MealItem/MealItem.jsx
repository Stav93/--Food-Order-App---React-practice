import React from "react";
import classes from "./MealItem.module.css";

function MealItem({ name, description, price }) {

  const price2 = `$${price.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <p className={classes.description}>{description}</p>
        <span className={classes.price}>{price2}</span>
      </div>
      <div></div>
    </li>
  );
}

export default MealItem;

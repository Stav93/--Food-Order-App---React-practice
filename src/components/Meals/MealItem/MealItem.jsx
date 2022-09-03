import React, { useContext } from "react";
import CartContext from "../../../context/cart-context"
import MealItemForm from "./MealItemForm"
import classes from "./MealItem.module.css";

function MealItem({ name, description, price, id }) {
  const cartCtx = useContext(CartContext)
  const price2 = `$${price.toFixed(2)}`;

  const addItemHandler = amount => {
    cartCtx.addItem({ 
      id, 
      name, 
      amount, 
      price
    })
  }

  return (
    <li className={classes.meal} key={id}>
      <div>
        <h3>{name}</h3>
        <p className={classes.description}>{description}</p>
        <span className={classes.price}>{price2}</span>
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={addItemHandler} />
      </div>
    </li>
  );
}

export default MealItem;

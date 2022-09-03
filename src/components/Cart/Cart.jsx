import React, { useContext } from "react";
import CartContext from "../../context/cart-context";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";

function Cart({ onCloseCart }) {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const removeItemHandler = (id) => {
    cartCtx.removeItem(id);
  };
  
  const addItemHandler = (item) => {
    cartCtx.addItem({...item, amount: 1});
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          price={item.price}
          name={item.name}
          amount={item.amount}
          onAdd={addItemHandler.bind(null, item)}
          onRemove={removeItemHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onCloseCart={onCloseCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={onCloseCart}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
}

export default Cart;

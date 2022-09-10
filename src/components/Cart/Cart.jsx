import React, { useContext, useState } from "react";
import CartContext from "../../context/cart-context";
import CheckOut from "./CheckOut";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";

function Cart({ onCloseCart }) {
  const [checkingOut, setChekingOut] = useState(false);
  const [submiting, setSubmiting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const cartCtx = useContext(CartContext);

  const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const removeItemHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const addItemHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    setChekingOut(true);
  };

  const submitOrderHandler = async (userData) => {
    setSubmiting(true);
    await fetch(
      "https://react---http-c0d5a-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: cartCtx.items,
        }),
      }
    );
    // should add an error case
    setSubmiting(false);
    setDidSubmit(true);
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

  const cartActions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={onCloseCart}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const cartModalContent = (
    <>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {checkingOut && (
        <CheckOut onCancel={onCloseCart} onConfirm={submitOrderHandler} />
      )}
      {!checkingOut && cartActions}
    </>
  );

  const isSubmitingContent = <p>Sending Order...</p>;
  const didSubmitModalContent = <p>Successfully sent the order</p>;

  return (
    <Modal onCloseCart={onCloseCart}>
      {!submiting && !didSubmit && cartModalContent}
      {submiting && isSubmitingContent}
      {!submiting && didSubmit && didSubmitModalContent}
    </Modal>
  );
}

export default Cart;

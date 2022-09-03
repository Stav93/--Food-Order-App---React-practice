import React, {useContext} from 'react'
import classes from "./HeaderCartButton.module.css"
import CartIcon from "../Cart/CartIcon"
import CartContext from "../../context/cart-context"

function HeaderCartButton({ onClick }) {
  const cartCtx = useContext(CartContext);
  const cartItemsNum = cartCtx.items.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon/>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>
        {cartItemsNum}
      </span>
    </button>
  )
}

export default HeaderCartButton
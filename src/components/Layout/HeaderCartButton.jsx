import React from 'react'
import classes from "./HeaderCartButton.module.css"
import CartIcon from "../Cart/CartIcon"

function HeaderCartButton({onClick}) {
  return (
    <button className={classes.button} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon/>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>
        [cart items]
      </span>
    </button>
  )
}

export default HeaderCartButton
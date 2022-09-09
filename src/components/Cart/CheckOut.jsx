import React, {useState} from 'react'
import classes from "./CheckOut.module.css"

function CheckOut({ onCancel }) {
  const confirmHandler = (event) => {
    event.preventDefault();
    console.log("checking out")
  }
  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" />
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Your Street</label>
        <input type="text" id="street" />
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" />
      </div>
      <div className={classes.control}>
        <label htmlFor="city">Youe city</label>
        <input type="text" id="city" />
      </div>
      <button type="button" onClick={onCancel}>Cancle</button>
      <button>Confirm</button>
    </form>
  )
}

export default CheckOut
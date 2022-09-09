import React, { useState, useRef } from "react";
import classes from "./CheckOut.module.css";

const isEmty = (value) => value.trim() === "";
const wrongCode = (value) => value.trim().length !== 5;

function CheckOut({ onCancel }) {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postal: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameisValid = !isEmty(enteredName);
    const enteredCityisValid = !isEmty(enteredCity);
    const enteredStreetisValid = !isEmty(enteredStreet);
    const enteredPostalisValid = !wrongCode(enteredPostal);

    setFormInputsValidity({
      name: enteredNameisValid,
      street: enteredStreetisValid,
      city: enteredCityisValid,
      postal: enteredPostalisValid,
    });

    const formIsValid =
      enteredNameisValid &&
      enteredCityisValid &&
      enteredStreetisValid &&
      enteredPostalisValid;

    if (!formIsValid) {
      return;
    }

    // Submit
  };

  const { name, street, city, postal } = formInputsValidity;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div
        className={`${classes.control} ${
          !name && classes.invalid
        }`}
      >
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!name && <p>Please enter a valid name.</p>}
      </div>
      <div className={`${classes.control} ${
          !street && classes.invalid
        }`}>
        <label htmlFor="street">Your Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!street && <p>Please enter a valid street.</p>}
      </div>
      <div className={`${classes.control} ${
          !postal && classes.invalid
        }`}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalInputRef} />
        {!postal && (
          <p>Please enter a valid postal code (5 figures).</p>
        )}
      </div>
      <div className={`${classes.control} ${
          !city && classes.invalid
        }`}>
        <label htmlFor="city">Youe city</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!city && <p>Please enter a valid city.</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={onCancel}>
          Cancle
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
}

export default CheckOut;

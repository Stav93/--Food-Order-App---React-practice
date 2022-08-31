import React from 'react'
import HeaderCartButton from "./HeaderCartButton"
import mealsImg from "../../assets/meals.jpg"
import classes from "./Header.module.css"

function Header() {

  return (
    <>
      <header className={classes.header}>
        <h1>Meals</h1>
        <HeaderCartButton>Cart</HeaderCartButton>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="" />
      </div>
    </>
  )
}

export default Header
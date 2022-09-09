import React, { useEffect, useState } from "react";
import Card from "../UI/Card"
import MealItem from "./MealItem/MealItem"
import classes from "./AvailableMeals.module.css";

const MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy... and green...",
    price: 18.99,
  },
];

function AvailableMeals() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch("https://react---http-c0d5a-default-rtdb.firebaseio.com/meals.json");
      const responseDate = await response.json();

      const loadedMeals = [];
      for (const key in responseDate) {
        loadedMeals.push({
          id: key,
          name: responseDate[key].name,
          description: responseDate[key].description,
          price: responseDate[key].price,
        });
      };
      setMeals(loadedMeals);
    };
    fetchMeals();
  }, [])
 

  const mealsList = meals.map((meal) => <MealItem {...meal}/>);

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
}

export default AvailableMeals;

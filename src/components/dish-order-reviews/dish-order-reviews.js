import React from "react";
import { useSelector } from "react-redux";
import DishOrder from "../dish-order";

function DishOrderReviews(props) {
  const { cart } = useSelector(state => state);
  if (!cart || !Object.keys(cart).length) return null;
  return (
    <>
      {Object.entries(cart)
        .filter(dishOrder => dishOrder[1].count)
        .map(dishOrder => (
          <DishOrder
            key={dishOrder[0]}
            id={dishOrder[0]}
            data={dishOrder[1]}
          ></DishOrder>
        ))}
    </>
  );
}

export default DishOrderReviews;

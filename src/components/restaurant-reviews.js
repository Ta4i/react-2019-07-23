import React, { useState } from "react";
import { useToggle } from "../custom-hooks/use-toggle";

function RestaurantReviews(props) {
  const [isOpen, toggleOpen] = useToggle();
  const { reviews } = props.restaurant;

  return (
    <div>
      <button onClick={toggleOpen}>
        {isOpen ? "Hide reviews" : "Show reviews"}
      </button>
      {isOpen ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h3>{review.user}</h3>

              <p>{review.text}</p>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default RestaurantReviews;

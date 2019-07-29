import React, { useState } from "react";
import { useToggle } from "../custom-hooks/use-toggle";
import RestaurantReview from "./restaurant-review";

function RestaurantReviews(props) {
  const [isOpen, toggleOpen] = useToggle();
  const { restaurant } = props;

  return (
    <div>
      <button onClick={toggleOpen}>
        {isOpen ? "Hide reviews" : "Show reviews"}
      </button>
      {isOpen ? (
        <ul>
          {restaurant.reviews.map(review => (
            <li>
              <RestaurantReview key={review.id} review={review} />
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default RestaurantReviews;

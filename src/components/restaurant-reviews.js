import React, { useState } from "react";
import { useToggle } from "../custom-hooks/use-toggle";
import Review from "./review";

function RestaurantReviews(props) {
  const [isOpen, toggleOpen] = useToggle();
  const { restaurant } = props;
  const { reviews } = restaurant;
  return (
    <div>
      <button onClick={toggleOpen}>
        {isOpen ? "Hide reviews" : "Show reviews"}
      </button>
      {isOpen ? (
        <>
          {!reviews
            ? null
            : reviews.map(review => <Review key={review.id} review={review} />)}
        </>
      ) : null}
    </div>
  );
}

export default RestaurantReviews;

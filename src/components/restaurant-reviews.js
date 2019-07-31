import React, { useState } from "react";
import { useToggle } from "../custom-hooks/use-toggle";
import Review from "./review";

function RestaurantReviews(props) {
  const [isOpen, toggleOpen] = useToggle();
  const { restaurant } = props;

  return (
    <div>
      <button onClick={toggleOpen}>
        {isOpen ? "Hide reviews" : "Show reviews"}
      </button>
      {isOpen ? (
        <>
          Reviews: {restaurant.reviews.length}
          {restaurant.reviews.map(review => (
            <Review user={review.user} text={review.text} />
          ))}
        </>
      ) : null}
    </div>
  );
}

export default RestaurantReviews;

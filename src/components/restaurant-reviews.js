import React, { useState } from "react";
import { useToggle } from "../custom-hooks/use-toggle";
import ReviewItem from "./review-item";

function RestaurantReviews(props) {
  const [isOpen, toggleOpen] = useToggle();
  const { restaurant } = props;
  const { reviews } = restaurant;

  const reviewList = reviews.map(review => (
    <ReviewItem {...review} key={review.id} />
  ));

  return (
    <div>
      <button onClick={toggleOpen}>
        {isOpen ? "Hide reviews" : "Show reviews"}
      </button>
      {isOpen ? (
        <>
          <div>total reviews: {reviews.length}</div>
          <ul>{reviewList}</ul>
        </>
      ) : null}
    </div>
  );
}

export default RestaurantReviews;

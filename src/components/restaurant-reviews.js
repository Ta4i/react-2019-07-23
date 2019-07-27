import React from "react";
import { useToggle } from "../custom-hooks/use-toggle";
import Review from "./review";

function RestaurantReviews(props) {
  const [isOpen, toggleOpen] = useToggle();
  const { restaurant } = props;
  const reviews = restaurant.reviews;

  return (
    <div>
      <div>Number of reviews: {reviews.length}</div>
      <button onClick={toggleOpen}>
        {isOpen ? "Hide reviews" : "Show reviews"}
      </button>
      {isOpen ? (
        <ul>
          {reviews.map(review => (
            <Review
              key={review.id}
              rating={review.rating}
              text={review.text}
              user={review.user}
            />
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default RestaurantReviews;

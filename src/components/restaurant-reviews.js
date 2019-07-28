import React, { useState } from "react";
import { useToggle } from "../custom-hooks/use-toggle";
import { Rate } from "antd";
import ReviewText from "./ReviewText";

function RestaurantReviews(props) {
  const [isOpen, toggleOpen] = useToggle();
  const { restaurant } = props;
  const { reviews } = restaurant;
  const sumRating = reviews
    .map(oReview => oReview.rating)
    .reduce((sum, current) => current + sum);
  const avgRating = Math.round(sumRating / reviews.length);
  return (
    <div>
      <button onClick={toggleOpen}>
        {isOpen ? "Hide reviews" : "Show reviews"}
      </button>
      {isOpen ? (
        <div>
          {reviews.map(oReview => (
            <ReviewText key={oReview.id} review={oReview} />
          ))}
          Rating:
          {avgRating}
          <Rate disabled allowHalf defaultValue={avgRating} />
        </div>
      ) : null}
    </div>
  );
}

export default RestaurantReviews;

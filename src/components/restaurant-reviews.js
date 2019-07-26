import React from "react";
import { useToggle } from "../custom-hooks/use-toggle";
import RestaurantReviewsList from "./restaurants-reviews-list";

function RestaurantReviews(props) {
  const [isOpen, toggleOpen] = useToggle();
  const { restaurant } = props;
  const { reviews } = restaurant;

  return (
    <div>
      <button onClick={toggleOpen}>
        {isOpen ? "Hide reviews" : "Show reviews"}
      </button>
      {isOpen && <>Reviews: {<RestaurantReviewsList reviews={reviews} />}</>}
    </div>
  );
}

export default RestaurantReviews;

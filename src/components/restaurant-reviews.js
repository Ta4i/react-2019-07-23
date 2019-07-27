import React from "react";
import { useToggle } from "../custom-hooks/use-toggle";

function RestaurantReviews(props) {
  const [isOpen, toggleOpen] = useToggle();
  const { restaurant } = props;

  return (
    <div>
      <button onClick={toggleOpen}>
        {isOpen ? "Hide reviews" : "Show reviews"}
      </button>
      {isOpen ? <>Reviews: {restaurant.reviews.length}</> : null}
    </div>
  );
}

export default RestaurantReviews;

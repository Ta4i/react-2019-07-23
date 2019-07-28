import React, { useState } from "react";
import { useToggle } from "../custom-hooks/use-toggle";
import ListReviews from "./restaurant-reviews-list";
import { Rate } from "antd";

const calcRating = reviews => {
  let result = reviews.reduce((sum, current) => sum + current.rating, 0);

  const averageRate = result / reviews.length;
  // Остаток при делении на 0.5
  const remainder = averageRate % 0.5;
  // вычетаем остаток дабы получить пол звезды
  return averageRate - remainder;
};

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
          <Rate
            allowHalf
            disabled
            defaultValue={calcRating(restaurant.reviews)}
          />
          <ListReviews reviews={restaurant.reviews} />
        </>
      ) : null}
    </div>
  );
}

export default RestaurantReviews;

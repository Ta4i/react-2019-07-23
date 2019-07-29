import React from "react";
import { Rate } from "antd";

function RestaurantReview(props) {
  const { review } = props;
  return (
    <div>
      {review.user} <Rate disabled value={review.rating} />
      <p>{review.text}</p>
    </div>
  );
}

export default RestaurantReview;

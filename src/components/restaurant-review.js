import React from "react";
import { Rate } from "antd";

function RestaurantReview(props) {
  const { user, text, rating } = props;
  return (
    <div>
      <h2>{user}</h2>
      <p>{text}</p>
      Rate: <Rate allowHalf defaultValue={rating} />
    </div>
  );
}

export default RestaurantReview;

import React from "react";
import { List } from "antd";
import Review from "../review";

function RestaurantReviews(props) {
  const { restaurant } = props;

  return (
    <List
      data-autoid={`RESTAURANT_REVIEWS_${restaurant.id}`}
      itemLayout={"horizontal"}
      dataSource={restaurant.reviews}
      renderItem={review => <Review key={review.id} review={review} />}
    />
  );
}

export default RestaurantReviews;

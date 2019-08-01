import React from "react";
import { List } from "antd";
import Review from "../review";

function RestaurantReviews(props) {
  const { restaurant } = props;

  return (
    <List
      itemLayout={"horizontal"}
      dataSource={restaurant.reviews}
      renderItem={review => (
        <Review key={review.id} review={review} data-autoid="REVIEW_ITEM" />
      )}
    />
  );
}

export default RestaurantReviews;

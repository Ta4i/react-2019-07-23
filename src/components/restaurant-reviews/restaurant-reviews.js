import React from "react";
import { List } from "antd";
import Review from "../review";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurantReviewIds } from "../../store/selectors";

function RestaurantReviews(props) {
  const { restaurantId } = props;
  const reviews = useSelector(state => selectRestaurantReviewIds(state, props));

  return (
    <List
      itemLayout={"horizontal"}
      dataSource={reviews}
      renderItem={reviewId => <Review key={reviewId} id={reviewId} />}
    />
  );
}

export default RestaurantReviews;

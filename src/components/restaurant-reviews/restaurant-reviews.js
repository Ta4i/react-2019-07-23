import React from "react";
import { List } from "antd";
import Review from "../review";
import { connect } from "react-redux";
import { selectFullRestaurantReviews } from "../../store/selectors";
import AddReview from "../add-review";

function RestaurantReviews(props) {
  const { reviews, id } = props;

  return (
    <>
      <List
        itemLayout={"horizontal"}
        dataSource={reviews}
        renderItem={review => <Review key={review.id} review={review} />}
      />
      <AddReview restaurantId={id} />
    </>
  );
}

export default connect((state, ownProps) => ({
  reviews: selectFullRestaurantReviews(state, ownProps)
}))(RestaurantReviews);

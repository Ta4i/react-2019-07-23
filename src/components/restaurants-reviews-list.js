import React from "react";
import ReviewItem from "./restaurant-review";

export default class RestaurantReviewsList extends React.Component {
  render() {
    const { reviews } = this.props;

    return (
      <ul>
        {reviews.map(review => {
          return (
            <ReviewItem
              key={review.id}
              text={review.text}
              user={review.user}
              rating={review.rating}
            />
          );
        })}
      </ul>
    );
  }
}

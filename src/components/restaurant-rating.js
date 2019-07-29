import React, { PureComponent } from "react";
import { Rate } from "antd";

class RestaurantRating extends PureComponent {
  render() {
    const { reviews } = this.props;
    const averageRate =
      reviews.map(review => review.rating).reduce((sum, val) => sum + val) /
      reviews.length;
    return (
      <>
        Average rating: <Rate disabled defaultValue={averageRate} />
      </>
    );
  }
}

export default RestaurantRating;

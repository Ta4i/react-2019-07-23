import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Rate } from "antd";
import { connect } from "react-redux";
import { selectRestaurantReviews } from "../../store/selectors";

class AverageRating extends PureComponent {
  render() {
    const { restaurantId, reviews } = this.props;
    const rawRating =
      reviews.reduce((acc, { rating }) => {
        return acc + rating;
      }, 0) / reviews.length;
    const normalizedRating = Math.floor(rawRating * 2) / 2;
    return <Rate defaultValue={normalizedRating} disabled allowHalf />;
  }
}

AverageRating.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      rating: PropTypes.number.isRequired
    })
  ).isRequired
};

export default connect((state, ownProps) => ({
  reviews: selectRestaurantReviews(state, ownProps)
}))(AverageRating);

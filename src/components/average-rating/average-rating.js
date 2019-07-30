import React, { PureComponent } from "react";
import PropTypes from 'prop-types';
import { Rate } from "antd";

class AverageRating extends PureComponent {
  render() {
    const { reviews = [] } = this.props;
    const rawRating =
      reviews.reduce((acc, { rating }) => {
        return acc + rating;
      }, 0) / reviews.length;
    const normalizedRating = Math.floor(rawRating * 2) / 2;
    return <Rate
      defaultValue={normalizedRating}
      disabled
      allowHalf
    />;
  }
}

AverageRating.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({
    rating: PropTypes.number.isRequired
  })).isRequired
}


export default AverageRating;
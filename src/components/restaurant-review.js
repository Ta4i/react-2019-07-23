import React from "react";
import { Rate } from "antd";

export default class RestaurantReview extends React.PureComponent {
  render() {
    const { user, text, rating } = this.props;

    return (
      <li>
        <h3>Name: {user}</h3>
        <Rate disabled allowHalf defaultValue={rating} />
        <p>Review: {text}</p>
      </li>
    );
  }
}

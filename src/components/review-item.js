import React, { PureComponent } from "react";
import { Rate } from "antd";

class ReviewItem extends PureComponent {
  render() {
    const { user, text, rating } = this.props;
    return (
      <li>
        <h3>Author: {user}</h3>
        Rating: <Rate disabled defaultValue={rating} />
        <div>text: {text}</div>
      </li>
    );
  }
}

export default ReviewItem;

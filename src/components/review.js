import React, { PureComponent } from "react";
import { Rate } from "antd";

class Review extends PureComponent {
  render() {
    const { name, text, rating } = this.props;

    return (
      <div className="review">
        <p className="review__name">{name}</p>
        <p className="review__text">{text}</p>
        <Rate
          defaultValue={rating}
          style={{ color: "#40a9ff", fontSize: 14 }}
        />
      </div>
    );
  }
}

export default Review;

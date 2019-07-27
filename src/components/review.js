import { Rate } from "antd";
import React, { Component } from "react";

class Review extends Component {
  render() {
    const { text, rating, user } = this.props;

    return (
      <li>
        <div>
          <span style={{ fontWeight: "bold" }}>text: </span>
          {text}
        </div>
        <div>
          <span style={{ fontWeight: "bold" }}>Rating: </span>
          <Rate disabled defaultValue={rating} />
        </div>
        <div style={{ fontStyle: "italic" }}>
          <span style={{ fontWeight: "bold" }}>Author: </span>
          {user}
        </div>
      </li>
    );
  }
}

export default Review;

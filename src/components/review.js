import { Rate } from "antd";
import React, { Component } from "react";

class Review extends Component {
  render() {
    return (
      <li>
        <div>
          <span style={{ fontWeight: "bold" }}>text: </span>
          {this.props.text}
        </div>
        <div>
          <span style={{ fontWeight: "bold" }}>Rating: </span>
          <Rate disabled defaultValue={this.props.rating} />
        </div>
        <div style={{ fontStyle: "italic" }}>
          <span style={{ fontWeight: "bold" }}>Author: </span>
          {this.props.user}
        </div>
      </li>
    );
  }
}

export default Review;

import React from "react";
import { Rate } from "antd";

function Review(props) {
  const { user, text, rating } = props.review;
  return (
    <div>
      <h4>Name : {user}</h4>
      <Rate disabled defaultValue={rating} />
      <div>{text}</div>
    </div>
  );
}

export default Review;

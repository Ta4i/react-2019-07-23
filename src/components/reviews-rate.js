import React from "react";
import { Rate } from "antd";

function ReviewsRate(props) {
  let ratesArr = props.reviews.map(p => p.rating);
  let avgRate = ratesArr.reduce((a, b) => a + b) / ratesArr.length;
  let halfRate = Math.round(avgRate * 2) / 2;
  return <Rate disabled value={halfRate} allowHalf />;
}

export default ReviewsRate;

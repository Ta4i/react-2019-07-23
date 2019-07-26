import React from "react";
import { Rate } from "antd";

const AverageRatiing = props => {
  const { reviews } = props;

  let average =
    reviews.reduce((prev, current) => prev + current.rating, 0) /
    reviews.length;
  average = Math.round(average * 2) / 2;

  return (
    <div>
      <Rate allowHalf disabled defaultValue={average} />
    </div>
  );
};

export default AverageRatiing;

import React from "react";
import { Rate } from "antd";

const AverageRatiing = props => {
  const { ratings } = props;

  let average =
    ratings.reduce((prev, current) => prev + current, 0) / ratings.length;
  average = Math.round(average * 2) / 2;

  return (
    <div>
      <Rate allowHalf disabled defaultValue={average} />
    </div>
  );
};

export default AverageRatiing;

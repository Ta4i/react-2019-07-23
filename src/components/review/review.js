import React from "react";
import { Comment, Rate, List } from "antd";

function Review({ review }) {
  return (
    <List.Item data-autoid={`REVIEW_ITEM_${review.id}`}>
      <Comment
        style={{
          margin: "16px",
          backgroundColor: "white"
        }}
        author={[
          review.user,
          <Rate
            key={review.id}
            disabled
            defaultValue={review.rating}
            style={{ marginLeft: "24px" }}
          />
        ]}
        content={review.text}
      />
    </List.Item>
  );
}

export default Review;

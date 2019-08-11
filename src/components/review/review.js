import React from "react";
import { Comment, Rate, List } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { selectReviewById } from "../../store/selectors";

function Review(props) {
  const { id } = props;
  const review = useSelector(state => selectReviewById(state, props));
  return (
    <List.Item data-autoid="REVIEW">
      <Comment
        style={{
          margin: "16px",
          backgroundColor: "white"
        }}
        author={[
          review.user,
          <Rate
            key={id}
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

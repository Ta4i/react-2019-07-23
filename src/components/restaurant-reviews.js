import React from "react";
import Button from "antd/es/button";
import { Rate } from "antd";
import { useToggle } from "../custom-hooks/use-toggle";
import Review from "./review";

function RestaurantReviews(props) {
  const [isOpen, toggleOpen] = useToggle();
  const {
    restaurant: { reviews },
    avarage
  } = props;

  return (
    <>
      <div className="review-average">
        Average rating: <Rate defaultValue={avarage} /> ({avarage})
      </div>
      <Button type="link" onClick={toggleOpen}>
        {isOpen ? "Hide reviews" : "Show reviews"}
      </Button>
      {isOpen && (
        <div className="reviews">
          {reviews.map(item => (
            <Review
              key={item.id}
              name={item.user}
              text={item.text}
              rating={item.rating}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default RestaurantReviews;

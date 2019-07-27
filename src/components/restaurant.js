import { Rate } from "antd";
import React, { PureComponent } from "react";
import RestaurantReviews from "./restaurant-reviews";
import Button from "antd/es/button";

class Restaurant extends PureComponent {
  render() {
    const { isOpen, toggleOpen, restaurant } = this.props;
    const { id, image, name, menu, reviews } = restaurant;
    const rating = this.getAvg(reviews.map(review => review.rating));

    return (
      <li>
        <img src={image} width={64} height={64} alt={name} />
        <Button type="primary" onClick={() => toggleOpen(id)}>
          {isOpen ? "Close" : "Open"}
        </Button>
        <Rate style={{ display: "block" }} disabled defaultValue={rating} />
        {isOpen ? (
          <>
            <h2>{name}</h2>
            <div>Menu items: {menu.length}</div>
            <RestaurantReviews restaurant={restaurant} />
          </>
        ) : null}
      </li>
    );
  }

  getAvg = grades => {
    const total = grades.reduce((acc, c) => acc + c, 0);
    return Math.round(total / grades.length);
  };
}

export default Restaurant;

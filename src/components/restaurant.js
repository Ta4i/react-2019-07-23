import React, { PureComponent } from "react";
import RestaurantReviews from "./restaurant-reviews";
import Button from "antd/es/button";
import { Rate } from "antd";

class Restaurant extends PureComponent {
  render() {
    const { isOpen, toggleOpen, restaurant } = this.props;
    const { id, image, name, menu, reviews } = restaurant;
    const rate =
      !reviews || !reviews.length
        ? null
        : reviews.reduce((sum, review) => {
            return sum + review.rating;
          }, 0) / reviews.length;
    return (
      <li>
        {!reviews || !reviews.length ? null : (
          <Rate disabled defaultValue={rate} />
        )}
        <img src={image} width={64} height={64} alt={name} />
        <Button type="primary" onClick={() => toggleOpen(id)}>
          {isOpen ? "Close" : "Open"}
        </Button>
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
}

export default Restaurant;

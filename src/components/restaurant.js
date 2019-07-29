import React, { PureComponent } from "react";
import RestaurantReviews from "./restaurant-reviews";
import Button from "antd/es/button";
import RestaurantRating from "./restaurant-rating";

class Restaurant extends PureComponent {
  render() {
    const { isOpen, toggleOpen, restaurant } = this.props;
    const { id, image, name, menu, reviews } = restaurant;
    return (
      <li>
        <img src={image} width={64} height={64} alt={name} />
        <Button type="primary" onClick={() => toggleOpen(id)}>
          {isOpen ? "Close" : "Open"}
        </Button>
        {isOpen ? (
          <>
            <h2>{name}</h2>
            <RestaurantRating reviews={reviews} />
            <div>Menu items: {menu.length}</div>
            <RestaurantReviews restaurant={restaurant} />
          </>
        ) : null}
      </li>
    );
  }
}

export default Restaurant;

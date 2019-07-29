import React, { PureComponent } from "react";
import RestaurantReviews from "./restaurant-reviews";
import Button from "antd/es/button";
import Rate from "antd/es/rate";

class Restaurant extends PureComponent {
  render() {
    const { isOpen, toggleOpen, restaurant } = this.props;
    const { id, image, name, menu } = restaurant;

    return (
      <li>
        <img src={image} width={64} height={64} alt={name} />
        <Button type="primary" onClick={() => toggleOpen(id, isOpen)}>
          {isOpen ? "Close" : "Open"}
        </Button>
        {isOpen ? (
          <>
            <h2>{name}</h2>
            <Rate value={this.raitFunc(restaurant.reviews)} />
            <div>Menu items: {menu.length}</div>
            <RestaurantReviews restaurant={restaurant} />
          </>
        ) : null}
      </li>
    );
  }

  raitFunc = reviews => {
    let r = 0;
    reviews.forEach(review => (r += review.rating));
    return r / reviews.length;
  };
}

export default Restaurant;

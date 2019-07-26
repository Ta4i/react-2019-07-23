import React, { PureComponent } from "react";
import RestaurantReviews from "./restaurant-reviews";
import Button from "antd/es/button";
import AverageRatiing from "./average-rating";

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
            <div>Menu items: {menu.length}</div>
            <div>
              <AverageRatiing reviews={reviews} />
            </div>
            <RestaurantReviews restaurant={restaurant} />
          </>
        ) : null}
      </li>
    );
  }
}

export default Restaurant;

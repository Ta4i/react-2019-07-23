import React, { PureComponent } from "react";
import RestaurantReviews from "./restaurant-reviews";
import Button from "antd/es/button";
import { Rate } from "antd";

class Restaurant extends PureComponent {
  render() {
    const { isOpen, toggleOpen, restaurant } = this.props;
    const { id, image, name, menu } = restaurant;

    return (
      <li>
        <img src={image} width={64} height={64} alt={name} />
        <Button type="primary" onClick={() => toggleOpen(isOpen ? null : id)}>
          {isOpen ? "Close" : "Open"}
        </Button>
        <Rate disabled allowHalf defaultValue={this.getAverageRating()} />
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

  getAverageRating() {
    const { reviews } = this.props.restaurant;

    if (!reviews.length) return 0;

    return parseFloat(
      (
        reviews.reduce((sum, { rating }) => {
          return sum + rating;
        }, 0) / reviews.length
      ).toFixed(1)
    );
  }
}

export default Restaurant;

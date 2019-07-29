import React, { PureComponent } from "react";
import Button from "antd/es/button";
import RestaurantReviews from "./restaurant-reviews";

class Restaurant extends PureComponent {
  handleAverage = reviews => {
    const initialValue = 0;
    const sum = reviews.reduce((a, b) => {
      return a + b.rating;
    }, initialValue);

    return sum / reviews.length;
  };

  render() {
    const { isOpen, toggleOpen, restaurant } = this.props;
    const { id, image, name, menu, reviews } = restaurant;

    return (
      <li className="list__item">
        <div className="restaurant">
          <div className="restaurant__image">
            <img src={image} alt={name} className="img-width" />
          </div>
          <div className="restaurant__content">
            <h2 className="restaurant__title">{name}</h2>
            <Button type="link" onClick={() => toggleOpen(id)}>
              {isOpen ? "Hide" : "More details"}
            </Button>
            {isOpen && (
              <>
                <div>Menu items: {menu.length}</div>
                <RestaurantReviews
                  restaurant={restaurant}
                  avarage={parseFloat(this.handleAverage(reviews).toFixed(2))}
                />
              </>
            )}
          </div>
        </div>
      </li>
    );
  }
}

export default Restaurant;

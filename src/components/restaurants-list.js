import React, { Component } from "react";
import Restaurant from "./restaurant";
import { accordion } from "../decorators/accordion";

class RestaurantsList extends Component {
  render() {
    const { restaurants, openItemId, toggleOpen } = this.props;

    return (
      <ul className="list">
        {restaurants.map(restaurant => (
          <Restaurant
            key={restaurant.id}
            restaurant={restaurant}
            isOpen={openItemId === restaurant.id}
            toggleOpen={toggleOpen}
          />
        ))}
      </ul>
    );
  }
}

export default accordion(RestaurantsList);

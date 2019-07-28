import React, { Component } from "react";
import Restaurant from "./restaurant";
import { accordion } from "../decorators/accordion";

class RestaurantsList extends Component {
  render() {
    const {
      restaurants,

      // from decorator
      openItem,
      toggleOpen
    } = this.props;
    return (
      <ul>
        {restaurants.map(restaurant => (
          <Restaurant
            key={restaurant.id}
            restaurant={restaurant}
            isOpen={openItem.itemId === restaurant.id && openItem.isOpenBlock}
            toggleOpen={toggleOpen}
          />
        ))}
      </ul>
    );
  }
}

export default accordion(RestaurantsList);

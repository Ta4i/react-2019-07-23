import React, { PureComponent } from "react";
import { Button, List } from "antd";
import RestaurantReviews from "../restaurant-reviews";
import RestaurantFormReviews from "../restaurant-form-review";
import { toggleVisibility } from "../../decorators/toggle-visibility";
import AverageRating from "../average-rating";
import RestaurantMenu from "../restaurant-menu";

class Restaurant extends PureComponent {
  state = {
    error: null
  };

  componentDidCatch(error, errorInfo) {
    this.setState({
      error
    });
  }

  render() {
    const {
      isOpen,
      isFormOpen,
      toggleOpen,
      isMenuOpen,
      toggleOpenMenu,
      formOpen,
      restaurant
    } = this.props;
    const { id, image, name, menu, reviews } = restaurant;

    if (this.state.error) {
      return <h2>Something went wrong</h2>;
    }

    return (
      <>
        <List.Item
          actions={[
            <AverageRating restaurantId={restaurant.id} />,
            <Button type={"primary"} onClick={formOpen}>
              {isFormOpen ? "Hide form" : "write reviews"}
            </Button>,
            <Button type={"primary"} onClick={toggleOpen}>
              {isOpen ? "Hide reviews" : "Show reviews"}
            </Button>,
            <Button
              type="primary"
              onClick={() => toggleOpenMenu(id)}
              data-autoid={`OPEN_MENU_ITEM_${id}`}
            >
              {isMenuOpen ? "Close menu" : "Open menu"}
            </Button>
          ]}
          data-autoid="RESTAURANT_ITEM"
        >
          <List.Item.Meta
            avatar={<img src={image} width={64} height={64} alt={name} />}
            title={name}
            description={`Menu positions: ${menu.length}`}
          />
        </List.Item>
        {isOpen ? <RestaurantReviews restaurantId={restaurant.id} /> : null}
        {isFormOpen ? (
          <RestaurantFormReviews restaurantId={restaurant.id} />
        ) : null}
        {isMenuOpen ? (
          <RestaurantMenu menu={restaurant.menu} restaurantId={restaurant.id} />
        ) : null}
      </>
    );
  }
}

export default toggleVisibility(Restaurant);

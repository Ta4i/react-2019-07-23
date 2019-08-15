import React, { Component } from "react";
import { List } from "antd";
import Restaurant from "../restaurant";
import { accordion } from "../../decorators/accordion";
import connect from "react-redux/es/connect/connect";
import { selectRestaurantsLoading } from "../../store/selectors";
import Loader from "../loader";

class RestaurantList extends Component {
  render() {
    const {
      restaurants,
      loading,

      // from decorator
      openItemId,
      toggleOpen
    } = this.props;
    return loading ? (
      <Loader />
    ) : (
      <List
        itemLayout={"horizontal"}
        dataSource={restaurants}
        renderItem={restaurant => (
          <Restaurant
            key={restaurant.id}
            restaurant={restaurant}
            isMenuOpen={openItemId === restaurant.id}
            toggleOpenMenu={toggleOpen}
          />
        )}
      />
    );
  }
}

export default connect(state => ({
  loading: selectRestaurantsLoading(state)
}))(accordion(RestaurantList));

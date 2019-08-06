import React, { Component } from "react";
import PropTypes from "prop-types";
import OrderItem from "../order-item";

class OrderList extends Component {
  static propTypes = {
    cart: PropTypes.array
  };

  render() {
    const { cart, restaurants } = this.props;

    const test = cart.map((item, i) => {
      const newItem = restaurants[i].menu.find(
        menuItem => menuItem.id === item.id
      );
      console.log(newItem);
      if (newItem !== undefined && newItem.id === item.id) {
        return { ...newItem, counter: item.counter };
      }
      return newItem;
    });

    // console.log(test);

    if (cart.length === 0) {
      return <h3>Your order is empty</h3>;
    }

    return (
      <ul className="order-list">
        {cart.map((item, index) => (
          <OrderItem
            key={index}
            title={item.name}
            price={item.price}
            // onClick={}
            // count={item.count}
          />
        ))}
      </ul>
    );
  }
}

export default OrderList;

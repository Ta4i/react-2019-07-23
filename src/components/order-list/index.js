import React, { Component } from "react";
import PropTypes from "prop-types";
import OrderItem from "../order-item";

class OrderList extends Component {
  static propTypes = {
    cart: PropTypes.array
  };

  render() {
    const { cart } = this.props;

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

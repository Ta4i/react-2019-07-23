import React, { Component } from "react";
import PropTypes from "prop-types";
import OrderItem from "../order-item";

class OrderList extends Component {
  static propTypes = {
    orderList: PropTypes.array
  };

  render() {
    const { orderList } = this.props;

    if (orderList.length === 0) {
      return <h3>Your order is empty</h3>;
    }

    return (
      <ul className="order-list">
        {orderList.map((item, index) => (
          <OrderItem
            key={index}
            title={item.name}
            price={item.price}
            // onClick={}
            count={item.counter}
          />
        ))}
      </ul>
    );
  }
}

export default OrderList;

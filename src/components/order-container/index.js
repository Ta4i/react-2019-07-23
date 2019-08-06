import React, { Component } from "react";
import { connect } from "react-redux";
import OrderList from "../order-list";

class OrderContainer extends Component {
  render() {
    const { cart, restaurants } = this.props;

    const orderList = cart.map(item => {
      const restaurantItem = restaurants.find(
        restItem => restItem.id === item.restaurantId
      );
      const dishItem = restaurantItem.menu.find(
        menuItem => menuItem.id === item.id
      );
      if (dishItem !== undefined) {
        return { ...dishItem, counter: item.counter };
      }
      return dishItem;
    });

    const sum = orderList.reduce((acc, item) => {
      return acc + item.price * item.counter;
    }, 0);

    return (
      <div className="order-container">
        <h2>Your order:</h2>
        <OrderList orderList={orderList} />
        {orderList.length !== 0 && (
          <p className="total-amount">Total: £{sum}</p>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart.cart
});

export default connect(mapStateToProps)(OrderContainer);

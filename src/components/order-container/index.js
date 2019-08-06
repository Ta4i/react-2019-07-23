import React, { Component } from "react";
import { connect } from "react-redux";
import OrderList from "../order-list";

class OrderContainer extends Component {
  render() {
    const { cart, restaurants } = this.props;
    const sum = cart.reduce((acc, item) => {
      return acc + item.price;
    }, 0);

    return (
      <div className="order-container">
        <h2>Your order:</h2>
        <OrderList cart={cart} restaurants={restaurants} />
        {cart.length !== 0 && <p className="total-amount">Total: £{sum}</p>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart.cart
});

export default connect(mapStateToProps)(OrderContainer);

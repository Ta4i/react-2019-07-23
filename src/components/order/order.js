import React, { Component } from "react";
import { connect } from "react-redux";
import DishOrderReviews from "../dish-order-reviews";
class Order extends Component {
  state = {
    userName: ""
  };

  render() {
    return (
      <form style={{ padding: "24px" }} onSubmit={this.handleSubmit}>
        <input
          ref={this.setInput}
          placeholder={"User name"}
          value={this.state.userName}
          onChange={this.handleUserNameInputChange}
        />
        <button type={"submit"}>Send order</button>
        <DishOrderReviews></DishOrderReviews>
      </form>
    );
  }

  handleUserNameInputChange = event => {
    this.setState({
      userName: event.target.value.length > 5 ? "" : event.target.value
    });
  };

  setInput = ref => {
    this.userNameInput = ref;
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };
}
export default connect(state => ({
  restaurants: state.restaurants,
  cart: state.cart
}))(Order);

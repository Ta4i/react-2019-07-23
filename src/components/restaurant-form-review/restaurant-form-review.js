import React, { Component } from "react";
import { Button, List } from "antd";
import AverageRating from "../average-rating";
import { connect } from "react-redux";
import { addComm } from "../../store/ac";

class RestaurantFormReviews extends Component {
  state = {
    reviewUser: "",
    reviewValue: ""
  };

  render() {
    const { restaurantId, addComm } = this.props;
    return (
      <form
        onSubmit={() =>
          addComm(restaurantId, this.state.reviewUser, this.state.reviewValue)
        }
      >
        <input
          placeholder="user name"
          value={this.state.reviewUser}
          onChange={this.handleReviewUser}
        />
        <input
          value={this.state.reviewValue}
          onChange={this.handleReviewValue}
          placeholder="review"
        />
        <button type={"submit"}>send</button>
      </form>
    );
  }

  handleReviewUser = event => {
    this.setState({ reviewUser: event.target.value });
  };
  handleReviewValue = event => {
    this.setState({ reviewValue: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();

    // console.log(this.state.reviewUser, this.state.reviewValue)
  };
}
export default connect(
  state => ({
    //...selectOrderedDishes(state)
  }),
  {
    addComm
  }
)(RestaurantFormReviews);

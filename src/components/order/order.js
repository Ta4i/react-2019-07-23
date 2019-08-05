import React, { Component } from "react";
import { connect } from "react-redux";
import { makeOrder } from "../../store/ac";
import OrderList from "../order-list";
class Order extends Component {
  state = {
    userName: ""
  };

  render() {
    const { orderFromState } = this.props;

    return (
      <>
        <form style={{ padding: "24px" }} onSubmit={this.handleSubmit}>
          <input
            ref={this.setInput}
            placeholder={"User name"}
            value={this.state.userName}
            onChange={this.handleUserNameInputChange}
          />
          <button type={"submit"}>Send order</button>
        </form>
        {Object.keys(orderFromState).length > 0 ? <OrderList /> : ""}
      </>
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
    this.props.dispatchMakeOrder(this.props.cartFromStore);
  };
}

const mapStateToProps = state => {
  return {
    cartFromStore: state.cart,
    orderFromState: state.order
  };
};

const mapDispatchToProps = {
  dispatchMakeOrder: makeOrder
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Order);

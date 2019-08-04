import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "antd";
import { removeOrder } from "../../store/ac";

class OdreredList extends Component {
  render() {
    const { cart, restaurants } = this.props;
    console.log(cart);
    const orderedDishId = Object.keys(cart);
    const orderedDish = Object.values(cart);
    return (
      <>
        <div>
          <b>Total:</b>£
          {orderedDish
            .map(oElem => oElem.count * oElem.price)
            .reduce((prev, current) => prev + current, 0)}
        </div>
        <ol>
          {orderedDish.length
            ? orderedDish.map((oElem, index) => (
                <li key={orderedDishId[index]}>
                  <b>Name:</b> {oElem.name}. <b>Count:</b> {oElem.count}.{" "}
                  <b>Amount:</b> £{oElem.count * oElem.price}
                  <Button
                    onClick={this.removeOrder({ id: orderedDishId[index] })}
                    style={{ marginLeft: 10 }}
                    type="primary"
                    shape="circle"
                    icon="minus"
                  />
                </li>
              ))
            : ""}
        </ol>
      </>
    );
  }
  removeOrder = obj => () => {
    this.props.dispatchRemoveOrder(obj);
  };
}

const mapStateToProps = state => ({
  cart: state.cart
});
const mapDispatchToProps = {
  dispatchRemoveOrder: removeOrder
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OdreredList);

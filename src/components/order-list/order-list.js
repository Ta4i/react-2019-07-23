import React, { Component } from "react";
import { connect } from "react-redux";
import Amount from "../amount";
import { List } from "antd";

class OrderList extends Component {
  render() {
    const { cart, restaurants } = this.props;
    const amount = Amount(cart);
    const items = (function() {
      const orderListArray = [];

      for (const restaurant of restaurants) {
        for (const dish of restaurant.menu) {
          if (cart.hasOwnProperty(dish.id)) {
            orderListArray.push({
              restaurant: restaurant,
              dish: dish
            });
          }
        }
      }

      return orderListArray;
    })();

    if (!amount) {
      return null;
    }
    return (
      <div>
        <List
          size="small"
          header={
            <h3
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <div>Order</div>
              <div>Amount: £{this.amountOrderPrice()}</div>
            </h3>
          }
          bordered
          dataSource={items}
          renderItem={item => (
            <List.Item key={item.dish.id}>
              <List.Item.Meta
                title={item.dish.name}
                description={item.restaurant.name}
              />
              <div>{this.amountItemPrice(item)}</div>
            </List.Item>
          )}
        />
      </div>
    );
  }

  amountItemPrice(item) {
    return `${this.props.cart[item.dish.id]} x £${item.dish.price} = £${this
      .props.cart[item.dish.id] * item.dish.price}`;
  }

  amountOrderPrice() {
    const prices = this.getPrices();
    const cart = this.props.cart;
    let amountPrice = 0;

    for (const dish in cart) {
      if (cart.hasOwnProperty(dish)) {
        amountPrice += cart[dish] * prices[dish];
      }
    }

    return amountPrice;
  }

  getPrices() {
    const prices = {};

    for (const restaurant of this.props.restaurants) {
      for (const menu of restaurant.menu) {
        prices[menu.id] = menu.price;
      }
    }

    return prices;
  }
}

const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(mapStateToProps)(OrderList);

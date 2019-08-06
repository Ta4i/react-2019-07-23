import React from "react";
import PropTypes from "prop-types";
import { Badge, Button } from "antd";
import "./cart-badge.css";
import { useSelector } from "react-redux";

function CartBadge(props) {
  const cart = useSelector(state => state.cart);
  const amount = cart.cart.reduce((acc, item) => {
    return acc + item.counter;
  }, 0);

  return (
    <Badge count={amount} className={"cart-button-container"}>
      <Button
        icon="shopping-cart"
        size="large"
        type="primary"
        className="cart-button"
      />
    </Badge>
  );
}

CartBadge.propTypes = {
  amount: PropTypes.number.isRequired
};

export default CartBadge;

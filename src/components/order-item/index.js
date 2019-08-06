import React from "react";
import PropTypes from "prop-types";
import { Button } from "antd";
import "./order-item.css";

function OrderItem({ count, title, price, onClick }) {
  const priceCount = price * count;
  return (
    <li className="order-item">
      <p className="order-item__title">{title}</p>
      <p className="order-item__price">£{priceCount}</p>
      <p className="order-item__count">{count}</p>
      <Button onClick={onClick}>delete</Button>
    </li>
  );
}

OrderItem.propTypes = {
  count: PropTypes.number,
  title: PropTypes.string,
  price: PropTypes.number,
  onClick: PropTypes.func
};

export default OrderItem;

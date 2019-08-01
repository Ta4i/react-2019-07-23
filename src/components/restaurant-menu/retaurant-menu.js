import React from "react";
import Dish from "../dish";
import { Row, Col } from "antd";

function RestaurantMenu(props) {
  return (
    <div
      style={{ padding: "16px" }}
      data-autoid={`MENU_ITEMS_${props.restaurantId}`}
    >
      <Row gutter={16}>
        {props.menu.map(dish => (
          <Col data-autoid={`MENU_ITEM`} key={dish.id} span={8}>
            <Dish {...dish} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default RestaurantMenu;

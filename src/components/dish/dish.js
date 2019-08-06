import React from "react";
import { Card, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addDish, removeDish } from "../../store/ac";

function Dish(props) {
  const { id, name, price } = props;
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const amount = cart[id] && cart[id].count ? cart[id].count : 0;

  return (
    <Card
      bordered
      actions={[
        `£${props.price}`,
        <>
          <span
            style={{ margin: "0 12px" }}
            data-autoid={`DISH_AMOUNT_${props.id}`}
          >
            {amount}
          </span>
          <Button.Group>
            <Button
              onClick={() => dispatch(removeDish(id, name, price))}
              type="primary"
              shape="circle"
              icon="minus"
              data-autoid={`REMOVE_DISH_${props.id}`}
            />
            <Button
              onClick={() => dispatch(addDish(id, name, price))}
              type="primary"
              shape="circle"
              icon="plus"
              data-autoid={`ADD_DISH_${props.id}`}
            />
          </Button.Group>
        </>
      ]}
    >
      <Card.Meta
        title={props.name}
        description={props.ingredients.join(", ")}
      />
    </Card>
  );
}

export default Dish;

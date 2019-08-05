import React from "react";
import { Card, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addDish, removeDish } from "../../store/ac";

function Dish(props) {
  const { id, name, price } = props;
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const dish_info = cart[id] || {};
  const amount = cart[id] ? cart[id]["num"] : 0;
  // console.log(props)
  // console.log(name,price)
  return (
    <Card
      bordered
      actions={[
        `£${price}`,
        <>
          <span
            style={{ margin: "0 12px" }}
            data-autoid={`DISH_AMOUNT_${props.id}`}
          >
            {amount}
          </span>
          <Button.Group>
            <Button
              onClick={() => dispatch(removeDish(id))}
              type="primary"
              shape="circle"
              icon="minus"
              data-autoid={`REMOVE_DISH_${props.id}`}
            />
            <Button
              onClick={() =>
                dispatch(addDish(id, { name: name, price: price }))
              }
              type="primary"
              shape="circle"
              icon="plus"
              data-autoid={`ADD_DISH_${props.id}`}
            />
          </Button.Group>
        </>
      ]}
    >
      <Card.Meta title={name} description={props.ingredients.join(", ")} />
    </Card>
  );
}

export default Dish;
